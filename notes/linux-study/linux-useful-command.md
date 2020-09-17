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
```

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

zip参数：

```
-r 递归压缩，将指定目录下的所有文件以及子目录全部压缩
-d 从压缩文件内删除指定的文件
-i “文件列表” 只压缩文件列表中的文件
-x “文件列表” 压缩时排除文件列表中指定的文件
-u 更新文件到压缩文件中
-m 将文件加入压缩文件压缩后，删除原始文件，即把文件移到压缩文件中
-F 尝试修复损坏的压缩文件
-T 检查压缩文件内的每个文件是否正确无误
- 压缩级别 压缩级别是一个1～9的数字
```

压缩

```
zip pkg.zip ./*.png
# 压缩目录及子目录， 排除 *.log, *.test
zip -r pkg.zip ./floder/* -x *.log -x *.test
```

unzip 参数：

```
-x "文件列表" 解压文件，但不包含文件列表中指定的文件
-t 测试压缩文件有无损坏，并不解压
-v 查看压缩文件的详细信息，具体包括压缩文件中包含的文件大小、文件名和压缩比等，并不解压
-n 解压时不覆盖已经存在的文件
-o 解压时覆盖已经存在的文件，并且不要求用户确认
-d 目录名 把压缩文件解压到指定目录下
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

### nohup并stdout stderr 重定向

```sh
# 自定义输出文件(标准输出和错误输出合并到 main.log)
nohup python main.py >> main.log 2>&1 & 
# 与上一个例子相同作用的简写方法
nohup python main.py &> main.log &
# 不记录输出信息
nohup python main.py &> /dev/null &
```

### 查看后台运行的程序

已知pid进程号当然最好了
- 使用ps -ef 或者 ps -aux 结合grep过滤
- 使用pstree -p确认复杂进程树结构
- 使用lsof -i:80查端口获得进程号
- 使用netstat -anp | grep 80查端口获得进程号，推荐使用lsof
- jobs -l 列出后台程序


```sh
# 列出所有后台运行的程序, 返回任务编号 和 进程号
jobs -l

# 列出后台的进程
ps -aux | grep <keyword>
ps -ef | grep <keyword>
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

## 查看磁盘空间

### df 查看所有磁盘的可用空间及状态

```
~#]> df -h
文件系统        容量  已用  可用 已用% 挂载点
/dev/sda1       9.8G  7.3G  2.0G   79% /
devtmp         63G     0   63G    0% /dev
tmp            63G   80K   63G    1% /dev/shm
tmp            63G  4.1G   59G    7% /run
tmp            63G     0   63G    0% /sys/fs
/dev/sda3        20G   18G  1.2G   94% /usr/local
/dev/sda4       244G  216G   16G   94% /data
```
h表示 humanreadable 以方便阅读的形式显示


### du 查看文件大小

du (disk usage) 查看目录/文件占用大小

```
# 查看文件列表
du -ah -d 1 <dir>
# 列出文件目录并排序
du -ah -d 2 | sort -h
```

参数
```
-a 显示文件和目录
-h 以 K,M,G表示大小
-d <num> --max-depth=0 查看的深度，深入第几层目录查看。 为0则不查看子目录
```

## 日志查看

[常用Linux日志查看命令](https://blog.csdn.net/hellozpc/article/details/72859152)

### more 命令

http://www.cnblogs.com/peida/archive/2012/11/02/2750588.html

more会以一页一页的显示文档，more命令从前向后读取文件，因此在启动时就加载整个文件。

* space 下一页
* b 上一页
* f 下一页
* Enter 键 显示下一行
* = 输出当前行的行号
* q 退出

命令参数

```sh
+n      从笫n行开始显示
-n       定义屏幕大小为n行
+/pattern 在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示  
-c       从顶部清屏，然后显示
-d       提示“Press space to continue，’q’ to quit（按空格键继续，按q键退出）”，禁用响铃功能
-l        忽略Ctrl+l（换页）字符
-p       通过清除窗口而不是滚屏来对文件进行换页，与-c选项相似
-s       把连续的多个空行显示为一行
-u       把文件内容中的下画线去掉
```

命令实例：

实例1：显示文件中从第3行起的内容， 每行显示6条

命令：
```
more +3 -6 log2012.log
```
输出：
```
[root@localhost test]# more +3 -6 log2012.log 
2012-04-day1
2012-04-day2
2012-04-day3
2012-04-day4
2012-04-day5
2012-04-day6
```

实例2：从文件中查找第一个出现"day3"字符串的行，并从该处前两行开始显示输出 

命令：
```
more +/day3 log2012.log
```
输出：
```
[root@localhost test]# more +/day3 log2012.log 
...skipping
2012-04-day1
2012-04-day2
2012-04-day3
2012-05
2012-05-day1
======[root@localhost test]#
```
实例3：设定每屏显示行数 

命令：
```
more -5 log2012.log
```
输出：
```
[root@localhost test]# more -5 log2012.log 
2012-01
2012-02
2012-03
2012-04-day1
2012-04-day2
```
说明：

如下图所示，最下面显示了该屏展示的内容占文件总行数的比例，按 Ctrl+F 或者 空格键 将会显示下一屏5条内容，百分比也会跟着变化。

实例4：列一个目录下的文件，由于内容太多，我们应该学会用more来分页显示。这得和管道 | 结合起来 

命令：
```
ls -l  | more -5
```
输出：
```
[root@localhost test]#  ls -l  | more -5
总计 36
-rw-r--r-- 1 root root  308 11-01 16:49 log2012.log
-rw-r--r-- 1 root root   33 10-28 16:54 log2013.log
-rw-r--r-- 1 root root  127 10-28 16:51 log2014.log
lrwxrwxrwx 1 root root    7 10-28 15:18 log_link.log -> log.log
-rw-r--r-- 1 root root   25 10-28 17:02 log.log
-rw-r--r-- 1 root root   37 10-28 17:07 log.txt
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxrwxrwx 2 root root 4096 10-28 14:47 test4
```

说明：

每页显示5个文件信息，按 Ctrl+F 或者 空格键 将会显示下5条文件信息。

### less 命令

less 工具也是对文件或其它输出进行分页显示的工具，应该说是linux正统查看文件内容的工具，功能极其强大。less 的用法比起 more 更加的有弹性。在 more 的时候，我们并没有办法向前面翻， 只能往后面看，但若使用了 less 时，就可以使用 [pageup] [pagedown] 等按键的功能来往前往后翻看文件，更容易用来查看一个文件的内容！除此之外，在 less 里头可以拥有更多的搜索功能，不止可以向下搜，也可以向上搜。

命令格式：
```
less [参数]  文件 
```

命令功能：

less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。

快捷键

```
n：重复前一个搜索（与 / 或 ? 有关）
N：反向重复前一个搜索（与 / 或 ? 有关）
b  向后翻一页
d  向后翻半页
h  显示帮助界面
Q  退出less 命令
u  向前滚动半页
y  向前滚动一行
空格键 滚动一行
回车键 滚动一页
[pagedown]： 向下翻动一页
[pageup]：   向上翻动一页
```

命令参数：

```
-b <缓冲区大小> 设置缓冲区的大小
-e  当文件显示结束后，自动离开
-f  强迫打开特殊文件，例如外围设备代号、目录和二进制文件
-g  只标志最后搜索的关键词
-i  忽略搜索时的大小写
-m  显示类似more命令的百分比
-N  显示每行的行号
-o <文件名> 将less 输出的内容在指定文件中保存起来
-Q  不使用警告音
-s  显示连续空行为一行
-S  行过长时间将超出部分舍弃
-x <数字> 将“tab”键显示为规定的数字空格
/字符串：向下搜索“字符串”的功能
?字符串：向上搜索“字符串”的功能
```
使用实例：

ps查看进程信息并通过less分页显示 

命令：
```
ps -ef |less
history | less
```

### tail 从尾部开始查 

http://www.cnblogs.com/peida/archive/2012/11/07/2758084.html

### head 从头部开始查看

http://www.cnblogs.com/peida/archive/2012/11/06/2756278.html

### grep 查找

https://www.cnblogs.com/peida/archive/2012/12/17/2821195.html

```
# 查看文件中的关键字
grep 'keyword' <filename>
# 显示行号
grep -n 'keyword' <filename>
# 显示关键词前后各几行的内容
grep -n -C10 'keyword' <filename>
```

grep 结合 tail 命令查看日志

```
grep  -n  -C10  'R0619'  caps-biz.txt | tail -n 21 | less（借助less命令的/pattern可以高亮搜索词）
```


## 网络测试

[Netcat](https://www.freebuf.com/sectool/168661.html): 可以用作端口监听、端口扫描、远程文件传输、还可以实现远程shell等功能