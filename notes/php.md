[TOC]

有道云上为原笔记, 此处为备份

# php 笔记

## php-FPM

参考 https://blog.csdn.net/u010785091/article/details/78705690

### CGI

common-gateway-interface 通用网管接口

CGI是为了保证web server传递过来的数据是标准格式的. CGI 是个协议, 规定接口的形式.

### fastcgi

fastCGI是用来提高 CGI 程序性能的.

提高性能，那么CGI程序的性能问题在哪呢？"PHP解析器会解析php.ini文件，初始化执行环境"，就是这里了。标准的CGI对每个请求都会执行这些步骤（不闲累啊！启动进程很累的说！），所以处理每个时间的时间会比较长。这明显不合理嘛！那么Fastcgi是怎么做的呢？首先，Fastcgi会先启一个master，解析配置文件，初始化执行环境，然后再启动多个worker。当请求过来时，master会传递给一个worker，然后立即可以接受下一个请求。这样就避免了重复的劳动，效率自然是高。而且当worker不够用时，master可以根据配置预先启动几个worker等着；当然空闲worker太多时，也会停掉一些，这样就提高了性能，也节约了资源。这就是fastcgi的对进程的管理。

### PHP-FPM

那PHP-FPM又是什么呢？是一个实现了Fastcgi的程序，被PHP官方收了。

大家都知道，PHP的解释器是php-cgi。php-cgi只是个CGI程序，他自己本身只能解析请求，返回结果，不会进程管理（皇上，臣妾真的做不到啊！）所以就出现了一些能够调度php-cgi进程的程序，比如说由lighthttpd分离出来的spawn-fcgi。好了PHP-FPM也是这么个东东，在长时间的发展后，逐渐得到了大家的认可（要知道，前几年大家可是抱怨PHP-FPM稳定性太差的），也越来越流行。

fastcgi是一个协议，php-fpm实现了这个协议

php-fpm是fastcgi进程的管理器，用来管理fastcgi进程的

php-fpm的管理对象是php-cgi。但不能说php-fpm是fastcgi进程的管理器，因为前面说了fastcgi是个协议，似乎没有这么个进程存在，就算存在php-fpm也管理不了他（至少目前是）。 有的说，php-fpm是php内核的一个补丁

以前是对的。因为最开始的时候php-fpm没有包含在PHP内核里面，要使用这个功能，需要找到与源码版本相同的php-fpm对内核打补丁，然后再编译。后来PHP内核集成了PHP-FPM之后就方便多了，使用--enalbe-fpm这个编译参数即可。

## php配置

参考 https://lzw.me/a/mac-osx-php-fpm-nginx-mysql.html
### php.ini 文件

查看 php 读取配置文件的位置.

```bash
# 查看PHP的编译参数
php -i | grep config
```
找到以下两项指定的路径, 即是读取 php.ini 的文件位置
```
--with-config-file-path=/etc
--with-config-file-scan-dir=/Library/Server/Web/Config/php
```

根据这个指定，需要在 /etc 目录下创建 php.ini。Mac 在 /private/etc 和 /etc 下均提供了样例文件 php.ini.default，两个文件完全相同。选择一个复制为 /etc/php.ini：

```
sudo cp /etc/php.ini.default  /etc/php.ini
```

变更 owner 为当前用户

### 创建 php-fpm.conf

直接运行php-fpm 会报错, 找不到配置文件

```
[13-Nov-2018 18:39:33] ERROR: failed to open configuration file '/private/etc/php-fpm.conf': No such file or directory (2)
[13-Nov-2018 18:39:33] ERROR: failed to load configuration file '/private/etc/php-fpm.conf'
[13-Nov-2018 18:39:33] ERROR: FPM initialization failed
```
在 /etc/php-fpm.conf.default 与 /private/etc/php-fpm.conf.default 有相同的默认配置文件, 复制到/private/etc 下即可

```
sudo cp /private/etc/php-fpm.conf.default /private/etc/php-fpm.conf
```

### 修改默认的日志和 pid 配置

编辑的配置文件php-fpm.conf

设置 pid 以及 error_log 的路径, 可能需要创建php-fpm.pid文件

```
pid = /usr/local/var/run/php-fpm.pid
error_log = /usr/local/var/log/php-fpm.log
```

### 创建 pool 配置文件

默认的配置文件保存在 /private/etc/php-fpm.d/www.conf.default 在当前目录下复制一份即可
```
sudo cp /private/etc/php-fpm.d/www.conf.default /private/etc/php-fpm.d/www.conf
```

### 启动 php-fpm

到此，php-fpm 守护进程已经基本可以正确的启动了。默认监听 9000 端口

```
$ php-fpm
```

停止

```
sudo killalll php-fpm
```

php-fpm 开机启动

```
ln -sfv /usr/local/opt/php55/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.php55.plist
```

### 配置 nginx

```
server {
    listen  80;
    root    /Users/lzwme/test;
    server_name localhost;
    index   index.html index.htm index.php;
    # 方便本地测试，开启目录浏览遍历
    location / {
        autoindex on; # 开启目录浏览功能 
        autoindex_exact_size off; # 关闭详细文件大小统计，让文件大小显示MB，GB单位，默认为b
        autoindex_localtime on; # 开启以服务器本地时区显示文件修改日期
    }
    location ~ \.php$ {
        #fastcgi_pass unix:/tmp/php-cgi.sock;
        fastcgi_pass  127.0.0.1:9000;
        fastcgi_index index.php;
        include       fastcgi.conf;
    }
}

```








