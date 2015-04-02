

window.onload=function(){
	var base=$(document).width();
	$(".fill").css("width",(base-600)/2+"px");

	$(window).resize(function(){
		base=$(document).width();
		$(".fill").css("width",(base-600)/2+"px");
	});

	//顶栏
	$("#list_top li:eq(0)").mouseover(function(){
		$("#list_top img:eq(0)").attr({"src":"./img/settings2.png"});
	});
	$("#list_top li:eq(1)").mouseover(function(){
		$("#list_top img:eq(1)").attr({"src":"./img/pen2.png"});
	});
	$("#list_top li:eq(2)").mouseover(function(){
		$("#list_top img:eq(2)").attr({"src":"./img/paperplane2.png"});
	});
	$("#list_top li:eq(0)").mouseout(function(){
		$("#list_top img:eq(0)").attr({"src":"./img/settings.png"});
	});
	$("#list_top li:eq(1)").mouseout(function(){
		$("#list_top img:eq(1)").attr({"src":"./img/pen.png"});
	});
	$("#list_top li:eq(2)").mouseout(function(){
		$("#list_top img:eq(2)").attr({"src":"./img/paperplane.png"});
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
	//弹出框
	$("#log").click(function(){
		$("#log_box,#log_button").css({left:"0px"});
		$("#popup,#lr_box,#log_box,#log_button").show();
		$("#move_stick").css("left",0);
		//var h=parseInt($("#lr_box").css("height"));
		//$("#lr_box").css({top:"50%",marginTop:-h/2+"px"});
	});
	$("#reg").click(function(){
		$("#reg_box,#reg_button").css({left:"0px"});
		$("#popup,#lr_box,#reg_box,#reg_button").show();
		$("#move_stick").css("left","88px");
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
			$("#move_stick").animate({left:0},200);
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
			$("#move_stick").animate({left:"88px"},200);
		}
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