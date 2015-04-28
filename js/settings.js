window.onload=function(){
	var scrollFlag=0;
	$(window).scroll(scrollP);
	function scrollP(){
		var top=$(window).scrollTop();
		var flag;
		if(top>0){
			flag=1;
		}
		else {
			flag=0;
		}
		if(scrollFlag==flag){
			return;
		}
		else{
			//从顶滑下
			if(flag==1){
				$("#nav_top").css("background-color","rgba(102,153,255,0.8)");

				scrollFlag=1;
			}
			//从下滑到顶
			else if(flag==0){
				$("#nav_top").css("background-color","rgba(102,153,255,1)");
				scrollFlag=0;
			}
		}
	}

	//顶栏
	$("#list_edit").mouseover(function(){
		var src=$("#list_edit img").attr("src");
		var src2=src.replace(/pen/,"pen2");
		$("#list_edit img").attr({"src":src2});
	});
	$("#list_setting").mouseover(function(){
		var src=$("#list_setting img").attr("src");
		var src2=src.replace(/settings/,"settings2");
		$("#list_setting img").attr({"src":src2});
	});
	$("#list_logout").mouseover(function(){
		var src=$("#list_logout img").attr("src");
		var src2=src.replace(/paperplane/,"paperplane2");
		$("#list_logout img").attr({"src":src2});
	});
	$("#list_edit").mouseout(function(){
		var src=$("#list_edit img").attr("src");
		var src2=src.replace(/pen2/,"pen");
		$("#list_edit img").attr({"src":src2});
	});
	$("#list_setting").mouseout(function(){
		var src=$("#list_setting img").attr("src");
		var src2=src.replace(/settings2/,"settings");
		$("#list_setting img").attr({"src":src2});
	});
	$("#list_logout").mouseout(function(){
		var src=$("#list_logout img").attr("src");
		var src2=src.replace(/paperplane2/,"paperplane");
		$("#list_logout img").attr({"src":src2});
	});
	$("#list_writting").click(function(){
		window.open("/writting","_self");
	});
	$("#list_edit").click(function(){
		window.open($("#article").attr("data-url"),"_self");
	});
	$("#list_logout").click(function(){
		var form=document.createElement("form");
		form.method="get";
		form.action="/logout";
		form.submit();
	});
}