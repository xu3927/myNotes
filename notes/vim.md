[TOC]

# VIM

参考资料:

http://www.cnblogs.com/jiqingwu/archive/2012/06/14/vim_notes.html#id60
官方文档: [http://vimdoc.sourceforge.net/htmldoc/usr_toc.html](http://vimdoc.sourceforge.net/htmldoc/usr_toc.html)
中文文档 [http://vimcdoc.sourceforge.net/doc/help.html](http://vimcdoc.sourceforge.net/doc/help.html)
[菜鸟教程](http://www.runoob.com/linux/linux-vim.html)

## 模式

有四种模式

- normal(普通模式)insert(插入模式),command(命令行模式),visual(可视化模式)

## 查看帮助

```
# 查看帮助
:help <命令>
# 在一个新的tab查看帮助
:tab help
# 退出帮助
:q

```

## Set 设置

显示set所有的选项

```
set all
```

查看当前某个设置的值, 在结尾加 ? 可以显示当前的值
```
:set listchars?
```

### set list 显示隐藏字符

Vim是不会显示space,tabs,newlines,trailing space,wrapped lines等不可见字符的。
显示隐藏字符, 制表符显示为 '^I', 行尾符显示为 '$', 空格显示为一个空白字符
```
:set list
```
![](images/chatu/2018-08-14-14-06-17.png)

重新隐藏不可见字符
```
:set nolist 
```
切换不可见字符的显示隐藏
```
:set list!
```

设置显示的字符

```
:set listchars
# 查看替换符号的帮助, 缩写为 lcs
:help 'listchars'
# 用.显示空格, ^I显示tab
```

其中，特殊符号是在插入状态下，点击快捷键Ctrl-k，然后键入编码来输入的。比如，中点是由.M输入；左书名号是由<<输入，右书名号是由>>输入。

查看可以输入的特殊字符

```
:digraphs
```

## 搜索替换

### 搜索

搜索在普通模式下以 (/) 开头输入要搜索的内容, 搜索换行符用 \n
如:
```
/foo\nbar
# 可以匹配到
foo
bar
```

### 替换

替换使用s命令

```
# 把所在行的haha替换为xixi, 只替换找到的第一个, 斜杠表示多个命令的分割
:s/haha/xixi/ 
# 结尾加g表示该行所有, 把所在行的haha替换为xixi, 替换该行所有的
:s/haha/xixi/g
# s前面可以加数字表示第几行, 把第三行的haha替换为xixi, 替换该行所有的
:3s/haha/xixi/g
# %表示所有行, 把全文的haha替换为xixi
:%s/haha/xixi/g
# 把全文所有的tab替换为空格
:%s/\t/ /g

```
## 移动

### 光标移动

![](2018-10-12-18-56-14.png)





