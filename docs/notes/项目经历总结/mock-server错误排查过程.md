# mock-server错误排查过程

## 首次冒烟测试遇到的错误:

1. 朱超测试接口全部返回 ‘ok’
2. 我测试时接口全部返回  500 Internal Server Error

## 当前请求转发路径:

浏览器 —> mock-server  —> nginx —>  后端服务器

## 可能的错误原因:

1. mock-server的proxy转发出错
2. 未携带cookie
3. 权限验证有问题
4. 服务器nginx转发拦截
5. 后端服务器拦截
6. 其它中间件错误

## 错误排查思考:

1.当前只能看到浏览器发出的请求, 及返回的结果.
无法查看转发的错误及服务器的情况. 
2. 猜测当前错误较大几率出现在mock-server转发的过程中.  因此需要查看mock-server处理过后的请求的具体内容.
3. 在mock-server之后用Charles做请求拦截, 以查看请求的具体内容.
4. 由于node直接通过端口转发的请求不走系统代理, 所以Charles无法抓包. 若要抓包需要将请求转发到Charles上.

## 具体操作:

1. 用Charles搭建一个反向代理, 如监听端口8000, 转发到后端服务器tl.tpt.dev.sankuai.com:80
2. 配置mock-server的proxy, 将请求转发到charles监听的端口8000, 如此就可以在mock-server和后端服务之间进行抓包分析.

## 排查到的问题:

1. 请求没有cookie 的问题, 可以通过手动在proxy中设置proxy.header.Cookie解决. 该方案比较麻烦, cookie过期就需要重新设置, 后期调研其他解决方案, 暂时可以这样设置.
2. middleware.parseRequest(), 拦截了options请求. 导致跨域请求失败.
3. middleware.validateRequest() 中间件会对请求做合法性判断, 该判断基于swagger的请求, 页面代理的请求不需要做该校验.  需要重新设计下几个中间件的执行顺序.