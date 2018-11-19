[TOC]

# 1 gulp 用法

gulp是一个前端工程化工具，用来实现代码部署，css，javascript，html等等代码的压缩，es6，less，styls等等代码的编译，图片优化等等。

gulp是基于unix中管道感念，nodejs中，叫做stream流，前一个操作的输出作为后一个操作输入。

gulp优势是api简单，（src，dest，task，pipe），插件资源丰富，社区庞大，你可以去社区提问，会有很多人帮助你的，开发他们的 插件也很简单

### 2 gulp入口文件 gulpfile.js
gulpfile.js，这个文件是gulp的入口文件，每个项目都要有这个文件，当执行gul时p会自动执行该文件，在该文件中我们可以书写gulp语句，（是基于js实现，与js语法是一样的）

### 3 task方法

task用来定义任务.

语法gulp.task(name, [deps], fn)

name表示任务的名称

deps表示任务的 依赖的任务, 有依赖任务的时候会先执行依赖的任务

fn表示任务的回调函数

```
<script type="text/javascript">
	//引包
	var gulp = require("gulp");
	//定义任务"haha", haha是任务名, 参数2是任务的回调执行方法
	gulp.task("haha",function(){	
		console.log("哈哈");
	})
</script>
```
### 4 run 方法

运行gulp中task用run方法

语法：gulp.run（taskname）

taskname 表示任务的名称

r官方不推荐用run方法, 在新版本中将会停用run方法
```
//运行任务"haha"
gulp.run("haha")
```
### 5 default 默认任务
在最新gulp版本中，官方不建议使用run方法，为了启动我们的任务，我们可以通过默认任务来实现

语法 gulp.task(‘default’, deps, fn)

注意默认任务的名称就是default，不能写其他的名称，如果写其他的名称，gulp就当作普通任务来执行

deps：依赖的任务集合，依赖的任务要先于当前任务执行
fn执行回调函数
```
//启动gulp, task1.. 是依赖的任务
gulp.task("default",[task1,task2..])
```
### 6 gulp.src 读取文件

语法，gulp.src(filePath, option)

filePath:指的是文件的路径，如果多个不同的文件，我们有两种方式表示
一种形式可以是数组[‘a.js’, ‘b.css’]

一种形式可以是globs表达式，[‘*.js’] ->  表示a.js , abc.js  b.js,一定不能有目录符号"/""

### 7 gulp.pipe(fn) 管道方法

我们可以通过管道方法来处理每个阶段的流，这些管道依次排开，前一个管道输出作为后一个管道的输入，pipe是管道操作，是操作流的，因此要对流执行该方法，可以链式调用

语法：gulp.pipe(fn)

fn，通常表示处理方法

 如: gulp.pipe(gulp.dest(path)) 

### 8 gulp.dest 写文件. 表示将文件写入某个目录或文件内

语法结构: gulp.dest(path)

path: 路径可以是一个目录(把文件写入到目录时),也可以是一个文件的路径(需要把一个文件写入另一个文件时)

```
<script type="text/javascript">
/** 练习
* 1. 读取js中的index.js文件
* 2. 将index.js文件放到dest目录下
*/

// 步骤
// 1. 引入gulp模块
var gulp = require("gulp");

// 2. 定义一个读写任务
// gulp.task(taskName,fn) 定义任务,taskName表示任务名称, fn是任务的方法函数
gulp.task("dealIndex",function(){
	//1 读文件
	gulp.src("js/index.js")
	//2. 通过管道操作流
	//3. 将内容放到dest文件夹内.
	.pipe(gulp.dest("dest"))

})

// 3. 启动默认任务
// default任务是默认任务, 会自动执行, 通过默认任务添加依赖任务来执行自定义的任务
gulp.task("default",["dealIndex"])
</script>
```
### 9 watch 方法 用来监听任务.

可以用watch方法来监听文件的变化.

一个文件写入,修改,删除, 发生操作并保存文件后,文件即发生了改变

Watch方法语法：

第一种：gulp.watch(globs,fn)

globs表示文件的路径，

fn表示处理方法

fn有个参数表示文件对象，里面有两个属性，

一个是type。表示我们操作的类型，有3个值 changed，deleted，added

一个是path，表示操作的文件

第二种语法:gulp.watch(globs, deps)

globs表示文件的路径，

deps 表示依赖的任务（task）集合

```
<script type="text/javascript">
// 练习1. 监听js/index.js文件的变化, 并发布到demo文件夹下.

 引入gulp
 var gulp = require("gulp");

 //创建默认入口任务, 应用程序必须有default任务
 gulp.task("default");

 // 监听js文件夹下后缀为.js的文件的变化
 gulp.watch("js/*.js",function(){
 	console.log(arguments);
 	// 读取文件
 	gulp.src("js/*.js")
 	// 写文件
 	.pipe(gulp.dest("demo"))
 })


// 练习2 
var gulp = require("gulp");

//定义任务"dealJS"
gulp.task("dealJs",function(){
	// 监听文件的改变
	gulp.src("js/*.js")
	// 写入到文件夹"demo2"中
	.pipe(gulp.dest("demo2"))
})

// 定义任务"haha"
gulp.task("haha",function(){
	console.log("哈哈哈任务");
})


gulp.task("default")

// gulp.watch的方法2: 传入任务数组
//监听文件变化
gulp.watch("js/*.js",["dealJs","haha"])
</script>
```

### 10 globs 语法
globs 用来匹配指定模式的文件名或目录

基本语法:



"*" 匹配任意数量(0个或多个)的字符，但不匹配"/"

"?" 匹配单个字符，但不匹配"/"

"**" 匹配任意数量的字符，包括"/"，只要它是路径中唯一的一部分

"{}" 允许使用一个逗号分割的列表或者表达式

"!" 在模式的开头用于否定一个匹配模式(即排除与模式匹配的信息) 如"!(abc|bcd|daf)"表示匹配除这3种情况以外的其他情况

"[...]" 匹配一个范围,类似正则表达式中的中括号,如[a-z]匹配a-z的字母. 可以用"!" 或 "^" 表示取补集.

各种情况均不匹配"."

ps：这里只是列了js版本的glob模式的一些常用语法。

 "*.js"  匹配 "a.js" "abc.js"

 "**/a.js" 可以表示  "a/b/c/a.js"  "b/a.js"

混合使用 "**/*.js" 包含所有目录的js文件

"lib/**/*.js" 表示lib下面的所有js文件

"*.{js,html,css}" 可以匹配"a.js", 'bad.html' , "afa.css"等

## gulp cli 命令行

### 显示各个任务的依赖关系

```
gulp -T
```

## 11 gulp 插件

如何使用插件（以修改文件名称为例）

第一步安装插件包，npm install -g gulp-rename, 使用时可以复制到我们自己目录下

第二步在gulpfile.js中将该模块引入进来，通过require

第三步，然后再管道方法中使用pipe

### 12 gulp-rename插件 重命名

它是将文件的名称重命名

引入这个模块 var rename = require('gulp-rename');

rename是一个方法，这个方法接受一个参数表示重命名文件新的名称

```
<script type="text/javascript">
var gulp = require("gulp");

// 文件重命名
// 引入插件 gulp-rename包
var rename = require("gulp-rename");

//定义任务
gulp.task("renameJs",function(){
	// 读取文件
	gulp.src("js/1.js")
	//  在管道中处理文件
	// 重命名
	.pipe(rename("新名字.js"))
	// 把文件写入一个新的文件夹中
	.pipe(gulp.dest("newfile"))
})

// 执行任务
gulp.task("default",["renameJs"])
</script>
```

### 12 gulp-uglify 压缩js文件
安装包 npm install gulp-uglify

### 13 gulp-minify-css 压缩css
### 14 gulp-minify-html 压缩html


```
<script type="text/javascript">

// 压缩文件

var gulp = require("gulp");
// 插件 gulp-uglify 用来将js文件压缩
var ugly = require("gulp-uglify");
// 插件 压缩css文件 
var minifyCss = require("gulp-minify-css");
// 插件 压缩html
var miniHtml = require("gulp-minify-html");

//定义任务
gulp.task("uglyJS",function(){
	console.log(this,arguments);
	gulp.src("js/*.js")
	//压缩文件
	.pipe(ugly())
	//写入
	.pipe(gulp.dest("压缩后的"))
})


//压缩css
gulp.task("miniCss",function(){
	gulp.src("css/*.css")
	//管道压缩
	.pipe(minifyCss())
	//写入
	.pipe(gulp.dest("压缩后的"))
})

//压缩html
gulp.task("miniHtml",function(){
	gulp.src("html/*.html")
	//管道压缩
	.pipe(miniHtml())
	//写入
	.pipe(gulp.dest("压缩后的"))
})

// 创建默认任务将程序启动起来
gulp.task("default",["uglyJS","miniCss","miniHtml"]);


</script>
```
### 15 gulp-concat 文件的打包合并

```
<script type="text/javascript">
var gulp  = require("gulp");
var concat = require('gulp-concat');

//定义任务
// 获取js中js文件，并且打包在一起
gulp.task('jsConcat', function () {
	// 获取js文件
	gulp.src('js/*.js')
	// 先打包文件
	.pipe(concat('angular.js'))
	// 写入文件
	.pipe(gulp.dest('demo'))
})

gulp.task("default",["jsConcat"]);

</script>
```
### 16 gulp-jslint js代码校验 

```
var jslint = require("gulp-jslint");
//检验js中的代码
gulp.task("jslint",function(){
	gulp.src("js/*.js")
	//校验 
	.pipe(jslint())
	//写入文件
	.pipe(gulp.dest("demo"))
})
```

### 17  gulp-imagemin 图片压缩

```
var imageMin = require("gulp-imagemin");

//创建任务
gulp.task("dealImg",function(){
	gulp.src("img/*.*")
	.pipe(imageMin())
	.pipe(gulp.dest("demo"))
})
```
