# nginx

## nginx启停

```bash
nginx -s signal
```
可用的信号有:
- stop — fast shutdown
- quit — graceful shutdown
- reload — reloading the configuration file
- reopen — reopening the log files

## 配置文件 nginx.conf

配置文件的命令用来控制nginx

包括2种, 块级指令和简单指令

简单指令以分号(;)结尾, 块级指令由{}包裹

不包含在context中的配置会作为全局配置

## 静态资源服务


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

## 配置转发 proxy


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

## 设置 FastCGI 路由

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

## include 引入配置

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

### Virtual Servers

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

## 负载均衡 Load Balancer

[官方文档](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/#overview)

### 配置Http代理到一组服务器上

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

### load-balancing method 负载均衡算法

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
　　                       

### Server Weights 服务器流量分配

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



https://docs.nginx.com/nginx/admin-guide/load-balancer/



