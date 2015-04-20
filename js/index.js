window.onload=function(){
	var base=$(document).width();
	$(".fill").css("width",(base-780)/2+"px");

	$(window).resize(function(){
		base=$(document).width();
		$(".fill").css("width",(base-780)/2+"px");
	});

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
			$("#intro_top").hide();
			$("#nav_top").css("background-color","rgba(102,153,255,0.8)");
			$("#search").css("margin-top","15px");
			$("#lr").css("margin-top","17px");
			$("#user").css("margin-top","0px");
			scrollFlag=1;
		}
		//从下滑到顶
		else if(flag==0&&scrollFlag!=flag){
			$("#intro_top").show();
			$("#nav_top").css("background-color","rgba(102,153,255,1)");
			$("#search").css("margin-top","25px");
			$("#lr").css("margin-top","27px");
			$("#user").css("margin-top","10px");
			scrollFlag=0;
		}
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
	$("#list_top li:eq(0)").click(function(){
		window.open("./writting.html","_self");
	});

	//弹出框
	$("#log").click(function(){
		$("#log_box,#log_button").css({left:"0px"});
		$("#popup,#lr_box,#log_box,#log_button").show();
		$("#lr_title p").css("left","-2px");
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
		$("#lr_title p").css("left","90px");
		$("#lr_box input").val("");
		$(".account p,.code_check p:eq(1)").text("");
		$(".code_check:eq(1) img").attr({"src":"/getCAPTCHA/?nocache="+Math.random()});
		$("#reg_box input:eq(0)").focus();
		//var h=parseInt($("#lr_box").css("height"));
		//$("#lr_box").css({top:"50%",marginTop:-h/2+"px"});
	});
	$("#login").click(function(){
		if($("#lr_title p").css("left")=="90px"){
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
			$("#lr_title p").animate({left:"-2px"},200);
		}
		else {
			$("#log_box input:eq(0)").focus();
		}
	});
	$("#regis").click(function(){
		if($("#lr_title p").css("left")=="-2px"){
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
			$("#lr_title p").animate({left:"90px"},200);
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
	$(".pic_box img").click(function(){
		$("#popup,#origin_pic").show();
		$("#origin_pic img").attr(src);
		var h=parseInt($("#origin_pic").css("height"));
		$("#origin_pic").css({top:"50%",marginTop:-h/2+"px"});
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

	//正文区点击
	//标题
	$(".title,.summary").click(function(){
		window.open("./article.html","_self");
	});
	//图片滚动事件
	var w=parseInt($(".pic_box img:first").css("width"))+10;
	if(window.navigator.userAgent.indexOf("Firefox")<0){
		for(var i=0;i<$(".pic_box").length;i++){
			for(var j=3;j<$(".pic_box:eq("+i+") img").length;j++){
				var image=$(".pic_box:eq("+i+") img:eq("+j+")");
				image.css("z-index",-j);
				if(j>3)
					image.css("left",-w*(j-3)/2);
				image.css("-webkit-transform","rotateY(-60deg)");
				image.css("transform","rotateY(-60deg)")
			}
		}
	}
	var picbox=document.getElementsByClassName("pic_box");
	var n=0;
	function picSlide(e){
		e=e||window.event;
		e.preventDefault();
		if(e.wheelDelta){
			if(e.wheelDelta>0)n=1;
			else n=-1;
			$("img",this).stop(true,true);
			var left1=$("img:first",this).offset().left-$(this).offset().left;
			var left2=$("img:last",this).offset().left-$(this).offset().left;
			var left=123;
			if((left1>w/2&&n>0)||(left2<3*w&&n<0))
				return;
			var pb=this;
			pb.onmousewheel=function(e){e.preventDefault()};
			setTimeout(function(){
				pb.onmousewheel=picSlide;
			},200);
			var len=$("img",this).length;
			var t=0,img,l,count=100;
			for(var i=0;i<len;i++){
				img=$("img:eq("+i+")",this);
				l=img.offset().left-$(this).offset().left;
				t=l+w*n;
				if(n<0){
					if(l>30&&t<30){
						if(img.css("-webkit-aniamtion-name")!="rotate"||img.css("aniamtion-name")!="rotate"){
							img.css("-webkit-animation","rotate .3s linear 0 1 forwards");
							img.css("animation","rotate .3s linear 0 1 forwards");
							img.css("z-index",i);
						}
						else{
							img.css("-webkit-transform","rotateY(60deg)");
							img.css("transform","rotateY(60deg)");
						}
						img.animate({left:"+="+w*n+"px"},500);
					}
					else if(l>230&&t<230){
						if(img.css("-webkit-aniamtion-name")!="rotate3"||img.css("aniamtion-name")!="rotate3"){
							img.css("-webkit-animation","rotate3 .3s linear 0 1 forwards");
							img.css("animation","rotate3 .3s linear 0 1 forwards");
							count=i;
						}
						else{
							img.css("-webkit-transform","rotateY(0deg)");
							img.css("transform","rotateY(0deg)");
						}
						img.animate({left:"+="+w*n+"px"},500);
					}
					else{
						if(img.css("-webkit-animation-name")=="rotate"||img.css("animation-name")=="rotate"||count<i){
							img.animate({left:"+="+w*n/2+"px"},"500");
						}
						else{
							img.animate({left:"+="+w*n+"px"},"500");
						}
					}
				}
				else{
					if(img.css("-webkit-animation-name")=="rotate"||img.css("animation-name")=="rotate"){
						if(l<30&&t>30){
							img.css("-webkit-animation","rotate2 .3s linear 0 1 forwards");
							img.css("animation","rotate2 .3s linear 0 1 forwards");
							img.animate({left:"+="+w*n+"px"},"500");
						}else
							img.animate({left:"+="+w*n/2+"px"},"500");
					}
					else if(l<230&&t>230){
						if(img.css("-webkit-aniamtion-name")!="rotate4"||img.css("aniamtion-name")!="rotate4"){
							img.css("-webkit-animation","rotate4 .3s linear 0 1 forwards");
							img.css("animation","rotate4 .3s linear 0 1 forwards");
							img.css("z-index",-i);
							count=i;
						}
						else{
							img.css("-webkit-transform","rotateY(-60deg)");
							img.css("transform","rotateY(-60deg)");
						}
						img.animate({left:"+="+w*n+"px"},500);
					}
					else if(count<i){
						img.animate({left:"+="+w*n/2+"px"},"500");
					}
					else{
						img.animate({left:"+="+w*n+"px"},"500");
					}
				}
			}
		}
		else if(e.detail){
			if(e.detail>0)n=-1;
			else n=1;
			$("img",this).stop(true,true);
			var left1=$("img:first",this).offset().left;
			var left2=$("img:last",this).offset().left;
			var left=123;
			if((left1>w-1&&n>0)||(left2<3*w+1&&n<0))
				return;
			$("img",this).animate({"left":"+="+w*n+"px"});
		}
    }
    for(var i=0;i<picbox.length;i++){
		picbox[i].onmousewheel=picSlide;
	}
};