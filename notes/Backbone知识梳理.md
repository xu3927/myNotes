# Backbone 知识梳理
### 1 简介
Backbone.js为复杂WEB应用程序提供模型(models)、集合(collections)、视图(views)的结构。

### Backbone 核心功能
集合 collection
模型 models
视图 view
路由 router
事件 events

### 2 安装
backbone 依赖 jquery(或 zepto )和 underscore 库;
```
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="underscore.js"></script>
<script type="text/javascript" src="backbone.js"></script>
```

### 3 Models 数据模型

#### 3.1 模型创建

方法1. 构造函数方式

方法2 Model的拓展方法

#### 3.2 模型的一些属性

3.2.1 cid：表示模型的id，

3.2.2 attributes：添加的属性集

3.2.3 changed：表示更改过的属性

3.2.4 id 模型可以设置 id 属性值

id属性与其他的属性不同. 其他属性保存在attributes中.  而id属性与cid,changed属性一样 保存在第一级属性中;

如果模型传了id. 那么在获取或删除模型的时候就可以通过id属性来获取, 也可以通过cid 来获取 

3.2.5 Initialize 类的构造函数.; 在模型对象的实例化时，构造函数可以对模型对象再次更改

3.2.6 defaults 默认添加的属性


```
// 一. 创建模型方法
// 方法1. 构造函数方式
var m = new Backbone.Model({
	price : "75.00",
	title : "'2016新款纯色男士v领短袖"

})

// 方法2 Model的拓展方法
var Clothes = Backbone.Model.extend({

	//添加属性
	defaults : {
		width : 100,
		height : 350
	},
	//模型中的构造函数 initialize
	initialize : function(){

		//通过判断属性来增加属性
		if(this.attributes.price>200){
			this.attributes.level = "昂贵";
		}else{
			this.attributes.level = "白菜价";
		}

		//修改属性
		if(undefined !== this.attributes.discount){
			this.attributes.price = parseInt(this.attributes.price) * (this.attributes.discount);
		}

		// 添加消息监听,当属性改变时执行方法,回调中可以接收这个对象
		this.on("change",function(model){
			// console.log("属性修改了");
		})

	}
})

//创建模型的实例
var yifu1 = new Clothes({	
	//属性
	price : "77",
	name : "衣服1",
	discount : 0.7,
	//模型可以传一个id; id属性与其他的属性不同. 其他属性保存在attributes中.  而id属性与cid,changed属性一样 保存在第一级属性中;
	//如果模型传了id. 那么在获取或删除模型的时候就可以通过id属性来获取, 也可以通过cid 来获取 
	id : "yifu1"
})


```

#### 3.3 模型实例化对象的方法

```
//二. 实例的方法

//1. get 在外部获取属性 
var price = yifu1.get("price")
var discount = yifu1.get("discount")


//2. set 外部设置属性 
// 外部set的属性会出现在实例的changed属性中

//  set 方法1 设置一条属性
yifu1.set("类别","衬衣")

//  set 方法2 传obj 设置多条属性
yifu1.set({
	address : "河南安阳",
	num : "29458人已付款"
})


// set方法的 silent 参数,保持沉默,修改属性的时候不触发事件
yifu1.set("颜色","黑色",{silent:true})

//3.  hasChanged属性, 判断属性值是否发生改变,返回布尔值
// console.log(yifu1.hasChanged(),"hasChanged");

//4.  unset 方法. 删除属性
yifu1.unset("address");


//5. validate (验证,证实) 方法, 用来设置不能被删除的属性
yifu1.validate = function(attr){
	//attr这个操作的实例对象的属性
	//返回false,则该属性不能被删除
	console.log(attr,111);
	if(!attr.price){
		return true; 
	}
	return false;
}

//验证删除操作,true 进行验证. false不验证
//删除成功 返回删除属性后的实例对象
//删除失败  返回false
var xxx = yifu1.unset("price",{validate:false});

//6. toJSON 把实例转化为json数据
var yifu1_json = yifu1.toJSON();


//7. pick 方法
/**
* 筛选传入的属性
* 可以一个一个传属性名, 或数组
*/
// var result = yifu1.pick("level","height")
// var result = yifu1.pick(["level","height"])


/**
* 8. omit 方法
* 筛选所列属性之外的其它属性
* 筛选传入的属性
* 可以一个一个传属性名, 或数组
*/
// var result = yifu1.omit("level","height")
// var result = yifu1.omit(["level","height"])


/**
* 9. keys方法 
* 用来获取所有的属性名
* 得到一个数组
*/

var result = yifu1.keys()

/**
* 10. values 方法 
* 用来获取所有的属性值
* 得到一个数组
*/

// var result = yifu1.values()

/**
* 11. pairs 方法 
* 把每个kv对儿组成数组,
* 以二维数组的形式列出所有的属性及值
*/

var result = yifu1.pairs()

```

### 4. View 视图层

#### 4.1 创建方法

方法1. 直接用构造函数式创建实例化对象

方法2. 扩展方式创建

```
// 创建VIEW层
// 方法1. 直接用构造函数式创建实例化对象
	var V1 = new Backbone.View({
		tagName : "p",
		id : "app",
		className :"app"
	})
	V1.setElement("<h3><span class='haha'>1088</span></h3>"); //设置视图元素
	console.log(V1.$el)
	console.log(V1.$("span").html(),"V1")

// 方法2. 扩展方式创建
	var V2 = Backbone.View.extend({
		tagName : "h1",
		id : "biaoti",
		className : "biaoti"
	})

	/ 再创建实例化对象
	var view = new V2({
		el : $("#app") //设置视图元素
	});

```
#### 4.3 view 属性
1 view 自身有三个属性

2 cid：表示该视图实例的编号,会自动生成;

3 el：表示视图的元素.

在对类实例化时候，我们对类传递的el属性，跟实例化后的对象属性的el不一样

4 $el：表示jquery对象

```
<!-- 控制台输出的view实例化对象 -->
child {cid: "view1", el: div#app2, $el: jQuery.fn.init[1], haha: "haha"}
$el:jQuery.fn.init[1]
cid:"view1"
el:div#app2
haha:"haha"
__proto__:Backbone.View
```


5 initialize 表示视图类的构造函数

构造函数中我们可以操作实例化对象中的属性（创建时的属性），因为构造函数只执行一次


```
var App = Backbone.View.extend({
    //构造函数
    initialize : function(){
        //设置元素的内容样式
        this.$el.html("<div class='haha'>hahaha</div>")
        this.$el.css({
        height : 100,
        background : "yellow"
    })

    },
    //设置事件委托
    events : {
        //参数分别是 事件名, 目标元素, 事件方法名
        "click .haha" : "shijian"
    },
    shijian : function () {
         console.log("111");
    }
});

    //实例化对象
    var view = new App({
        el : $("#app2"),
        "haha" : "哈哈"
    })
    view.haha = "haha"

    //setElement 更改或设置视图元素
    view.setElement($("#app2"))
    view.setElement('<h1><span>78.0</span></h1>');

```



#### 4.4 view 方法

#### 4.4.1. setElement: 更改元素 将新的元素替换原有的元素.

参数可以是字符串，那么就将该字符串渲染成元素;

参数也可以是dom元素，那么就直接该元素替换

#### 4.4.2.  获取视图内部的元素

$:视图实例化对象为我们提供了一个方法来获取其自身的元素，用法跟jquery一样，返回也是jquery对象

app.$('span').html()

#### 4.4.3 tpl 视图模板
template：由underscore提供的一种获取并格式化模板的方法
```
tpl: _.template('<div><span class="price">¥<%=price%></span></div>')

```
#### 4.4.4 render 渲染视图
为了让视图实例对象可以在外部渲染视图，定义的方法
```
// 父视图
var App = Backbone.View.extend({
	render: function () {
		// 渲染父页面的视图
		// 子视图实例化
		var item = new Item({
			model: new Price()
		})
		item.render();
	    //把子视图追加到父视图中
		this.$el.append(item.el)
	}
});
// 实例化父视图
var app = new App({
	el: $('#app')
});
app.render();

```

#### 4.4.5 events 事件

视图中的事件是dom元素的事件

视图events基于委托模式，是对el元素委托的;

```
	//设置事件委托
    events : {
        //参数分别是 事件名, 目标元素选择器, 事件方法名
        "click .haha" : "shijian"
    },
    //定义事件
    shijian : function () {
         console.log("111");
    }

```


### 5 collection 集合 

### 5.1 集合：表示数据模型的一个有序集合; 里面存储的是一个个数据模型model


### 5.2 创建集合

只推荐拓展法创建集合,其它方法容易出问题

```
//模型构造函数
var ItemModel = Backbone.Model.extend({
	defaults:{
		width:200,
		height:400
	}
})
//模型实例
var item = new ItemModel({
	color : "red",
	price : 1111
})

var item2 = new ItemModel({
	color : "blue",
	price :　2222
})

//创建模型的集合,只推荐这一种创建集合的方法, 其他方法容易遇到问题
var ItemContainer = Backbone.Collection.extend({
	//该集合对应的模型
	model : ItemModel
})
console.log(ItemContainer);

```


### 5.3 集合的实例化对象的默认属性

#### 5.3.1 length 表示集合的长度,即里面的model的数量

#### 5.3.2 models 表示模型的集合, 是一个数组, 存储的是模型

```

//实例化集合
//1. 不传参数,创建一个空集合
var itemContainer = new ItemContainer();

//2. 可以传递模型的实例
var itemContainer = new ItemContainer(item)

//3. 传递一个数组, 多个模型实例
var itemContainer = new ItemContainer([item,item2])

//4.  传递一个js对象,此时会调用模型把这个对象实例化为模型对象
var itemContainer = new ItemContainer({
	price : 3333,
	color : "pink"
})

console.log(itemContainer);

```
### 5.4 集合实例化对象的方法


```
// 集合实例的方法
//1. add 向集合中添加模型实例,可以用数组, 数组中可以传模型实例,或对象; 
// add方法返回的是新添加的这个模型实例
// 当数组中传递js对象的时候,实际上会调用集合中的模型的构造函数把这个对象实例化再保存; 一般不建议用js obj的方式来添加
//传1个模型实例, 
itemContainer.add(item)
//传数组,数组中有模型实例,有js对象
itemContainer.add([item2,{
	price : 3333,
	color : "pink"
}])
//传一个obj变量
var obj5 = {
	price : 55555,
	color : "black",
	id : "m5"
}
var result = itemContainer.add(obj5);

//2. toJSON 返回一个数组, 存放了JSON格式的各个模型实例

var a = itemContainer.toJSON();
// toJSON 相当于 JSON.parse(JSON.stringify(itemContainer))
var b = JSON.parse(JSON.stringify(itemContainer));

// 每次调用toJSON都会创建一个新的对象而不是内存地址引用, 所以
a === itemContainer.toJSON(); //会返回false;


//3. get 获取集合中模型的方法
//3.1 传cid
var m = itemContainer.get("c1")
//3.2 传模型实例
var m = itemContainer.get(item2);
//3.3 如果模型有id 可以用 id 来获取
//集合中添加了一个有id的模型
itemContainer.add({
	price : 44444,
	color : "red",
	id : "m4"
})
 
//可以通过id来获取模型
var m = itemContainer.get("m4") 


//4. remove方法 从集合中删除模型; 可以传模型实例,cid; 对于有id的模型,可以传id;  remove之后返回的是删除的这几个模型实例
//删除1个模型
itemContainer.remove(item);
//传数组删除多个模型, 
var result = itemContainer.remove(["c3","m4"]);

//5. reset 方法 清空集合
itemContainer.reset();

```
#### collection 的fetch方法

用来从服务器端拉取数据

fetch方法对数据格式有要求

获取的json文件的数据只能是这种数组格式的
[{ },{ },{ }...]

```
var Mod = Backbone.Model.extend({})

	//创建集合

	var List = Backbone.Collection.extend({
		model:Mod,
		//url写数据的地址,在fetch的时候会自动获取数据
		url :  'data/list.json',
		initialize : function(){
			this.on("add",function(model){
				console.log(model);
			})
		}
	})
	//集合实例
	var list = new List;

	//fetch 从服务器端拉取数据映射到集合中
	//需要在集合中声明url属性
	list.fetch({
		//fetch获取成功后会触发success事件
		success ; function(col){
			console.log(col);
		}
	})

```


### 5.5 集合的事件

集合的事件可以添加在集合的构造函数initialize中, 

也可以在集合的实例上追加事件;

区别:

集合的构造函数中添加,每个集合实例发生改变都能触发事件;

在集合的实例上添加事件, 则只有该集合的改变能触发, 

并且只有在添加事件之后的改变才能触发事件

```
//1 集合构造函数中的事件
var ItemCol2 = Backbone.Collection.extend({
	model : ItemModel,
	initialize : function(){
		//在构造函数中添加事件
		this.on("add",function(model){
			// console.log(111,model.toJSON());
		})
		//reset事件中回调中接收的是这个集合实例
		$(this).on("reset",function(col){

		})
	}
})

//创建集合的实例
var itemCol2 = new ItemCol2();
//集合实例中添加模型
itemCol2.add(item)


//2 给集合的实例添加事件; 
itemCol2.on("add",function(model){
	// console.log(222,model.toJSON());
})
//集合实例添加的事件只有在添加事件后面的集合改变能触发
itemCol2.add(item2)

```
### 5.6 集合的事件传给视图
为了让视图知道集合的更新，我们就要为视图注册消息

```
	//1 创建数据模型
    var ProModel = Backbone.Model.extend({});

    //2. 创建数据集合
    var ItemCol = Backbone.Collection.extend({
    	model: ProModel
    })

    //2.1 实例化
    var itemCol = new ItemCol();
	
	 //3. 创建视图类
    var ProView = Backbone.View.extend({
		 initialize : function(){
        	var that = this;

        	//添加一个事件,当集合中数据增加时触发事件渲染视图
        	this.collection.on("add",function(model){

        		that.render(model); //渲染

        	})
        },

    })

	//视图要监听集合的事件,在视图实例化的时候需要把集合传进来
    var proView = new ProView({
        el : $("#app"),
        //传入集合
        collection : itemCol
    })

```

### 6 underscore 为backbone提供的方法
### 6.1 underscore 为backbone集合提供的方法

```
// underscore 为backbone 集合提供了一个方法叫forEach，
// 一 forEach 方法:
/* 
 1. 用法 集合打点调用.
 2. 参数 回调函数; 回调中的参数是遍历的数组中的每个值,这里是模型实例 model
 3. 返回值 修改后的原集合数组, 即return 返回值无效
 4. 会改变原来的集合数组
 */

	var id = 1;
	var result = itemContainer.forEach(function (model) {
		model.set('id', id++)
		//不需要return返回值
	})

// 二 map 方法, 也是用来遍历数组:
/**
*  1. 用法 集合数组打点调用
*  2. 参数 回调, 回调中参数可以接收遍历到的集合数组中的每个模型
*  3. 返回值  有return值的话, 会返回return 组成的一个新数组
*  4. 原集合数组会被改变
*/

	var index = 100;
	var result1 = itemContainer.map(function(model){
		model.set({
			index : index ++
		})
		return index;
	})

// 三 sortBy 按指定的属性进行排序
/**
* 参数, 可以是属性名称, 或 回调函数(回调函数中返回的值会作为排序的依据)
* 不改变原有的集合
* 返回的排序后的新集合
**/

 var result = itemContainer.sortBy("color");

 var result = itemContainer.sortBy(function(model){
 	return model.get("color")
 });

// 四 groupBy 把原有集合进行分组
/**
* 不改变原有集合
* 返回分组后的新集合, 相同组的会保存在一个数组中
*/
	var result = itemContainer.groupBy(function(model){
	/按 isChoose 属性值进行分组
		return model.get("isChoose");
	});

// 五 min max 获取集合中的最大或最小值
/**
* 不改变原有集合
*  返回得到的所选属性的最大或最小的模型实例
*  return的值是选择的属性值
*/	
	//获取模型中num属性最新的模型
	var result = itemContainer.min(function(model){
		return model.get("num");
	});

	var result = itemContainer.max(function(model){
		return model.get("num");
	});

// 六 filter 过滤; 一种筛选方法, 可以筛选出自己需要的项; result是筛选出的项组成的新数组
	var result = itemContainer.filter(function(model){
		return model.get("num") > 100
	})

//七 some 断言方法，判断集合中的某些元素符合该条件
	如果有符合的返回true, 否则返回false
	var result = itemContainer.some(function(model){
		return model.get("num") > 500
	})

// 八 every 断言方法，判断集合中的每个元素都符合该条件返回布尔值
	var result = itemContainer.every(function(model){
		return model.get("num") > 500  //条件
	})

// 九 indeOf 获取集合中模型的索引位置, 传入模型实例对象, 返回的是数值
	var result = itemContainer.indexOf(item2)
  
// 十 size  获取集合的长度; 和itemContainer.length得到的结果一样
var result = itemContainer.size();

```
### 6.2 underscore 为模型提供的方法

```

//1. pick 方法

var Mod = Backbone.Model.extend({});
var yifu1 = new Mod({});

/**
* 筛选传入的属性
* 可以一个一个传属性名, 或数组
*/
// var result = yifu1.pick("level","height")
// var result = yifu1.pick(["level","height"])


/**
* 2. omit 方法
* 筛选所列属性之外的其它属性
* 筛选传入的属性
* 可以一个一个传属性名, 或数组
*/
// var result = yifu1.omit("level","height")
// var result = yifu1.omit(["level","height"])


/**
* 3. keys方法 
* 用来获取所有的属性名
* 得到一个数组
*/

var result = yifu1.keys()

/**
* 4. values 方法 
* 用来获取所有的属性值
* 得到一个数组
*/

// var result = yifu1.values()

/**
* 5. pairs 方法 
* 把每个kv对儿组成数组,
* 以二维数组的形式列出所有的属性及值
*/

var result = yifu1.pairs()
```

### 7 events 自定义事件

在backbone中用Evnets表示事件对象，但是它是单体对象，所以我们不要直接使用它，要将它的方法和属性继承下来.

继承过程中，后面对象会向前面的对象添加属性和方法，我们为了避免冲突，故对空对象添加属性和方法

```
var myEvent = _.extend({}, Backbone.Events)
```
### 7.1 Backbone 可以用的事件方法

on 监听事件

off 取消事件

trigger 触发事件

once 绑定事件, 只能触发一次, 触发一次后就会移除这个事件.


#### 多对象之间的消息监听与注册

listenTo 一个对象监听另一个对象的事件

stopListening 停止监听某事件

listenToOnce 监听事件, 只能被触发一次


### 7.3 事件的命名空间

在订阅/或注册消息的时候，我们可以添加命名空间，此时，触发或取消事件的时候,也要添加上命名空间.


```

//利用underscore的extend方法为Backbone扩展自定义事件

var myEvents = _.extend({},Backbone.Events)
console.log(myEvents);

//1. on 订阅事件
/**
* @para1 自定义的事件名.采用命名空间来定义事件, 也需要用命名空间取消或触发相应事件
* @para2 回调函数, 回调可以用一个变量来接收自定义事件时传入的数据
*/
myEvents.on("haha",function(msg){
	console.log(msg);
})

//命名空间事件
myEvents.on("haha:ev1",function(msg){
	console.log(msg);
})

//2. trigger 触发事件
/**
* @para1 事件名
* @para2 data数据
*/
myEvents.trigger("haha","事件")
//命名空间事件
myEvents.trigger("haha:ev1","事件 命名空间")

//3. off 取消事件
/**
* @para1 事件名
* @para2 data数据
*/

myEvents.on("eve2",function(msg){
	console.log(msg);
})
//命名空间事件
myEvents.off("eve2") //取消事件
myEvents.trigger("eve2","事件2")

//取消用命名空间命名的事件
myEvents.off("haha:ev1")


// 4. 不同事件对象之间的相互监听

var ev1 = _.extend({},Backbone.Events);
var ev2 = _.extend({},Backbone.Events);
var ev3 = _.extend({},Backbone.Events);

/**
* ev1 监听ev2 ev3 的change事件 
* @para1 要监听的事件对象名
* @para2 事件名称
* @para3 回调函数
*/
ev1.listenTo(ev2,"change2",function(msg){
	console.log(msg);
})

ev1.listenTo(ev3,"change3",function(msg){
	console.log(msg);
})

// ev2,ev3分别触发 change事件, ev1都能监听到
ev2.trigger("change2","EV2事件");
ev3.trigger("change3","EV3事件");

/**
* 取消监听
* 取消ev1 对ev2 的change事件的监听
* @para1 事件对象
* @para2 事件名称
*/

ev1.stopListening(ev2,"change");

```

### 7.4 backbone 的内置事件目录

Catalog of Events（事件目录） 

下面是Backbone 内置事件的完整列表，带有参数。 你也可以在Models（模型），Collection（集合），Views（视图）上自由地触发这些事件，只要你认为合适。 收藏和意见，你认为合适。 Backbone 对象本身混入了Events，并且可用于触发任何全局事件，只要您的应用程序的需要。


"add" (model, collection, options) — 当一个model（模型）被添加到一个collection（集合）时触发。

"remove" (model, collection, options) — 当一个model（模型）从一个collection（集合）中被删除时触发。

"reset" (collection, options) — 当该collection（集合）的全部内容已被替换时触发。

"sort" (collection, options) — 当该collection（集合）已被重新排序时触发。

"change" (model, options) — 当一个model（模型）的属性改变时触发。

"change:[attribute]" (model, value, options) — 当一个model（模型）的某个特定属性被更新时触发。

"destroy" (model, collection, options) —当一个model（模型）被destroyed（销毁）时触发。

"request" (model_or_collection, xhr, options) — 当一个model（模型）或collection（集合）开始发送请求到服务器时触发。

"sync" (model_or_collection, resp, options) — 当一个model（模型）或collection（集合）成功同步到服务器时触发。

"error" (model_or_collection, resp, options) — 当一个model（模型）或collection（集合）的请求远程服务器失败时触发。

"invalid" (model, error, options) — 当model（模型）在客户端 validation（验证）失败时触发。

"route:[name]" (params) —  当一个特定route（路由）相匹配时通过路由器触发。

"route" (route, params) — 当任何一个route（路由）相匹配时通过路由器触发。

"route" (router, route, params) — 当任何一个route（路由）相匹配时通过history（历史记录）触发。

"all" — 所有事件发生都能触发这个特别的事件，第一个参数是触发事件的名称。

一般来说，事件触发（例如model.set，collection.add或者其他事件）后就会执行回调函数，但是如果你想阻止回调函数的执行，你可以传递{silent: true}作为参数。很多时候，这是一个好的方法。通过在回调函数里传输一个特定的判断参数，会让你的程序更加出色。 一般而言，事件触发（model.set, collection.add,等等...）后就会调用一个函数，但是如果你想阻止事件被触发， 您可以传递{silent: true}作为一个选项。注意，这中情况很少， 甚至从来没有， 一个好主意。 通过在选项中传递一个特定的标记，回调函数里传输一个特定的判断参数 并且选择忽略，会让你的程序更加出色。


### 7.5 backbone 不同模块之间的事件消息传递

如果采用seajs或requirejs之类的模块化编程, 不同模块之间的自定义事件是无法通过events来传递的.

解决思路 : 

1. 把自定义事件绑定在一个全局对象上.
2. 在每个需要传递自定义事件的模块中引入含有自定义事件(或观察者模式)的js包.

### 7.5.1 方法1 把事件绑定在一个全局变量上

在全局定义事件对象 var myEvents = _.extend({},Backbone.Events);
这样在每个模块中就可以用这个消息系统了

### 7.5.2 方法2 需要用的模块都引同一个观察者模式js包.

每个需要使用自定义事件的模块中都引入同一个含有自定义事件的js包.

### 7.5.3 方法3 直接使用Backbone 的事件

Backbone.on("haha",cb);

Backbone.trigger("haha");

由于Backbone是全局对象, 所以可以在不同模块直接传递事件.

### 8. router路由

backbone 的路由功能用来创建单页面引用程序(SPA)比较适合

### 8.1 创建路由

 通过扩展方法来创建路由

### 8.2. 在属性 routes中配置路由规则

通过'/'进行路由切分的，如果想自由匹配就要在前面加上'：'

如果想匹配 #/search/clothes/num/1 clothes和1是可以自由匹配的

 '#/search/:query/num/:page'

 '#search/:query/num/:page'

（注意，第一个'/'是可有可无的）

比如'home' 可以匹配到 #home或者#/home

*other 

表示其他规则都匹配到该路由下，注意我们通常将该规则放到最后面


```
// 创建一个路由类
var Router = Backbone.Router.extend({
	//设置路由规则
	routes: {
		home: 'showHome',
		'search/:query/num/:page': 'showSearch',
		// "*"表示匹配所有的情况, 所以要放在规则的最下面
		'*other' : 'showIndex'
	},
	showHome: function () {
		var view = new HomeView({
			el: $('#app')
		})
		// 将视图渲染到页面中
		view.render();
	},
	showSearch: function (query, page) {
		var view = new SearchView({
			el: $('#app')
		});
		// 渲染页面
		view.render(query, page)
	},
	showIndex : function(){

	}
})
// 实例化路由
var router = new Router();
// 启动路由
Backbone.history.start();

//路由事件; 路由改变时会触发
Backbone.history.on('route', function (e) {
	e就是创建的 router 对象
	console.log(e)
})

```

### 8.3 路由的事件
route的事件是对Backbone.history添加的，事件对象就是我们写在路由类中的routes

