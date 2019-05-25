# Gitbook

教程参考 https://gitbook.icasture.top/part_one/gitbook_customize/modify_book.json.html?h=font

## 基本功能

开发

```
$ gitbook serve
```

生成

```
$ gitbook build <Dir> <Dest> 
```

## 插件推荐 

源自 https://gitbook.icasture.top/part_one/function_development/plugin_recommandation.html

与 Latex 制作的 PDF 相比，GitBook 的最大优势在于其能使用 js 脚本，这使得 GitBook 在功能上可以不断拓展，比如在文档中嵌入视频、嵌入动画、嵌入 js 练习，嵌入测试。以下是一些常用的插件：

exercises，在文档中增加交互练习内容，目前只支持 js 语言。

quiz，在文档中增加测验内容，支持单选、多选、排序。

include-codeblock，使得 GitBook 能引用外部独立文档。

localized-footer，为 GitBook 的每个页面添加页脚内容。

search-pro，为 GitBook 添加多字节字符搜索，实现中文搜索（默认只能搜索英文）。

sharing-plus，GitBook 默认分享工具的增强版，加入了中国常用的社交网站。

changyan，为 GitBook 页面添加畅言评论框。

iframely, 在页面中嵌入常见视频网站内容。

bibtex-indexed-cite，使用 bibtex 格式，自动生成参考文献。

github：添加 GitHub 图标。

Donate：添加赞赏按钮。

splitter：使侧边栏的宽度可以自由调节。

anchor-navigation-ex：添加 TOC 到侧边悬浮导航以及回到顶部按钮。

theme-default：将 showLevel 设为 true，以可以显示标题前面的数字索引（默认不显示）。

theme-comscore：为标题添加颜色。

versions-select：添加版本选择的下拉菜单。

theme-api：使用 GitBook 编写 API 文档。

theme-faq：用来制作知识库或者帮助中心，GitBook 的 帮助中心 就是使用的该主题。为了支持中文搜索我们需要引入 search-pro 包。

copy-code-button

disqus：为网站添加评论系统。

multipart：可以将书籍分成几个部分。

collapsible-menu

其他插件推荐：

https://zhaoda.net/2015/11/09/gitbook-plugins/

https://gitbook.zhangjikai.com/plugins.html