window.onload=function(){
	var base=$(document).width();
	$(".fill").css("width",(base-650)/2+"px");

	$(window).resize(function(){
		base=$(document).width();
		$(".fill").css("width",(base-650)/2+"px");
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
		if(flag==1&&scrollFlag!=flag){
			$("#intro_top").css("display","none");
			$("#nav_top").css("background-color","rgba(102,153,255,0.8)");
			$("#search").css("margin-top","-5px");
			$("#lr").css("margin-top","17px");
			$("#content").css("margin-top","26px");
			scrollFlag=1;
		}
		else if(flag==0&&scrollFlag!=flag){
			$("#intro_top").css("display","block");
			$("#nav_top").css("background-color","rgba(102,153,255,1)");
			$("#search").css("margin-top","6px");
			$("#lr").css("margin-top","27px");
			$("#content").css("margin-top","0px");
			scrollFlag=0;
		}
		$("#nav_top").css("top",top+"px");
	});

	//图片滚动事件
	var picbox=document.getElementsByClassName("pic_box");
	var num=0,t;
	function picSlide(e){
		e=e||window.event;
		e.preventDefault();
		var d=e.wheelDelta?e.wheelDelta:e.detail;
    	var len=$("img",this).length;
    	var w=parseInt($("img",this).css("width"))+8;
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
};