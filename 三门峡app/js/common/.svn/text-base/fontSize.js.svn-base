/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-06-21 12:51:20
 * @version $Id$
 */
;(function(win,doc){
     win.onload=win.onresize=function(){
          doc.documentElement.style.fontSize = doc.documentElement.clientWidth*20/320+'px';
     };
})(window,document);
//获取页面中需要传递到后台的参数
function getParameter(id){
    var input_txt=$("#"+id+" input[type='text']");
    var input_psd=$("#"+id+" input[type='password']");
    var select=$("#"+id+" select");
    var input_radio=$("#"+id+" input[type='radio']:checked"); 
    var input_check=$("#"+id+" input[type='checkbox']:checked"); 
    //console.log(input_radio)
   	var len_t=input_txt.length;
   	var len_p=input_psd.length;
   	var len_r=input_radio.length;
   	var len_c=input_check.length;
   	var len_s=select.length;           
   	var str='';
   	for(var i=0;i<len_t;i++){
         str+="{'"+input_txt.eq(i).attr('id')+"':'"+input_txt.eq(i).val()+"'},"
   	}
   	for(var i=0;i<len_c;i++){
         str+="{'"+input_check.eq(i).attr('id')+"':'"+input_check.eq(i).val()+"'},"
   	}
   	for(var i=0;i<len_p;i++){
         str+="{'"+input_psd.eq(i).attr('id')+"':'"+input_psd.eq(i).val()+"'},"
   	}
   	for(var i=0;i<len_s;i++){
         str+="{'"+select.eq(i).attr('id')+"':'"+select.eq(i).val()+"'},"
   	}
   	for(var i=0;i<len_r;i++){
         str+="{'"+input_radio.attr('name')+"':'"+input_radio.val()+"'},"
   	}
    return str.slice(0,str.length-1);                  
}
//得到的是页面之间的需要传递参数
function getSessionStrageParam(){
	var strage=window.sessionStorage;
	var str = '';
	for(var name in strage){
		//console.log(strage[name])
		str+="{'"+name+"':'"+strage[name]+"'},"
	}
	return str.slice(0,str.length-1);
}
//创建的新的ul，然后添加数据；
function createUl(){
	var ul=document.createElement('ul');
	ul.className = 'mui-table-view nav-bar con td';
	ul.style.width = '900px';
	return ul;
}
//这些函数是获取各个数据列表的：小区，换热站，热源，楼号等；
//1.获取分公司
function getBranchList(){
	$.ajax({
		url:'http://localhost/data/getBranch.txt',
		dataType:'jsonp',
		//jsonpCallback:'getBranch',
		data:{},
		success:function(res){
			getBranch(res);
		}
	});
}
function getBranch(res){
	//console.log(res)
	//$('.addOption').remove();
	if(res==undefined)return;
	if(res.returnCode!='error'){
		var dataResult = res.result;
		console.log(dataResult)
		var len = dataResult.length;
		for(var i=0;i<len;i++){
			
			var oP = document.createElement('option');
			oP.value = dataResult[i].companyCode;
			oP.innerHTML = dataResult[i].companyName;
			oP.className = 'addOption';
			$('#branch').append(oP);
			//console.log(i);
		}
	}else{
		alert(res.returnMsg);
	}
}

//2.获取换热站
function getStationList(){
	$.ajax({
		url:'http://localhost/data/getStation.txt',
		dataType:'jsonp',
		data:{},
		success:function(res){
			getStation(res);
		}
	});
}
function getStation(res){
	//console.log(res)
	//$('.addOption').remove();
	if(res==undefined)return;
	if(res.returnCode!='error'){
		var dataResult = res.result;
		console.log(dataResult)
		var len = dataResult.length;
		for(var i=0;i<len;i++){
			var oP = document.createElement('option');
			oP.value = dataResult[i].stationCode;
			oP.innerHTML = dataResult[i].stationName;
			oP.className = 'addOption';
			$('#rzSearchCode').append(oP);
		}
	}else{
		alert(res.returnMsg);
	}
}

//3.获取热源
function getHeatList(){
	$.ajax({
		url:'http://localhost/data/getHeat.txt',
		dataType:'jsonp',
		data:{},
		success:function(res){
			getHeat(res);
		}
	});
}
function getHeat(res){
	//console.log(res)
	//$('.addOption').remove();
	if(res==undefined)return;
	if(res.returnCode!='error'){
		var dataResult = res.result;
		console.log(dataResult)
		var len = dataResult.length;
		for(var i=0;i<len;i++){
			var oP = document.createElement('option');
			oP.value = dataResult[i].heatCode;
			oP.innerHTML = dataResult[i].heatName;
			oP.className = 'addOption';
			$('#rySearchCode').append(oP);
		}
	}else{
		alert(res.returnMsg);
	}
}
//getBranchList();
//getStationList();
//getHeatList();

