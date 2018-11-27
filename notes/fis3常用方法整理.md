# fis常用方法整理

FIS3 是面向前端的工程构建工具。解决前端工程中性能优化、资源加载（异步、同步、按需、预加载、依赖管理、合并、内嵌）、模块化开发、自动化工具、开发规范、代码部署等问题。

### 1. fis 发布流程

fis也是基于流处理，不同之处，fis有自己的一个流程

>1. Lint  代码规范
>1. Parser：对代码的编译
>1. Preprocessor ：前置处理
>1. Standard ： 代码标准化
>1. Postprocessor： 后置处理
>1. Optimizer： 优化处理
>1. Prepackager ：前置打包
>1. Packager ： 打包过程
>1. Spriter： 图片制作精灵图
>1. Postpackager：　后置打包
>1. Deploy：　发布

### 2. fis-conf.js 入口配置文件

fis的配置文件, 在其中书写fis的配置,相当于gulp的gulpfile文件

fis项目必须有该文件

### 3.  体验fis,资源定位

在发布过程中对资源 URI 进行了替换，把相对路径替换成了绝对路径.

```
	// 将js放到js目录下
	fis.match('**.js', {
		release: 'js/$0'
	})

	// 将css放到css目录下
	fis.match('**.css', {
		release: 'css/$0'
	})

	// 配置配置文件，注意，清空所有的配置，只留下以下代码即可。
	fis.match('*.{png,js,css}', {
	  release: '/static/$0'
	});

```
>1. 在fis中，默认情况下文件是会被发布的，在gulp中文件默认是不发布的

>2. 同gulp一样，fis-conf文件没有发布，其他文件是被发布的

>3. 在fis中，资源默认是被操作的，比如说，一个文件嵌入另外一个文件，当这个文件位置改变时，被嵌入嵌入的中的文件地址，自动更新

>4. 项目如何发布是通过fis指令实现的。Gulp只有一个指令gulp，在fis中fis有很多指令，通过指令决定发布的位置的

>5. fis发布后的文件是可以直接放到线上运行的项目文件

### 4. 发布

### 4.1 fis3 release [path]

cmd指令, 发布文件到指定目录

### 4.2 内置服务器


```
<!-- CMD命令 -->

// 打开服务器根目录下，

fis3 server open

// 发布到服务器目录

fis3 release

//来启动本地 Web Server，当此 Server 启动后，会自动浏览器打开 http://127.0.0.1:8080，默认监听端口 8080

fis3 server start


```

### 4.3 文件监听 fis3 release -wd [path]

```
// 浏览器自动刷新

fis3 release -wL

```


### 4.4 match 方法

用来捕获文件并处理的一个方法

这个方法接受两个参数

第一个参数表示获取的文件

第二个参数表示处理文件的配置信息

```
	fis.match('**.js', {
		release: 'js/$0'
	})
```
### 4.5 fis中globs语法

拓展，我们可以将**表示除拓展名以外的任何字符。

对于多个文件类型处理，我们可以用{}，通过，实现对多个文件获取

$0可以获取前面匹配的文件

```
	fis.match('**.{js,css}', {
		// 发布到static目录下
		release: 'static/$0'
	})
```
### 5 插件

fis中插件需要我们手动安装，

Npm install -g 插件名称，我们要安装在全局环境下，在fis中所有插件都是公用的，使用哪个插件要在配置中声明。

使用插件fis-plugin()方法

参数就是插件名称，要去除插件前缀

例如：css压缩插件是fis-optimizer-clean-css

前缀是fis-optimizer

名称就是clean-css

使用这个插件就要fis-plugin(‘clean-css’)

使用插件时我们是在match的参数对象中使用，

这个对象的属性值就是我们的插件使用阶段的名称

```
fis.match("**.css"){
	optimizer：fis-plugin(‘clean-css’)
}
```

### 5.1 clean-css 压缩css

内置插件


```
	fis.match('index.css', {
		optimizer: fis.plugin('clean-css')
	})
```

### 5.2 uglify-js 压缩js

```
	fis.match("**.js",{
		optimizer : fis.plugin("uglify-js")
	})
```

### 5.3 png-compressor 图片优化

Png图片优化插件fis-optimizer-png-compressor

Fis将图片压缩内置进来，不过该插件只能处理png格式的文件，（png的优化比例最高），fis只内置了png格式优化的插件

```
	fis.match("**.png",{
		optimizer : fis.plugin("png-compressor")
	})

```

### 5.4 spriter-csssprites 精灵图

实现精灵图的目的是为了优化请求

fis-spriter-csssprites：是fis内置的插件，用来制作精灵图，

想实现精灵图分成三步

>* 第一步：找到css中哪些图片是需要制作精灵图，通过?__sprite,这个标识符来区分哪个是需要制作精灵图的。

>* 第二步：在fis的配置中，要说明哪些css图片要做精灵图处理的。useSprite：true，来通知fis说，哪些css文件中的图片要做精灵图处理

>* 第三步：我们说精灵图例是在编译倒数第三步，也就是在打包以后，因此制作过程要在打包过程中处理

```

<!-- css文件中对需要做精灵图的添加标识 -->

.item1 span {
	background: url(../img/01.png?__sprite) center;
}
.item2 span {
	background: url(../img/02.png?__sprite) center;
}
.item3 span {
	background: url(../img/03.png?__sprite) center;
}
.item4 span {
	background: url(../img/04.png?__sprite) center;
}



<!-- fis-conf 配置文件 -->

// 通知fis哪些css文件中的图片是要做精灵图处理的
fis.match('**.css', {
	useSprite: true
})
// 在打包过程中处理精灵图打包,这一步是个过程
fis.match('::package', {
	spriter: fis.plugin('csssprites')
})

// 有时候demo目录下可能放置一些不需要发布到服务器上的文件
fis.match('demo/**', {
	release : false	// 来禁止文件发布
})
```

### 5.5 文件指纹

指纹指的是文件后面后缀名称，为了防止文件更新浏览器走缓存

```
	// 为了更新文件是，防止浏览器走缓存，我们要给每个资源加上指纹。
	fis.match('**.{js,png,css}', {
		// 加上指纹很简单，只需要设置useHash属性
		useHash: true
	})
```

### 6. 嵌入技术

嵌入资源即内容嵌入，可以为工程师提供诸如图片base64嵌入到css、js里，前端模板编译到js文件中，将js、css、html拆分成几个文件最后合并到一起的能力。有了这项能力，可以有效的减少http请求数，提升工程的可维护性。


### 6.1 图片嵌入技术

```
// 给图片加上 ?__inline 标识,把图片转为base64嵌入文件中
// css 中
.item3 span {
	/* 将图片嵌入css中 */ 
	background: url(../img/03.png?__inline) center;
}
.item4 span {
	background: url(../img/04.png?__inline) center;
}

// html 中

	<li class="item1">
		<img src="img/01.png?__inline" alt="">
		<p>充话费</p>
	</li>
	<li class="item2">
		<img src="img/02.png?__inline" alt="">
		<p>游戏</p>

```

### 6.2 Html对资源嵌入

1. Html模板嵌入，是通过link标签嵌入的，rel属性是import，并且herf属性是模板的路径，并且加上?__inline

2. css嵌入，通过link引入css，并且在路径的末尾处加上?__inline

3. Js嵌入，通过script引入js，并且在路径的末尾处加上?__inline

4. 图片的嵌入，通过img标签引入图片，并且在路径的末尾处加上?__inline

```
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="css/index.css?__inline">
	</head>
	<body>
		<!-- 将模板输出到页面中 -->
		<link rel="import" href="view/title.html?__inline">
		<link rel="import" href="view/list.html?__inline">

		<ul>
			<li class="item1">
				<img src="img/01.png?__inline" alt="">
				<p>充话费</p>
			</li>
		</ul>
		<div class="demo"></div>
		<script type="text/javascript" src="js/index.js?__inline"></script>
	</body>
	</html>

```

### 6.3 css文件中资源的嵌入

可以嵌入css文件，通过@import指令实现的 通过url来设置文件路径，并且路径结尾处加上?__inline
还可以嵌入图片，通过对图片路径结尾处加上?__inline实现

```
<!-- css 内容 -->
	@import url('reset.css?__inline')
	.item3 span {
		/* 将图片嵌入css中 */ 
		background: url(../img/03.png?__inline) center;
	}

```

### 6.4 Js文件对资源的嵌入

嵌入js文件，通过__inline()方法实现，接受的参数是相对于该js文件的一个相对路径

嵌入css文件，通过__inline()
方法实现，接受的参数是相对于该js文件的一个相对路径

嵌入img文件，通过__inline()方法实现，接受的参数是相对于该js文件的一个相对路径

嵌入这三类文件不在需要?__inline参数了

```
// js 中
	__inline('demo.js');

	var imgsrc = __inline('../img/01.png')

	var styles = __inline('../css/reset.css')
```

### 7. 打包

fis内置了打包工具，但是有局限性，使用时直接通过packTo使用

```
// 压缩js
fis.match('**.js', {
	optimizer: fis.plugin('uglify-js'),
	// 打包合并到app.js
	packTo: 'js/app.js'
})

// 处理css文件
fis.match('**.css', {
	// 压缩
	optimizer: fis.plugin('clean-css'),
	// 做精灵图处理
	useSprite: true,
	packTo: 'css/app.css'
})
```

合并的文件中，被依赖的文件会自动提前。但是并不是所有的资源都严格的指定了依赖，所以有时候需要控制顺序。可以通过配置 packOrder 来控制，packOrder 越小越在前面。

```
	fis.match('/static/folderA/**.js', {
	  packTo: '/static/pkg/folderA.js'
	});

	fis.match('/static/folderA/file1.js', {
	  packOrder: -100
	});
```



### 7.2 打包插件 fis3-postpackager-loader


其实它并不是专门做打包的，而是做资源加载的插件。只是他能提供另一种更简单的打包方式。

他以页面为单位，分析当前页面用到的所有资源，将所有 js 合并成一个 js，所有的 css 合并成一个 css.

```
fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});
```

非常简单粗暴，但是有两个缺点。

因为他是前端编译期分析，对于使用了后端模板的页面资源分析无能为力，所以它只能适用于纯前端项目。
它的资源合并是以页面为单位，所以存在公共 js/css 被复制成多分打包多个包里面，导致的结果是，页面间切换，公共部分的 js/css 是没有公用缓存的。

但是这个问题还是能结合前面提到的插件解决的。比如：
```
fis.match('/static/folderA/**.js', {
 packTo: '/static/pkg/folderA.js'
});
```
以上配置和 loader 的 allInOne 同时配置了的话，结果会是这样的， folderA 下面的资源被打包到 folderA.js 中，同时页面里面的其他资源走 allInOne 打包。

所以只要勤快点，是可以把公用的资源抽出来的。


### 8. fis在模块化开发中的应用

fis.hook，添加钩子插件，

参数表示插件的名称

以seajs为例，它要用cmd规范，因此要引用fis3-hook-cmd插件


这个插件的全名fis3-hook-cmd

前缀是fis3-hook

名称cmd

想使用这个插件就要fis.hook('cmd')

isMod，表示是否应用模块化

### 8.1 cmd 规范实现 seajs

```
	fis.hook('cmd')

	// 要给那些文件应用插件
	// 要对js中的js文件引用cmd规范
	fis.match('js/**.js', {
		// 配置要应用模块
		isMod: true
	})

```

### 8.2 amd 规范

插件fis-hook-amd

```
	fis.hook('amd')
	fis.match('js/**.js', {
		// 对匹配到的js文件做模块处理
		isMod: true
	})
```

### 8.3 commonjs 规范 mod.js

插件fis-hook-commonjs

```
	fis.match('::package', {
		postpackager: fis.plugin('loader')
	})
	
	fis.hook('commonjs')

	fis.match('js/**.js', {
		isMod: true,
		packTo: 'js/all.js'
	})

```

### 8.4 Amd。Cmd，commonjs比较 

Cmd中，我们通过seajs引入模块的，我们直接通过seajs.use引入文件即可，后面seajs会对我们的模块自动加载

Amd中，我们通过require方式加载文件，注意require接受的参数是一个数组

Commonjs中，我们通过require加载文件的，require接受的是一个字符串，就是模块的路径，不过在commonjs中我们要给模块打包，

不论开发哪种我们，我们只是引入模块方式不同，开发模式是一致的
