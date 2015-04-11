window.onload=function(){
	//根据窗口大小调整页面布局
	//拉动条影响的可视窗口变化
	//顶栏
	//返回按钮
	$("#backwards").click(function(){
		if(window.history.back()){}
		else 
			window.open("./index.html","_self");
	});
	//用户功能
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
				reader.readAsDataURL(files[i]);
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
			alert($("#write_text").html());
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
				//p.style.border="1px solid";
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
							$("#write_text").append("<p><br></p>")
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
							$("#write_text").append("<p><br></p>")
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
				//p.style.clear="both";
				//p.style.border="1px solid";
				//p.oninput=function(){}
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
							$("#write_text").append("<p><br></p>")
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
						if($(range.startContainer.parentNode.parentNode).next().length==0){
							$("#write_text").append("<p><br></p>")
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
				//p.style.clear="both";
				//p.style.border="1px solid";
				//p.oninput=function(){}
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
							$("#write_text").append("<p><br></p>")
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
							$("#write_text").append("<p><br></p>");
						}
					}
				}
			}
		});


	//写作编辑框自动调整长度功能
		var writetext=document.getElementById("write_text");
		var heightMark=300;
		writetext.oninput=function(){
			if(!($("#write_text").text())){
				$("#write_text").append("<p contenteditable='false'> </p><p><br></p>");
				setTimeout(function(){
				var r=document.createRange();
				r.setStart(writetext.childNodes[1].childNodes[0],0);
				r.setEnd(writetext.childNodes[1].childNodes[0],0);
				window.getSelection().removeAllRanges();
				window.getSelection().addRange(r);
				},1);
			}
			var h=document.body.scrollTop;
			this.style.height=0+"px";
			if(this.scrollHeight>300){
				this.style.height=this.scrollHeight+50+"px";
				window.scrollTo(0,h+this.scrollHeight-heightMark);
				heightMark=this.scrollHeight;
			}
			else{
				this.style.height=this.scrollHeight+"px";
			}
		}

	//对粘贴内容作格式化处理
		/*/
		var node,len1,frag,frag1,frag2,html1,html2;
		writetext.onpaste=function(e){
			//alert(e.clipboardData.getData("Text"));
			range=window.getSelection().getRangeAt(0);
			if(range.startContainer.tagName=="P"){
				node=range.startContainer;
			}
			else {
				node=range.startContainer.parentNode;
			}
			range.setStart(node,0);
			len1=range.toString().length;
			node.id="node";
			range.setStart(writetext,0);
			var p=document.createElement("p");
			frag=range.extractContents();
			p.appendChild(frag);
			frag1=p.innerHTML;
			html1=frag1.slice(0,-4);
			frag2=writetext.innerHTML;
			if(frag2.slice(-8,-4)=="<br>")
				html2=frag2.slice(13,-8)+"</p>";
			else
				html2=frag2.slice(13);
			writetext.innerHTML="";
			setTimeout(function(){
				if(!writetext.innerHTML){
					writetext.innerHTML=frag1+frag2.slice(13);
				}
			},1000);
			$("#write_text").one("input",function(){
				if(this.childNodes.length==1&&this.childNodes[0].nodeType==3){
					//只有一个子节点且该节点为文本节点
					var len=this.textContent.length+len1;
				}
				else{
					var len=this.lastChild.length;
				}alert(this.childNodes.length)
				$(this).html(html1+$(this).html()+html2);
				node=document.getElementById("node").lastChild;
				range.setStart(node,len);
				range.setEnd(node,len);
    			window.getSelection().removeAllRanges();
				window.getSelection().addRange(range);
				node.parentNode.removeAttribute("id");
			});
		}
		//*/
		writetext.onpaste=function(e){
			var data=e.clipboardData;
			document.execCommand("insertText",false,data.getData("text/plain"));
			for(var i=0;i<$("#write_text p").length;i++){
				var s=$("#write_text p:eq("+i+")").html();
				if(s.charCodeAt(0)==13){
					$("#write_text p:eq("+i+")").html("<br>");
				}
				else if(s.charCodeAt(s.length-1)==13){
					$("#write_text p:eq("+i+")").html(s.slice(0,-1));
				}
			}
			e.preventDefault();
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