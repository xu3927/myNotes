# BNF

参考:
- [wiki](https://zh.wikipedia.org/wiki/%E5%B7%B4%E7%A7%91%E6%96%AF%E8%8C%83%E5%BC%8F)
- [百科](https://baike.baidu.com/item/BNF/7328753?fr=aladdin)

Backus–Naur form 又叫巴科斯范式

是用一种形式化符号语言来描述给定语言的语法

## 规则

在双引号中的字("word")代表着这些字符本身。而double_quote用来代表双引号。
在双引号外的字（有可能有下划线）代表着语法部分。
尖括号( < > )内包含的为必选项。
方括号( [ ] )内包含的为可选项。
大括号( { } )内包含的为可重复0至无数次的项。
竖线( | )表示在其左右两边任选一项，相当于"OR"的意思。
::= 是“被定义为”的意思。

## 巴科斯范式示例

这是用BNF来定义的Java语言中的For语句的实例：
```
FOR_STATEMENT ::=
"for" "(" ( (variable_declaration ";") |
( expression ";" ) | ";" )
[ expression ] ";"
[ expression ]
")" statement
```
这是Oracle packages的BNF定义：
```
package_body ::= "package" package_name "is"
package_obj_body
[ "begin" seq_of_statements ]
"end" [ package_name ] ";"
package_obj_body ::= variable_declaration
| subtype_declaration
| cursor_declaration
| cursor_body
| exception_declaration
| record_declaration
| plsql_table_declaration
| procedure_body
| function_body
procedure_body ::= "procedure" procedure_name
[ "(" argument { "," argument } ")" ]
"return" return_type
"is"
[ "declare" declare_spec ";" { declare_spec ";" } ]
"begin"
seq_of_statements
[ "exception" exception_handler ]
"end" [ procedure_name ] ";"
statement ::= comment
| assignment_statement
| exit_statement
| goto_statement
| if_statement
| loop_statement
| null_statement
| raise_statement
| return_statement
| sql_statement
| plsql_block
```

这是用BNF来定义的BNF本身的例子：
```
syntax ::=
rule ::= identifier "::=" expression
expression ::= term { "|" term }
term ::= factor
factor ::= identifier |
quoted_symbol |
"(" expression ")" |
"[" expression "]" |
"{" expression "}"
identifier ::= letter { letter | digit }
quoted_symbol ::= """ """
```

扩展的巴科斯范式 Augmented BNF
RFC2234 定义了扩展的巴科斯范式(ABNF)。近年来在Internet的定义中ABNF被广泛使用。ABNF做了更多的改进，比如说，在ABNF中，尖括号不再需要。




