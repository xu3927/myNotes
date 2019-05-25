//动画进场和出场的函数
var inArray =  [null ,function(){},function(){},function(){},function(){},function(){},function(){},function(){}];
var outArray = [null ,function(){},function(){},function(){},function(){},function(){},function(){},function(){}];

//首屏的资源是否加载完毕
var already = false;
//设置每个屏幕的进场和出场动画
inArray[1] = function(){
	//如果已经加载好了首屏的所有图片
	if(already){
		//调用go函数
		go();
		//后面语句不执行了
		return;
	}
	//资源
	var R = [
		{
			"src": "images/b1_01.png" ,
			"className" : "b1_01"
		},
		{
			"src": "images/b1_02.png" ,
			"className" : "b1_02"
		},
		{
			"src": "images/b1_03.png" ,
			"className" : "b1_03"
		},
		{
			"src": "images/b1_03_btn.png" ,
			"className" : "b1_03_btn"
		},
		{
			"src": "images/b1_04.png" ,
			"className" : "b1_04"
		}
	];

	//计数器
	var count = 0;
	//版心容器
	var $box = $(".no1 .inner_c");

	for(var i = 0 ; i < R.length ; i++){
		//创建一个图片，图片是孤儿图片
		var image = new Image();
		//设置src,HTTP请求将发出
		image.src = R[i].src;
		image.className = R[i].className;
		//监听
		image.onload = function(){
			//计数器加1
			count++;
			//将加载好的这个图片转为jQuery对象，然后添加到DOM树上
			$(this).hide().appendTo($box);
			//如果所有图片加载完毕
			if(count == R.length){
				//把already变量变为true，表示所有资源加载完毕了
				already = true;
				//执行go函数
				go();
			}
		}
	}

	function go(){
		//让提示文本消失
		$("#loading").hide();
		//龙卷风
		$(".no1 .b1_02").show()
		.css({"margin-left":"-100px","opacity" : 0})
		.animate({"margin-left":0 , "opacity" : 1},1000);

		//字
		$(".no1 .b1_03").show()
		.css({"margin-right":"-100px","opacity" : 0})
		.animate({"margin-right":0   , "opacity" : 1},1000);

		//按钮
		$(".no1 .b1_03_btn").show()
		.css({"margin-right":"-100px","opacity" : 0})
		.animate({"margin-right":0   , "opacity" : 1},1000);

		//石头
		$(".no1 .b1_01").delay(1000).fadeIn();
		$(".no1 .b1_04").delay(1000).fadeIn();
	}
}

outArray[1] = function(){
	$(".no1 img").fadeOut();
}


inArray[2] = function(){
	$(".b2_01").css({"margin-left":"-300px","margin-top":"500px","opacity":0})
	.animate({"margin-left":0,"margin-top":"-200px","opacity":1},1000);

	$(".qiqiu").hide().each(function(i){
		$(this).delay(i*200).fadeIn();
	})
}

outArray[2] = function(){
	$(".b2_01").animate({"margin-left":"-300px","margin-top":"500px","opacity":0});

	$(".qiqiu").fadeOut();
}


inArray[3] = function(){
	//花
	$(".b3_01").show().velocity({"rotateZ":"0deg"},0).delay(500).velocity({"rotateZ":"360deg"},1000);

	//6个小方块文字，先用自己的data-top、data-left属性记忆住自己的top、left值。
	//我们喜欢把自己创建的HTML属性用data-开头。
	$(".info li").each(function(){
		$(this).attr("data-top",$(this).css("top"));
		$(this).attr("data-left",$(this).css("left"));
	});

	//瞬间移动到中间
	$(".info li").show().css({"left":400,"top":250});

	//打开
	$(".info li").each(function(){
		$(this).delay(200).animate({"top" : $(this).attr("data-top") , "left" : $(this).attr("data-left")},600);
	});
}
outArray[3] = function(){
	$(".b3_01").fadeOut();

	$(".info li").fadeOut();
}

