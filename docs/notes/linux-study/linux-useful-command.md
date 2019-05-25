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






