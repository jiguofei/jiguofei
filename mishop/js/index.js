// 选项卡
// 1  tabs设置时间选项卡
// 2   lists设置商品详情
//获取ui中id标签和li元素
var tabs = document.getElementById("tabs").getElementsByTagName("li");

var lists = document.getElementById("lists").getElementsByTagName("ul");

//使用for循环遍历获取所有
for(var i = 0; i < tabs.length; i++) {
    //点击事件获取名称
    tabs[i].onclick = showlist;
}
//名称
function showlist() {
    //for循环遍历长度
    for(var i = 0; i < tabs.length; i++) {
        //this指向对象 类名为active
        if (tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className="clearfix active";
            //    否则为空
        }else {
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }
}


