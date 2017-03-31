//任务处理列表数据交互

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
var pageNext=0;
//传参
function getParams(){
	var formParam="";
	if(localStorage.jsonParamStr!=undefined&&localStorage.jsonParamStr!=""){	
		formParam=localStorage.jsonParamStr;		
	}
	var strPageS="'pageSize':'"+20+"',";
	var strPageN="'pageNext':'"+pageNext+"',";
	var strAcc="'account':'"+localStorage.account+"'";
	var jsonParamStr="{"+formParam+strPageS+strPageN+strAcc+"}";
	return jsonParamStr;
}

listHandleTasks();
/**
 * 获取任务处理列表
 */
function listHandleTasks(){
	jsonParamStr=getParams();	
	console.log(jsonParamStr);
	jsonp({
		url:localStorage.Rooturl+'MobileAction!jichuxinxi.action',
		data:{
			callback:'getTasks',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
}

var data_res={};
function getTasks(obj){
	console.log(obj)
	data_res.isMore=obj.isMore;
	if(obj.returnCode=='success'){
		var res=obj.result;
		var res_list=res.list;//数组里面套多个json;
		var len = res_list.length;
		for(var i=0;i<len;i++){
			var box= document.querySelector('.mui-scroll');					
			var cells = document.body.querySelectorAll('.show_list');
			var oUl=createUl(res_list[i].id,res_list[i].address,res_list[i].desc,res_list[i].telTime,res_list[i].userName,res_list[i].userId);
			box.appendChild(oUl);
		}
	}else{
		alert(obj.returnMsg);
	}
}

function pullupRefresh() {				
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((data_res.isMore==false)); //参数为true代表没有更多数据了。
		++pageNext;
		jsonParamStr=getParams('');
		jsonp({
			url:localStorage.Rooturl+'MobileAction!jichuxinxi.action',
			data:{
				callback:'getTasks',
				jsonParam:encodeURIComponent(jsonParamStr),
				
			}
		});	
	}, 300);
		//alert(1);
};
function createUl(id,adr,desc,time,usrN,usrI){
	console.log(usrN)
	var arr=['用户编号','审核内容','发起时间','地址'];
	var arr1=[usrI,desc,time,adr];
	var table = document.createElement('ul');
		table.className='show_list';
		
		table.setAttribute('data-id',id);
		table.setAttribute('data-adr',adr);
		table.setAttribute('data-desc',desc);
		table.setAttribute('data-time',time);
		table.setAttribute('data-usrn',usrN);
		table.setAttribute('data-usri',usrI);
		
	for(var i=0;i<arr.length;i++){  						  			
		var li=document.createElement('li');
		var p = document.createElement('p');   			
		var span= document.createElement('span');
		   	span.innerHTML=arr[i];
		   	p.innerText=arr1[i];
		   	li.appendChild(span);
		   	li.appendChild(p);
		   	table.appendChild(li);
	};
	return table;
}
$('#box').delegate('.show_list','tap',function(){
	//console.log($(this).find('p').html())	
	// 存值
	sessionStorage.address=$(this).data('adr');
	sessionStorage.id=$(this).data('id');
	sessionStorage.desc=$(this).data('desc');
	sessionStorage.handleTime=$(this).data('time');
	sessionStorage.userName=$(this).data('usrn');
	sessionStorage.usrI=$(this).data('usri');
	location.href='TaskContent.html';			
});
$('.old-back').on('click',function(){
	$('#box').show();
	$('#box1 ').hide();
})