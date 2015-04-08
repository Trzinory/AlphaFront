window.onload=function(){
	//根据窗口大小调整页面布局
	//拉动条影响的可视窗口变化
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

	//编辑栏功能
		var id=new Array();
		var boxData=new Array();
		var range;
		$(".nav2_left:eq(0)").click(function(){
			range=window.getSelection().getRangeAt(0);
			if($(range.startContainer).parents("#write_text").length>0){
				id=["pic_box .popup_confirm"];
				boxHide(id);
				id=["pic_box","lctpic"];
				boxShow(id);
			}
		});
		$("#pic_box").mouseout(function(){
			$(this).css({"opacity":"0.3"});
		});
		$("#pic_box").mouseover(function(){
			$(this).css({"opacity":"1"});
		});
		$("#lctup").click(function(){
			id=["itnpic","pic_box .popup_confirm"];
			boxHide(id);
			id=["pic_box","lctpic"];
			boxShow(id);
		});
		$("#itnup").click(function(){
			id=["lctpic"];
			boxHide(id);
			id=["pic_box","itnpic","pic_box .popup_confirm"];
			boxShow(id);
			boxData=["itnpic input"];
		});
		$("#lctpic").click(function(){
			$("#file").click();
		});
		$("#file").change(function(){
			var files=document.getElementById("file").files;
			var reader=new FileReader();
			for(var i=0;i<files.length;i++){
				reader.readAsDataURL(files[i]);
				reader.onload=function(){
					if(/image/.test(files[0].type)){
						var img=document.createElement("img");
						img.src=this.result;
        				range.insertNode(img);
        			}
        			else{
        				alert("请选择图片文件");
        			}
				}
			}
		});
		$(".popup_confirm").click(function(){
			for(var i=0;i<boxData.length;i++){
				var link=$("#"+boxData[i]).val();
				if(!(/jpg|png|gif|jpeg|ico/.test(link))){
					alert("图片格式有误");
					return;
				}
				if($(range.startContainer).parents("#write_text").length>0){
					var img=document.createElement("img");
					img.src=link;
        			range.insertNode(img);
        			$("#"+boxData[i]).select();
				}
			}
		})
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

		//设置文本样式
		$("#article_pub").click(function(){
			alert($("#write_text").html()+"+"+$("#write_text").text());
		});
		$("#style>img").click(function(){
			range=window.getSelection().getRangeAt(0);
			var rangestr=range.toString();
			range.deleteContents();
			var text=document.createTextNode(rangestr);
			range.insertNode(text);
		});
		$("#style li:eq(0)").click(function(){
			range=window.getSelection().getRangeAt(0);
			if($(range.startContainer).parents("#write_text").length>0){
				var b=document.createElement("b");
				range.surroundContents(b);
			}
		});
		$("#style li:eq(1)").click(function(){
			range=window.getSelection().getRangeAt(0);
			if($(range.startContainer).parents("#write_text").length>0){
				var u=document.createElement("u");
				range.surroundContents(u);
			}
		});
		$("#style li:eq(2)").click(function(){
			range=window.getSelection().getRangeAt(0);
			if($(range.startContainer).parents("#write_text").length>0){
				var i=document.createElement("i");
				range.surroundContents(i);
			}
		});
		//设置文本位置
		$("#align>img").click(function(){
			//alert(writetext.innerHTML);
			range=window.getSelection().getRangeAt(0);
			alert(range.startContainer.parentNode)
			if($(range.startContainer).parents("#write_text").length>0){
				var pclass=range.startContainer.parentNode.className;
				var ppclass=range.startContainer.parentNode.parentNode.className;
				if(range.startContainer.tagName){
					//光标左边是图片时
					if(pclass&&pclass=="float"){
						$(range.startContainer).unwrap();
					}
				}
				else{
					if(ppclass&&ppclass=="float"){
						$(range.startContainer.parentNode).unwrap();
					}
				}
			}
		});
		$("#align li:eq(0)").click(function(){
			range=window.getSelection().getRangeAt(0);
			if($(range.startContainer).parents("#write_text").length>0){
				var div=document.createElement("div");
				div.className="float";
				div.style.float="none";
				div.style.textAlign="center";
				div.style.border="1px solid";
				var pclass=range.startContainer.parentNode.className;
				var ppclass=range.startContainer.parentNode.parentNode.className;
				if(range.startContainer.tagName){
					//光标左边是图片时
					if(pclass&&pclass=="float"){
						range.startContainer.parentNode.style.float="none";
						range.startContainer.parentNode.style.textAlign="center";
					}
					else{
						$(range.startContainer).wrap(div);
						if($(range.startContainer.parentNode).next().length==0){
							$("#write_text").append("<div><br></div>")
						}
					}
				}
				else{
					if(ppclass&&ppclass=="float"){
						range.startContainer.parentNode.parentNode.style.float="none";
						range.startContainer.parentNode.parentNode.style.textAlign="center";
					}
					else{
						$(range.startContainer.parentNode).wrap(div);
						if($(range.startContainer.parentNode.parentNode).next().length==0){
							$("#write_text").append("<div><br></div>")
						}
					}
				}
			}
		});
		$("#align li:eq(1)").click(function(){
			range=window.getSelection().getRangeAt(0);
			if($(range.startContainer).parents("#write_text").length>0){
				var div=document.createElement("div");
				div.className="float";
				div.style.float="left";
				div.style.clear="both";
				div.style.border="1px solid";
				//div.oninput=function(){}
				var pclass=range.startContainer.parentNode.className;
				var ppclass=range.startContainer.parentNode.parentNode.className;
				if(range.startContainer.tagName){
					if(pclass&&pclass=="float"){
						range.startContainer.parentNode.style.float="left";
						range.startContainer.parentNode.style.textAlign="none";
					}
					else{
						$(range.startContainer).wrap(div);
						if($(range.startContainer.parentNode).next().length==0){
							$("#write_text").append("<div><br></div>")
						}
					}
				}
				else{
					if(ppclass&&ppclass=="float"){
						range.startContainer.parentNode.parentNode.style.float="left";
						range.startContainer.parentNode.parentNode.style.textAlign="none";
					}
					else{
						$(range.startContainer.parentNode).wrap(div);
						alert($(range.startContainer.parentNode.parentNode).next().length)
						if($(range.startContainer.parentNode.parentNode).next().length==0){
							$("#write_text").append("<div><br></div>")
						}
					}
				}
			}
		});
		$("#align li:eq(2)").click(function(){
			range=window.getSelection().getRangeAt(0);
			if($(range.startContainer).parents("#write_text").length>0){
				var div=document.createElement("div");
				div.className="float";
				div.style.float="right";
				div.style.clear="both";
				div.style.border="1px solid";
				//div.oninput=function(){}
				var pclass=range.startContainer.parentNode.className;
				var ppclass=range.startContainer.parentNode.parentNode.className;
				if(range.startContainer.tagName){
					if(pclass&&pclass=="float"){
						range.startContainer.parentNode.style.float="right";
						range.startContainer.parentNode.style.textAlign="none";
					}
					else{
						$(range.startContainer).wrap(div);
						if($(range.startContainer.parentNode).next().length==0){
							$("#write_text").append("<div><br></div>")
						}
					}
				}
				else{
					if(ppclass&&ppclass=="float"){
						range.startContainer.parentNode.parentNode.style.float="right";
						range.startContainer.parentNode.parentNode.style.textAlign="none";
					}
					else{
						$(range.startContainer.parentNode).wrap(div);
						if($(range.startContainer.parentNode.parentNode).next().length==0){
							$("#write_text").append("<div><br></div>");
						}
					}
				}
			}
		});


	//写作编辑框自动调整长度功能
		var writetext=document.getElementById("write_text");
		writetext.oninput=function(){
			if(!($("#write_text").text())){
				$("#write_text").html("<div><br></div>");
			}
			this.style.height=0+"px";
			if(this.scrollHeight>this.offsetHeight){
				this.style.height=this.scrollHeight+50+"px";
				window.scrollTo(0,document.body.scrollHeight-20);
			}
			else {
				this.style.height=this.scrollHeight+"px";
				window.scrollTo(0,document.body.scrollHeight-20);
			}
		}

	//函数区
	function boxShow(id){
		//控制弹出框显示
		popup.style.display="block";
		for(var i=0;i<id.length;i++){
			$("#"+id[i]).show();
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