[TOC]

# Linux Shell编程

教程: 
- 文档: https://riptutorial.com/bash/topic/368/aliasing
- https://ryanstutorials.net/bash-scripting-tutorial/bash-script.php

## 正则表达式

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

## 变量

### 变量定义与取消

变量定义 set VARNAME
撤销变量 unset VARNAME (变量名不要加$)

### 变量类型

- 环境变量: 作用域为当前shell进程及其子进程. export VARNAME=VALUE
- 本地变量(局部变量), 只对当前脚本有效.
 - VARNAME=VALUE 本地变量作用域为当前shell整个bash进程
 - local VARNAME=VALUE 局部变量作用域为当前代码段
- 位置变量 用来引用脚本的参数 $1, $2...
- 特殊变量 用来保存某些特殊数据, 如 $? 保存上一个命令执行状态返回值, 执行一个命令后输出 echo $? 可以输出该命令的执行状态码(0, 正确执行, 1-255 错误执行)

### 变量命名规则

变量只能包含字母, 数字, 下划线, 不能以数字开头
不应该与系统中已有的环境变量重名, 否则会覆盖环境变量的值.


### 特殊变量
有以下几种

```
echo $0    # 当前脚本的文件名（间接运行时还包括绝对路径）。
echo $n    # 传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是 $1 。
echo $#    # 传递给脚本或函数的参数个数。
echo $*    # 传递给脚本或函数的所有参数。
echo $@    # 传递给脚本或函数的所有参数。被双引号 (" ") 包含时，与 $* 不同，下面将会讲到。
echo $?    # 上个命令的退出状态，或函数的返回值。 0, 正确执行, 1-255 错误执行
echo $$    # 当前 Shell 进程 ID。对于 Shell 脚本，就是这些脚本所在的进程 ID。
echo $_    # 上一个命令的最后一个参数
echo $!    # 后台运行的最后一个进程的 ID 号
```
### 变量使用

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

### 变量追加

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
## shell 脚本结构
- 脚本第一行写 shebang 也称作 hashbang: 魔数
- 脚本需要增加可执行权限
- 脚本加到环境变量中或者通过路径来选择脚本执行
- 或者通过 bash 脚本路径 来执行, 可以执行不具有执行权限的脚本

```
#!/bin/bash  // 告诉系统执行命令的shell路径.
#  // #开头的行为注释行(第一行除外)
```

```bash
#! /bin/bash
Lines=`wc /etc/inittab` // wc命令可以获取文件的总行数, 内容行数, 文件大小信息
echo "文件信息为"$Lines
FinalLines=`echo $Lines | cut -d' ' -f1`
echo "文件行数为"$FinalLines

[ $FinalLines -gt 100 ] && echo "这是一个大文件" || echo "这是一个小文件"  //判断行数大于100则输出是大文件提示, 否则输出小文件提示

```

## bash条件判断

### if语句结构

```sh
#!/bin/bash
# Basic if statement, 中括号是test命令的引用
if [ $1 -gt 100 ]
then
    echo "大于100"
    pwd
else
    echo "小于100"
fi
```

单分支if语句
```
if 判断条件; then
   statement1
   statement2
   ....
fi
```
双分支if语句

```
if 判断条件; then
   statement1
   statement2
   ...
else
	statement3
	statement4
	...
fi
```
嵌套if语句

```
if expression1
then
   statement1
   statement2
   ...
   
    if expression2
    then
        statement3
    fi
fi
```

```bash
user=xzc
if id $user; then
echo "用户存在"
else 
echo "用户不存在"
fi
```

### 条件测试

if 的中括号中的语句, 与 test 命令相同. 可以通过 man test 查看 test 帮助.

有三种

- 整数比较
- 字符串比较
- 文件比较

**条件测试表达式:** 

```
- [ expression ]
- [[ expression ]]
- test expression # 若为 true 则返回状态码 0, false 返回 1
```

单中括号与双中括号区别

单中括号 `[ ]`, 同 linux系统 内置的 test 命令
1. 两个括号左右都要有空格
2. 括号内操作符与变量之间要有空格 `[ $a = $b ]`
3. 字符串做大小比较需要转义 `[ "abc" \> "abd" ]`, 否则 > 会作为重定向符号
4. `[ ]` 中可以使用 -a -o 做逻辑运算
5. &&  ||  作为命令的连接符. 
6. `( )` 也需要转义, 否则会生成子shell. 
7. 字符串比较时, 右侧不会作为进行模式转换. 仅作为一个字符串 

双中括号 `[[ ]]` 是bash中的符号, 其他shell中可能无法识别, 内部语句可以使用一些特殊的语法
1. 括号左右要有空格分割
2. 字符串做大小比较不需要转义 `[[ "abc" > "abd" ]]`
3. `[[ ]]` 内部可以使用 &&  || 进行逻辑运算
4. 字符串可以进行模式匹配, 如 `*`和`?`通配符和 glob 语法

```bash
$ a="Documents"
$ [[ $a = D* ]] && echo match
match
$ a=hat
$ [[ $a = ?at ]] && echo match
match
$ [[ $a = [chrp]at ]] && echo match
match
```

5. 使用正则表达式

```bash
$ a=cat
$ b="the cat in the hat"
$ [[ $a =~ ^.at ]] && echo match
match
$ [[ $b =~ ^.at ]] && echo match
```

### 整数比较

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

### 字符串比较

```
# test 非空字符串值为true
string        True if string is not the null string.
# 判断2个字符串是否完全相同
s1 = s2       True if the strings s1 and s2 are identical.
s1 != s2      True if the strings s1 and s2 are not identical.
# 字符比较
s1 < s2       True if string s1 comes before s2 based on the binary value of their characters.
s1 > s2       True if string s1 comes after s2 based on the binary value of their characters.
# 字符串长度大于0
-n string     True if the length of string is nonzero.
# 字符串长度为0
-z string     True if the length of string is zero.
```

### 文件比较

```
# 文件存在为块特殊文件, 提供对固定大小的块传输的设备（例如磁盘）的访问权限
-b file       True if file exists and is a block special file.
# 文件存在且为字符文件, 提供对单个字符为传输单位的设备（例如终端）的访问权限
-c file       True if file exists and is a character special file.
# 文件是否是目录
-d file       True if file exists and is a directory.
# 文件存在, 忽略文件类型
-e file       True if file exists (regardless of type).
# 文件存在且为普通文件
-f file       True if file exists and is a regular file.
# 文件存在且检查gid[4]是否被置位. 该权限只对目录有效。目录被设置该位后，任何用户在此目录下创建的文件都具有和该目录所属的组相同的组
-g file       True if file exists and its set group ID flag is set.
# 文件是软链, 老的版本, 现在使用 -L 参数
-h file       True if file exists and is a symbolic link.  This operator is retained for compatibility with previous versions of this program.  Do not rely on its existence; use -L instead.
# 文件具有 sticky bit 权限, 即防删除位是否被置位
-k file       True if file exists and its sticky bit is set.
# 检查文件是否为FIFO特殊文件或命名管道. 命名管道(named pipe)是一种有名字的，建立在pipe server和一个(或多个)pipe client之间的单向或双向的通信管道。一个命名管道的所有实例都会共享一个相同的pipe name，但是每个实例都有他自己的缓冲区和句柄(handle)，并且为客户端/服务器的通讯提供一个单独的导管
-p file       True if file is a named pipe (FIFO).
# 文件是否刻度
-r file       True if file exists and is readable.
# 文件尺寸是否大于0
-s file       True if file exists and has a size greater than zero.
# 检查文件描述符是否打开
-t file_descriptor
        True if the file whose file descriptor number is file_descriptor is open and is associated with a terminal.
# 文件设置了suid
-u file       True if file exists and its set user ID flag is set.
# 文件可写
-w file       True if file exists and is writable.  True indicates only that the write flag is on.  The file is not writable on a read-only file system even if this test indicates true.
# 文件可执行
-x file       True if file exists and is executable.  True indicates only that the execute flag is on.  If file is a directory, true indicates that file can be searched.
# 文件是软链
-L file       True if file exists and is a symbolic link.
# 检查文件是否被当前进程的user ID拥有
-O file       True if file exists and its owner matches the effective user id of this process.
# 检查是否有相同的组ID
-G file       True if file exists and its group matches the effective group id of this process.
# 检查文件是否为socket文件
-S file       True if file exists and is a socket.
```

### 布尔比较

逻辑关系操作符, -a(逻辑与),  -o(或), !(非). 与比或的优先级高

- ! expression:  True if expression is false.
- expression1 -a expression2: True if both expression1 and expression2 are true.
- expression1 -o expression2: True if either expression1 or expression2 are true.
- ( expression )  True if expression is true.

```bash
test True  # 0
echo $? // 返回0
test False  # 1
# 非
test ! False # 0
# 逻辑与
test 4 -gt 3 -a abc = abd # 1
[ 10 -lt 20 -a 10 -gt 100 ] # 1
# 逻辑或
test 4 -gt 3 -o abc = abd # 0
[ 10 -lt 20 -o 10 -gt 100 ] # 0
```

### 布尔操作符

- && 与
- || 或
- ! 非

```bash
# 与操作
if [ $1 -gt 100 ] && [ $1 -lt 200 ]; then
	echo 大于100 小于200
fi

# 或操作
if [ $USER == 'user00' ] || [ $USER == 'user01' ]; then
	echo 有权限
fi
```


## 逻辑语句

逻辑关系有, &&(逻辑与),  ||(或), !(非).

使用短路语法

```bash
id xzc &> /dev/null && echo "欢迎, 徐超" // id xzc 语句的运行结果, 如果为true 即用户xzc存在, 则输出 "欢迎, ..." 语句
```

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

### 不借助库解析参数

```bash
#!/bin/bash

# 比如要解析 -e --extension, -s --searchpath, -l --lib 几个参数

while [[ $# -gt 0 ]]
do
key="$1"
echo "key: $key"
case $key in
    -e|--extension) # 要解析的参数列表
    EXTENSION="$2" # $2 为该参数传递的值
    shift # 移除该参数
    shift # 移除该参数的值
    ;;
    -s|--searchpath)
    SEARCHPATH="$2"
    shift # past argument
    shift # past value
    ;;
    -l|--lib)
    LIBPATH="$2"
    shift # past argument
    shift # past value
    ;;
    *)    # unknown option
    POSITIONAL+=("$1") # 存储其他未处理的参数 save it in an array for later
    shift # past argument
    ;;
esac
done

set -- "${POSITIONAL[@]}" # restore positional parameters

# 解析得到的参数
echo "FILE EXTENSION  = ${EXTENSION}"
echo "SEARCH PATH     = ${SEARCHPATH}"
echo "LIBRARY PATH    = ${LIBPATH}"
```

### 使用 getopts 获取参数

通过$n获取参数

```bash
echo "参数1 $1" 
echo "参数2 $2" 
echo "参数3 $3" 
```

通过getopts获取参数
语法  getopts [v1:v2:v3v4] VARIABLE
仅支持以-开头的单字符的参数. 
首位的 : 表示「不打印错误信息」 后面的冒号表示该参数有值 如 mysql -h <host> -P <port>
获取的参数会存到最后指定的变量VARIABLE中


```bash
# a:b:c 代表获取的参数, 后面的冒号表示该参数有值 如 mysql -h <host> -P <port>
while getopts a:b:c:d: ARGS  
do  
case $ARGS in   
    a)  
        echo "发现 -a 选项"  
        ;;  
    b)  
        echo "发现 -b 选项"  
        echo "-b 选项的值是：$OPTARG"  
        ;;  
    c)  
        echo "发现 -c 选项"  
        echo "-c 选项的值是：$OPTARG"  
        ;;  
    d)  
        echo "发现 -d 参数 $OPTARG"  
        ;;  
    *)  
        echo "未知选项：$ARGS"
        ;;
esac
done
```

