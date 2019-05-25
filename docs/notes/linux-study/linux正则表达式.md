# Linux Shell编程

## 正则表达式

### grep 命令

grep: global regular expression print. 全局正则匹配并打印结果.

grep [options] [-e Pattern | -f Files] [Files...]

```bash
grep 'root' /etc/passwd
grep --color 'root' /etc/passwd  // 高亮显示匹配到的结果
grep -v 'root' /etc/passwd  //反向匹配
grep -o 'root' /etc/passwd // 只显示匹配到的字符串本身(非整行)
grep -i 'root' /etc/passwd // 不区分大小写
grep -E  // 使用扩展正则表达式
cat /proc/cpuinfo | grep -A 3 'cpu MHz' // after 显示cpuinfo文件中匹配到的行并且显示其后跟着的3行 (共显示4行)
cat /proc/cpuinfo | grep -B 3 'cpu MHz' // before 显示cpuinfo文件中匹配到的行并且显示其前面3行 (共显示4行)
cat /proc/cpuinfo | grep -C 3 'cpu MHz' // context 显示cpuinfo文件中匹配到的行并且显示其前后各3行 (共显示4行)

```

### 正则表达式

- 字符类 .(任意单个字符), [](范围集合), [^](范围的反向集合), () 小括号表示组合
- 表示长度 *(任意长度), ?(0或1次), +(一次以上), \{m, n\} (出现m-n次), \{n\} (出现n次)
- 表示位置: ^行首, $行尾, \b(单词的开头或结尾), \B(非单词的开头或结尾), \< (单词开头), \> (单词结尾)

### Bre 和 Ere

- 标准正则表达式 Basic RegExp
- 扩展正则表达式 Extened RegExp

### Ere 扩展正则表达式

用命令 grep -E 或者 egrep

字符匹配相同
.
[] 范围
[^] 反向范围

次数匹配

* 任意次数
? 0或1次
+ 最少1次
{m, n} m-n次, Ere的范围{}中括号不需要用\

位置匹配与Bre相同

分组

() 不需要加 \ 
\1, \2 ...
| 表示或者 C|cat 表示匹配"C"或"cat", (C|c)at 表示"Cat"或"cat", 或者区分的是符号左/右侧的全部部分而非一个字符

### grep egrep fgrep

grep 文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来，最常用。
egrep (extended grep) egrep是grep的扩展，支持更多的re正则表达式元字符,等同于grep -E。
fgrep (fixed grep) 就是fixed grep 或 fast grep， 它们把所有的字母都看作单词，也就是说，正则表达式中的元字符表示回其自身的字面意义，不再特殊,等同于grep -F,相对于grep和egrep的执行速度最快。

## shell 脚本编程

编译器, 解释器

编程语言分类: 机器语言, 汇编语言, 高级语言

- 静态语言
 - 强类型
 - C, C++, C#, JAVA
- 动态语言
 - 弱类型
 - 边解释边执行
 - 如 PHP, Python, Shell, Perl

 变量是命名的内存空间.

 ### 变量

变量定义 set VARNAME
撤销变量 unset VARNAME (变量名不要加$)

 **bash 变量类型**

- 环境变量: 作用域为当前shell进程及其子进程. export VARNAME=VALUE
- 本地变量(局部变量), 只对当前脚本有效.
 - VARNAME=VALUE 本地变量作用域为当前shell整个bash进程
 - local VARNAME=VALUE 局部变量作用域为当前代码段
- 位置变量 用来引用脚本的参数 $1, $2...
- 特殊变量 用来保存某些特殊数据, 如 $? 保存上一个命令执行状态返回值, 执行一个命令后输出 echo $? 可以输出该命令的执行状态码(0, 正确执行, 1-255 错误执行)

 用 $ 引用变量
 
 双引号弱引用(内部变量会被替换)

 单引号强引用, 会直接输出, 不替换变量

 脚本在执行时会启动当前shell的子shell进程, 当前shell声明的变量在其子shell中可以使用.
 命令行启动的脚本会继承当前shell的环境变量
 系统自己执行的脚本(非命令行启动)需要自我定义所需的各环境变量.

 查看当前系统中的变量

- 查看变量
 - set
- 查看环境变量
  - printenv
  - env
  - export

变量追加

通过冒号来追加变量

```bash
 /dev/null 文件是一个软件模拟的设备.  bit bucket 数据黑洞, 可以吞下任何数据.

 id student &> /dev/null 
 echo #? // 判断是否有student用户

name="令狐冲" // 定义变量
echo $name // 输出变量, 变量用$
unset name // 撤销变量

变量追加
Animals=pig
Animals=$Animals:dog
echo $Animals // pig:dog
Animals=$Animals:cat 
echo $Animals // pig:dog:cat

A=2 // 定义变量A
B=3 // 定义并赋值变量B
C=$A+$B
echo $C // 输出 2+3

```

### shell 脚本

- 脚本第一行写 shebang也称作hashbang: 魔数
- 脚本需要增加可执行权限
- 脚本加到环境变量中或者通过路径来选择脚本执行
- 或者通过 bash 脚本路径 来执行, 可以执行不具有执行权限的脚本

#! /bin/bash  // 告诉系统执行命令的shell路径.
#  // #开头的行为注释行(第一行除外)

```bash

#! /bin/bash  

```


