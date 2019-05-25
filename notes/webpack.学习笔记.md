[TOC]

# webpack 学习笔记

[官方文档](https://webpack.js.org)

## 比较

webpack 与其他打包工具的对比: [http://survivejs.com/webpack/webpack-compared/](http://survivejs.com/webpack/webpack-compared/)


## 简介

官网对webpack的定义是MODULE BUNDLER，他的目的就是把有依赖关系的各种文件打包成一系列的静态资源

webpack简单点来说就就是一个配置文件，所有的魔力都是在这一个文件中发生的。 这个配置文件主要分为三大块
entry 入口文件 让webpack用哪个文件作为项目的入口
output 出口 让webpack把处理完成的文件放在哪里
module 模块 要用什么不同的模块来处理各种类型的文件

## 安装

```
npm install -g webpack
```

### webpack有三种调用方式

- 不调用config, 直接执行入口文件, 如 webpack app/index.js build/bundle.js   
- 通过调用webpack.config.js配置文件执行
- 把webpack命令加到package.json 的 scripts标签中通过npm run ... 调用

```javascript

// package.json中

"scripts": {
    "start": "webpack --config mywebpack.config.js"
}

```

### CLI

安装webpack后可以通过命令行来打包文件. 

```bash

# 通过命令行来执行
webpack ./SRC/index.js ./DESC/bundle.js
./node_modules/.bin/webpack app/index.js dist/bundle.js

# 输出结果

Hash: 1f95889c4126f4a87ea7
Version: webpack 2.3.1
Time: 101ms
     Asset     Size  Chunks             Chunk Names
bundle2.js  5.26 kB       0  [emitted]  main
   [0] ./app/a1.js 67 bytes {0} [built]
   [1] ./app/b1.js 111 bytes {0} [built]
   [2] ./app/c.js 66 bytes {0} [built]
   [3] ./app/a.js 111 bytes {0} [built]
   [4] ./app/b.js 113 bytes {0} [built]
   [5] ./app/index.js 225 bytes {0} [built]

```

## webpack config

可以通过配置文件来执行. 在目录中添加 webpack.config.js, webpack会默认选择该文件作为入口配置文件.

运行 webpack 命令即可选择该配置文件执行.

配置文件有两种调用方法

- 在终端中调用
- 在node程序中调用

```javascript

let path = require('path');
let config = {
    entry: './app/index.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

export default config;

```

#### 一个完整的配置文件

```javascript

const path = require('path');

module.exports = {
// 入口文件, 可以是字符串, 数组, 对象. 入口是js文件, html模板通过html-webpack-plugin来生成.
  entry: "./app/entry", // string | object | array

// 输出配置
  output: {
   // 目标输出目录, 必须是绝对路径, 通过node的path方法来得到绝对路径
    path: path.resolve(__dirname, "dist"), // string
    // must be an absolute path (use the Node.js path module)
	
	// 打包后的得到的文件名 
    filename: "bundle.js", // string
    // the filename template for entry chunks
	
	// 设置静态资源(html, css, 图片等)上线后的根目录, 打包后项目中的静态资源会以此目录为根目录改为绝对路径.
    publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page
	
	// webpack 可以用来打包js库, 这是库文件对外暴漏的变量名. 
    library: "MyLibrary", // string,
    // the name of the exported library

	// 库文件暴漏的变量挂载的对象. 默认值是 var (库文件作为一个普通变量), 可选值 window, global, this等
    libraryTarget: "umd", // universal module definition
    // the type of the exported library

    /* Advanced output configuration (click to show) */
  },

  // 模块配置
  module: {
    // configuration regarding modules
	
	// rules 配置loaders, parse等
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
	
	  /**
	  * 配置匹配规则及处理方法.
	  * @test: 可以用正则匹配文件
	  * @includ: 要匹配的文件
	  * @exclude: 排除的文件
	  */ 
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include

        issuer: { test, include, exclude },
        // conditions for the issuer (the origin of the import)
		
		// 指定loader的类别, 值 pre, post, 没有normal选项
        enforce: "pre",
        enforce: "post",
        // flags to apply these rules, even if they are overridden (advanced option)
		
		// 文件处理的loader
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide
		
		// loader的参数选项, 可以传递到loader中.
        options: {
          presets: ["env"]
        },
        // options for the loader
      },

      {
        test: "\.html$",
		
		// use 数组, 可以设置多个loader, loader从右向左调用. loader名用字符串, 可以用数组来配置loader, options选项作为该loader的参数.
        use: [
          // apply multiple loaders and options
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      },

      { oneOf: [ /* rules */ ] },
      // only use one of these nested rules

      { rules: [ /* rules */ ] },
      // use all of these nested rules (combine with conditions to be useful)

      { resource: { and: [ /* conditions */ ] } },
      // matches only if all conditions are matched

      { resource: { or: [ /* conditions */ ] } },
      { resource: [ /* conditions */ ] }
      // matches if any condition is matched (default for arrays)

      { resource: { not: /* condition */ } }
      // matches if the condition is not matched
    ],

    /* Advanced module configuration (click to show) */
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used

    alias: {
      // a list of module name aliases

      "module": "new-module",
      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

      "only-module$": "new-module",
      // alias "only-module" -> "new-module", but not "module/path/file" -> "new-module/path/file"

      "module": path.resolve(__dirname, "app/third/module.js"),
      // alias "module" -> "./app/third/module.js" and "module/file" results in error
      // modules aliases are imported relative to the current context
    },
    /* alternative alias syntax (click to show) */

    /* Advanced resolve configuration (click to show) */
  },

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) { 
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  externals: ["react", /^@angular\//],
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: "errors-only",
  // lets you precisely control what bundle information gets displayed

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  plugins: [
    // ...
  ],
  // list of additional plugins


  /* Advanced configuration (click to show) */
}

```

## Output

打包后的模块默认导出一个空对象, 因此如果是要作为一个npm包或者库文件使用, 需要设置输出的类型. 

```json
// 配置
output: {
  // 输出的文件名
  filename: '[name].js',
  // 输出的文件的路径
  path: path.resolve(__dirname, 'build'),
  // 作为库文件的话, 需要设置一个输出的变量名, 如jQuery的"$".该名称会作为librayTarget的属性
  library: 'gTag',
  // libraryTarget中要导出的模块
  libraryExport: 'default',
  // 库文件的导出方式
  libraryTarget: 'commonjs'
}

```

导出的内容及使用示例

```JavaScript
// 如编写的库文件"g-tag.js"最后导出如下内容.
module.exports = function gTag () {
    /****/
}

// 使用的时候我们如下希望作为一个库文件来使用. 但是webpack导出的文件默认引用的是一个空对象. 需要配置library相关属性才输出所需要的内容及格式.

var gTag = require('g-tag.js')
gTag();

```

### Output.library

string|object. 

设置导出的库文件的名称. 

[文档](https://webpack.js.org/configuration/output/#output-library)

### Output.libraryExport
string or string[]  (since webpack 3.0.0)
Default: _entry_return_
配置libraryTarget中导出的模块


### Output.libraryTarget

string
Default: "var"

配置库文件暴漏的方式

可选的值

#### libraryTarget: "var"

```javascript
// 库文件加载后. gTag会注册作为一个变量. 可以直接使用, 适合浏览器端. 

// 打包后的的文件结构如下. 定义一个gTag变量
var gTag = (function () {
  // 返回模块最后输出的内容
  return __webpack_require__(__webpack_require__.s = 116);
})([/**module List**/])

// 如果设置了libraryExport属性. 如 libraryExport: "default". 则打包后的文件为

var gTag = (function () {
  // 返回模块最后输出的内容
  return __webpack_require__(__webpack_require__.s = 116);
  // 导出libraryExport所设置的属性值并赋予gTag变量. 
})([/**module List**/])['default']

```

#### libraryTarget: "this"

导出为this的属性, 可如下使用

```javascript
// gTag会作为新文件的this的一个属性. 通过如下方式可以引入
var gTag = this["gtag"] = require('../build/index.js');
gTag()

```

### libraryTarget: "window"

设置的变量会注册为window的属性

```JavaScript

// 打包之后的文件结构为, 设置的变量会注册为window的属性
window["gTag"] = (function () {
  // 返回模块最后输出的内容
  return __webpack_require__(__webpack_require__.s = 116);
})([/**module List**/])

// 在文件中使用
window.gTag();

```

### libraryTarget: "global"

设置的变量会注册为window的属性

```JavaScript

// 打包之后的文件结构为, 设置的变量会注册为window的属性
global["gTag"] = (function () {
  // 返回模块最后输出的内容
  return __webpack_require__(__webpack_require__.s = 116);
})([/**module List**/])

// 在文件中使用
global.gTag();

```

### libraryTarget: "commonjs"

适用于commonjs环境中. 库文件的返回值会作为eports的一个属性

```javascript
exports['gTag'] = (function () {
  // 返回模块最后输出的内容
  return __webpack_require__(__webpack_require__.s = 116);
})([/**module List**/])

// 在文件中使用
var gTag = require('g-tag.js').gTag
gTag()

```
### libraryTarget: "commonjs2"

适用于commonjs环境中. 库文件的返回值会作为module.eports的一个属性

```javascript
module.exports['gTag'] = (function () {
  // 返回模块最后输出的内容
  return __webpack_require__(__webpack_require__.s = 116);
})([/**module List**/])

// 在文件中使用
var gTag = require('g-tag.js')
gTag()

```
另外还可以取值 amd, umd. 

## Modules 模块

### webpack2 支持的模块标准

- ES2015 import
- CommonJS require()
- AMD define / require
- css/sass/less 中的@import
- 样式(url(...))或HTML文件(<img src="">)中的图片链接

### 支持的模块类型

webpack 通过 loader 可以支持各种语言和预处理器编写模块。loader 描述了 webpack 如何处理 非 JavaScript(non-JavaScript) 模块，并且在bundle中引入这些依赖。 webpack 社区已经为各种流行语言和语言处理器构建了 loader，包括：

- CoffeeScript
- TypeScript
- ESNext (Babel)
- Sass
- Less
- Stylus

### Module Resolution 模块路径解析

利用resolver来解析路径得到绝对路径.

**webpack路径解析规则**

使用 enhanced-resolve，webpack 能够解析三种文件路径：

#### Absolute Paths 绝对路径

```javascript
import "/home/me/file";
import "C:\\Users\\me\\file";

```

绝对路径不再需要解析

#### Relative paths 相对路径

```javascript

// main.js文件中引用file1, file2

import "../src/file1";
import "./file2";

```

这种情况下, 当前引用的模块(main.js)所在的路径会作为context directory, 解析相对路径得到被引用模块的绝对路径.

### Module paths 模块路径(如node_module中的)

如:

```javascript

// main.js 中引用一些库
import _ from 'lodash';
```
模块路径在 resolve.modules 属性中配置, 引用的模块会在该路径下寻找.

```javascript
resolve: {
  // 如下配置则引用的module会到node_modules, 'src/modules'目录下寻找
  modules: [path.resolve(__dirname, 'src/modules'), 'node_modules'],
  // 配置搜索文件的扩展名
  extensions: ['.js', '.ts', '.jsx']
}


一旦根据上述规则解析路径后，解析器(resolver)将检查路径是指向文件还是目录。如果路径指向一个文件：

如果路径具有文件扩展名，则直接将文件打包。
否则，将使用 [resolve.extensions] 选项中的扩展名来解析，此选项告诉解析器在解析中能够接受哪些扩展名（例如 .js, .jsx）。
如果路径指向一个文件夹，则采取以下步骤找到具有正确扩展名的正确文件：

如果文件夹中包含 package.json 文件，则按照顺序查找 resolve.mainFields 配置选项中指定的字段。并且 package.json 中的第一个这样的字段确定文件路径。
If there is no package.json or if the main fields do not return a valid path, file names specified in the resolve.mainFiles configuration option are looked for in order, to see if a matching filename exists in the imported/required directory .
The file extension is then resolved in a similar way using the resolve.extensions option.

```
----

## module.rules 模块处理规则配置

rules 数组, 设置模块处理的规则. 

每条规则包含3部分

- conditions, 匹配条件
- results, 输出结果
- nested rules 嵌套规则

### rule conditions 匹配条件


有两种输入形式

1. The resuorce: 资源路径. 要求绝对路径, 
2. The issuer: 模块路径, 绝对路径.

resource 和 issuer的区别

- resource: 各资源文件的绝对路径
- issuer: 引入资源的模块入口文件

如模块入口是 app/main.js, 某个资源是app/src/style.css, 则resource路径是 [path]/app/src/style.css, 而该文件的issuer是 [path]/app/main.js

条件可以是这些之一：

字符串：匹配输入必须以提供的字符串开始。是的。目录绝对路径或文件绝对路径。
正则表达式：test 输入值。
函数：调用输入的函数，必须返回一个真值(truthy value)以匹配。
条件数组：至少一个匹配条件。
对象：匹配所有属性。每个属性都有一个定义行为。
{ test: Condition }：匹配条件。约定了提供一个正则或正则数组，但不是强制的。

{ include: Condition }：匹配条件。约定了提供一个字符串或字符串数组，但不是强制的。

{ exclude: Condition }：排除的文件。约定了提供一个字符串或字符串数组，但不是强制的。

{ and: [Condition] }：匹配所有条件

{ or: [Condition] }：匹配任何条件

{ not: Condition }：不能匹配条件

Example:

```json

{
  test: /\.css$/,
  include: [
    path.resolve(__dirname, "app/styles"),
    path.resolve(__dirname, "vendor/styles")
  ]
}

```


### rule results 匹配到的文件的输出结果

规则结果, 每个匹配到的规则有两种输出结果

- Applied loaders: 调用loaders, loaders是一个数组
- Parser options: 对象, 配置该模块的解析器

这些属性会影响 loader：loader, options, use。

也兼容这些属性：query, loaders。

enforce 属性会影响 loader 种类。不论是normal普通的，pre前置的，post后置的 loader。

parser 属性会影响 parser 选项。

### Nested rules 嵌套的规则

可以在 rules 或 oneof 属性下制定嵌套规则.


### rule.enforce

可能的值有："pre" | "post"

指定 loader 种类。没有值表示是普通 loader。

所有 loader 优先级, 从低到高按 后置(post), 行内(inline), 普通(normal), 前置(pre) 排序，并按此顺序使用。

所有普通 loader 可以通过在请求中加上 ! 前缀来忽略（覆盖）。

所有普通和前置 loader 可以通过在请求中加上 -! 前缀来忽略（覆盖）。

所有普通，后置和前置 loader 可以通过在请求中加上 !! 前缀来忽略（覆盖）。

不应该使用行内 loader 和 ! 前缀，因为它们是非标准的。它们可在由 loader 生成的代码中使用。

### rule.use [Array] 配置一组loader

数组, 每项是一个对象, 必须包含loader属性. options是传给loader的参数

```javascript
rules: [{
  test: /.scss$/,
  include: 
  use: [
  {
    loader: 'style-loader'
  },
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  },
  {
    loader: 'less-loader',
    options: {
      noIeCompat: true
    }
  }]
}]


```

## reslove (解析) 配置解析模块时搜索的路径

reslove 属性用来配置模块解析时从哪些目录查找. 

如require了jQuery, 通过配置reslove, 可以使更改webpack查找jQuery的方式.


### resolve.enforceExtension

默认 false, 是否强制写后缀名. 

如 import 'app/src/haha.js'  js后缀是否必须写.


### resolve.mainFields

数组, 引入node_modules中的模块时解析的模块的入口文件夹字段. 

默认值是 ["browser", "module", "main"]

### resolve.mainFiles

解析的模块入口文件

### resolve.alias 创建引用的路径别名

如下, 为src/app目录下的haha, xixi配置别名后, 当在某个模块中 require('haha') 或 import haha from 'haha' 时, 会到src/app/haha目录下寻找.
如 require('haha/main.js') 则查找 src/app/haha/main.js

如果在别名后使用 $, 表示精确匹配. 

require('xixi') // 正确
require('xixi/main.js') // 错误.

```JavaScript
resolve: {
  alias: {
    haha: path.resolve(__dirname, 'src/app/haha'),
    xixi$: path.resolve(__dirname, 'src/app/xixi')
  }
}

```

### resolve.extensions 配置自动解析的扩展名

[Array] 

可以使在引入模块时不带扩展名

如 require('haha/index'); 不带扩展名, 默认会去解析haha/index.js

默认值是: 

```
extensions: ['.js', '.json']
```

### resolve.modules 配置解析模块时搜索的目录

可以使用绝对路径或相对路径.
通过查看当前目录以及祖先路径（即 ./node_modules, ../node_modules 等等），相对路径将类似于 Node 查找 'node_modules' 的方式进行查找。

使用绝对路径，将只在给定目录中搜索。

默认值是
```
modules: ['node_modules']

```

配置示例

```
modules: [path.reolve(__dirname, 'src'), 'node_modules']
```

## loader 

loader用于加载文件, 并对文件进行预处理. webpack只能打包 commonjs规范的 js文件, 其他的文件, html, css, jsx, scss, json等都需要通过loader加载进来.

如处理scss文件, 使用的loader如下

> sass-loader: 将sass编译为css
> css-loader: 把css文件转为commonJs
> style-loader: 将css内容输出到页面html中的style标签中

```javascript
rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]

```

### html-loader 处理html文件中引用的静态资源路径

### ng-cache-loader angular中的template引用

[https://github.com/teux/ng-cache-loader](https://github.com/teux/ng-cache-loader)

把引入的template 放入 $templateCache中, 则可以在angular中的templateUrl中引用该html模块

### file-loader 用于打包文件资源

[https://github.com/webpack-contrib/file-loader](https://github.com/webpack-contrib/file-loader)

默认启用MD5 hash


---

## Plugins 插件配置

plugin用来扩展webpack的功能. 作用于webpack. loader用于加载文件, 并作用于文件.


数组, webpack的插件列表. 

webpack有丰富的插件, 通常都会配置在Plugins中,  这些插件使webpack flexible

用来处理各个bundle.

### html-webpack-plugin

文档地址 [https://github.com/jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

该插件用来生成html模板. 

```javascript

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
    entry: 'index.js',
    output: {
        path: 'dist',
        filename: 'index.bundle.js'
    },
    // 生成默认的H5模板
    plugins: [new HtmlWebpackPlugin()]
}

```

生成的默认模板如下

```html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
    <script src="index_bundle.js"></script>
  </body>
</html>
```
> 配置项

```javascript
{
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App', // html title
      filename: 'assets/admin.html', // 生成的文件名
      template: 'src/index.ejs', // 设置html模板.
      inject: 'body', // 资源插入的位置, 可选 true, head, body, false.
      favicon: 'src/favicon.ico', // 文件位置
      minify: {} | false, // html 压缩选项, 可以配置压缩的参数.
    })
  ]
}
```
### extract-text-webpack-plugin 

[https://github.com/webpack-contrib/extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

用于取出文件资源作为一个单独的文件.

```javascript

// 取出所有引入的css文件到一个单独的文件中, 可以减小bundle的体积

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}

```

## DevServer

webpack-dev-serve 建立本地服务.

## webpack 构建过程

![webpack构建过程](./images/chatu/webpack构建过程.jpg)


























