# sublime 快捷键设置

### 1. 设置菜单

打开 "首选项 --> 按键绑定-默认" 是sublime自带的快捷键, 当然也可以对其进行更改. 
打开 "首选项 --> 按键绑定-用户" 是可以自定义快捷键.

### 2. 设置方法

可以先打开"首选项 --> 按键绑定-默认" 看下程序设置快捷键的规则.

sublime 的 keymaps 是一个数组保存了所有的快捷键.

类似下面这样:

```
[
	{ "keys": ["super+shift+n"], "command": "new_window" },
	{ "keys": ["super+shift+w"], "command": "close_window" },
	{ "keys": ["super+o"], "command": "prompt_open" },
	{ "keys": ["super+shift+t"], "command": "reopen_last_file" },
	{ "keys": ["super+alt+up"], "command": "switch_file", "args": {"extensions": ["cpp", "cxx", "cc", "c", "hpp", "hxx", "hh", "h", "ipp", "inl", "m", "mm"]} },
	{ "keys": ["super+n"], "command": "new_file" },
	{ "keys": ["super+s"], "command": "save" },
	{ "keys": ["super+shift+s"], "command": "prompt_save_as" },
	{ "keys": ["super+alt+s"], "command": "save_all" },
	{ "keys": ["super+w"], "command": "close" },

	...

]
```

### 3. 字段含义

以下面的快捷键为例

```
{ "keys": ["backspace"], "command": "run_macro_file", "args": {"file": "res://Packages/Default/Delete Left Right.sublime-macro"}, "context":
		[
			{ "key": "setting.auto_match_enabled", "operator": "equal", "operand": true },
			{ "key": "selection_empty", "operator": "equal", "operand": true, "match_all": true },
			{ "key": "preceding_text", "operator": "regex_contains", "operand": "\"$", "match_all": true },
			{ "key": "following_text", "operator": "regex_contains", "operand": "^\"", "match_all": true },
			{ "key": "selector", "operator": "not_equal", "operand": "punctuation.definition.string.begin", "match_all": true },
			{ "key": "eol_selector", "operator": "not_equal", "operand": "string.quoted.double - punctuation.definition.string.end", "match_all": true },
		]
	},
```

#### 3.1 keys

绑定的键.

可用的按键名如下:

```
up
down
right
left
insert
home
end
pageup
pagedown
backspace
delete
tab
enter
pause
escape
space
keypad0
keypad1
keypad2
keypad3
keypad4
keypad5
keypad6
keypad7
keypad8
keypad9
keypad_period
keypad_divide
keypad_multiply
keypad_minus
keypad_plus
keypad_enter
clear
f1
f2
f3
f4
f5
f6
f7
f8
f9
f10
f11
f12
f13
f14
f15
f16
f17
f18
f19
f20
sysreq
break
context_menu
browser_back
browser_forward
browser_refresh
browser_stop
browser_search
browser_favorites
browser_home

指令键:

shift
ctrl
alt
super (这个就是win键, mac上是commond键)
```
#### 3.2 command

要执行的命令名称

以下网址可以查看部分命令名称

[http://sublime-text-unofficial-documentation.readthedocs.io/en/latest/reference/commands.html#cmd-list](http://sublime-text-unofficial-documentation.readthedocs.io/en/latest/reference/commands.html#cmd-list)

也可以打开控制台 (ctrl + `)

输入命令

```
sublime.log_commands(True)
```

这样每执行一个操作都可以打印出来当前所执行的命令

#### 3.3 args

给要执行的命令传入的参数.

每个命令传入的参数都不一样.

#### 3.4 context

一个数组

对快捷键具体操作的补充命令. 触发快捷键后根据不同的context内容匹配到正确的规则执行.

### 4. context 的各字段说明

#### 4.1 key

匹配到的规则

#### 4.2 operator

对匹配到的key的具体匹配方式, 是完全匹配(equal), 还是正则匹配(regex_contains)

#### 4.3 operand

匹配值

```
operator: equal, operand 值 true/false. 
operator: regex_contains, operand 值是正则表达式(直接写正则即可,不需要再加//)
```

#### 4.4 match_all

是否匹配所有选择到的字符, 默认值false


#### 4.5 Context Operators 可选的值

```
equal, not_equal
Test for equality.
regex_match, not_regex_match
Match against a regular expression.
regex_contains, not_regex_contains
Match against a regular expression (containment).
```

#### 4.6 Context Operands 可选的值

```
auto_complete_visible
Returns true if the autocomplete list is visible.
has_next_field
Returns true if there’s a next snippet field available.
has_prev_field
Returns true if there’s a previous snippet field available.
num_selections
Returns the number of selections.
overlay_visible
Returns true if any overlay is visible.
panel_visible
Returns true if any panel is visible.
following_text
Restricts the test to the text following the caret.
preceding_text
Restricts the test to the text preceding the caret.
selection_empty
Returns true if the selection is an empty region.
setting.x
Returns the value of the x setting. x can be any string.
text
Restricts the test to the line the caret is in.
selector
Returns the current scope.
```

