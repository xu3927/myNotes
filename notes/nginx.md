[TOC]

备份版, 原版在 youdao

# nginx

## 基本知识

### nginx启停

```bash
nginx -s signal
```
可用的信号有:
- stop — fast shutdown
- quit — graceful shutdown
- reload — reloading the configuration file
- reopen — reopening the log files

### 配置文件 nginx.conf

配置文件的命令用来控制nginx

包括2种, 块级指令和简单指令

简单指令以分号(;)结尾, 块级指令由{}包裹

不包含在context中的配置会作为全局配置

### 静态资源服务

```
http {
    # 默认监听 80 端口
    server {
        location / {
            root /data/www;
        }
        # 提供images文件夹中的图片资源
        location /images/ {
            root /data/images;
        }
    }
}
```
### 配置转发 proxy

```
# 监听8080端口
server {
    listen 8080;
    # 当location里没有匹配到的规则没有root命令的时候会使用该root配置
    root /data/up1;

    location / {
    }
}

server {
    location / {
        # 配置转发
        proxy_pass http://localhost:8080;
    }

    location /images/ {
        root /data;
    }
}

```

### 设置 FastCGI 路由

fastCGI: 快速网关路由 Fast Common Gateway Interface


```
server {
    location / {
        fastcgi_pass  localhost:9000;
        # php 中 SCRIPT_FILENAME 参数控制要处理该请求的script name
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        # 可以配置要传递的query string 参数
        fastcgi_param QUERY_STRING    $query_string;
    }

    location ~ \.(gif|jpg|png)$ {
        root /data/images;
    }
}
```

### include 引入配置

为了方便配置, 可以通过include来引入一个配置文件

如创建 conf/http, conf/stream, conf/static 等几个配置文件

在nginx.conf中通过include来引入

```
include conf.d/http;
include conf.d/stream;
include conf.d/exchange-enhanced;

```

## Contexts 顶级配置项

有以下几个一级配置项

- events: General connection processing
- http
- mail
- stream

#### Virtual Servers

在每个上下文配置项中可以配置多个server模块来处理请求

不同的traffic类型需要在server项中配置不同的参数

对于 HTTP traffic (即http上下文), server block 中需要定义对每个请求的处理过程, 可以定义一个或多个location context来处理指定的URIs

对于 mail 和 TCP/UDP traffic, server中配置处理的 TCP端口或UNIX socket

下面是一个示例处理多个Contexts

```
user nobody; # a directive in the 'main' context

events {
    # configuration of connection processing
}

http {
    # Configuration specific to HTTP and affecting all virtual servers  

    server {
        # configuration of HTTP virtual server 1       
        location /one {
            # configuration for processing URIs starting with '/one'
        }
        location /two {
            # configuration for processing URIs starting with '/two'
        }
    } 
    
    server {
        # configuration of HTTP virtual server 2
    }
}

stream {
    # Configuration specific to TCP/UDP and affecting all virtual servers
    server {
        # configuration of TCP virtual server 1 
    }
}

```

## 负载均衡 Load Balance

### HTTP 负载均衡 Load Balancer 

[官方文档](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/#overview)

#### 配置Http代理到一组服务器上

示例

```
http {
    # upstream 定义一组服务器, 并设置其名称为 backend, 该组服务器包括3个服务器
    upstream backend {
        # server 指定每个服务器
        server backend1.example.com weight=5;
        server backend2.example.com;
        server 192.0.0.1 backup;
    }
    server {
        location / {
            # 把请求转发到上面定义的backend upstream组
            proxy_pass http://backend;
        }
    }
}

```

首先需要用upstream指令定义这组服务器, 这个upstream指令需要放在http上下文中

#### load-balancing method 负载均衡算法

1. Round Robin 轮替循环: 服务器轮流分配

配置方式:

```
upstream backend {
   server backend1.example.com;
   server backend2.example.com;
}

```
2. least connections 最小连接数调度算法

**原理:**

参考资料 [http://security.ctocio.com.cn/securitycomment/412/8082412_2.shtml](http://security.ctocio.com.cn/securitycomment/412/8082412_2.shtml)

在实际情况中，客户端的每一次请求服务在服务器停留的时间可能会有较大的差异，随着工作时间的延伸，如果采用简单的轮询或随机均衡算法，每一台服务器上的连接进程数目可能会产生极大的不同，这样实际上并没有达到真正的负载均衡。

　　最少连接数均衡算法对内部中需负载的每一台服务器都有一个数据记录，记录当前该服务器正在处理的连接数量，当有新的服务连接请求时，将把当前请求分配给连接数最少的服务器，使均衡更加符合实际情况，负载更加均衡。

　　与轮询调度算法想反，最小连接调度是一种动态调度算法，它通过服务器当前所活跃的连接数来估计服务器的负载情况。调度器需要记录各个服务器已建立连接的数目，当一个请求被调度到某台服务器，其连接数加1;当连接中止或超时，其连接数减一。

此种均衡算法适合长时处理的请求服务，如FTP等应用。

最少连接数调度算法流程

假设有一组服务器S = {S0, S1, ..., Sn-1}，C(Si)表示服务器Si的当前连接数。其算法如下：

```
  for (m = 0; m < n; m++) { 
　　for (i = m+1; i < n; i++) { 
    　　if (C(Si) < C(Sm)) 
    　　m = i; 
    　} 
    　return Sm; 
　} 
　　return NULL;
```

　　当各个服务器有相同的处理性能时，最小连接调度算法能把负载变化大的请求分布平滑到各个服务器上，所有处理时间比较长的请求不可能被发送到同一台服务器上。但是，当各个服务器的处理能力不同时，该算法并不理想，因为TCP连接处理请求后会进入TIME_WAIT状态，TCP的TIME_WAIT一般为2分钟，此时连接还占用服务器的资源，所以会出现这样情形，性能高的服务器已处理所收到的连接，连接处于TIME_WAIT状态，而性能低的服务器已经忙于处理所收到的连接，还不断地收到新的连接请求。

所以，针对这种算法是需要改进的，也是有改进的余地的，这就是权重最少连接数调度算法。

**配置方式**

```
upstream backend {
    least_conn;
    server backend1.example.com;
    server backend2.example.com;
}

```

　权重最少连接数调度算法(Weighted Least Connection Scheduling)

　　权重最少连接数调度算法是在做少连接数调度算法的基础上，根据服务器的不同处理能力，给每个服务器分配不同的权值，使其能够接受相应权值数的服务请求，是在最少连接数调度算法的基础上的改进。

　　权重最少连接数调度算法流程

　　假设有一组服务器S = {S0, S1, ..., Sn-1}，W(Si)表示服务器Si的权值，C(Si)表示服务器Si的当前连接数。所有服务器当前连接数的总和为

　　CSUM = ΣC(Si) (i=0, 1, .. , n-1)。

　　当前的新连接请求会被发送服务器Sm，当且仅当服务器Sm满足以下条件：

　　(C(Sm) / CSUM)/ W(Sm) = min { (C(Si) / CSUM) / W(Si)} (i=0, 1, . , n-1)

　　其中W(Si)不为零

　　因为CSUM在这一轮查找中是个常数，所以判断条件可以简化为

　　C(Sm) / W(Sm) = min { C(Si) / W(Si)} (i=0, 1, . , n-1)

　　其中W(Si)不为零

　　因为除法所需的CPU周期比乘法多，且在某些操作系统(如Linux)的内核中不允许浮点除法，服务器的权值都大于零，所以判断条件C(Sm) / W(Sm) > C(Si) / W(Si) 可以进一步优化为C(Sm)*W(Si) > C(Si)* W(Sm)。同时保证服务器的权值为零时，服务器不被调度。所以，算法只要执行以下流程。

```
      for (m = 0; m < n; m++) { 
　　if (W(Sm) > 0) { 
　　for (i = m+1; i < n; i++) { 
　　if (C(Sm)*W(Si) > C(Si)*W(Sm)) 
　　m = i; 
　　} 
　　return Sm; 
　　} 
　　} 
　　return NULL;
```

　　这种算法的逻辑实现如图1和图2所示：

　　图1显示在T时刻，一个新请求到来时，负载均衡设备的响应情况：

　　(权重)最少连接数调度算法逻辑示意图
　　
　　![图1](http://cimage.tianjimedia.com/imagelist/2008/108/oa6q2700xuy9.jpg)

　　                                图1 (权重)最少连接数调度算法逻辑示意图

　　当经过t时间后，新的请求到来是，负载均衡设备的调度情况变化结果如下：

　　一段时间后最少连接数调度算法逻辑示意图
　　
　　
![图2](http://cimage.tianjimedia.com/imagelist/2008/108/xoikbm6162r0.jpg)

图2 (权重)经过t时间后最少连接数调度算法逻辑示意图

3. IP Hash

[算法原理](https://blog.csdn.net/qfikh/article/details/52757415)

配置方式:

服务器增加 down 参数可以暂时停用该服务

```
upstream backend {
    ip_hash;
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com down;
}

```

4. Generic Hash 

根据用户自定义的参数来决定流量的分配

```
upstream backend {
    hash $request_uri consistent;
    server backend1.example.com;
    server backend2.example.com;
}

```
　　                       

#### Server Weights 服务器流量分配

比重默认为1, 可以通过weight来设置
如下:
- backend1 的比重为5, 
- backend2, backend3 的比重均为1
- 192.0.0.1 作为备用默认不分配流量, 但是在其他服务不可用的时候会分配流量

```
upstream backend {
    server backend1.example.com weight=5;
    server backend2.example.com;
    server backend3.example.com;
    server 192.0.0.1 backup;
}

```

#### Server Slow-Start 平缓启动

防止一个刚启动的服务突然被分配大量的流量.
设置在30s内逐渐让流量分配量递增到预设值.


```
upstream backend {
    server backend1.example.com slow_start=30s;
    server backend2.example.com;
    server 192.0.0.1 backup;
}
```

如果只有一个服务, 则以下参数均会被忽略.  max_fails, fail_timeout, and slow_start


### TCP UDP 负载均衡 load-balancer

#### 支持的版本

下载最新的开源版本并且在构建时使用--with-stream参数

#### 配置反向代理 reverse proxy

```
stream {
    server {
        # 默认监听Tcp请求, 如果要监听UDP请求, 后面加上upd参数
        listen     12345;
        #TCP traffic will be forwarded to the "stream_backend" upstream group
        proxy_pass stream_backend;
    }
    server {
        listen     12346;
        #TCP traffic will be forwarded to the specified server
        proxy_pass backend.example.com:12346;
        # 设置该域名要转发到的IP
        proxy_bind 127.0.0.1:12345;
    }
    server {
        # 监听53端口的udp请求
        listen     53 udp;
        #UDP traffic will be forwarded to the "dns_servers" upstream group
        proxy_pass dns_servers;
    }
    # ...
}
```

参考资料 [https://docs.nginx.com/nginx/admin-guide/load-balancer/tcp-udp-load-balancer/](https://docs.nginx.com/nginx/admin-guide/load-balancer/tcp-udp-load-balancer/
)


## Web Server 配置

### 设置虚拟服务 Virtual Servers

要作为virtual server 配置中应包含至少一个server模块. 如下

```
http {
    server {
        # Server configuration
    }
}

```

#### listen 配置监听的Ip和端口

```
server {
    # listen选项用来指定监听的Ip和端口. 端口或ip可以省略
    listen 127.0.0.1:8080
}
```

listen选项用来指定监听的Ip和端口(也可以使用 unix domain socket and path), 端口可以省略则监听'standard'端口, 同时支持IPv4, IPv6地址.
如果没有listen项, 那么 the “standard” port is 80/tcp and the “default” port is 8000/tcp, depending on superuser privileges.

#### server_name 配置服务host名称

当端口收到多个不同域名的请求时, 通过指定server_name可以对不同的host配置不同的服务

```
server {
    listen      80;
    server_name example.org www.example.org;
    ...
}
```

[http://nginx.org/en/docs/http/server_names.html](http://nginx.org/en/docs/http/server_names.html)

##### 1. 取值

参数有3种匹配方式

1. 精确匹配: 即匹配完整名称
2. 通配符 *
3. 正则匹配, 正则以 ~ 开始

通配符用法:

1. 通配符只能位于开始或结尾, 不能位于中间.
2. 通配符需要用点分割. 如 *.haha.com; 错误示例 w*.haha.com, *haha.com
3. 点开头的规则如 .haha.com, 可以同时匹配 haha.com 和 *.haha.com

正则用法:

1. 以波浪线开头, 否则会被作为精确匹配, 如 ~^wwww?.+\.haha\.com$
2. 一般应加上开始结束符合, ^, $
3. 捕获的字符可以用作后面的变量. 如: 

```
server {
    server_name   ~^(www\.)?(?<domain>.+)$;

    location / {
        root   /sites/$domain;
    }
}

```
4. 正则中如果包含大括号则正则需要用引号包裹. 如: server_name  "~^(?<name>\w\d{1,3}+)\.example\.net$";

捕获语法

| 符号 | 版本 | |
| -- | -- | -- |
| ?<name>	Perl | 5.10  | compatible syntax, supported since PCRE-7.0 |
| ?'name'	| Perl 5.10 | compatible syntax, supported since PCRE-7.0 |
| ?P<name> |	Python compatible syntax, supported since PCRE-4.0 |

特殊情况:

如果请求头中没有host字段, 则可以用空字符串匹配. 空字符的server_name还可以作为默认匹配来匹配没有被其他规则命中的请求.

```
server {
    listen       80;
    server_name  example.org  www.example.org  "";
    ...
}

```

如果通过IP来访问, 则host name通常为ip地址, 此时可以通过ip来设置server name

```
server {
    listen       80;
    server_name  example.org
                 www.example.org
                 ""
                 192.168.1.1
                 ;
    ...
}
```

设置默认server
1. 根据nginx的匹配规则, 第一个server会作为默认server
2. 可以设置一个不会被匹配到的server放在第一个作为默认server. 如:

```
server {
    listen       80  default_server;
    server_name  _;
    return       444;
}

```
3. 版本0.6.25之前 "*"号作为默认server, 现在已经被废弃. 
4. 使用listen指令中的default_server参数设置. server指令中没有default指令,但是listen指令中有, 因此可以在listen某个端口的时候设置默认服务

```

server {
    listen       80;
    listen       8080  default_server;
    server_name  example.net;
    ...
}

server {
    listen       80  default_server;
    listen       8080;
    server_name  example.org;
    ...
}

```


##### 2. server_name匹配规则

If several names match the Host header, NGINX Plus selects one by searching for names in the following order and using the first match it finds:

Exact name
Longest wildcard starting with an asterisk, such as *.example.org
Longest wildcard ending with an asterisk, such as mail.*
First matching regular expression (in order of appearance in the configuration file)

如果host被多个server_name匹配到, nginx按以下的优先级选择

1. 完整名称
2. 以通配符开始的 如 *.t.com
3. 以通配符结尾的 如 mail.*
4. 正则匹配到的话则按先后顺序, 即取第一个

正则以 波浪线 ~ 或 ~* 表示. 
忽略大小写用 ~* 表示


```
http {
    server {
        listen 80;
        server_name haha.com
        ...
    }
    server {
        listen 80;
        server_name news.haha.com
        ...
    }
    
    server {
        listen 80;
        # 通配符匹配
        server_name mail.*
        ...
    }
    
     server {
        listen 80;
        # 正则匹配
        server_name ~ \.html?
        ...
    }
       
}

```


##### 3. 默认server

如果http header中的host字段没有匹配到, 请求会由收到该请求的端口配置的默认server来处理 
默认server是配置了该端口监听的第一个server, 通过default_server指令可以指定默认处理server

```
server {
    listen 80 default_server;
    ...
}

```


### Location 配置

根据不同的url地址. 请求会被分配到不同的location指令中进行处理.

location配置在server指令下面

#### 参数类型

1. 普通匹配:前缀路径 prefix strings(pathnames)
2. 正则匹配: 以 ~ 或 ~*(忽略大小写)表示


```
# 路径匹配 会匹配到以 /api/path/ 开头的url 如 /api/path/getUser
location /api/path/ {
    ....
}

# 正则匹配 可以匹配以 .html 或 .htm结尾的url
location ~ \.html? {
    ...
}

```

**路径匹配规则**

先匹配前置路径, 再匹配正则, 前置路径优先级高.

多个前置路径匹配的话, nginx选用最佳匹配的, 即匹配到最长的, 如 /api/  和 /api/news/. 对于 /api/news/getList 这样的url会采用 /api/news/ 这个规则

整个的匹配过程如下

1. 首先匹配前置路径规则 Test the URI against all prefix strings.
2. 精确匹配: 等号(=) 可以指定一个具体的路径, 如果等号规则匹配到了, 则采用该规则, 并停止匹配查找.  The = (equals sign) modifier defines an exact match of the URI and a prefix string. If the exact match is found, the search stops.
3. 关闭正则匹配: 当匹配到^~项时, 则不再继续搜索正则匹配模式 If the ^~ (caret-tilde) modifier prepends the longest matching prefix string, the regular expressions are not checked.
4. 完成最长前缀匹配, 并暂存最长匹配结果, 继续后面的正则匹配: store the longest matching prefix string.
5. 进行正则匹配. Test the URI against regular expressions.
6. 采用第一个匹配到的正则规则. Break on the first matching regular expression and use the corresponding location.
7. 如果正则都不满足, 使用第四步存储的最长路径规则. If no regular expression matches, use the location corresponding to the stored prefix string.
8. 如果都没有匹配到, 则返回404

正则匹配规则会受定义的前后顺序影响, 普通匹配模式与定义的顺序无关. 


参考资料: [https://blog.csdn.net/xyang81/article/details/51989079](https://blog.csdn.net/xyang81/article/details/51989079)



```
http {
    ...
    server {
        listen       80;
        server_name  localhost;
        
        # 普通匹配
        location / {
            root   html;
            index  index.html index.htm;
            # deny all; 拒绝请求，返回403
            # allow all; 允许请求
        }

        location /abc {
            deny all;
        }
        # 正则匹配
        location ～ /.+\.jsp$ {
            proxy_pass http://location:9090;
        }

        # 匹配所有/test路径下的jsp文件
        location ~ /test/.+\.jsp$ {
            proxy_pass http://localhost:8080;
        }

        # 定义各类错误页
        error_page 404  /404.html

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # @类似于变量定义
        # error_page 403 http://blog.csdn.net; #这种定义不允许，需求利用@定义临时变量来实现
        error_page 403 @page403;
        location @page403 {
            proxy_pass http://blog.csdn.net;
        } 
    }
}
```


