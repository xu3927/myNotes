[TOC]

# Angular 项目目录结构及命名指导

参考文章: [Angular App Structuring Guidelines](https://johnpapa.net/angular-app-structuring-guidelines/)

### 1. LIFT 准则

1. **L**ocating our code is easy, 准确定位代码
2. **I**ndentify code at glance, 一眼识别代码, (看到文件就能够知道文件内包含的内容)
3. **F**lat structure as long as we can, 保持扁平化的系统目录结构(目录结构不要太深, 方便查找代码)
4. **T**ry to stay DRY(Don`t Repeat Yourself), 不要重复自己的工作

要评判自己的目录是否合适可以问自己

> *How quickly can you open and work in all of the related files for a feature?*

## 2. 总规范

有可施行的短期计划和长期目标. 即了解app的总体走向, app的所有代码都在一个叫做app的根目录下，所有的内容都遵循一个功能一个文件，每一个controller、service、module、view都是独立的文件。第三方脚本存放在另外的根文件夹中（bower_components、scripts、lib）。

## 目录规范

### 1. Layout

建立一个layout文件夹, 把涉及到页面布局的组件放在其中(导航, 侧边栏, 内容区等).

### 2. 按功能模块划分文件夹结构

方便代码的组织管理. 可以快速定位代码, 快速识别文件代表的意思. 

目录结构尽量扁平, 不要有重复多余的名字.

```javascript

/**
 * recommended
 */

app/
    app.module.js
    app.config.js
    directives/
        calendar.directive.js
        calendar.directive.html
        user-profile.directive.js
        user-profile.directive.html
    services/
        dataservice.js
        localstorage.js
        logger.js
        spinner.js
    layout/
        shell.html
        shell.controller.js
        topnav.html
        topnav.controller.js
    people/
        attendees.html
        attendees.controller.js
        people.routes.js
        speakers.html
        speakers.controller.js
        speaker-detail.html
        speaker-detail.controller.js
    sessions/
        sessions.html
        sessions.controller.js
        sessions.routes.js
        session-detail.html
        session-detail.controller.js
```

**注意** 不要按文件类型划分, 否则在开发某个模块的时候需要来回在多个文件夹中切换, 当文件比较多时会非常不方便.

```JavaScript

/*
 * avoid
 * Alternative folders-by-type.
 * I recommend "folders-by-feature", instead.
 */

app/
    app.module.js
    app.config.js
    app.routes.js
    directives.js
    controllers/
        attendees.js
        session-detail.js
        sessions.js
        shell.js
        speakers.js
        speaker-detail.js
        topnav.js
    directives/
        calendar.directive.js
        calendar.directive.html
        user-profile.directive.js
        user-profile.directive.html
    services/
        dataservice.js
        localstorage.js
        logger.js
        spinner.js
    views/
        attendees.html
        session-detail.html
        sessions.html
        shell.html
        speakers.html
        speaker-detail.html
        topnav.html
```

### common 组件

对于通用的组件可以放到一个文件夹 common/shared 中

## 命名规范

### 命名原则

遵循描述文件的功能, 然后是类型的方式给组件统一命名. 如 feature.type.js; 

>1. 统一的命名方便一目了然的识别文件, 
>2. 方便检索代码
>3. 为一些自动化的任务提供模式匹配

```javascript

/**
 * common options
 */

// Controllers
avengers.js
avengers.controller.js
avengersController.js

// Services/Factories
logger.js
logger.service.js
loggerService.js

/**
 * recommended
 */

// controllers
avengers.controller.js
avengers.controller.spec.js

// services/factories
logger.service.js
logger.service.spec.js

// constants
constants.js

// module definition
avengers.module.js

// routes
avengers.routes.js
avengers.routes.spec.js

// configuration
avengers.config.js

// directives
avenger-profile.directive.js
avenger-profile.directive.spec.js

```

### 测试文件命名

和组件命名差不多，带上一个spec后缀。

为什么？：为快速识别组件提供统一的方式。

为什么？：为karma或是其它测试运行器提供模式匹配。

```
/**
 * recommended
 */
avengers.controller.spec.js
logger.service.spec.js
avengers.routes.spec.js
avenger-profile.directive.spec.js
```


### controller 命名

注意：另外一种常见的约定就是不要用controller这个词来给controller文件命名，例如不要用avengers.controller.js，而是用avengers.js。所有其它的约定都坚持使用类型作为后缀，但是controller是组件中最为常用的类型，因此这种做法的好处貌似仅仅是节省了打字，但是仍然很容易识别。我建议你为你的团队选择一种约定，并且要保持统一性。我喜欢的命名方式是avengers.controller.js。

```javascript
/**
* recommended
*/
// Controllers
avengers.js
avengers.spec.js

```

为所有controller提供统一的名称，先特征后名字，鉴于controller是构造函数，所以要采用UpperCamelCase（每个单词首字母大写）的方式。

为什么？：为快速识别和引用controller提供统一的方式。

为什么？：UpperCamelCase是常规的识别一个可以用构造函数来实例化的对象的方式。

```javascript
/**
 * recommended
 */

// avengers.controller.js
angular
    .module
    .controller('HeroAvengersController', HeroAvengersController);

function HeroAvengers(){ }
```

**Controller命名后缀**

*使用Controller。

为什么？：Controller使用更广泛、更明确、更具有描述性。

```JavaScript
/**
 * recommended
 */

// avengers.controller.js
angular
    .module
    .controller('AvengersController', AvengersController);

function AvengersController(){ }
```

### Factory命名

* 一样要统一，对service和factory使用camel-casing（驼峰式，第一个单词首字母小写，后面单词首字母大写）方式。避免使用$前缀。

为什么？：可以快速识别和引用factory。

为什么？：避免与内部使用$前缀的服务发生冲突。

```JavaScript

/**
 * recommended
 */

// logger.service.js
angular
    .module
    .factory('logger', logger);

function logger(){ }
```

### Directive组件命名

使用camel-case方式，用一个短的前缀来描述directive在哪个区域使用（一些例子中是使用公司前缀或是项目前缀）。

为什么？：可以快速识别和引用controller。

```
/**
 * recommended
 */

// avenger-profile.directive.js
angular
    .module
    .directive('xxAvengerProfile', xxAvengerProfile);

// usage is <xx-avenger-profile> </xx-avenger-profile>

function xxAvengerProfile(){ }
```
### Module 模块

当有很多的模块时，主模块文件命名成app.module.js，其它依赖模块以它们代表的内容来命名。例如，一个管理员模块命名成admin.module.js，它们各自的注册模块名字就是app和admin。

为什么？：给多模块的应用提供统一的方式，这也是为了扩展大型应用。

为什么？：对使用任务来自动化加载所有模块的定义（先）和其它所有的angular文件（后）提供了一种简单的方式。

### Config 配置

*把一个模块的配置独立到它自己的文件中，以这个模块为基础命名。app模块的配置文件命名成app.config.js（或是config.js），admin.module.js的配置文件命名成admin.config.js。

为什么？：把配置从模块定义、组件和活跃代码中分离出来。

为什么？：为设置模块的配置提供了一个可识别的地方

### Router 路由

*把路由的配置独立到单独的文件。主模块的路由可能是app.route.js，admin模块的路由可能是admin.route.js。即使是在很小的应用中，我也喜欢把路由的配置从其余的配置中分离出来。

