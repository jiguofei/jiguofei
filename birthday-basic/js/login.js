$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="张然" &&  pwd=="314"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			requestFullScreen();
			setTimeout(function(){
				location.href="1.html";
			},2000);
		}
	else{
		alert("不对，不对，重新输入");
	}
});

function requestFullScreen(element) {
	var element=document.documentElement;
	var requestMethod = element.requestFullScreen || //W3C
	element.webkitRequestFullScreen || //Chrome等
	element.mozRequestFullScreen || //FireFox
	element.msRequestFullScreen; //IE11
	if (requestMethod) {
		requestMethod.call(element);
	}
	else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
		 wscript.SendKeys("{F11}");
		}
	}
}
