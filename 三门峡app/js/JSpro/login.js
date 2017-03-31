//登陆页面数据交互

mui.init();
localStorage.Rooturl=//'http://192.168.7.49:8080/smx/mobile/'
'http://218.29.157.150:1010/smx/mobile/';
//'http://192.168.7.159:8080/charge_smx_slrl/';

			
if(window.plus){
	plusReady();		
}else{
	document.addEventListener('plusready',plusReady,false);
}
if(localStorage.account!=null && localStorage.psw!=null){
	$('#account').val(localStorage.account);
	$('#password').val(localStorage.psw);
}else{
	$('#account').val(null);
	$('#password').val(null);
}   
getVersion();
$('#login').on('tap',function(){
	localStorage.account=$('#account').val();
	localStorage.psw=$('#password').val();
	var jsonParamStr='{ "name":"'+localStorage.account+'","pwd":"'+localStorage.psw+'"}';
	//mui.openWindow("index.html");
	//点击确认键，拿到后台数据接口，后台进行判断是否有这个用户；
	jsonp({
		url:localStorage.Rooturl+'MobileAction!login.action',//拿到登入的接口；
		data:{
			callback:'loginResult',//回调函数；
			jsonParam:encodeURIComponent(jsonParamStr)
		}
	})				
});

//后台判断
function loginResult(obj){
	console.log(obj);
	if(obj.result==null){alert(obj.returnMsg);return;}
	if(obj.returnCode=='success'){
		var res=obj.result;
		var userName=res.userName;
		var userid= res.userId;
		localStorage.account=$('#account').val();
		localStorage.userid=userid;
		localStorage.psw=$('#password').val();
		localStorage.org=res.org;
		localStorage.loginName=userName;
		mui.openWindow("index.html");		
	}else{
		alert(obj.returnMsg);
	}
}
var wgtVer=null;
function plusReady(){
    // ......
    // 获取本地应用资源版本号
    plus.runtime.getProperty(plus.runtime.appid,function(inf){
        wgtVer=inf.version;
      	
    });
}
function getVersion(){
	var checkUrl=localStorage.Rooturl+"MobileAction!checkVersion.action";
    jsonp({
		url:checkUrl,
		data:{
			callback:"checkUpdate"
		}      
	});
			
}
//检查升级
function checkUpdate(obj){
	console.log(obj);
	mui.plusReady(function(){
   		plus.runtime.getProperty(plus.runtime.appid,function(inf){
		    wgtVer=inf.version;
	        if(wgtVer!=obj){
			    wgtVer=wgtVer+"";
			    var objStr=obj+"";
			    var versions=wgtVer.split(".")
	        	var objversions=objStr.split(".");
	        	if(versions[0]!=objversions[0]){
	        		downFull();  // 大版本下载升级包
	        	}else{
	        		downWgt();  // 小版本下载升级包
	        	}    	
			}else{
	   			plus.nativeUI.alert("无新版本可更新！");
       		}
		});
	});           
}

//整体更新 
function downFull(){
	var url=localStorage.Rooturl+"smx.apk"; // 下载文件地址
	mui.plusReady(function(){
		plus.nativeUI.showWaiting("下载更新包...");
		var dtask = plus.downloader.createDownload( url, {}, function ( d, status ) {
		    if ( status == 200 ) { // 下载成功
		        var path = d.filename;
		        console.log(d.filename);
		        plus.runtime.install(path);
		    } else {//下载失败
		        alert( "Download failed: " + status ); 
		    }  
		});
		dtask.start();
	 });	
}

// 下载wgt文件
function downWgt(){
	var wgtUrl=localStorage.Rooturl+"upload/app61.wgt";
	mui.plusReady(function(){
	    plus.nativeUI.showWaiting("下载更新文件...");	 
	  	plus.downloader.createDownload( wgtUrl, {filename:"_doc/update/"}, function(d,status){
			if ( status == 200 ||status==0) { 
			    console.log("下载wgt成功："+d.filename);
				installWgt(d.filename); // 安装wgt包
			} else {
			    console.log("下载wgt失败！");
				plus.nativeUI.alert("下载wgt失败！");
			}
			plus.nativeUI.closeWaiting();
		}).start();
    });
}

// 更新应用资源
function installWgt(path){
    plus.nativeUI.showWaiting("安装wgt文件...");
	plus.runtime.install(path,{},function(){
	    plus.nativeUI.closeWaiting();
	    console.log("安装wgt文件成功！");
		plus.nativeUI.alert("应用资源更新完成！",function(){
	        plus.runtime.restart();
	    });
	},function(e){
	    plus.nativeUI.closeWaiting();
	    console.log("安装wgt文件失败["+e.code+"]："+e.message);
		plus.nativeUI.alert("安装wgt文件失败["+e.code+"]："+e.message);
    });
}

// H5 plus事件处理
var as='pop-in';// 默认窗口动画
function plusReady(){
	// 隐藏滚动条
	plus.webview.currentWebview().setStyle({scrollIndicator:'none'});
	// Android处理返回键
	plus.key.addEventListener('backbutton',function(){
		if(confirm('确认退出？')){
			plus.runtime.quit();
		}
	},false);
	compatibleAdjust();
}

// DOMContentLoaded事件处理
var _domReady=false;
document.addEventListener('DOMContentLoaded',function(){
	_domReady=true;
	compatibleAdjust();
},false);
// 兼容性样式调整
var _adjust=false;
function compatibleAdjust(){
	if(_adjust||!window.plus||!_domReady){
		return;
	}
	_adjust=true;
	// iOS平台特效
	if('iOS'==plus.os.name){
		document.getElementById('content').className='scontent';	// 使用div的滚动条
		if(navigator.userAgent.indexOf('StreamApp')>=0){	// 在流应用模式下显示返回按钮
			document.getElementById('back').style.visibility='visible';
		}
	}
	// 预创建二级窗口
	//	preateWebviews();
	// 关闭启动界面
	setTimeout(function(){
		plus.navigator.closeSplashscreen();
		plus.navigator.setStatusBarBackground('#FFFFFF');
		if(plus.navigator.isImmersedStatusbar()){
			plus.navigator.setStatusBarStyle('UIStatusBarStyleBlackOpaque');
		}
	},500);
}

//关闭
var btn= document.querySelector('#close');
btn.addEventListener('click',function(){
	if(confirm('确认退出？')){
		plus.runtime.quit();
	}
},false);
compatibleAdjust();

function toView(url){
	localStorage.jsonParamStr="";
	location.href=url;
}