//任务查询表单数据交互
mui.init({
	swipeBack:true, //启用右滑关闭功能
			
}); 

function getParams(){
		
	var startDate="'startDate':'"+$('#startDateId').html()+"',";
	if(isNaN(parseFloat($('#startDateId').html()))){
		startDate="'startDate':'',";
	}
	var endDate="'endDate':'"+$('#endDateId').html()+"',";
	if(isNaN(parseFloat($('#endDateId').html()))){
		endDate="'endDate':'',";
	}
	var strBra="'branch':'"+$('#branch').val()+"',";
	var strBraName="'branchName':'"+$('#branch').val()+"',";
	var strCom="'community':'"+$('#community').val()+"',";
	var strComName="'communityName':'"+$('#community').val()+"',";
	var strFlo="'floor':'"+$('#floor').val()+"',";
	var strRom="'roomNo':'"+$('#roomNo').val()+"',";
	var strSta="'state':'"+$('#state').val()+"',";
	var strStation="'station':'"+$('#station').val()+"',";
	var strStationName="'stationName':'"+$('#station').val()+"',";
	var strUnit="'unit':'"+$('#unit').val()+"',";
	var strUserCard="'userCard':'"+$('#userCard').val()+"',";
	var strUserName="'userName':'"+$('#userName').val()+"'";
	
	var jsonParamStr="{"+endDate+startDate+strBra+strBraName+strCom+strComName+strFlo+strRom+strSta+strStation+strStationName+strUnit+strUserCard+strUserName+"}";
	return jsonParamStr;
}
//传递参数到查询页面
function getQueryFormParams(){
	var loginName="";
	
	
		if($("#ownerId").val()==1){
			loginName=localStorage.loginName;
		}
		
		
	var loginName="'loginName':'"+loginName+"',";
	var startDate="'startDate':'"+$('#startDateId').html()+"',";
	if(isNaN(parseFloat($('#startDateId').html()))){
		startDate="'startDate':'',";
	}
	var endDate="'endDate':'"+$('#endDateId').html()+"',";
	if(isNaN(parseFloat($('#endDateId').html()))){
		endDate="'endDate':'',";
	}
	var strBra="'branch':'"+$('#branch').val()+"',";
	var strBraName="'branchName':'"+$('#branch').val()+"',";
	var strCom="'community':'"+$('#community').val()+"',";
	var strComName="'communityName':'"+$('#community').val()+"',";
	var strFlo="'floor':'"+$('#floor').val()+"',";
	var strRom="'roomNo':'"+$('#roomNo').val()+"',";
	var strSta="'state':'"+$('#state').val()+"',";
	var strStation="'station':'"+$('#station').val()+"',";
	var strStationName="'stationName':'"+$('#station').val()+"',";
	var strUnit="'unit':'"+$('#unit').val()+"',";
	var strUserCard="'userCard':'"+$('#userCard').val()+"',";
	var strUserName="'userName':'"+$('#userName').val()+"',";
	
	var jsonParamStr=loginName+endDate+startDate+strBra+strBraName+strCom+strComName+strFlo+strRom+strSta+strStation+strStationName+strUnit+strUserCard+strUserName;
	return jsonParamStr;
}

var jsonParamStr=getParams();

//日期：
(function($) {
	function getTime(){
		var oDate = new Date();
		var y = oDate.getFullYear();
		var m =oDate.getMonth();
		var r =oDate.getDate();
		var h =oDate.getHours();
		var min = oDate.getMinutes();
		return y+"-"+m+"-"+r+" "+h+":"+min;
	}
	$.init();
	var result = $('#result')[0];
var btns = $('.btn');
btns.each(function(i, btn) {
	btn.addEventListener('tap', function() {
	this.setAttribute('data-options','{"value":"'+getTime()+'","beginYear":2000,"endYear":2030}');
	var optionsJson ='{}';
	var options = JSON.parse(optionsJson);
	var id = this.getAttribute('id');
	/*
	 * 首次显示时实例化组件
	 * 示例为了简洁，将 options 放在了按钮的 dom 上
	 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
	 */
	var picker = new $.DtPicker(options);
	picker.show(function(rs) {
		/*
		 * rs.value 拼合后的 value
		 * rs.text 拼合后的 text
		 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
		 * rs.m 月，用法同年
		 * rs.d 日，用法同年
		 * rs.h 时，用法同年
		 * rs.i 分（minutes 的第二个字母），用法同年
		 */
		btns[i].innerText = rs.text;
		/* 
		 * 返回 false 可以阻止选择框的关闭
		 * return false;
		 */
		/*
		 * 释放组件资源，释放后将将不能再操作组件
		 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
		 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
		 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
		 */
				picker.dispose();
			});
		}, false);
	});
})(mui);	

//分公司名称
jsonp({
	url:localStorage.Rooturl+'fee/actionFee!listBranch.do',
	data:{
		callback:'getBranch',
		jsonParam:encodeURIComponent(jsonParamStr),
	}
});
function getBranch(obj){
	//console.log(obj);
	if(obj.returnCode=='success'){
		var ary=obj.result;
		//console.log(ary);
		var len=ary.length;
		$('.branch').remove();
		for(var i=0;i<len;i++){
			var op=document.createElement('option');
			op.className='branch';
			$('#branch').append(op);
		}		
		for(var i=0;i<len;i++){					
			$('#branch option').eq(i+1).val(ary[i].companyCode).html(ary[i].companyName);
		}
								
	}else{
		alert(obj.returnMsg)
	}
}
//换热站
//jsonp({
//	url:localStorage.Rooturl+'fee/actionFee!listStation.do',
//	data:{
//		callback:'getStation',
//		jsonParam:encodeURIComponent(jsonParamStr),
//	}
//});
function getStation(obj){
	
	if(obj.returnCode=='success'){
		var ary=obj.result;
		//console.log(ary);
		var len=ary.length;
		//var i=0;
		$('.station').remove();
		for(var i=0;i<len;i++){
			var op=document.createElement('option');
			op.className='station';
			$('#station').append(op);
		}		
		for(var i=0;i<len;i++){
			//alert(i);
			$('#station option').eq(i+1).val(ary[i].stationCode).html(ary[i].stationName);
		}
							
	}else{
		alert(obj.returnMsg)
	}				
}
//小区
//jsonp({
//	url:localStorage.Rooturl+'fee/actionFee!listXQ.do',
//data:{
//	callback:'getXQ',			
//		jsonParam:encodeURIComponent(jsonParamStr),		
//	}
//});
function getXQ(obj){
	if(obj.returnCode=='success'){
		var ary=obj.result;
		//console.log(json);
		var len=ary.length;
		//var i=0;
		$('.community').remove();
		for(var i=0;i<len;i++){
			var op=document.createElement('option');
			op.className='community';
			$('#community').append(op);
		}		
		for(var i=0;i<len;i++){
			//alert(i);
			$('#community option').eq(i+1).val(ary[i].areaCode).html(ary[i].areaName);
		}
			
	}else{
		alert(obj.returnMsg)
	}
}
//楼号
//jsonp({
//	url:localStorage.Rooturl+'fee/actionFee!listFloor.do',
//	data:{
//		callback:'getFloor',
//		jsonParam:encodeURIComponent(jsonParamStr),
//	}
//});
function getFloor(obj){
	if(obj.returnCode=='success'){
	var ary=obj.result;
		//console.log(json);
		var len=ary.length;
		//var i=0;
		$('.floor').remove();
		for(var i=0;i<len;i++){
			var op=document.createElement('option');
			op.className='floor';
			$('#floor').append(op);
		}
		//var areaCode=ary[0].areaCode;
		for(var i=0;i<len;i++){
			//alert(i);
			$('#floor option').eq(i+1).val(ary[i].floorCode).html(ary[i].floorName);
			}
			
	}else{
		alert(obj.returnMsg)
	}
}
//单元号
//jsonp({
//	url:localStorage.Rooturl+'fee/actionFee!ListUnit.do',
//	data:{
//		callback:'getUnit',
//		jsonParam:encodeURIComponent(jsonParamStr),
//	}
//});
function getUnit(obj){
	if(obj.returnCode=='success'){
		var ary=obj.result;
		//console.log(json);
		var len=ary.length;
		//var i=0;
		$('.unit').remove();
		for(var i=0;i<len;i++){
			var op=document.createElement('option');
			op.className='unit';
			$('#unit').append(op);
		}
		//var areaCode=ary[0].areaCode;
		for(var i=0;i<len;i++){
			//alert(i);
			$('#unit option').eq(i+1).val(ary[i].unit).html(ary[i].unit);
		}						
	}else{
		alert(obj.returnMsg)
	}
}
//室号
//jsonp({
//	url:localStorage.Rooturl+'fee/actionFee!ListRoom.do',
//	data:{
//		callback:'getRoom',
//		jsonParam:encodeURIComponent(jsonParamStr),
//	}
//});
function getRoom(obj){
	if(obj.returnCode=='success'){
		var ary=obj.result;
			//console.log(json);
		var len=ary.length;
		//var i=0;
		$('.roomNo').remove();
		for(var i=0;i<len;i++){
			var op=document.createElement('option');
			op.className='roomNo';
			$('#roomNo').append(op);
		}
		//var areaCode=ary[0].areaCode;
		for(var i=0;i<len;i++){
			//alert(i);
			$('#roomNo option').eq(i+1).val(ary[i].room).html(ary[i].room);
		}						
	}else{
		alert(obj.returnMsg)
	}
}

$('#rw_btn').on('tap',function(){
	var jsonParamStr=getQueryFormParams();
	//console.log(jsonParamStr)
	localStorage.jsonParamStr=jsonParamStr;

	location.href='TaskQuery.html';				
});
$('#branch').change(function(event){
	selectBranch();
})
$('#station').change(function(event){
	selectStation();
})
//$('#community').change(function(event){
//	selectCommunity();
//})
//$('#floor').change(function(event){
//	selectFloor();
//})
//$('#unit').change(function(event){
//	selectUnit();
//})
function selectBranch(){
	//alert(1);
	//var jsonParamStr="{branch:"+$('#branch').val()+"}";
	//这个是选择了哪一个分公司，		
	var jsonParamStr=getParams();
	//换热站
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!listStation.do',
		data:{
			callback:'getStation',					
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//小区
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!listXQ.do',
		data:{
			callback:'getXQ',					
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//楼号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!listFloor.do',
		data:{
			callback:'getFloor',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//单元号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!ListUnit.do',
		data:{
			callback:'getUnit',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//室号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!ListRoom.do',
		data:{
			callback:'getRoom',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
}
function selectStation(){
	//var jsonParamStr="{station:"+$('#station').val()+"}";
	//这个是选择了哪一个换热站,
	var jsonParamStr=getParams();
	
	//小区
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!listXQ.do',
		data:{
			callback:'getXQ',					
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//楼号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!listFloor.do',
		data:{
			callback:'getFloor',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//单元号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!ListUnit.do',
		data:{
			callback:'getUnit',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//室号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!ListRoom.do',
		data:{
			callback:'getRoom',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
}		
function selectCommunity(){
	//alert(1);
	//var jsonParamStr="{community:"+$('#community').val()+"}";
	//这个是选择了哪一个小区，下面的两个选项都将改变，
	//两个接口：楼号和单元号的接口获取这个小区下面的楼号和单元号；
	var jsonParamStr=getParams();
	
	//楼号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!listFloor.do',
		data:{
			callback:'getFloor',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//单元号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!ListUnit.do',
		data:{
			callback:'getUnit',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//室号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!ListRoom.do',
		data:{
			callback:'getRoom',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
}
function selectFloor(){
	//var jsonParamStr="{floor:"+$('#floor').val()+"}";
	//选择了楼号，单元号也会跟着联动
	var jsonParamStr=getParams();
	
	//单元号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!ListUnit.do',
		data:{
			callback:'getUnit',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
	//室号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!ListRoom.do',
		data:{
			callback:'getRoom',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
}
function selectUnit(){
	//var jsonParamStr="{unit:"+$('#unit').val()+"}";
	//这个是选择了哪一个单元号
	var jsonParamStr=getParams();
	//室号
	jsonp({
		url:localStorage.Rooturl+'fee/actionFee!ListRoom.do',
		data:{
			callback:'getRoom',
			jsonParam:encodeURIComponent(jsonParamStr),
		}
	});
}