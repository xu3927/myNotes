# js中的隐式转化

### 一、 运算中存在的隐式类型转换 

1， “+”运算符

```
var a = 11, b = '22';
var c = a + b;
```

这里引擎将会先把a变成字符串"11"再与b进行连接，变成了"1122"。有人会有疑问，为什么不把b变成数字22再进行算术加运算呢，这样的话c就是33了。没有为什么，当运算符“+”两边一个是数字类型，一个是字符串类型时，js引擎规定进行字符串连接运算而非算术加运算。利用运算符“+”这个特性，可以很方便的将Number转换成String。如

```
var a = 11;
alert(typeof a); //-->number
a = a + '';
alert(typeof a); //-->string
```
2，“-”运算符

“-”可以是一元运算符（取负），也可以是二元（减法运算）的。如

```
var a = 11, b = '5';
var c = a - b;
alert(typeof c); //--> number
```
这里与上面的“+”相反，会把字符串b隐式的转换成数字5再进行算术减法运算。利用这个特性，可以很方便的将String转换成Number

```
var a = '11';
a = a - '';
alert(typeof a);// -->number
```

### 二. 语句中存在的隐式类型转换

1. if

```
var obj = {name:'jack'}
if(obj){
    //do more
}

```

这里会把obj隐式的转换成Boolean类型

2，while

```
var obj = {name:'jack'}
while(obj){
    //do more
}
```
同if

3，for in时的类型转换
定义对象字面量时发生从标识符到字符串的隐式转换。

```
var person = {'name':'jack',"age":20,school:'PKU'};
for(var a in person){
    alert(a + ": " + typeof a);
}
```
这里name，age分别加单/双引号以强调其为String类型，school没有加单/双引号。我们遍历下该对象的属性，查看其类型。发现school也被隐式的转换成了String类型。实质上在定义对象的时候, key值就会被转为字符串进行存储.

数组的索引其实也是字符串类型。这着实令人惊叹，但事实的确如此。如

```
var ary = [1,3,5,7];
for(var a in ary){
    alert(a + ": " + typeof a);
}
```

### "=="判断时的隐式转换

转换步骤: 以下步骤按顺序执行.

1. "==" 两侧如果有NaN, 则返回false

2. 两侧如果有布尔, 则将布尔转为数字. 

3. "=="两侧的字符串转换. 有3种情况

>* 3.1  一侧字符串, 一侧对象. 对象使用toString()或者valueOf()进行转换；

>* 3.2 一侧字符串, 一侧是数字,  字符串转数字. 

>* 3.3 两侧都是字符串,直接比较. 

>* 3.4 其他情况返回false.

4. 一侧是数字, 一侧是对象, 调用对象的valueOf 或 toString 方法进行比较, 其它情况返回false

5. null, undefined 不会做类型转换.



### 四、 alert时存在的隐式类型转换

```
String.prototype.fn = function(){return this};
var a = 'hello';
alert(typeof a.fn()); //-->object
alert(a.fn()); //-->hello
```
给String原型上添加了个fn方法，该方法返回this，我们知道this可以理解成当前类的实例对象，既然是对象那么typeof a.fn()自然返回是object了。
关键是最后的alert(a.fn())，a.fn()返回的明明是对象，但却隐式的通过valueOf转换成了字符串“hello”显示。
但是如果用console.log(a.fn()) 输出的是String对象

同样的情况发生在数字类型上，如

```
Number.prototype.fn = function(){return this};
var a = 10;
alert(typeof a.fn());//-->object
alert(a.fn()); //-->10
```
a.fn()返回的是对象类型，但在alert(a.fn())时会隐式的将其转换成数字。
但是如果用console.log(a.fn()) 输出的是String对象


### 五. 数组的隐式转化
```
var arr = new Array();
// 或 var arr = [];
```

我们知道，初始化后，即使数组arr中没有元素，也是一个object。

```
typeof arr;
// "object"
```
既然是object，用于判断条件时就会被转化为true

```
if(arr)console.log("it's true");
// it's true
```
但是，如果将arr与布尔值比较：

```
arr == false;
// true
arr == true;
// false
```

可是，如果把arr转化为Boolean，的确是true：


```
Boolean(arr);
// true
```

那arr与布尔值比较时，到底发生了什么？

原来，任意值与布尔值比较，都会将两边的值转化为Number。

如arr与false比较，false转化为0，而arr为空数组，也转化为0：

```
Number(false)
// 0
Number(arr)
// 0
```

所以，当空数组作为判断条件时，相当于true。当空数组与布尔值直接比较时，相当于false。

也就出现了以下令人绕圈的现象：

```
[] == ![]; // true

 // ![] 转为布尔值为false;  在"=="比较中, 对象与布尔值都会转为Number 0 ;  所以是true
```

如何避免数组与布尔值比较时出现的坑呢？可以先把数组转化为布尔值：

```
Boolean(arr) == true;
// true
```
有同学问：

new Array() == [];
必须是false，就和new Array() == new Array()一样。是不同的两个对象。

### 六. 对象到数字的转化过程. 

对象到数字的转换过程如下：

如果对象具有valueof（）方法，后者返回一个原始值，则JavaScript将这个原始值转换为数字并返回；否则，如果对象具有toString（）方法，后者返回一个原始值，JavaScript将这个字符串转换为数字并返回；否则，报错。数组继承了默认的valueOf()方法，但是数组、函数和正则表达式调用此方法后，只返回对象本身，因此转换为数字，还会继续调用toString（）方法，空数组调用toString（）返回空字符串，转换为数字为0，new Array(1)同样因为虽然长度为1，但值为undefined，转换为数字仍未0

