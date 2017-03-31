//任务处理内容页数据交互
		
// 取值
var address=sessionStorage.address;
var desc=sessionStorage.desc;
var id=sessionStorage.id;
var cmd=sessionStorage.cmd;
var handleTime=sessionStorage.handleTime;

var account=localStorage.account;
var userName =sessionStorage.userName;
var userId = sessionStorage.usrI;
$("#address").html(address);
$("#desc").html(desc);
$("#id1").html(id);
$("#taskId").val(id);
$("#handleTime").html(handleTime);
$("#usrI").val(account);
//传参
function getParams(){
	
	var strExe="'executor':'"+$('#usrI').val()+"',";
	var strId="'id':'"+$('#taskId').val()+"',";
	//var strIsCon="'device':'"+$('#isContentId').val()+"',";strIsCon+
	var strRes="'note':'"+$('#resultId').val()+"',";
	var strUserName="'userName':'"+userName+"',";
	var strUsrId="'userid':'"+userId+"',";
	var strAcc="'account':'"+account+"',";
	var strStateCmd="'result':'"+$('#stateCmd_id').val()+"'";
	//var strStateCmd=''
	var jsonParamStr="{"+strExe+strId+strRes+strUserName+strUsrId+strAcc+strStateCmd+"}";
	//console.log(jsonParamStr);
	return jsonParamStr;
}
$('#pass').on('tap',function(){
	//var strStateCmd=""
	$('#stateCmd_id').val('通过');
	var jsonParamStr=getParams();
	console.log(jsonParamStr)
	jsonp({
		url:localStorage.Rooturl+'MobileAction!updateTask',
		data:{
			callback:'updateResult',
			jsonParam:encodeURIComponent(jsonParamStr),
			
		}
	});
	
});

var jsonParamStrListShjb="{"+"'yhbh':'"+localStorage.userid+"',"+"'shbh':'"+sessionStorage.id+"'"+"}";
jsonp({
	url:localStorage.Rooturl+'MobileAction!listShjb.action',
	data:{
		callback:'listShjb',
		jsonParam:encodeURIComponent(jsonParamStrListShjb),
	}
});
function listShjb(obj){
	console.log(obj);
	if(obj.result==null)return;
	if(obj.returnCode=='success'){
		
		var list = obj.result.list;
		//$('.addList').remove();
		console.log(list.length)
		for(i=0;i<list.length;i++){
			var oP = document.createElement('option');
			oP.className='addList';
			oP.value=list[i].shjb;
			console.log(list[i].shjb)
			oP.innerHTML=list[i].shjb;
			$('#shjb').append(oP);			
		}
	}else{
		alert(obj.returnMsg)
	}
}
$('#nopass').on('click',function(){
	$('#stateCmd_id').val('不通过');
	var jsonParamStr=getParams();
	console.log(jsonParamStr)
	jsonp({
		url:localStorage.Rooturl+'MobileAction!updateTask',
		data:{
			callback:'updateResult',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
})
function updateResult(obj){
	console.log(obj)
	if(obj.returnCode=='success'){
		//location.href='Task.html';
	}else{
		alert(obj.returnMsg)
	}
}

