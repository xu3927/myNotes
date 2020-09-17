# flex 弹性盒布局

## 相关概念

flex 布局模式有自己的一套新的描述概念, 如下图

![基本概念](./images/chatu/flexbox1.png)

- 两个轴 axis: 主轴 main axis, 侧轴 cross axis
	- flex-direction: 确定主轴, 轴线改变, justify-content, align-items的行为也会改变方向.
	- justify-content: 主轴方向排列方式.
	- align-items: 侧轴排列方式.
	- align-self: 单个项目在侧轴方向的排列方式. 会覆盖align-items属性
- 方向 direction: main(cross) start(end). 描述方向的起点, 终点
	- order: 将项目的序号和展现顺序联系起来, 决定元素的排列顺序.
	- flex-flow: flex-direction 和 flex-warp 属性的简写, 决定元素排布
- 行Line:  根据 flex-wrap 属性，弹性项目可以排布在单个行或者多个行中。此属性控制侧轴的方向和新行排列的方向。
- 尺寸 Dimension: 根据弹性容器的主轴与侧轴，弹性项目的宽和高中，对应主轴的称为主轴尺寸(main size) ，对应侧轴的称为 侧轴尺寸(cross size)。
	- min-height 与 min-width 属性初始值将为 0。
	- flex: 该属性是flex-grow, flex-shrink, flex-basis属性的简写, 描述弹性项目整体的伸缩性.

## 容器属性

- display: flex;
- display: inline-flex; 弹性容器会做为单个不可分割的行内元素
- flex-direction: row | row-reverse | column | column-reverse;
- flex-wrap: nowrap | wrap | wrap-reverse (从最后一行排列, 如果最后一行不满的话会空出后面的位置,不会补上来);
- justify-content: center | flex-start (默认值) | flex-end | space-between (元素之间留空隙, 与父盒子边缘之间没有空隙) | space-around(与父盒子边缘之间也有空隙); 主轴上的分布方式
- align-items: base-line(基准线) | flex-start | flex-end | center | stretch（拉伸的 默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
- flex-flow: <flex-direction> || <flex-wrap>; 两个属性组成的复合属性
- align-content: flex-start | flex-end | center | space-between | space-around | stretch; 定义多根轴线的对齐方式.

## 项目属性

- order: Integer. 会按该序号排序
- flex-grow: number. 默认0, 放大比例. 为0 则即使有剩余空间, 也不放大
- flex-shrink: number. 默认1, 不能为负. 收缩比例. 为1则如果空间不够, 则自动收缩.
- flex-basis: <length> | auto; /* default auto */. 项目所占拒主轴的空间（main size, 浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
- align-self: auto | flex-start | flex-end | center | baseline | stretch; 可以定义项目自身的对齐方式.
- flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ].  flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值






