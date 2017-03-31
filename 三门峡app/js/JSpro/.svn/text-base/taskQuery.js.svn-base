//任务查询列表数据交互
var pageNext=0;
mui.init({
			swipeBack:true, //启用右滑关闭功能
			pullRefresh: {
			container: '#pullrefresh',
			up: {
				contentrefresh: '正在加载...',
				callback: pullupRefresh
			}
		}
		
});
//传参 点击查看详情传参
function getParams(pageNext){	
	var strNextP="'pageNext':'"+pageNext+"',";
	var strPageS="'pageSize':'"+20+"'";
	var formQueryStr="";
	if(localStorage.jsonParamStr!=undefined&&localStorage.jsonParamStr!=""){
	//alert(localStorage.jsonParamStr);
	formQueryStr=localStorage.jsonParamStr
}
	var jsonParamStr="{"+formQueryStr+strNextP+strPageS+"}";
	return jsonParamStr;
}
var jsonParamStr=getParams(pageNext);

jsonp({
	url:localStorage.Rooturl+'MobileAction!hejian.action',
	data:{
		callback:'getTasks',
		jsonParam:encodeURIComponent(jsonParamStr),		
	}
});
var data_res={};
function getTasks(obj){
	if(obj.returnCode=='success'){
		console.log(obj);
		//data_res.isMore=obj.isMore;
		//var res=obj.result;
		//var res_list=res.list;//数组里面套多个json;
		//console.log(res_list[0])
		//var len = res_list.length;
		//for(var i=0;i<len;i++){
			//var box= document.querySelector('.mui-scroll');					
			//var cells = document.body.querySelectorAll('.show_list');
			//var oUl=createUl(res_list[i].id,res_list[i].address,res_list[i].desc,res_list[i].telTime,res_list[i].cmd,res_list[i].executor,res_list[i].isContent,res_list[i].result,res_list[i].tel,res_list[i].telTime,res_list[i].userName);
			//box.appendChild(oUl);
		//}				
	}else{
		alert(obj.returnMsg);
	}
}
function pullupRefresh() {				
	setTimeout(function() {
		//console.log(data_res.isMore);
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((data_res.isMore==false));//参数为true代表没有更多数据了。
		++pageNext;
		jsonParamStr=getParams(pageNext);
		jsonp({
			url:localStorage.Rooturl+'MobileAction!hejian.action',
			data:{
				callback:'getTasks',
				jsonParam:encodeURIComponent(jsonParamStr),
				
			}
		});	
	}, 300);
};
function createUl(){
	
}
$('#box').delegate('.show_list','tap',function(){
	// 存值	
	//localStorage.id=$(this).data('id');
	//$("#id").val(localStorage.id);
	//var detailParam='{"id":"'+$(this).data('id')+'"}';
	
	//console.log(getParams(pageNext));
//	jsonp({
//		url:localStorage.Rooturl+'client/actionClient!taskDetail.do',
//		data:{
//			callback:'getTaskDetail',
//			jsonParam:encodeURIComponent(detailParam),
//			id:$(this).find('p').html()
//		}
//	});
	//$('#box').hide();
	//$('#box1').show();	
});		
function getTaskDetail(obj){
	console.log(obj)
	if(obj.returnCode=='success'){
		
		var res=obj.result;
		var id=res.id;
		
		var address=res.address;
		var cmd=res.cmd;
		var handleTime=res.handleTime;
		var desc=res.desc;
		var executor=res.executor;
		var isContent=res.isContent;
		var result=res.result;
		var tel=res.tel;
		var telTime=res.telTime;
		var userName=res.userName;
		$("#id").val(id);
		$("#taskid").html(id);
	$("#address").html(address);
	$("#cmd").html(cmd);
	$("#handleTime").html(handleTime);
	$("#desc").html(desc);
	$("#executor").html(executor);
	$("#isContent").html(isContent);
	$("#result").html(result);
	$("#tel").html(tel);
	$("#telTime").html(telTime);
	$("#userName").html(userName);
	}else{
		alert(obj.returnMsg);
	}	
	
}
$('.old-back').on('click',function(){
	$('#box').show();
	$('#box1 ').hide();
//			$('#box1 .show_list p').remove();
});
$("#tel").css({'color':'#f90','font-weight':'900','font-style':'italic'});
$("#tel").on('tap',function(){
	var dial = parseInt($("#tel").html());
//	//console.log(dial)
	if(!isNaN(dial)){
		if(confirm("拨打电话"+dial+"?")){
			plus.device.dial( dial, true );
		}		
	}	
});