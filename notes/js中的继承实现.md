[TOC]

# js中的继承实现方法

### 1. 通过原型链继承实例

设置子类的原型为父类的实例, 通过原型链实现对父类属性方法的继承.

```javascript
// 动物类作为父类
function Animal(name){
    this.name = "动物";
    this.colors = ["red", "blue", "green"];
}

Animal.prototype = {   
    eat : function(){
        console.log(this.name + '吃东西');
    }
}

// 定义哺乳动物类, 继承动物类
function Buru(name){
    this.name = "哺乳动物";
    this.legs = "4",
    this.bear = "胎生"
}

// 通过设置原型链继承动物父类
Buru.prototype = new Animal();

// 设置原型链的指向后, Buru 构造函数会丢失构造器. 此时可以让构造器重新指向一下
Buru.prototype.constructor = Buru;


// 再添加自身的方法,需要写在继承之后,并且不能使用对象,否则会覆盖继承的父类
Buru.prototype.feed = function(){
    console.log(this.name + "通过哺乳方式喂养幼崽")
} 

var cat = new Buru();
cat.colors.push("haha"); //修改cat实例上的colors属性会影响到父类.
var mouse = new Buru(); //创建一个新实例
console.log(mouse.colors) //mouse的colors属性也添加了 "haha" 项


```
原型链继承能够实现对父类的继承. 

原型链继承方式的缺陷:

1. 父亲构造函数中的对象都会添加到子类的原型上, 当父对象构造函数中的属性是引用类型时,子类的实例化对象会引用同一个内存地址上的该属性. 因此修改一个子类实例的引用类型的属性时会影响到其他的子类实例.

2. 在创建子类的实例时,无法向父类的构造函数中添加参数.

由于这些问题, 单独的原型继承很少用. 

**关于contructor丢失**

创建一个函数, 则该函数会有prototype属性, 该属性有contructor属性. 

因此如果对该函数重新设置prototype后, 会丢失prototype.contructor

```JavaScript

// 创建一个函数, 则A.prototype为一个初始化的对象. 
function A () {
    
}
A.prototype.log = function () {
    console.log('AAAA');
};
// 这种对prototype赋值的方式不修改原有prototype对象, 则 
A.prototype.construtor === A // true

// 对prototype重新赋值, 则丢失contructor.
A.prototype = {};

```

### 2. 构造函数式继承

为了解决原型中包含引用类型所带来的继承性问题. 出现了构造函数式继承.

借父类的构造函数来增强子类实例，把需要继承的属性方法都装在构造函数中. 通过在子类的构造函数中调用父类构造函数实现继承.

```javascript
function Super(val){
    this.val = val;
    this.arr = [1];
    // 由于闭包, 该函数无法复用, 每个实例都会得到一个新的函数.
    this.fun = function(){
        // ...
    }
}
function Sub(val){
    Super.call(this, val);   // 核心
    // ...
}

var sub1 = new Sub(1);
var sub2 = new Sub(2);
sub1.arr.push(2);
alert(sub1.val);    // 1
alert(sub2.val);    // 2

alert(sub1.arr);    // 1, 2
alert(sub2.arr);    // 1

alert(sub1.fun === sub2.fun);   // false

```

构造函数式继承的优势: 
可以继承父类构造函数中的属性和方法.
创建实例的时候可以向父类的构造函数中传递参数.

缺点:
1. 无法继承父类原型中的属性方法
2. 对于父类中的方法函数无法复用, 每个子类实例都会得到一个新的函数. 实例多了会影响性能.

### 3. 组合继承. 

也叫做伪经典继承.结合构造函数式继承和原型式继承. 
- 把实例函数都放在原型对象上，以实现函数复用。
- 同时还要保留借用构造函数方式的优点，通过Super.call(this);继承父类的基本属性和引用属性并保留能传参的优点；
- 通过Sub.prototype = new Super();继承父类函数，实现函数复用

```javascript

function Super(){
    // 只在此处声明基本属性和引用属性
    this.val = 1;
    this.arr = [1];
}
//  在此处声明函数
Super.prototype.fun1 = function(){};
Super.prototype.fun2 = function(){};
//Super.prototype.fun3...
function Sub(){
    Super.call(this);   // 核心
    // ...
}
Sub.prototype = new Super();    // 核心

var sub1 = new Sub(1);
var sub2 = new Sub(2);
alert(sub1.fun === sub2.fun);   // true
sub1.arr === sub2.arr // false
```
组合式继承

优点:

组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为 JavaScript 中最常用的继承模式。而且， instanceof 和 isPrototypeOf()也能够用于识别基于组合继承创建的对象。

- 不存在引用类型的问题
- 可以传参
- 父类的函数方法可以复用

缺点:

父类的构造函数会执行两遍. 父类构造函数中的属性会出现2次, 实例对象本身及原型链上各一份. 而子类实例上的那一份屏蔽了子类原型上的。。。又是内存浪费

### 4. 原型式继承.

```javascript
function object(o){
function F(){}
F.prototype = o;
return new F();
}
```

在 object()函数内部，先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例。从本质上讲， object()对传入其中的对象执行了一次浅复制。来看下面的例子。


```javascript
var person = {
name: "Nicholas",
friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"

```

克罗克福德主张的这种原型式继承，要求你必须有一个对象可以作为另一个对象的基础。如果有这么
一个对象的话，可以把它传递给 object()函数，然后再根据具体需求对得到的对象加以修改即可。在这
个例子中，可以作为另一个对象基础的是 person 对象，于是我们把它传入到 object()函数中，然后该
函数就会返回一个新对象。这个新对象将 person 作为原型，所以它的原型中就包含一个基本类型值属性
和一个引用类型值属性。这意味着 person.friends 不仅属于 person 所有，而且也会被 anotherPerson
以及 yetAnotherPerson 共享。实际上，这就相当于又创建了 person 对象的两个副本。
ECMAScript 5 通过新增 Object.create()方法规范化了原型式继承。这个方法接收两个参数：一
个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。在传入一个参数的情况下，
Object.create()与 object()方法的行为相同。

```javascript
var person = {
name: "Nicholas",
friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
alert(person.friends); //"Shelby,Court,Van,Rob,Barbie
```

Object.create()方法的第二个参数与Object.defineProperties()方法的第二个参数格式相
同：每个属性都是通过自己的描述符定义的。以这种方式指定的任何属性都会覆盖原型对象上的同名属
性。例如：

```javascript
var person = {
name: "Nicholas",
friends: ["Shelby", "Court", "Van"]
};
```

### 5. 寄生组合式继承

对组合式继承的优化. 解决构造函数执行两次导致原型链上的属性富裕的问题. 完美的继承方案, 只是实现有点麻烦.

```javascript

// 原型式继承, 生成一个纯的原型对象. 功能相当于Object.crate();
function createObject (obj) {
    var F = function () {};
    F.prototype = obj;
    return new F();
}

function Super () {
    // 构造函数中定义值类型, 及引用类型
    this.val = 1;
    this.colors = ['red', 'blue', 'green'];
}
// 父类原型链上定义函数方法
Super.prototype.fn1 = function () {};
Super.prototype.fn2 = function () {};

function Sub () {
    Super.call(this);
}

// 去掉原型链上多余的父类构造函数中的属性
var _proto = createObject(Super.prototype);
// 绑定constructor属性
_proto.constructor = Sub;
// 原型链继承
Sub.prototype = _proto;

var child1 = new Sub();
var child2 = new Sub();

```

### 6. 寄生式

寄生式是一种模式（套路），并不是只能用来实现继承

```javascript

function beget(obj){   // 生孩子函数 beget：龙beget龙，凤beget凤。
    var F = function(){};
    F.prototype = obj;
    return new F();
}
function Super(){
    this.val = 1;
    this.arr = [1];
}
function getSubObject(obj){
    // 创建新对象
    var clone = beget(obj); // 核心
    // 增强
    clone.attr1 = 1;
    clone.attr2 = 2;
    //clone.attr3...

    return clone;
}

var sub = getSubObject(new Super());
alert(sub.val);     // 1
alert(sub.arr);     // 1
alert(sub.attr1);   // 1

```

注意：beget函数并不是必须的，换言之，创建新对象 -> 增强 -> 返回该对象，这样的过程叫寄生式继承，新对象是如何创建的并不重要（用beget生的，new出来的，字面量现做的。。都可以）

优点：

还是不需要创建自定义类型
缺点：

无法实现函数复用（没用到原型，当然不行）
P.S.剧情解析：有缺陷的寄生式继承 + 不完美的组合继承 = 完美的寄生组合式继承，不妨回去找找看哪里用到了寄生






