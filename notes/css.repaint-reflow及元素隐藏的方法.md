# 让元素隐藏的方法总结

- 1. 利用定位, 移动到页面外. 配合overflow:hidden;

fix, absolute  定位不占标准流.  无法点击
relative 仍然会占标准流, 会渲染dom, 无法点击, 影响子元素

- 2. 利用translate, overfolw:hidden;

占标准流,  无法点击, 影响子元素

- 3. height:0; overflow:hidden; 

渲染dom, 无法点击, 不占空间, 影响子元素

- 4. scale(0)

不占标准流, 无法点击. 影响子元素

- 5. 透明度

opacity: 0; 
占有标准流, 渲染dom, 可以点击, 影响子元素

- 6. display: none; 

渲染dom, 不占标准流, 无法点击, 影响子元素

- 7. visibility: hidden;

渲染dom, 占标准流, 无法点击, 不影响子元素(子元素设置visibility: visible仍然可以显示)

### repaint reflow 

渲染 重绘

### 概念

- 1. reflow: 修改dom的color, background, outline等属性不影响dom结构布局时触发, 

- 2. repaint: 修改元素的属性会影响dom结构,布局时触发, 此时会使自身及所有父辈元素重新渲染, 性能消耗比较大. 

### 触发时间

-1. dom添加, 修改, 删除(reflow + repaint)
-2. 不涉及布局的样式改变, repaint
-3. 影响dom布局位置的样式 reflow + repaint
-4. resize浏览器, 窗口 reflow + repain
-5. 读取元素的某些属性时 ()offsetLeft、offsetTop、offsetHeight、offsetWidth、 scrollTop/Left/Width/Height、clientTop/Left/Width/Height、 getComputedStyle()、currentStyle(in IE) 

### 如何避免

1. 先将元素从dom中删除, 完成样式修改后再插入dom
2. 将元素设为display:none. 样式修改完成再改为display:block;
3. 如果要创建多个dom节点, 可以使用DocumentFragment, 一起创建完成再插入dom
4. 集中修改样式
4.1 一条一条修改样式会触发多次repaint, 通过修改class只触发一次
4.2 使用cssText修改样式

```javascript

element.style.width=”80px”;  //reflow
element.style.height=”90px”; //reflow
element.style.border=”solid 1px red”; //reflow
// 以上就产生多次reflow，调用的越多产生就越多
element.style.cssText=”width:80px;height:80px;border:solid 1px red;”; //reflow　

```
4.4 缓存Layout属性值 

var left=elem.offsetLeft; 多次使用left也就产生一次reflow

4.5 设置元素的position为absolute或fixed 元素脱离标准流，也从DOM树结构中脱离出来，在需要reflow时只需要reflow自身与下级元素

4.6 尽量不要用table 布局
　　　　table元素一旦触发reflow就会导致table里所有的其它元素 reflow。在适合用table的场合，可以设置table-layout为auto或fixed，这样可以让table一行一行的渲染，这种做法也是为了限制reflow的影响范围

4.7 避免使用expression,他会每次调用都会重新计算一遍(包括加载页面)