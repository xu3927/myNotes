[TOC]

# Linux Useful Command

## 剪贴板

pbcopy  : 表示复制剪切版
pbpaste ：表示粘贴剪切版

```bash

~]# cat a.txt | pbcopy   #将a.txt文件类容写入剪切板，相当于 cmd + C 
~]# pbpaste              #将刚刚存入剪切板的a.txt内容复制到终端，相当于 cmd + v

```

其他常用的方法


```bash

#统计剪贴板中文本的行数
pbpaste | wc -l 

#统计剪贴板中文本的单词数
pbpaste | wc -w 

#对剪贴板中的文本行进行排序后重新写回剪贴
pbpaste | sort | pbcopy 

#对剪贴板中的文本行进行倒序后放回剪贴板
pbpaste | rev | pbcopy 

#移除剪贴板中重复的文本行，然后写回剪贴板
pbpaste | sort | uniq | pbcopy 

#找出剪贴板中文本中存在的重复行，并复制后写回剪贴板（包含重复行的一行）
pbpaste | sort | uniq -d | pbcopy 

#找出剪贴板中文本中存在的重复行，并复制后写回剪贴板（不包含重复行）
pbpaste | sort | uniq -u | pbcopy 

#对剪贴板中的 HTML 文本进行清理后写回剪贴板
pbpaste | tidy | pbcopy 

#显示剪贴板中文本的前 5 行
pbpaste | head -n 5 

#显示剪贴板中文本的最后 5 行
pbpaste | tail -n 5 

#将剪贴板中文本里存在的 Tab 跳格符号转成空格
pbpaste | expand | pbcopy

```

## 查看当前用户的SHELL

```bash
finger [USERNAME]
```

如：

```bash

~]# finger x3927

# 输出
Login: x3927          			Name: xuzhichao
Directory: /Users/x3927             	Shell: /bin/bash
On since Mon Aug 28 13:08 (CST) on console, idle 21:44 (messages off)
On since Tue Aug 29 10:19 (CST) on ttys000
On since Tue Aug 29 10:11 (CST) on ttys001, idle 0:26
On since Mon Aug 28 15:14 (CST) on ttys002, idle 16:52
On since Tue Aug 29 10:22 (CST) on ttys003, idle 0:27
No Mail.
No Plan.

```

## 查看端口 lsof 


lsof（list open files）是一个列出当前系统打开文件的工具。在linux环境下，任何事物都以文件的形式存在，通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件。所以，lsof的功能很强大。一般root用户才能执行lsof命令，普通用户可以看见/usr/sbin/lsof命令，但是普通用户执行会显示“permission denied”。因此通过lsof工具能够查看这个列表对系统监测以及排错将是很有帮助的。

每行显示一个打开的文件，若不指定条件默认将显示所有进程打开的所有文件。lsof输出各列信息的意义如下： 
- COMMAND：进程的名称
- PID：进程标识符
- USER：进程所有者
- FD：文件描述符，应用程序通过文件描述符识别该文件。如cwd、tx- t等
- TYPE：文件类型，如DIR、REG等
- DEVICE：指定磁盘的名称
- SIZE：文件的大小
- NODE：索引节点（文件在磁盘上的标识）
- NAME：打开文件的确切名称


lsof指令的用法如下：

lsof abc.txt 显示开启文件abc.txt的进程

lsof 目录名 查找谁在使用文件目录系统

lsof -i :22 知道22端口被哪个进程占用

lsof -c abc 显示abc进程现在打开的文件

lsof -g gid 显示归属gid的进程情况

lsof -n 不将IP转换为hostname，缺省是不加上-n参数

lsof -p 12 看进程号为12的进程打开了哪些文件

lsof -u username 查看用户打开哪些文件

lsof -i @192.168.1.111 查看远程已打开的网络连接（连接到192.168.1.111）

lsof -i 用以显示符合条件的进程情况

语法: lsof -i[46] [protocol][@hostname|hostaddr][:service|port]

46 -> IPv4 or IPv6

protocol -> TCP or UDP

hostname -> Internet host name

hostaddr -> IPv4位置

service -> /etc/service中的 service name (可以不只一个)

port -> 端口号 (可以不只一个)

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
lsof +|-r [t] 控制lsof不断重复执行，缺省是15s刷新

-r，lsof会永远不断的执行，直到收到中断信号

+r，lsof会一直执行，直到没有档案被显示

例子：不断查看目前ftp连接的情况：lsof -i tcp@192.168.1.111:ftp -r


## rm 删除文件命令

常用的有 ：

rm -rf 目录  //删除目录包括子目录及文件

rm是一个危险的命令，使用的时候要特别当心，尤其对于新手，否则整个系统就会毁在这个命令（比如在/（根目录）下执行rm * -rf）。所以，我们在执行rm之前最好先确认一下在哪个目录，到底要删除什么东西，操作时保持高度清醒的头脑。

>1．命令格式：

rm [选项] 文件… 

>2．命令功能：

删除一个目录中的一个或多个文件或目录，如果没有使用- r选项，则rm不会删除目录。如果使用 rm 来删除文件，通常仍可以将该文件恢复原状。

>3．命令参数：
    -f, --force    忽略不存在的文件，从不给出提示。
    -i, --interactive 进行交互式删除
    -r, -R, --recursive   指示rm将参数中列出的全部目录和子目录均递归地删除。
    -v, --verbose    详细显示进行的步骤
      	--help     显示此帮助信息并退出
      	--version  输出版本信息并退出

>4．命令实例：
实例一：删除文件file，系统会先询问是否删除。 
命令：
rm 文件名
输出：
```
[root@localhost test1]# ll
总计 4
-rw-r--r-- 1 root root 56 10-26 14:31 log.log
root@localhost test1]# rm log.log 
rm：是否删除 一般文件 “log.log”? y
root@localhost test1]# ll
总计 0[root@localhost test1]#
```
说明：
输入rm log.log命令后，系统会询问是否删除，输入y后就会删除文件，不想删除则数据n。
实例二：强行删除file，系统不再提示。 
命令：
```
rm -f log1.log
```
输出：
```
[root@localhost test1]# ll
总计 4
-rw-r--r-- 1 root root 23 10-26 14:40 log1.log
[root@localhost test1]# rm -f log1.log 
[root@localhost test1]# ll
总计 0[root@localhost test1]#
```

实例三：删除任何.log文件；删除前逐一询问确认 

命令：
```
rm -i *.log
```
输出：
```
[root@localhost test1]# ll
总计 8
-rw-r--r-- 1 root root 11 10-26 14:45 log1.log
-rw-r--r-- 1 root root 24 10-26 14:45 log2.log
[root@localhost test1]# rm -i *.log
rm：是否删除 一般文件 “log1.log”? y
rm：是否删除 一般文件 “log2.log”? y
[root@localhost test1]# ll
总计 0[root@localhost test1]#
```

实例四：将 test1子目录及子目录中所有档案删除

命令：
```
rm -r test1
```
输出：

```
[root@localhost test]# ll
总计 24drwxr-xr-x 7 root root 4096 10-25 18:07 scf
drwxr-xr-x 2 root root 4096 10-26 14:51 test1
drwxr-xr-x 3 root root 4096 10-25 17:44 test2
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
[root@localhost test]# rm -r test1
rm：是否进入目录 “test1”? y
rm：是否删除 一般文件 “test1/log3.log”? y
rm：是否删除 目录 “test1”? y
[root@localhost test]# ll
总计 20drwxr-xr-x 7 root root 4096 10-25 18:07 scf
drwxr-xr-x 3 root root 4096 10-25 17:44 test2
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
[root@localhost test]#
```

实例五：rm -rf test2命令会将 test2 子目录及子目录中所有档案删除,并且不用一一确认

命令：
```
rm -rf  test2 
```
输出：
```
[root@localhost test]# rm -rf test2
[root@localhost test]# ll
总计 16drwxr-xr-x 7 root root 4096 10-25 18:07 scf
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
[root@localhost test]#
```
实例六：删除以 -f 开头的文件

命令：
```
rm -- -f
```

输出：
```
[root@localhost test]# touch -- -f
[root@localhost test]# ls -- -f
-f[root@localhost test]# rm -- -f
rm：是否删除 一般空文件 “-f”? y
[root@localhost test]# ls -- -f
ls: -f: 没有那个文件或目录
[root@localhost test]#
也可以使用下面的操作步骤:
[root@localhost test]# touch ./-f
[root@localhost test]# ls ./-f
./-f[root@localhost test]# rm ./-f
rm：是否删除 一般空文件 “./-f”? y
[root@localhost test]#
```
实例七：自定义回收站功能

命令：
```
myrm(){ D=/tmp/$(date +%Y%m%d%H%M%S); mkdir -p $D; mv "$@" $D && echo "moved to $D ok"; }
```
输出：
```
[root@localhost test]# myrm(){ D=/tmp/$(date +%Y%m%d%H%M%S); mkdir -p $D; 	mv "$@" $D && echo "moved to $D ok"; }
[root@localhost test]# alias rm='myrm'
[root@localhost test]# touch 1.log 2.log 3.log
[root@localhost test]# ll
总计 16
-rw-r--r-- 1 root root    0 10-26 15:08 1.log
-rw-r--r-- 1 root root    0 10-26 15:08 2.log
-rw-r--r-- 1 root root    0 10-26 15:08 3.log
drwxr-xr-x 7 root root 4096 10-25 18:07 scf
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
[root@localhost test]# rm [123].log
moved to /tmp/20121026150901 ok
[root@localhost test]# ll
总计 16drwxr-xr-x 7 root root 4096 10-25 18:07 scf
drwxrwxrwx 2 root root 4096 10-25 17:46 test3
drwxr-xr-x 2 root root 4096 10-25 17:56 test4
drwxr-xr-x 3 root root 4096 10-25 17:56 test5
[root@localhost test]# ls /tmp/20121026150901/
1.log  2.log  3.log
[root@localhost test]#
```

说明：
上面的操作过程模拟了回收站的效果，即删除文件的时候只是把文件放到一个临时目录中，这样在需要的时候还可以恢复过来。


## tar 压缩

Tar 是 tape archive 磁带存档

压缩文件是 Tarball 或 Tarfile

常用有3种模式

- 创建压缩 -c 
- 解压 -x
- 查看压缩文件内容 -t

### 常用参数

```
-c: 创建压缩文件
-x：解压
-t：查看内容
-r：向压缩归档文件末尾追加文件
-u：更新原压缩包中的文件
```

这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。下面的参数是根据需要在压缩或解压档案时可选的。

```
-z：有gzip属性的
-j：有bz2属性的
-Z：有compress属性的
-v：显示所有过程
-O：将文件解开到标准输出
```

下面的参数-f是必须的

```
-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。
``
### 示例

这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。
tar -cf all.tar *.jpg 

这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。
tar -rf all.tar *.gif 

这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。
tar -uf all.tar logo.gif 

这条命令是列出all.tar包中所有文件，-t是列出文件的意思
tar -tf all.tar 

这条命令是解出all.tar包中所有文件，-x是解开的意思
tar -xf all.tar 

### 压缩

```
tar -cvf jpg.tar *.jpg //将目录里所有jpg文件打包成jpg.tar 

tar -czf jpg.tar.gz *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz

tar -cjf jpg.tar.bz2 *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2

tar -cZf jpg.tar.Z *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z

rar a jpg.rar *.jpg //rar格式的压缩，需要先下载rar for linux

zip jpg.zip *.jpg //zip格式的压缩，需要先下载zip for linux

```

### 解压

```
tar -xvf file.tar //解压 tar包

tar -xzvf file.tar.gz //解压tar.gz

tar -xjvf file.tar.bz2   //解压 tar.bz2

tar -xZvf file.tar.Z   //解压tar.Z

unrar e file.rar //解压rar

unzip file.zip //解压zip
```

### 总结

1、*.tar 用 tar -xvf 解压

2、*.gz 用 gzip -d或者gunzip 解压

3、*.tar.gz和*.tgz 用 tar -xzf 解压

4、*.bz2 用 bzip2 -d或者用bunzip2 解压

5、*.tar.bz2用tar -xjf 解压

6、*.Z 用 uncompress 解压

7、*.tar.Z 用tar -xZf 解压

8、*.rar 用 unrar e解压

9、*.zip 用 unzip 解压

## zip unzip

压缩

```
zip pkg.zip ./*.png
```

查看压缩文件内容

```
unzip -v pkg.zip
```

解压
```
unzip pkg.zip -d /path/to/dir
```

## nohup 后台运行

可以让命令不挂断在后台运行

官方文档 https://www.computerhope.com/unix/unohup.htm

Syntax

```
nohup command [command-argument ...]
```

- 如果 standard input 是一个 terminal， nohup 会重定向到 /dev/null 因此适用 nohup 运行后，标准输入就不可用了。
- 如果是标准输入是 terminal，输出会重定向到 nohup.out，或者 $HOME/nohup.out
- 如果 standard error 是 terminal，会重定向到 标准输出

输出重定向到指定文件，则

```
nohup <command> > file
```

例子

在后台运行 python 脚本， stdout, stderr 会被重定向到 ./nohup.out 文件

```
nohup python main.py
```

下面的命令在执行命令后会返回到 shell 中. 结尾的符号 "&" 指示 bash 在后台运行命令。 可以通过 fg 命令把后台运行的程序拉回到前台。

```

# 返回 jobid 和 PID 
nohup python main.py &
```

可以通过 PID 来结束后台运行的程序

```
kill -9 <PID>
```

## fg 让后台的程序到前台运行

Syntax

```
fg <job_id>
```

例子
```
fg 1
```

