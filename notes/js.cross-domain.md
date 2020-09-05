[TOC]

# 跨域 Cross Domain

浏览器有同源策略. 页面与请求的 schema, domain(包括二级子域名也要相同), port 完全相同的请求视为同源请求, 可以发出. 对于不同的视为跨域. 默认禁止跨域的ajax请求.

跨域的场景包括两方面:

- 页面间跨域传递信息:
  - 主要通过iframe来实现
  - 利用window.name属性来实现
  - 利用location.hash来传递消息.
  - window.postMessage 来传递.
- Ajax跨域请求:
  - JSONP, 只能发GET请求
  - 利用Websocket. ws 与 wss 协议不受同源策略限制
  - CORS 跨域, 主要需要服务器所相应的response header等属性的设置. 该方案支持所有类型的请求, 是跨域HTTP的根本解决方案.

## Ajax 跨域

ajax 跨域有两种方式. 
- JSONP 跨域, 不受同源策略限制, 所有浏览器都支持. 缺点是只能发GET请求
- Webscoket 是一种计算机通信协议 , 通过 ws:// wss:// 协议前缀可以跨域. 需要服务器支持. 老式浏览器不支持
- 通过 CORS 跨域. 

### CORS

CORS (cross-origin resource sharing) 跨域资源共享. 可以允许浏览器发出跨域XHR请求. 需要浏览器和服务器同时支持. 

整个CORS过程浏览器会自动完成. 不需要用户参与. 与普通的AJAX没有差别, 浏览器发现是跨域请求, 会自动添加一些Header信息, 对于非简单请求会先发出一次Option请求. 对于服务器, 需要实现相应的CORS接口. 即可实现跨域通信.

#### 两种类型

**CORS** 有两种请求类型.

- simple request 简单请求. 
- not-so-simple request 非简单请求

区分: 

同时满足以下2个条件即为简单请求, 否则为非简单请求.

- 1. 请求类型是 HEAD / GET / POST 三者之一.
- 2. HTTP的 Request Header 的信息不超过以下5种字段. Accept, Accept-Language, Content-Language, Last-Event-ID, Content-Type(只限于3个值之一: application/x-www-form-urlencoded, multipart/form-data, text/plain).

#### Simple Request

对于简单请求, 浏览器直接发出Ajax, 在RequestHeader中增加一个origin字段

```
Accept:*/*
Accept-Encoding:gzip, deflate
Accept-Language:zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4
Cache-Control:no-cache
Content-Length:15
Content-Type:text/plain;charset=UTF-8
Host:sub.localhost.com
Origin:http://localhost.com  // 增加的字段发出请求的域名.
Pragma:no-cache
Proxy-Connection:keep-alive
Referer:http://localhost.com/main.html
User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36

```

origin 字段用来说明, 本次请求的 协议 + 域名 + 端口. 服务器根据该字段来判断是否同意这次请求.

如果`Origin`指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应。浏览器发现，这个回应的头信息没有包含`Access-Control-Allow-Origin`字段（详见下文），就知道出错了，从而抛出一个错误，被`XMLHttpRequest`的onerror回调函数捕获。注意，这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200。

如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。 如下面.


```
Access-Control-Allow-Origin:http://localhost.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Connection:keep-alive
Content-Length:44
Content-Type:application/json; charset=utf-8
Date:Sun, 28 May 2017 08:50:55 GMT
ETag:W/"2c-o2pA4cDz3LUnftwLRVbkkfiw1jg"
Vary:Origin
X-Powered-By:Express

```

上面的头信息之中，有三个与CORS请求相关的字段，都以Access-Control-开头。
（1）Access-Control-Allow-Origin
该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。
（2）Access-Control-Allow-Credentials
该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可。
（3）Access-Control-Expose-Headers
该字段可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。上面的例子指定，getResponseHeader('FooBar')可以返回FooBar字段的值。


##### withCredentials 属性

上面说到，CORS请求默认不发送Cookie和HTTP认证信息。如果要把Cookie发到服务器，一方面要服务器同意，指定Access-Control-Allow-Credentials字段。

```
Access-Control-Allow-Credentials: true
```

另一方面，开发者必须在AJAX请求中打开withCredentials属性。

```
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```

否则，即使服务器同意发送Cookie，浏览器也不会发送。或者，服务器要求设置Cookie，浏览器也不会处理。
但是，如果省略withCredentials设置，有的浏览器还是会一起发送Cookie。这时，可以显式关闭withCredentials。

```
xhr.withCredentials = false;
```

需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页代码中的document.cookie也无法读取服务器域名下的Cookie。

#### node 服务端支持 CORS

[https://github.com/expressjs/cors](https://github.com/expressjs/cors)

使用express的node服务可以使用 cors 库来处理跨域

```javascript

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

```

#### 非简单请求

非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。
非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。
浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。
下面是一段浏览器的JavaScript脚本。

```
var url = 'http://api.alice.com/cors';
var xhr = new XMLHttpRequest();
xhr.open('PUT', url, true);
xhr.setRequestHeader('X-Custom-Header', 'value');
xhr.send();
```

上面代码中，HTTP请求的方法是PUT，并且发送一个自定义头信息X-Custom-Header。
浏览器发现，这是一个非简单请求，就自动发出一个"预检"请求，要求服务器确认可以这样请求。下面是这个"预检"请求的HTTP头信息。

```

OPTIONS /cors HTTP/1.1
Origin: http://api.bob.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...

```

"预检"请求用的请求方法是OPTIONS，表示这个请求是用来询问的。头信息里面，关键字段是Origin，表示请求来自哪个源。
除了Origin字段，"预检"请求的头信息包括两个特殊字段。
（1）Access-Control-Request-Method
该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法，上例是PUT。
（2）Access-Control-Request-Headers
该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段，上例是X-Custom-Header。

服务器收到"预检"请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。

```

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

```

上面的HTTP回应中，关键的是Access-Control-Allow-Origin字段，表示http://api.bob.com可以请求数据。该字段也可以设为星号，表示同意任意跨源请求。

```
Access-Control-Allow-Origin: *
```

如果浏览器否定了"预检"请求，会返回一个正常的HTTP回应，但是没有任何CORS相关的头信息字段。这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被XMLHttpRequest对象的onerror回调函数捕获。控制台会打印出如下的报错信息。

```
XMLHttpRequest cannot load http://api.alice.com.
Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.
```

服务器回应的其他CORS相关字段如下。

```
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 1728000
```

（1）Access-Control-Allow-Methods
该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。
（2）Access-Control-Allow-Headers
如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。
（3）Access-Control-Allow-Credentials
该字段与简单请求时的含义相同。
（4）Access-Control-Max-Age
该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。

 浏览器的正常请求和回应
一旦服务器通过了"预检"请求，以后每次浏览器正常的CORS请求，就都跟简单请求一样，会有一个Origin头信息字段。服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。
下面是"预检"请求之后，浏览器的正常CORS请求。

```
PUT /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
X-Custom-Header: value
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

上面头信息的Origin字段是浏览器自动添加的。
下面是服务器正常的回应。

```
Access-Control-Allow-Origin: http://api.bob.com
Content-Type: text/html; charset=utf-8
```

上面头信息中，Access-Control-Allow-Origin字段是每次回应都必定包含的。

### 参考资料

参考资料: 

[http://www.ruanyifeng.com/blog/2016/04/cors.html](http://www.ruanyifeng.com/blog/2016/04/cors.html)

[https://github.com/wengjq/Blog/issues/2](https://github.com/wengjq/Blog/issues/2)



