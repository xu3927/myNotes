[TOC]
# Curl 命令

## 手动编译curl

1. 安装依赖的库
```sh
yum -y install libev libev-devel zlib zlib-devel openssl openssl-devel git

git clone https://github.com/curl/curl.git

```
2. 安装 nghttp2

```sh
git clone https://github.com/tatsuhiro-t/nghttp2.git
cd nghttp2
autoreconf -i
automake
autoconf
./configure
make
make install
```

3. 設定 Lib 搜尋路徑

```sh
echo '/usr/local/lib' > /etc/ld.so.conf.d/custom-libs.conf
ldconfig
ldconfig -p | grep libnghttp2
```

4. 安装curl支持 http2

```
cd /var/tmp
git clone https://github.com/bagder/curl.git
cd curl
./buildconf
./configure --with-nghttp2=/usr/local -with-ssl=/usr/local/ssl --prefix=/usr/local

make
make install
```

5. 查看 curl 支持的feature

```sh
$ curl -V
curl 7.68.0-DEV (x86_64-apple-darwin18.7.0) libcurl/7.68.0-DEV SecureTransport (BoringSSL) zlib/1.2.11 brotli/1.0.7 libidn2/2.0.5 nghttp2/1.41.0 quiche/0.1.0
Release-Date: [unreleased]
Protocols: dict file ftp ftps gopher http https imap imaps ldap ldaps pop3 pop3s rtsp smb smbs smtp smtps telnet tftp
Features: alt-svc AsynchDNS brotli HTTP2 HTTP3 IDN IPv6 Largefile libz MultiSSL NTLM NTLM_WB SSL UnixSockets
```

## 常用参数

### 请求 Method

默认为 get 请求, 如果带数据(-d, --data, --data-binary, --data-urlencode, --data-raw)则为 POST, -T 参数发送 PUT 请求, -I 发送HEAD请求

参数 --data-binary 会设置 content type 为 application/x-www-form-urlencoded

### 设置HEADER 和 COOKIE

通过 -H 参数设置 header
cookie 也通过设置header来设置

```sh
curl 'http://test.com' \
    -H 'Host: test.com'
    -H 'Cookie: aaa=xxx; bbb=yyy'
```

### --insecure 

不检验 ssl 证书

### --cacert

指定本地的 ssl 根证书文件

### 发送文件

```sh
curl -F ‘data=@path/to/local/file’ 'http://test.com'
```
参数 -F --form <name=content> 发送 form 文件, content type 会设置为 enctype=”multipart/form-data”   
符号@ 后面跟随的会识别为路径.  (--data-raw 参数中的 @ 不会做转换)

传多个文件

```sh
curl -F 'fileX=@/path/to/fileX' -F 'fileY=@/path/to/fileY' ... http://localhost/upload
```

## 使用场景

### 发送post请求并设置header和cookie

```sh
curl 'http://test.com/cgi/nav_manage/get_latest' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://test.com' \
  -H 'Referer: http://test.com/' \
  -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7' \
  -H 'Cookie: uid=xxx; ticket=xxxxxxxxx;
  --data-binary '{"system":"euler"}'
```


## 资料

- [Everything curl](https://ec.haxx.se/http)
- [how to install curl and libcurl](https://curl.haxx.se/docs/install.html)
- [https://github.com/curl/curl](https://github.com/curl/curl)