# rsync

用来在服务器之间同步文件

## 配置rsyncd服务端

新建配置文件：

```
vim /etc/rsyncd.conf
```

```
uid = root
gid = root
use chroot = no
max connections = 4
strict modes = yes
port = 873
secrets file = /etc/rsync.passlist  #用户名与密码对应表

#配置模块：一个模块对应一个项目
[moduleName]  #模块名
path = /data/www/example  #文件存放路径
ignore errors 
read only = false
list = no 
auth users = myUsername  #服务器上传时指定的用户名
hosts allow = 填写服务器的IP地址  #允许访问的机器
hosts deny = 0.0.0.0
```

2. 创建密码表

```
vim /etc/rsync.passlist
```

```
myUsername:myPassword
```

3. 修改xinetd

```
vim /etc/xinetd.d/rsync
```

将其中的 disable 由原来的 yes 改为 no

4. 启动

```
chkconfig rsync on
service xinetd restart
```

## 同步命令

增量同步src 和dest中的内容, src中删除的内容dest中不删除

```bash
# src 路径以 / 结尾, 则该目录会作为根目录覆盖目标目录. 否则作为一个子文件, 同步到目标路径下
 rsync -vzrtopg --progress --password-file=/etc/rsync.pass /data/www/dir/ devnetassetspush@1.1.1.1::deploypublish

```

同步SRC的指定文件夹到DEST服务器, 同时创建相应的目录结构

在目标路径下, 会创建 ./ 之后的目录结构

```bash
/data/www/dir]$ rsync -vzrtopg --progress --relative --password-file=/etc/rsync.pass /data/www/dir/./proj/1.0.2 devnetassetspush@1.1.1.1::deploypublish
```

完全同步src dest 文件中的内容, 如果src中删除的话在dest也做删除操作 增加 --delete参数

```bash
rsync -vzrtopg --progress --delete --password-file=/etc/rsync.pass /data/www/dir/* devnetassetspush@1.1.1.1::deploypublish
```

只同步src中的 html文件到dest, 同时同步各个文件夹下的

```bash
rsync -vzrtop --progress --include="*.html" --include="*/" --exclude=* --password-file=/etc/rsync.pass /data/www/dir/ devnetassetspush@1.1.1.1::deploypublish
```