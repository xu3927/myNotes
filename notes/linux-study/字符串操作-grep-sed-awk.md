[TOC]

# 文本处理命令

包括 grep, egrep, fgrep

## 自带字符串操作

https://tldp.org/LDP/abs/html/string-manipulation.html

### String Length

```sh

stringZ=abcABC123ABCabc

echo ${#stringZ}                 # 15
echo `expr length $stringZ`      # 15
echo `expr "$stringZ" : '.*'`    # 15
```

### 正则匹配到的字符串长度, 从开始匹配

```sh

stringZ=abcABC123ABCabc
#       |------|
#       12345678

echo `expr match "$stringZ" 'abc[A-Z]*.2'`   # 8
echo `expr "$stringZ" : 'abc[A-Z]*.2'`       # 8
```

### 查匹配到的索引

```sh
stringZ=abcABC123ABCabc
#       123456 ...
echo `expr index "$stringZ" C12`             # 6
                                             # C position.

echo `expr index "$stringZ" 1c`              # 3
# 'c' (in #3 position) matches before '1'.
```

### 提取子串

语法: ${string:position:length}


```sh
stringZ=abcABC123ABCabc
#       0123456789.....
#       0-based indexing.

echo ${stringZ:0}                            # abcABC123ABCabc
echo ${stringZ:1}                            # bcABC123ABCabc
echo ${stringZ:7}                            # 23ABCabc

echo ${stringZ:7:3}                          # 23A
                                             # Three characters of substring.

# Is it possible to index from the right end of the string?
    
echo ${stringZ:-4}                           # abcABC123ABCabc
# Defaults to full string, as in ${parameter:-default}.
# However . . .

echo ${stringZ:(-4)}                         # Cabc 
echo ${stringZ: -4}                          # Cabc
# Now, it works.
# Parentheses or added space "escape" the position parameter.

# Thank you, Dan Jacobson, for pointing this out.
```

语法: expr substr $string $position $length

```sh

stringZ=abcABC123ABCabc
#       123456789......
#       1-based indexing.

echo `expr substr $stringZ 1 2`              # ab
echo `expr substr $stringZ 4 3`              # ABC
```

### 删除子串

语法: ${string#substring}  删除最短匹配到的子串
Deletes shortest match of $substring from front of $string.


语法: ${string##substring} 删除匹配到的最长子串
Deletes longest match of $substring from front of $string.

```sh

stringZ=abcABC123ABCabc
#       |----|          shortest
#       |----------|    longest

echo ${stringZ#a*C}      # 123ABCabc
# Strip out shortest match between 'a' and 'C'.

echo ${stringZ##a*C}     # abc
# Strip out longest match between 'a' and 'C'.

# You can parameterize the substrings.

X='a*C'

echo ${stringZ#$X}      # 123ABCabc
echo ${stringZ##$X}     # abc
                        # As above.
```

### 子串替换

语法: ${string/substring/replacement}  
Replace first match of $substring with $replacement. 

语法: ${string//substring/replacement}
Replace all matches of $substring with $replacement.

语法: ${string/#substring/replacement}
If $substring matches front end of $string, substitute $replacement for $substring.

语法: ${string/%substring/replacement}
If $substring matches back end of $string, substitute $replacement for $substring.

```sh
stringZ=abcABC123ABCabc

echo ${stringZ/abc/xyz}       # xyzABC123ABCabc
                              # Replaces first match of 'abc' with 'xyz'.

echo ${stringZ//abc/xyz}      # xyzABC123ABCxyz
                              # Replaces all matches of 'abc' with # 'xyz'.

echo  ---------------
echo "$stringZ"               # abcABC123ABCabc
echo  ---------------
                              # The string itself is not altered!

# Can the match and replacement strings be parameterized?
match=abc
repl=000
echo ${stringZ/$match/$repl}  # 000ABC123ABCabc
#              ^      ^         ^^^
echo ${stringZ//$match/$repl} # 000ABC123ABC000
# Yes!          ^      ^        ^^^         ^^^

echo

# What happens if no $replacement string is supplied?
echo ${stringZ/abc}           # ABC123ABCabc
echo ${stringZ//abc}          # ABC123ABC
# A simple deletion takes place.


stringZ=abcABC123ABCabc

echo ${stringZ/#abc/XYZ}          # XYZABC123ABCabc
                                  # Replaces front-end match of 'abc' with 'XYZ'.

echo ${stringZ/%abc/XYZ}          # abcABC123ABCXYZ
                                  # Replaces back-end match of 'abc' with 'XYZ'.
                                  
```


## grep 命令

grep: global regular expression print. 全局正则匹配并打印结果.

grep [options] [-e Pattern | -f Files] [Files...]

```bash
grep 'root' /etc/passwd
grep --color 'root' /etc/passwd  # 高亮显示匹配到的结果
grep -v 'root' /etc/passwd  #反向匹配
grep -o 'root' /etc/passwd # 只显示匹配到的字符串本身(非整行)
grep -i 'root' /etc/passwd # 不区分大小写
grep -E  # 使用扩展正则表达式
cat /proc/cpuinfo | grep -A 3 'cpu MHz' # after 显示cpuinfo文件中匹配到的行并且显示其后跟着的3行 (共显示4行)
cat /proc/cpuinfo | grep -B 3 'cpu MHz' # before 显示cpuinfo文件中匹配到的行并且显示其前面3行 (共显示4行)
cat /proc/cpuinfo | grep -C 3 'cpu MHz' # context 显示cpuinfo文件中匹配到的行并且显示其前后各3行 (共显示4行)

# -n 显示行号
grep root -n /etc/passwd
```

### grep 查多个文件或目录

```bash
# 递归查询 /etc 目录中的 gpasswd 的行. 
grep gpasswd -r /etc/ 
# 查多个文件
grep root -r /etc/group /etc/passwd
# --exclude 排除指定文件
grep nobody -n -r /etc/* --exclude /etc/passwd
# 包含文件, 在 php, html 后缀的文件中查找
grep "main()" . -r --include *.{php,html}
```

### grep egrep fgrep

grep 文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来，最常用。
egrep (extended grep) egrep是grep的扩展，支持更多的re正则表达式元字符,等同于grep -E。
fgrep (fixed grep) 就是fixed grep 或 fast grep， 它们把所有的字母都看作单词，也就是说，正则表达式中的元字符表示回其自身的字面意义，不再特殊,等同于grep -F,相对于grep和egrep的执行速度最快。

## 正则表达式

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

## sed

参考 https://man.linuxde.net/sed

stream editor for filtering and transforming text 流式编辑或过滤文本

处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），接着用sed命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。文件内容并没有 改变，除非你使用重定向存储输出。Sed主要用来自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序等。

### synopsis 简介

```
sed [OPTION]... {script-only-if-no-other-script} [input-file]...
```

### 替换标记

```
g 表示行内全面替换。  
p 表示打印行。  
w 表示把行写入一个文件。  
x 表示互换模板块中的文本和缓冲区中的文本。  
y 表示把一个字符翻译为另外的字符（但是不用于正则表达式）
\1 子串匹配标记
& 已匹配字符串标记
```

### sed元字符集

```
^ 匹配行开始，如：/^sed/匹配所有以sed开头的行。
$ 匹配行结束，如：/sed$/匹配所有以sed结尾的行。
. 匹配一个非换行符的任意字符，如：/s.d/匹配s后接一个任意字符，最后是d。
* 匹配0个或多个字符，如：/*sed/匹配所有模板是一个或多个空格后紧跟sed的行。
[] 匹配一个指定范围内的字符，如/[ss]ed/匹配sed和Sed。  
[^] 匹配一个不在指定范围内的字符，如：/[^A-RT-Z]ed/匹配不包含A-R和T-Z的一个字母开头，紧跟ed的行。
\(..\) 匹配子串，保存匹配的字符，如s/\(love\)able/\1rs，loveable被替换成lovers。
& 保存搜索字符用来替换其他字符，如s/love/**&**/，love这成**love**。
\< 匹配单词的开始，如:/\<love/匹配包含以love开头的单词的行。
\> 匹配单词的结束，如/love\>/匹配包含以love结尾的单词的行。
x\{m\} 重复字符x，m次，如：/0\{5\}/匹配包含5个0的行。
x\{m,\} 重复字符x，至少m次，如：/0\{5,\}/匹配至少有5个0的行。
x\{m,n\} 重复字符x，至少m次，不多于n次，如：/0\{5,10\}/匹配5~10个0的行。
```

### 定界符

斜杠作为定界符使用, 也可以使用任意字符
```bash
# 使用 | 作为定界符
$ sed -n 's|root/666|pg' /etc/passwd
# 使用 : 作为定界符
$ sed -n 's:root/666:pg' /etc/passwd
```
### example

替换操作：s命令

```bash
# root 替换为 haharoot
$ sed 's/root/haharoot/'  /etc/passwd
# 只显示替换的行, p 命令打印行
$ sed -n  's/root/haharoot/p'  /etc/passwd
haharoot:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/haharoot:/sbin/nologin
# g 替换每一行的所有匹配
$ sed -n 's/root/666/pg' /etc/passwd
666:x:0:0:666:/666:/bin/bash
operator:x:11:0:operator:/666:/sbin/nologin
```

直接编辑文件

```bash
$ cat 1.md
haha
xixi
memeda

# -i 直接编辑当前文件
$ sed -i 's/xixi/12345/' 1.md

$ cat 1.md
haha
12345
memeda
```

删除操作：d命令

```bash
# 删除空白行：
sed '/^$/d' file
# 删除文件的第2行：
sed '2d' file
# 删除文件的第2行到末尾所有行：
sed '2,$d' file
# 删除文件最后一行：
sed '$d' file
# 删除文件中所有开头是test的行：
sed '/^test/'d file
```

正则中获取已匹配到字符

```bash
# 正则中已匹配到字符串标记&
$ echo haha xixi meme | sed 's/\w\+/[&]/g'
[haha] [xixi] [meme]

# 代替分组匹配到的序号 \n, 如下面 \2 标识匹配到的第二个, \1 标识匹配到的第一个
$ echo haha xixi | sed 's/\(\w\+\) \(\w\+\)/\2 \1/'
xixi haha
```

引用

sed表达式可以使用单引号来引用，但是如果表达式内部包含变量字符串，就需要使用双引号。

```bash
test=hello
echo hello WORLD | sed "s/$test/HELLO"
HELLO WORLD
```

## awk 

参考 https://man.linuxde.net/awk

模式扫描和处理的一种编程语言. 用于进行文本和数据处理. 数据可以来自标准输入(stdin)、一个或多个文件，或其它命令的输出。

awk脚本是由模式和操作组成的。

## 语法

```bash
awk [options] 'script' var=value file(s)
awk [options] -f scriptfile var=value file(s)
```

## 模式

模式可以是以下任意一个：
- /正则表达式/：使用通配符的扩展集。
- 关系表达式：使用运算符进行操作，可以是字符串或数字的比较测试。
- 模式匹配表达式：用运算符~（匹配）和~!（不匹配）。
- BEGIN语句块、pattern语句块、END语句块：参见awk的工作原理

## 操作

操作由一个或多个命令、函数、表达式组成，之间由换行符或分号隔开，并位于大括号内，主要部分是：

- 变量或数组赋值
- 输出命令
- 内置函数
- 控制流语句

## awk脚本基本结构

```
awk 'BEGIN{ commands } pattern{ commands } END{ commands }'
```

- 第一步：执行BEGIN{ commands }语句块中的语句；
- 第二步：从文件或标准输入(stdin)读取一行，然后执行pattern{ commands }语句块，它逐行扫描文件，从第一行到最后一行重复这个过程，直到文件全部被读取完毕。
- 第三步：当读至输入流末尾时，执行END{ commands }语句块。

BEGIN语句块在awk开始从输入流中读取行之前被执行，这是一个可选的语句块，比如变量初始化、打印输出表格的表头等语句通常可以写在BEGIN语句块中。

END语句块在awk从输入流中读取完所有的行之后即被执行，比如打印所有行的分析结果这类信息汇总都是在END语句块中完成，它也是一个可选语句块。

pattern语句块中的通用命令是最重要的部分，它也是可选的。如果没有提供pattern语句块，则默认执行{ print }，即打印每一个读取到的行，awk读取的每一行都会执行该语句块。

## example

```bash
$ echo -e "A line \nA line 2" | awk 'BEGIN{ print "Start" } { print } END{ print "End" }'
Start
A line 1
A line 2
End

$ echo | awk '{ var1="1"; var2="2"; var3="3"; print var1,var2,var3; }' 
v1 v2 v3

$ echo | awk '{ var1="v1"; var2="v2"; var3="v3"; print var1"="var2"="var3; }'
v1=v2=v3
```

## awk内置变量（预定义变量）

```
$n 当前记录的第n个字段，比如n为1表示第一个字段，n为2表示第二个字段。 
$0 这个变量包含执行过程中当前行的文本内容。
FILENAME 当前输入文件的名。
FS 字段分隔符（默认是任何空格）。
NF 表示字段数，在执行过程中对应于当前的字段数。
NR 表示记录数，在执行过程中对应于当前的行号。
OFMT 数字的输出格式（默认值是%.6g）。
OFS 输出字段分隔符（默认值是一个空格）。
ORS 输出记录分隔符（默认值是一个换行符）。
RS 记录分隔符（默认是一个换行符）。
```

```bash
# 打印每行的行号
$ echo -e "line1 \n line2 \n line3 \n line4" | awk '{print "Line NO:"NR} END{print "END"}'
Line NO:1
Line NO:2
Line NO:3
Line NO:4
END
```

起始定义变量, 过程中增加, 最后输出行数

```bash
echo -e "line1 \n line2 \n line3 \n line4" | awk 'BEGIN{sum=0} {sum+=1; print "Line NO:"NR} END{print "END"; print "总行数:"sum}'
Line NO:1
Line NO:2
Line NO:3
Line NO:4
END
总行数:4
```

## 将外部变量值传递给awk

借助-v选项，可以将外部值（并非来自stdin）传递给awk：

```bash
VAR=10000
echo | awk -v VARIABLE=$VAR '{ print VARIABLE }'
```

另一种传递外部变量方法：

```bash
var1="aaa"
var2="bbb"
echo | awk '{ print v1,v2 }' v1=$var1 v2=$var2
```

当输入来自于文件时使用：

```bash
awk '{ print v1,v2 }' v1=$var1 v2=$var2 filename
```

以上方法中，变量之间用空格分隔作为awk的命令行参数跟随在BEGIN、{}和END语句块之后。

## awk运算与判断

awk支持多种运算, awk还提供了一系列内置的运算函数（如log、sqr、cos、sin等）和一些用于对字符串进行操作（运算）的函数（如length、substr等等）。这些函数的引用大大的提高了awk的运算功能。作为对条件转移指令的一部分，关系判断是每种程序设计语言都具备的功能，awk也不例外，awk中允许进行多种测试，作为样式匹配，还提供了模式匹配表达式~（匹配）和~!（不匹配）。作为对测试的一种扩充，awk也支持用逻辑运算符。

### 支持的算术运算符

| 运算符 | 描述 |
| -- | -- |
| + - | 加，减 |
| * / & | 乘，除与求余 |
| + - ! | 一元加，减和逻辑非 |
| ^ *** | 求幂 |
| ++ -- | 增加或减少，作为前缀或后缀 |

注意：所有用作算术运算符进行操作，操作数自动转为数值，所有非数值都变为0

```bash
$ awk 'BEGIN{a=3;print a++,++a;}'
0 2
```

### 赋值运算符

|运算符|描述|
| -- | -- |
|= += -= *= /= %= ^= **=|赋值语句|

例：

a+=5; 等价于：a=a+5; 其它同类

### 逻辑运算符

|运算符 | 描述|
| -- | -- |
| \|\| | 逻辑或|
| && | 逻辑与|

```bash
$ awk 'BEGIN{a=1;b=2;print (a>5 && b<=2),(a>5 || b<=2);}'
0 1
```

### 正则运算符

|运算符 | 描述|
| -- | -- |
|~ ~! | 匹配正则表达式和不匹配正则表达式|

```bash
$ awk 'BEGIN{a="100testa";if(a ~ /^100*/){print "ok";}}'
ok
```

### 关系运算符

|运算符 | 描述|
| -- | -- |
|< <= > >= != == | 关系运算符|

```bash
$ awk 'BEGIN{a=11;if(a >= 9){print "ok";}}'
ok
```

注意：> < 可以作为字符串比较，也可以用作数值比较，关键看操作数如果是字符串就会转换为字符串比较。两个都为数字才转为数值比较。字符串比较：按照ASCII码顺序比较。

### 其它运算符

|运算符 | 描述|
| -- | -- |
|$ | 字段引用|
|空格 | 字符串连接符|
|?: | C条件表达式|
|in | 数组中是否存在某键值|

```bash
$ awk 'BEGIN{a="b";print a=="b"?"ok":"err";}'
ok
$ awk 'BEGIN{a="b";arr[0]="b";arr[1]="c";print (a in arr);}'
0
$ awk 'BEGIN{a="b";arr[0]="b";arr["b"]="c";print (a in arr);}'
1
```

### awk高级输入输出

关键字

next 读取下一条记录

```bash
$ cat text.txt
a
b
c
d
e

$ awk 'NR%2==1{next}{print NR,$0;}' text.txt
2 b
4 d
```

### 流程控制语句

条件判断语句

```bash
# if(表达式)
#   {语句1}
# else if(表达式)
#   {语句2}
# else
#   {语句3}

# 示例

awk 'BEGIN{
test=100;
if(test>90){
  print "very good";
  }
  else if(test>60){
    print "good";
  }
  else{
    print "no pass";
  }
}'

very good
```

循环语句

```bash
# while语句
# while(表达式)
#   {语句}
# 示例：

awk 'BEGIN{
test=100;
total=0;
while(i<=test){
  total+=i;
  i++;
}
print total;
}'
5050
```

for循环 for循环有两种格式：

格式1：

```bash
# for(变量 in 数组)
#   {语句}

# 示例：

awk 'BEGIN{
for(k in ENVIRON){
  print k"="ENVIRON[k];
}

}'
TERM=linux
G_BROKEN_FILENAMES=1
SHLVL=1
pwd=/root/text
...
logname=root
HOME=/root
SSH_CLIENT=192.168.1.21 53087 22
```

注：ENVIRON是awk常量，是子典型数组。

格式2：

```bash
# for(变量;条件;表达式)
#   {语句}

# 示例：

awk 'BEGIN{
total=0;
for(i=0;i<=100;i++){
  total+=i;
}
print total;
}'
5050
```

do循环

```bash
# do
# {语句} while(条件)

# 例子：

awk 'BEGIN{ 
total=0;
i=0;
do {total+=i;i++;} while(i<=100)
  print total;
}'
5050
```

### 其他语句

- break 当 break 语句用于 while 或 for 语句时，导致退出程序循环。
- continue 当 continue 语句用于 while 或 for 语句时，使程序循环移动到下一个迭代。
- next 能能够导致读入下一个输入行，并返回到脚本的顶部。这可以避免对当前输入行执行其他的操作过程。
- exit 语句使主输入循环退出并将控制转移到END,如果END存在的话。如果没有定义END规则，或在END中应用exit语句，则终止脚本的执行。

## 数组

awk 中的数组不必提前声明，也不必声明大小。数组元素用0或空字符串来初始化，这根据上下文而定。

```bash
# 数字做数组索引（下标）：
Array[1]="sun"
Array[2]="kai"

# 字符串做数组索引（下标）：

Array["first"]="www"
Array["last"]="name"
Array["birth"]="1987"
```


## expr 简单处理文本

expr 用于计算表达式的值
作用:
- 对于integers做四则运算
- 计算字符串的拼接, 匹配子串等

1. 查找子串位置

expr index STRING CHARS

```sh
$ str='abcd@12345'
$ expr index $str cd
>> 3 
```

2. 截取子串

expr substr STRING POS LENGTH

```sh
$ expr substr $str 3 5
>> cd@12
```

3. 获取字符串长度

expr length STRING

```sh
$ expr length $str
>> 10
```

4. 正则匹配

STRING : REGEXP

```sh
$ expr $str : '\([a-z]*\)'
>> abcd
```

### 数值运算

```
ARG1 | ARG2
      ARG1 if it is neither null nor 0, otherwise ARG2

ARG1 & ARG2
      ARG1 if neither argument is null or 0, otherwise 0

ARG1 < ARG2
      ARG1 is less than ARG2

ARG1 <= ARG2
      ARG1 is less than or equal to ARG2

ARG1 = ARG2
      ARG1 is equal to ARG2

ARG1 != ARG2
      ARG1 is unequal to ARG2

ARG1 >= ARG2
      ARG1 is greater than or equal to ARG2

ARG1 > ARG2
      ARG1 is greater than ARG2

ARG1 + ARG2
      arithmetic sum of ARG1 and ARG2

ARG1 - ARG2
      arithmetic difference of ARG1 and ARG2

ARG1 * ARG2
      arithmetic product of ARG1 and ARG2

ARG1 / ARG2
      arithmetic quotient of ARG1 divided by ARG2

ARG1 % ARG2
      arithmetic remainder of ARG1 divided by ARG2

```



```sh
~]$ expr 5 ">" 2
1
~]$ expr 5 "<" 2
0
~]$ expr 5 ">=" 2
1
~]$ expr 5 + 2
7
~]$ expr 5 - 2
3
~]$ expr 5 \* 2
10
~]$ expr 5 % 2
1
~]$ expr 5 / 2
2
```
