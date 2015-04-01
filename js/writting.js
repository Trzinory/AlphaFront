window.onload=function(){
		//根据窗口大小调整页面布局
		//拉动条影响的可视窗口变化
		//编辑栏功能
		var id=new Array();
		var popup=document.getElementById("popup");
		var left=document.getElementsByClassName("nav2_left");
		var linkbox=document.getElementById("link_box");
		var picbox=document.getElementById("pic_box");

		var lctpic=document.getElementById("lctpic");
		var itnpic=document.getElementById("itnpic");
		var lctup=document.getElementById("lctup");
		var itnup=document.getElementById("itnup");
		left[1].onclick=function(){
			id=["link_box"];
			boxShow(id);
			$(".link input").attr("value","");
		}
		left[2].onclick=function(){
			id=["pic_box","lctpic"];
			boxShow(id);
			$(".link input").attr("value","");
		}

		lctup.onclick=function(){
			itnpic.style.display="none";
			lctpic.style.display="block";
			id=["pic_box","lctpic"];
		}
		itnup.onclick=function(){
			lctpic.style.display="none";
			itnpic.style.display="block";
			id=["pic_box","itnpic"];
		}

		var popupcancel=document.getElementsByClassName("popup_cancel");
		var popupbottom=document.getElementsByClassName("popup_bottom");
		$(".popup_cancel").click(function(){
			boxHide(id);
			id=[];
			boxData=[];
		});
		$("#popup_bottom").click(function(){
			boxHide(id);
			id=[];
			boxData=[];
		});

		var nav2=document.getElementsByClassName("nav2");
		var articletype=document.getElementById("article_type");
		nav2[0].onmouseover=function(){
			articletype.style.display="block";
		}
		nav2[0].onmouseout=function(){
			articletype.style.display="none";
		}
		var type=document.getElementsByClassName("type");
		var whattype=document.getElementById("what_type");
		for(var i=0;i<type.length;i++){
			type[i].onclick=function(){
				for(var j=0;j<type.length;j++){
					type[j].style.backgroundColor="#e1e1e1";
				}
				this.style.backgroundColor="#414141";
				whattype.style.display="block";
				whattype.innerHTML=this.innerHTML;
			}
		}

		//写作编辑框自动调整长度功能
		var writetext=document.getElementById("write_text");
		writetext.oninput=function(){
			this.style.height=0+"px";
			if(this.scrollHeight>this.offsetHeight){
				this.style.height=this.scrollHeight+50+"px";
				main2.style.height=this.scrollHeight+150+"px";
				resize();
				window.scrollTo(0,document.body.scrollHeight-20);
				return;
			}
			this.style.height=this.scrollHeight+"px";
			main2.style.height=this.scrollHeight+150+"px";
			resize();
			window.scrollTo(0,document.body.scrollHeight-20);
		}

		//函数区
		function boxShow(id){
			//控制弹出框显示
			popup.style.display="block";
			for(var i=0;i<id.length;i++){
				$("#"+id[i]).css({"display":"block"});
				if($("#"+id[i]+" input").attr("type")=="text"){
					$("#"+id[i]+" input").val("");
				}
			}
			var h=$("#"+id[0])[0].scrollHeight;
			$("#"+id[0]).css({"margin-top":"-"+h/2+"px"});
		}
		function boxHide(id){
			//控制弹出框关闭
			popup.style.display="none";
			for(var i=0;i<id.length;i++){
				$("#"+id[i]).css({"display":"none"});
			}
		}
}