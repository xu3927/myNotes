# 权限管理
### 1. 文件权限管理

```bash

ls -l // 输出文件的详细信息
输出的文件信息如下
drwxr-xr-x.  2 root root        90 10月 17 02:43 xml
drwxr-xr-x.  6 root root      4096 10月 17 02:36 yum
-rw-r--r--.  1 root root       970 12月  3 2015 yum.conf

```

分别表示

| d | rwx | r-x | r-x |
| ---------| --- | --- | --- |
| 文件类型 (d 目录, - 文件...) | 文件属主(user, owner)权限 | 文件属组(group)权限 | 其他用户的权限(other) |

#### 1. chmod 修改文件权限 change mode

通过 + - = 符号来设置权限
如： chmod o+rx haha.txt // 给haha.txt 文件的其他用户增加rx权限

可以同时设置多个
chmod u=rwx,g-wx,o-x a.txt  // 给haha.txt的属主权限设为rwx, 属组去掉wx, 其他用户去掉x权限.

```bash
[root@localhost aaa]# ls -l
-rw-r--r-x. 1 root root 0 1月  25 01:44 a.txt
[root@localhost aaa]# chmod u+x a.txt // user增加x权限
[root@localhost aaa]# ls -l
-rwxr--r-x. 1 root root 0 1月  25 01:44 a.txt
```

#### 2. chown 更改属主 change owner

```bash

chown haha a.txt // a.txt的属主改为用户haha

```

#### 3. chgrp 更改属组 change group

```bash

chown haha abc // abc的属组改为用户haha

```