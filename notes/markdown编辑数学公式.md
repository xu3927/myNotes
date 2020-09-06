# markdown编辑数学公式

markdown 使用 KaTeX 库解析数学公式, 
KaTeX是一个高效的解析Tex公式的js库

参考资料:

- [数学符号转义表](https://mirrors.nju.edu.cn/CTAN/info/symbols/math/maths-symbols.pdf?spm=a2c6h.12873639.0.0.29d8da29K1gmJF&file=maths-symbols.pdf)
- [Markdown数学公式录入](https://developer.aliyun.com/article/174761)
- [Markdown数学公式语法](Markdown数学公式语法)
- [Markdown 公式指导手册](https://www.zybuluo.com/codeep/note/163962)
- [Katex支持的函数(官网)](https://katex.org/docs/supported.html)
- [KaTex 支持的符号和函数 Github](https://github.com/KaTeX/KaTeX/blob/5806b240b342b964bcde3441d3ae7bfa7222c3b4/docs/support_table.md)
- [KaTex测试](https://katex.org/#demo)

## stackrel 让一组符置于另外一组字符上面

$$
A \stackrel{haha}{=} D
$$

语法 \\stackrel{top}{bootom}

## substack 置于下方

$A = \sum_{\substack{0<i<m\\0<j<n}} $

## 长等号 xlongequal

$$D \xlongequal {c_i \leftrightarrow c_j} -D $$