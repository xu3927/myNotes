# svn 

参考文档
[中文文档](https://www.kancloud.cn/i281151/svn/197097)

## 创建一个svn仓库


### svnadmin create REPO_PATH

svnadmin 用来监控和修改svn版本库
svnadmin直接访问版本库(因此只可以在存放版本库的机器上使用), 通过路径访问版本库, 而不是url

在 指定路径 (REPO_PATH) 创建一个版本库

执行上面的命令后，自动在repos下建立多个文件， 分别是conf, db,format,hooks, locks, README.txt。

### 配置仓库


文件夹. 有以下几个文件authz, passwd, svnserve.conf
     其中authz 是权限控制，可以设置哪些用户可以访问哪些目录,   passwd是设置用户和密码的,    svnserve是设置svn相关的操作

1. 设置访问用户

编辑 passwd文件添加用户

```bash
[users]
# harry = harryssecret
# sally = sallyssecret
# 用户名=密码
hello=123
```

2. 设置权限

```
# 给hello用户添加读写权限
hello=rz
```

3. 最后设定snvserv.conf

```
anon-access = none # 使非授权用户无法访问
auth-access = write # 使授权用户有写权限
password-db = password
authz-db = authz   # 访问控制文件
realm = /opt/svn/repos # 认证命名空间，subversion会在认证提示里显示，并且作为凭证缓存的关键字。
采用默认配置. 以上语句都必须顶格写, 左侧不能留空格, 否则会出错.
```

### 启动svn服务

```bash
# -d 启动守护进程
# -r 从root目录启动
# svn默认端口是3690

svnserve -d -r REPO_PATH --listen-port 3690
```

## svn checkout

拷贝一个远端的仓库

```bash
# URL是远端仓库的路径 @REV 可以指定版本,  PATH 是要保存到的本地的路径. 
# 如果svn没有保存登陆信息, 则需要输入用户名和密码
svn checkout URL[@REV]... [PATH] [--username 用户名] [--password 密码]

```







