/# Linux 管理及IO重定向

### 1. 计算机结构

计算机包括5️部分: 运算器, 控制器, 存储器(RAM), 输入设备, 输出设备

运算器 + 控制器 = CPU

程序包括指令和数据

- 控制器: 读取指令, 并根据指令调用运算及进行运算, 或把运算结果输出到存储器

- 运算器: 根据控制器的指令做运算操作

- 存储器: 存储指令, 数据

- 地址总线: 内存寻址

- 数据总线: 传输数据

- 控制总线: 传输指令

- 寄存器: CPU中的临时存储空间, 在运算时临时存储所需的数据, 如中转数据

#### 输出输入设备 I/O 设备

- INPUT 设备: 键盘, 鼠标...

- OUTPUT 设备: 显示器, 硬盘...

**STDIN, STDOUT**

系统需要设定默认输入, 输出设备. 

默认输入输出设备又称作标准输入设备(STDIN), 标准输出设备(STDOUT)

错误信息通常走的不同的数据流, 需要特殊处理, 不过通常与STDOUT输出到同一设备(显示器)

- STDIN: 标准输入设备, 描述符 0
- STDOUT: 标准输出设备, 描述符 1
- STDERR: 标准错误输出, 描述符 2

### IO 重定向

改变数据的来源或输出, 即为IO重定向.

- Linux中用 ">" 来重定向输出, 会覆盖输出
- 用 ">>" 来追加输出
- 用 "<" 来重定向输入
- "<<" here document 用来设置文档的结束符
- "2>" 重定向错误输出
- "2>>" 重定向错误输出为追加输出
- "&>" 重定向标准输出或错误输出

```bash

ls /var // 在shell中输出 var下的文件
ls /var > var.out // 把 /var 中的文件目录覆盖输出到 var.out 文件中
ls /tpm >> var.out // 把 /tmp 中的文件目录追加输出到 var.out 文件中
set -C // 禁止对已经存在的文件进行覆盖重定向
set +C // 关闭上述功能
ls /var >| /tmp/var.out // 对已存在的文件强制进行覆盖重定向
ls /var2 > var.out // 会提示没有该文件, 错误输出没有重定向到var.out文件中.
ls /var2 2> var.out // 会把输出的错误输出到var.out文件中
ls /var# > var.out 2> var.out // 重定向标准输出到var.out , 重定向错误输出到var.out
cat f1.txt // 在shell中输出f1.txt中的内容, 对于cat命令而言默认就是打开输入文件, 并不需要用"<"再重定向输入设备
cat f1.txt > out.txt // 读取f1.txt 输出到 out.txt
cat << EOF // 指定文档结束符为"EOF"
tr 'a-z' 'A-Z' // 把小写字母转为大写字母. tr: translate characters 用来转换字符, 该命令通常需要指定输入设备
tr 'a-z' 'A-Z' < f1.txt > f2.txt // 指定输入设备为f1.txt, 并把读取的字符转为大写输出到f2.txt中

```
### 管道

管道符号用于把上一个命令的输出作为下一个命令的输入

```bash

echo 'hello, world' | tr 'a-z' 'A-Z' // 输出 HELLO, WORLD.  
cut -d: -f1 /etc/passwd | sort // 截取passwd文件中的以 ":" 分割的第一域字符, 然后排序
cut -d: -f1 /etc/passwd | sort | tr 'a-z' 'A-Z' // 对排序后的字符, 再转小写为大写
echo 'I am wukong' | tee /tmp/tee.out // 输出字符串, => tee命令将输入的字符输出到STDOUT, 并输出到文件tee.out中. 
wc -l /etc/passwd | cut -d' ' -f1 // wc -l 命令输出passwd文件的行数, => 以空格分割输出第一个域的字符
ls -l /var | wc -l // 按行输出 var目录下的文件列表 => 输出行数, 即得到var文件夹下的文件数量

```

**一些题目**

```bash

// 输出用户所用的所有的shell类型
cat /etc/passwd | cut -d: -f7 | sort -u // sort - u 相同的字段只显示一次


```

##### tee 命令

tee - read from standard input and write to standard output and files

#### wc 命令

wc - print newline, word, and byte counts for each file

输出文件的 行数, 字符数, 字节数等信息




