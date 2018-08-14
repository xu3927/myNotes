# Json Server 使用

[https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

json server 可以建立一个服务用来mock接口

## 使用

建立一个db.json文件,内容如下

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

```

```
# 启动一个服务, 文件为db.json
json-server -w db.json
```

## RESTFUL接口更改数据

### get

 GET http://localhost:3000/posts/1

 返回

 ```json

{ "id": 1, "title": "json-server", "author": "typicode" }

 ```

 ### post

 POST http://localhost:3000/score

body中携带参数

```json
{
	"name": "lucy",
	"value": 80
}

```

在db文件中会增加一条数据, id自增

### PUT更改数据

put 或patch请求可以更改数据
PATCH/PUT http://localhost:3000/score/2

```json

{
	"name": "modify",
	"value": 20
}

```


### DELETE

DELETE http://localhost:3000/score/2

删除id为2的数据

