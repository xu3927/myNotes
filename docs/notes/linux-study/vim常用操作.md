# vim 常用操作

## 基本结构

## 常用操作

### 光标移动

方向键 h,j,k,l 分别对应左, 下, 上, 右

数字加上方向键可以快速移动, 如 20h, 向上移动20行

### 退出

:q to quit (short for :quit)
:q! to quit without saving (short for :quit!)
:wq to write and quit
:wq! to write and quit even if file has only read permission (if file does not have write permission: force write)
:x to write and quit (similar to :wq, but only write if there are changes)
:exit to write and exit (same as :x)
:qa to quit all (short for :quitall)
:cq to quit without saving and make Vim return non-zero error (i.e. exit with error)
You can also exit Vim directly from "Command mode" by typing ZZ to save and quit (same as :x) or ZQ to just quit (same as :q!). (Note that case is important here. ZZ and zz do not mean the same thing.)