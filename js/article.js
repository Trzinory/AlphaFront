

window.onload=function(){
	var base=$(document).width();
	$(".fill").css("width",(base-600)/2+"px");

	$(window).resize(function(){
		base=$(document).width();
		$(".fill").css("width",(base-600)/2+"px");
	});

	//顶栏
	$("#list_top li:eq(0)").mouseover(function(){
		var src=$("#list_top img:eq(0)").attr("src");
		var src2=src.replace(/settings/,"settings2");
		$("#list_top img:eq(0)").attr({"src":src2});
	});
	$("#list_top li:eq(1)").mouseover(function(){
		var src=$("#list_top img:eq(1)").attr("src");
		var src2=src.replace(/pen/,"pen2");
		$("#list_top img:eq(1)").attr({"src":src2});
	});
	$("#list_top li:eq(2)").mouseover(function(){
		var src=$("#list_top img:eq(2)").attr("src");
		var src2=src.replace(/paperplane/,"paperplane2");
		$("#list_top img:eq(2)").attr({"src":src2});
	});
	$("#list_top li:eq(0)").mouseout(function(){
		var src=$("#list_top img:eq(0)").attr("src");
		var src2=src.replace(/settings2/,"settings");
		$("#list_top img:eq(0)").attr({"src":src2});
	});
	$("#list_top li:eq(1)").mouseout(function(){
		var src=$("#list_top img:eq(1)").attr("src");
		var src2=src.replace(/pen2/,"pen");
		$("#list_top img:eq(1)").attr({"src":src2});
	});
	$("#list_top li:eq(2)").mouseout(function(){
		var src=$("#list_top img:eq(2)").attr("src");
		var src2=src.replace(/paperplane2/,"paperplane");
		$("#list_top img:eq(2)").attr({"src":src2});
	});

	//弹出框
	$("#log").click(function(){
		$("#log_box,#log_button").css({left:"0px"});
		$("#popup,#lr_box,#log_box,#log_button").show();
		$("#move_stick").css("left",0);
		$("#lr_box input").val("");
		$(".account p,.code_check p:eq(1)").text("");
		$(".code_check:eq(0) img").attr({"src":"/getCAPTCHA/?nocache="+Math.random()});
		$("#log_box input:eq(0)").focus();
		//var h=parseInt($("#lr_box").css("height"));
		//$("#lr_box").css({top:"50%",marginTop:-h/2+"px"});
	});
	$("#reg").click(function(){
		$("#reg_box,#reg_button").css({left:"0px"});
		$("#popup,#lr_box,#reg_box,#reg_button").show();
		$("#move_stick").css("left","88px");
		$("#lr_box input").val("");
		$(".account p,.code_check p:eq(1)").text("");
		$(".code_check:eq(1) img").attr({"src":"/getCAPTCHA/?nocache="+Math.random()});
		$("#reg_box input:eq(0)").focus();
		//var h=parseInt($("#lr_box").css("height"));
		//$("#lr_box").css({top:"50%",marginTop:-h/2+"px"});
	});
	$("#login").click(function(){
		if($("#move_stick").css("left")=="88px"){
			$("#log_box,#log_button").css({left:"-450px"});
			$("#reg_box,#reg_button").animate({left:"450px"},300);
			setTimeout(function(){
				$("#reg_box,#reg_button").hide();
				$("#log_box,#log_button").show();
				$("#log_box,#log_button").animate({left:"0px"},300);
			},300);
			setTimeout(function(){
				$("#log_box input:eq(0)").focus();
				$(".code_check:eq(0) img").attr({"src":"/getCAPTCHA/?nocache="+Math.random()});
			},600);
			$("#move_stick").animate({left:0},200);
		}
		else {
			$("#log_box input:eq(0)").focus();
		}
	});
	$("#regis").click(function(){
		if($("#move_stick").css("left")=="0px"){
			$("#reg_box,#reg_button").css({left:"450px"});
			$("#log_box,#log_button").animate({left:"-450px"},300);
			setTimeout(function(){
				$("#log_box,#log_button").hide();
				$("#reg_box,#reg_button").show();
				$("#reg_box,#reg_button").animate({left:"0px"},300);
			},300);
			setTimeout(function(){
				$("#reg_box input:eq(0)").focus();
				$(".code_check:eq(1) img").attr({"src":"/getCAPTCHA/?nocache="+Math.random()});
			},600);
			$("#move_stick").animate({left:"88px"},200);
		}
		else {
			$("#reg_box input:eq(0)").focus();
		}
	});
	$(".code_check:eq(0) img,.code_check:eq(0) > p").click(function(){
		$(".code_check:eq(0) img").attr({"src":"/getCAPTCHA/?nocache="+Math.random()});
	});
	$(".code_check:eq(1) img,.code_check:eq(1) > p").click(function(){
		$(".code_check:eq(1) img").attr({"src":"/getCAPTCHA/?nocache="+Math.random()});
	});
	$("#close,#popup_bottom").click(function(){
		$("#popup,#lr_box,#log_box,#reg_box,#log_button,#reg_button,#origin_pic").hide();
	});
	//submit时判断框内数据是否符合要求
	$("#log_box").submit(function(e){
		if(!($("#log_box input:eq(0)").val())){
			$("#log_box p:eq(0)").text("值为空！");
			flag1[0]=0;
		}
		if(!($("#log_box input:eq(1)").val())){
			$("#log_box p:eq(1)").text("值为空！");
			flag1[1]=0;
		}
		if($("#log_box input:eq(2)").val().length!=4){
			$("#log_box p:eq(3)").text("位数不够！");
			flag1[2]=0;
		}
		else{
			flag1[2]=1;
		}
		if(flag1[0]==0||flag1[1]==0||flag1[2]==0){
			e.preventDefault();
		}
	});
	$("#reg_box").submit(function(e){
		if(!($("#reg_box input:eq(0)").val())){
			$("#reg_box p:eq(0)").text("值为空！");
			flag2[0]=0;
		}
		if(!($("#reg_box input:eq(1)").val())){
			$("#reg_box p:eq(1)").text("值为空！");
			flag2[1]=0;
		}
		if(!($("#reg_box input:eq(2)").val())){
			$("#reg_box p:eq(2)").text("值为空！");
			flag2[2]=0;
		}
		if($("#reg_box input:eq(3)").val().length!=4){
			$("#reg_box p:eq(4)").text("位数不够！");
			flag2[3]=0;
		}
		else{
			flag2[3]=1;
		}
		if(flag2[0]==0||flag2[1]==0||flag2[2]==0||flag2[3]==0){
			e.preventDefault();
		}
	});
	$("#log_button").click(function(){
		$('#log_box').submit();
	});
	$("#reg_button").click(function(){
		$("#reg_box").submit();
	});
	//登录注册输入框字符检测
	var pattern1=/[^!-z]/,pattern2=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,pattern3=/^[\u4e00-\u9fa5A-Za-z0-9_]+$/;
	var flag1=new Array(),flag2=new Array();
	$("#log_box input:eq(0)").on({
		"input":function(){
			var str=$(this).val();
			if(pattern1.test(str)){
				$("#log_box p:eq(0)").text("字符有误");
				flag1[0]=0;
			}
			else {
				$("#log_box p:eq(0)").text("");
				flag1[0]=1;
			}
		},
		"blur":function(){
			var str=$(this).val();
			if(str&&!pattern2.test(str)){
				$("#log_box p:eq(0)").text("邮箱格式有误");
				flag1[0]=0;
			}
		}
	});
	$("#log_box input:eq(1)").on("input",function(){
		var str=$(this).val();
		if(pattern1.test(str)){
			$("#log_box p:eq(1)").text("字符有误");
			flag1[1]=0;
		}
		else {
			$("#log_box p:eq(1)").text("");
			flag1[1]=1;
		}
	});
	$("#reg_box input:eq(0)").on({
		"input":function(){
			var str=$(this).val();
			if(pattern1.test(str)){
				$("#reg_box p:eq(0)").text("字符有误");
				flag2[0]=0;
			}
			else {
				$("#reg_box p:eq(0)").text("");
				flag2[0]=1;
			}
		},
		"blur":function(){
			var str=$(this).val();
			if(str&&!pattern2.test(str)){
				$("#reg_box p:eq(0)").text("邮箱格式有误");
				flag2[0]=0;
			}
		}
	});
	$("#reg_box input:eq(1)").on("input",function(){
		var str=$(this).val();
		if(str&&!pattern3.test(str)){
			$("#reg_box p:eq(1)").text("字符有误");
			flag2[1]=0;
		}
		else {
			$("#reg_box p:eq(1)").text("");
			flag2[1]=1;
		}
	});
	$("#reg_box input:eq(2)").on({
		"input":function(){
			var str=$(this).val();
			if(pattern1.test(str)){
				$("#reg_box p:eq(2)").text("字符有误");
				flag2[2]=0;
			}
			else {
				$("#reg_box p:eq(2)").text("");
				flag2[2]=1;
			}
		},
		"blur":function(){
			var str=$(this).val();
			if(str.length<8){
				$("#reg_box p:eq(2)").text("密码长度至少为8位");
				flag2[2]=0;
			}
		}
	});

	//随拉动条变化
	var scrollFlag=0;
	//0表示视窗在最顶，1表示不在最顶
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		var flag;
		if(top>0){
			flag=1;
		}
		else {
			flag=0;
		}
		//从顶滑下
		if(flag==1&&scrollFlag!=flag){
			$("#nav_top").css("background-color","rgba(102,153,255,0.8)");
			scrollFlag=1;
		}
		//从下滑到顶
		else if(flag==0&&scrollFlag!=flag){
			$("#nav_top").css("background-color","rgba(102,153,255,1)");
			scrollFlag=0;
		}
	});
	//返回按钮
	$("#backwards").click(function(){
		if(window.history.back()){}
		else 
			window.open("./index.html","_self");
	});
	

	//评论栏功能
	var comment=document.getElementById("comment");
	var pos=0;
	for(var i=0;i<$("#expression img").length;i++){
		$("#expression img:eq("+i+")").click(function(){
			if(window.getSelection().containsNode(comment,true)){
				var img=document.createElement("img");
				img.src=this.src;
				var range=window.getSelection().getRangeAt(0);
				range.insertNode(img);
			}
		});
	}

	//send message
	$("#send_message").click(function(){
		var s=$("#comment").html();
		alert(s);
		$("#comment").html(s.toString());
	});


		var page=document.getElementById("page").childNodes;
		for(var i=0;i<Math.floor(page.length/2)-2;i++){
			page[i*2+1].onclick=function(){
				for(var j=0;j<Math.floor(page.length/2);j++){
					page[j*2+1].style.backgroundColor="white";
				}
				this.style.backgroundColor="#c1c1c1";
			}
		}

		//侧栏功能
		var nav=document.getElementsByClassName("nav");
		nav[0].onclick=function(){
			if(window.history.back()){}
			else 
				window.open("./index.html","_self");
		}
		nav[1].onclick=function(){
			window.scrollTo(0,0);
		}
		nav[1].onmouseover=function(){
			this.style.backgroundColor="#cccccc";
		}
		nav[1].onmouseout=function(){
			this.style.backgroundColor="#e78170";
			if(document.body.scrollTop==0)
				this.style.backgroundColor="#414141";
		}
		window.onscroll=function(){
			if(document.body.scrollTop!=0)
				nav[1].style.backgroundColor="#e78170";
			else
				nav[1].style.backgroundColor="#414141";
		}
		if(document.body.scrollTop!=0)
				nav[1].style.backgroundColor="#e78170";
}