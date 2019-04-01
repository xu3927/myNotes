# js添加 查找或删除css样式表中的样式

<p>有时候我们需要获取或修改样式表中的一些样式,但是通过dom元素无法获取该样式</p>
<p>
	如: css3中定义动画关键帧的 keyframes 样式无法通过dom元素来获取或修改. 此时可以通过以下方法来操作
</p>
<h4>1. 获取样式表</h4>
<p>js中可以通过 document.styleSheets 来获取样式表对象</p>
<p>在控制台中可以看到该对象的结构</p>
<p><img src="./images/chatu/csssheet.png" alt="" /></p>
<h4>2. 操作样式</h4>

```javascript
//插入一个样式
var str = "@-webkit-keyframes hahaha{from{color:#da0dd6;}to{color:#e63f3f;}}" ;
document.styleSheets[0].insertRule(str, 0);
//第二个参数表示在第几个位置插入样式


//获取某个选择器的样式
var rulesArr = document.styleSheets[0].rules || document.styleSheets[0].cssRules
for (var i=0;i< rulesArr.length; i++) { if ( rulesArr[i].selectorText=="选择器" ) { console.log(rulesArr[i]) }}
 //通过删除样式表中的某个选择器的样式 var rulesArr=document.styleSheets[0].rules || document.styleSheets[0].cssRules for (var i=0;i<
 rulesArr.length; i++) { if ( rulesArr[i].selectorText=="选择器" ) { document.styleSheets[0].removeRule(i); }} 
```