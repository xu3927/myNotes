[TOC]

# expect

[https://linux.die.net/man/1/expect](https://linux.die.net/man/1/expect)

或者执行 man expect 可以查看文档

programmed dialogue with interactive programs

expect 是一个可以根据设定好的脚本自动和其他交互式的程序完成对话的程序

Expectk 是 expect 和 tk 的结合, 

## 可以做的事情

Cause your computer to dial you back, so that you can login without paying for the call.

1. Start a game (e.g., rogue) and if the optimal configuration doesn't appear, restart it (again and again) until it does, then hand over control
  to you.

2. Run fsck, and in response to its questions, answer "yes", "no" or give control back to you, based on predetermined criteria.

3. Connect to another network or BBS (e.g., MCI Mail, CompuServe) and automatically retrieve your mail so that it appears as if it was originally
  sent to your local system.

4. Carry environment variables, current directory, or any kind of information across rlogin, telnet, tip, su, chgrp, etc.

## Shebang

expect脚本, 第一行添加 Shebang, 为 expect 的绝对路径

```
 #!/usr/local/bin/expect
```

## 命令

expect 使用 Tcl(tool command language ) 语言, tcl 提供了 flow(if, for, break) 控制, 表达式计算以及其他特性

### 主要方法

- spawn 启动一个脚本或程序
- expect 等待程序的输出
- send 向程序发送一个回应
- interact 允许用户以interact的方式操作


###






