# SSL 证书生成步骤

## 创建根证书

1. 创建密钥

```
$ openssl genrsa -des3 -out rootCA.key 2048
```
需要输入密码, 在后面使用 key 的时候都会用到该密码

2. 创建证书

该证书即根证书

```
$ openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 3650 -out rootCA.pem
```

## 创建域名 SSL 证书

使用根证书为每个域名(或泛域名)生成 SSL 证书

由于我们公司解析一个域名 .l.wizmacau.com 指向127.0.0.1，所以我们准备生成一个 .l.wizmacau.com 的通配域名证书。

1. 创建一个v3.ext文件，以创建一个X509 v3证书。注意我们指定了 subjectAltName 选项。
```
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage=digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName=@alt_names

[alt_names]
DNS.1 = *.l.wizmacau.com
```

2. 生成域名证书及密钥，
```
openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key
```

得到 server.csr  server.key 文件 

3. 使用根证书对域名证书签名

得到 server.crt 文件

```
openssl x509 -req -in server.csr -CA [rootCA.pem路径] -CAkey [rootCA.key路径] -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext
```


## 证书类型

参考资料:
- https://www.zhihu.com/question/29620953/answer/191763719
- https://serverfault.com/questions/9708/what-is-a-pem-file-and-how-does-it-differ-from-other-openssl-generated-key-file


- 证书(Certificate) - *.cer *.cert *.crt 微软 IE 可以识别 cer 以运行一些命令. pem或者der编码格式的证书文件. 
- 私钥(Private Key) - *.key 该文件是一个PEM格式的文件, 只包含指定证书的私钥
- 证书签名请求(Certificate signing request) - *.csr.  该文件自己生成, 包含subject, organization, state 以及 public key 信息, 发给证书发布机构进行签名, 完成签名后会收到证书 certificate, 该证书即public certificate(包含公钥, 不包含私钥)
- *.pem (Privacy Enhanced Mail (PEM)) 是一种容器格式，可能仅包含公钥证书，也可以包含完整的证书链（包括公玥，私钥，和根证书）。也可能用来编码 CSR文件。
- *.der der是一种编码方案, 而不是一种文件格式. 使用der编码方案编码的pem文件. der 编码是使用二进制编码，一般pem文件使用的是base64进行编码，所以完全可以把der编码的文件转换成pem文件，命令： openssl x509 -inform der -in to-convert.der -out converted.pem 使用der编码的pem文件，后缀名可以为.der


### 编码方式

pem和der，是编码方式，以上三类均可以使用这两种编码方式，
*.pem - ASCII(base64)编码
*.der - 二进制编码

### 公钥加密标准
PKCS 全称是 Public-Key Cryptography Standards ，是由 RSA 实验室与其它安全系统开发商为促进公钥密码的发展而制订的一系列标准，PKCS 目前共发布过 15 个标准。 常用的有：

PKCS#7 Cryptographic Message Syntax Standard
PKCS#10 Certification Request Standard
PKCS#12 Personal Information Exchange Syntax Standard
X.509是常见通用的证书格式。所有的证书都符合为Public Key Infrastructure (PKI) 制定的 ITU-T X509 国际标准。

PKCS#7 常用的后缀是： .P7B .P7C .SPC
PKCS#12 常用的后缀有： .P12 .PFXX.509 
DER 编码(二进制)的后缀是： .DER .CER .CRT
X.509 PAM 编码(Base64)的后缀是： .PEM .CER .CRT
.cer/.crt是用于存放证书，它是2进制形式存放的，不含私钥。
.pem跟crt/cer的区别是它以Ascii来表示。

## centos7 安装根证书 (root certificates)

1.将证书复制到 /etc/pki/ca-trust/source/anchors/ 文件夹，本文以mitmproxy的https证书为例

```
cp /root/.mitmproxy/mitmproxy-ca-cert.crt /etc/pki/ca-trust/source/anchors/
```

2.移动到将此证书软连接至 /etc/ssl/certs/文件夹中

```
ln -s /etc/pki/ca-trust/source/anchors/mitmproxy-ca-cert.cer  /etc/ssl/certs/mitmproxy-ca-cert.cer
```
3.运行 update-ca-trust，更新系统的证书

```
update-ca-trust
```

此命令一般centos7自带，如果没有则需要安装
yum install ca-certificates
update-ca-trust force-enable


### Linux (Ubuntu, Debian)

ADD
1. Copy your CA to dir /usr/local/share/ca-certificates/
```
sudo cp foo.crt /usr/local/share/ca-certificates/foo.crt
```
2. Update the CA store:
```
sudo update-ca-certificates
```

Remove	
1. Remove your CA.
2. Update the CA store: 
```
sudo update-ca-certificates --fresh
```

NOTE
Restart Kerio Connect to reload the certificates in the 32-bit versions or Debian 7.

### Linux (CentOs 6)

Add	

1. Install the ca-certificates package: 
```
yum install ca-certificates
```

2. Enable the dynamic CA configuration feature:
```
update-ca-trust force-enable
```

3. Add it as a new file to /etc/pki/ca-trust/source/anchors/: 

```
cp foo.crt /etc/pki/ca-trust/source/anchors/
```
4. Use command:
```
update-ca-trust extract
```
NOTE

Restart Kerio Connect to reload the certificates in the 32-bit version.

### Linux (CentOs 5)

Add	
1. Append your trusted certificate to file /etc/pki/tls/certs/ca-bundle.crt
```
cat foo.crt >>/etc/pki/tls/certs/ca-bundle.crt
```

## 查看一个网站的证书详情

```
echo | openssl s_client -showcerts -servername gnupg.org -connect gnupg.org:443 2>/dev/null | openssl x509 -inform pem -noout -text
```

## 名称

- CA: 证书颁发机构（CA, Certificate Authority）

## 参考资料:
1. https://lamjack.github.io/2018/05/17/openssl-localhost-https/
2. OpenSSL http://www.netkiller.cn/cryptography/openssl/index.html
3. Adding trusted root certificates to the server https://manuals.gfi.com/en/kerio/connect/content/server-configuration/ssl-certificates/adding-trusted-root-certificates-to-the-server-1605.html
