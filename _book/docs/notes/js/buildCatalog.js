
// <!-- 自动生成目录 -->
//原理, 提取页面内h1 - h6标签, 生成目录追加到页面内第一个h1标签前面 或 body的第一个子节点
//同时为每个目录都设置了锚点

(function () {

//遍历页面内所有的标题元素(h1-h7);
//将内容提取出来插入到页面元素 " <div class="catalog" id="catalog"> <ul></ul></div> " 中

var allDom = document.body.getElementsByTagName("*");
var domStr = ""; //要插入到页面中的domStr
//迭代所有的dom元素,并拼接为字符串
domIterator(allDom,function(dom,n){
	switch (dom.tagName) {
		case "H1":
			domStr += toItemDomStr(dom,"bt1",n);
			dom.setAttribute("id", "catalogAnchor" + n);
			break;
		case "H2":
			domStr += toItemDomStr(dom,"bt2",n);
			dom.setAttribute("id", "catalogAnchor" + n);
			break;
		case "H3":
			domStr += toItemDomStr(dom,"bt3",n);
			dom.setAttribute("id", "catalogAnchor" + n);
			break;
		case "H4":
			domStr += toItemDomStr(dom,"bt4",n);
			dom.setAttribute("id", "catalogAnchor" + n);
			break;

		case "H5":
			domStr += toItemDomStr(dom,"bt5",n);
			dom.setAttribute("id", "catalogAnchor" + n);
			break;

		case "H6":
			domStr += toItemDomStr(dom,"bt6",n);
			dom.setAttribute("id", "catalogAnchor" + n);
			break;
	}

})


var oCatalog = document.createElement("div");
oCatalog.setAttribute("class", "catalog");

// var oCatalog = document.querySelector("#catalog ul");
oCatalog.innerHTML = '<p>目录:</p><ul>' + domStr + '</ul>' ;
//追加到页面上
var h1Dom = document.getElementsByTagName("H1");
//如果页面中没有h1标签, 就在body的最前面插入目录
if(h1Dom.length == 0){
	console.log("111");
	document.body.insertBefore(oCatalog,allDom[0]);
}else{
	h1Dom[0].parentNode.insertBefore(oCatalog,h1Dom[0]);
}

//dom迭代器
/**
 * @domArr dom数组
 * @ cb 回调函数
 * 回调中2个参数, 分别是遍历到的dom元素, 索引值
 */
function domIterator (domArr,cb) { 
	for(var i = 0 ,len = domArr.length; i < len -1 ; i ++){

		cb(domArr[i],i)
	}
}

//生成目录条目dom字符串
/**
 * @ dom 原生的dom元素
 * @ className 要生成的li的className; 值为 bt1,bt2...
 * return domStr 如 '<li>1. 简介</li>' ;
 */
function toItemDomStr (dom,className,n) {
	 var val = dom.innerHTML;
	 var _domStr = '<li class = "' + className + '" ><a href="#catalogAnchor' + n + '">' + val + '</a></li>';
	 return _domStr;
}

	 
})()