# angular中decorator的实现


## 装饰器decorator介绍

### 模式

给一个类增加行为方法有两种方式.

1. 类内部实现: 在当前类内部通过继承其它类来扩展当前类的行为. 继承在编译时增加行为, 同时会修改原有类. 
2. 类外部实现: 增加一个修饰类包裹原有的类, 在修饰类中实现新的功能, 同时需要返回与原有类相同的接口. 通常原有类生成的对象会作为包裹类构造函数的参数传入. 在不需要用到新功能的地方, 仍然可以使用原有类. 这种为类添加方法的方式即装饰器模式(Decorator Pattern). 装饰器在执行时增加方法, 并且不修改原有类. 

```javascript

// 如为console.log增加一个前缀的装饰器

function log_prefix (origin) {
	return function (...args) {
		var prefix = 'prefix'
		origin(prefix, ...args)
	}
}

// 得到新的类
console.log = log_prefix(console.log)

```

## angular中的decorator解析

### angular中的decorator的使用方法

```javascript

angular.module('myApp', [])

.config([ '$provide', function($provide) {
/**
* 调用decorator服务对$log服务进行修饰, 注入依赖$delegate服务
* $delegate为要修饰的方法的原函数
*/
  $provide.decorator('$log', [
    '$delegate',
    function $logDecorator($delegate) {
	  // 临时保存原方法, 这里的$delegate即$log服务
      var originalWarn = $delegate.warn;
      // 为原方法设置一个新的函数
      $delegate.warn = function decoratedWarn(msg) {
        msg = 'Decorated Warn: ' + msg;
        originalWarn.apply($delegate, arguments);
      };
	  // 返回修饰后的函数
      return $delegate;
    }
  ]);
}]);

```

### angular中decorator的实现

```javascript
/*
* 装饰器服务
* @serviceName: 要装饰的服务
* @decorFn: 修饰函数
*/
var providerSuffix = 'provider';
function decorator(serviceName, decorFn) {
    /**
    * 提取要装饰的服务的原函数. 
    * 如对于$log服务.
    * 这里提取到的origProvider是 $logProvider 服务. 
    * orig$get是注册的$log服务的函数体
    * 
    */
    var origProvider = providerInjector.get(serviceName + providerSuffix),
        orig$get = origProvider.$get;

	// 1. 调用$get方法为$logProvider设置新的函数体. 
    origProvider.$get = function() {
     // 2. 得到$log原服务的实例
      var origInstance = instanceInjector.invoke(orig$get, origProvider);
      // 3. 返回新的$log函数
      // 4. 给装饰函数decorFn注入$delegate服务, 且该服务的值即为原来的$log函数. 
      return instanceInjector.invoke(decorFn, null, {$delegate: origInstance});
    };
  }

```

### 源码参考: 

[https://github.com/angular/angular.js/blob/v1.5.9/src/auto/injector.js](https://github.com/angular/angular.js/blob/v1.5.9/src/auto/injector.js)
