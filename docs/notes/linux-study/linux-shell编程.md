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
Lines=`wc /etc/inittab` // wc命令可以获取文件的总行数, 内容行数, 文件大小信息
echo "文件信息为"$Lines
FinalLines=`echo $Lines | cut -d' ' -f1`
echo "文件行数为"$FinalLines

[ $FinalLines -gt 100 ] && echo "这是一个大文件" || echo "这是一个小文件"  //判断行数大于100则输出是大文件提示, 否则输出小文件提示

```

### bash条件判断

#### 条件测试

有三种

- 整数比较
- 字符串比较
- 文件比较

**条件测试表达式:** 

- [ expression ]
- [[ expression ]]
- test expression

##### 整数比较

通过二目运算符来实现条件判断, 通过 $? 来获取判断的结果

- 相等判断: -eq 来判断是否相等, 如 [ $A -eq $B ] 
- 不等判断: -nq 判断不相等
- 大于判断: -gt 
- 小于判断: -lt
- 大于等于: -ge
- 小于等于: -le

```bash

a=5
b=5
[[ $a -eq $b ]] // 中括号与语句之间需要有空格
echo $? // 得到 0 (通常0为成功, 1-255位失败代码)
[[ $a -lt $b ]]
echo $? // 输出 1, 表示false

``` 

#### 逻辑语句

逻辑关系有, &&(逻辑与), ||(或), !(非)

使用短路语法

```bash

id xzc &> /dev/null && echo "欢迎, 徐志超" // id xzc 语句的运行结果, 如果为true 即用户xzc存在, 则输出 "欢迎, ..." 语句

```

```bash

#! /bin/bash
wc /etc/

```

#### 条件判断

// 单分支if语句

if 判断调节; then
   statement1
   statement2
   ....
fi

// 双分支if有

if 判断调节; then
   statement1
   statement2
   ...
else
	statement3
	statement4
	...
fi

```bash

user=xzc
if id $user; then
echo "用户存在"
else 
echo "用户不存在"
fi

```


#### 变量命名规则

变量只能包含字母, 数字, 下划线, 不能以数字开头

不应该与系统中已有的环境变量重名, 否则会覆盖环境变量的值.

#### Linux命令中的引号

> 反引号: 用于引用命令的输出结果. 反引号中包裹一条命令, 并且会执行该命令, 并引用该命令的输出结果
> 单引号: 强引用, 会忽略引号中所有的特殊字符.
> 双引号: 弱引用, 会忽略大部分特殊字符, $, /, ` 除外.

```bash

name=令狐冲
echo 我是 $name // 我是 令狐冲
echo '我是 $name' // 我是 $name
echo "我是 $name" // 我是 令狐冲
echo `date` // 2017年 3月23日 星期四 01时53分48秒 CST
echo date // date

```

