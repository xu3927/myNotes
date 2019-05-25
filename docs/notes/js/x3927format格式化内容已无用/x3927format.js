

window.onload = function(){
         (function(){
    var domArr = document.getElementsByClassName("x3927format");
    var dom1 = domArr[0];
    var dom2 = domArr[1];
    var newArr = [];
    for(var i = 0; i < domArr.length; i ++ ){
        newArr.push(domArr[i]);
    }
    for(var j = 0 ; j < newArr.length ; j ++ ){
        var str = newArr[j].innerHTML; //现在标签内的字符串
        var str_new = Format(str);
        insertNode(newArr[j],str_new);
    }       
    //插入节点函数
    function insertNode(dom,str){
        var ParentNd = dom.parentNode;
        var node_new = document.createElement("div");
        node_new.setAttribute("classname", "x3927format");
        node_new.innerHTML = str;
        //插入到页面中
        ParentNd.insertBefore(node_new,dom);
        //删除scriptdom
        ParentNd.removeChild(dom);
    }
    //格式化函数   
    function Format(str){
        //替换空格 且不替换html标签中的空格
        var str = str.replace(/([^\< ]*)(  )([^\> ]*)/g,function(a,b,c,d,e,f,g){
            console.log("a]" + a,"[b]" + b,"[c]" + c,"[d]" + d,"[e]" + e,"[f]" + f,"[g]" + g);
            return b + "&nbsp&nbsp" + d;
        });
        //替换大于小于号
        // var str = str.replace(/\</g,"&lt");
        // var str = str.replace(/\>/g,"&gt");
        //替换tab键
        var str = str.replace(/[\t]/g, "&nbsp&nbsp&nbsp&nbsp");
        //替换换行符
        var str = str.replace(/[\r\n]/g, "<\/br>");
        return str;
    }  
})()
    } 