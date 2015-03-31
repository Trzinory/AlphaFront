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
		if(top!=0){
			flag=1;
		}
		else {
			flag=0;
		}
		//从顶滑下
		if(flag==1&&scrollFlag!=flag){
			$("#intro_top").css("display","none");
			$("#nav_top").css("background-color","rgba(102,153,255,0.8)");
			$("#search").css("margin-top","15px");
			$("#lr").css("margin-top","17px");
			$("#user").css("margin-top","0px");
			scrollFlag=1;
		}
		//从下滑到顶
		else if(flag==0&&scrollFlag!=flag){
			$("#intro_top").css("display","block");
			$("#nav_top").css("background-color","rgba(102,153,255,1)");
			$("#search").css("margin-top","25px");
			$("#lr").css("margin-top","27px");
			$("#user").css("margin-top","10px");
			scrollFlag=0;
		}
	});

	//图片滚动事件
	var picbox=document.getElementsByClassName("pic_box");
	var num=0,t;
	function picSlide(e){
		e=e||window.event;
		e.preventDefault();
		var d=e.wheelDelta?e.wheelDelta:e.detail;
    	var len=$("img",this).length;
    	var w=parseInt($("img",this).css("width"))+9;
    	var n=0;
    	if(d>0)n=1;
    	else n=-1;
    	$("img",this).stop(true,true);
    	var left=parseInt($("img:first",this).css("left"));
    	if((left>w-1&&n>0)||(left<-w*(len-2)+1&&n<0))
    		return;
    	$("img",this).animate({left:"+="+n*w+"px"},"fast");
    }
    for(var i=0;i<picbox.length;i++){
		picbox[i].onmousewheel=picSlide;
	}

	//弹出框
	$("#log").click(function(){
		$("#popup,#lr_box,#log_box,#log_button").css("display","block");
		$("#move_stick").css("left",0);
		var h=parseInt($("#lr_box").css("height"));
		$("#lr_box").css({top:"50%",marginTop:-h/2+"px"});
	});
	$("#reg").click(function(){
		$("#popup,#lr_box,#reg_box,#reg_button").css("display","block");
		$("#move_stick").css("left","88px");
		var h=parseInt($("#lr_box").css("height"));
		$("#lr_box").css({top:"50%",marginTop:-h/2+"px"});
	});
	$("#login").click(function(){
		$("#log_box,#log_button").css("display","block");
		$("#reg_box,#reg_button").css("display","none");
		$("#move_stick").animate({left:0},200);
	});
	$("#regis").click(function(){
		$("#reg_box,#reg_button").css("display","block");
		$("#log_box,#log_button").css("display","none");
		$("#move_stick").animate({left:"88px"},200);
	});
	$("#close,#popup_bottom").click(function(){
		$("#popup,#lr_box,#log_box,#reg_box,#log_button,#reg_button,#origin_pic").css("display","none");
	});
	$(".pic_box img").click(function(){
		$("#popup,#origin_pic").css("display","block");
		$("#origin_pic img").attr(src);
		var h=parseInt($("#origin_pic").css("height"));
		$("#origin_pic").css({top:"50%",marginTop:-h/2+"px"});
	});

	//顶栏
};