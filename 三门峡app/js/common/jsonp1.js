'use strict'
function jsonp(json){
	var json=json||{};
	if(!json.url)return;
	json.cbName=json.cbName||'cb';
	json.data=json.data||{};
	json.data[json.cbName]='show'+Math.random();
	json.data[json.cbName]=json.data[json.cbName].replace('.','');
	var arr=[];
	for(var name in json.data){
		arr.push(name+'='+encodeURIComponent(json.data[name]));
	}
	window[json.data[json.cbName]]=function(result){
		json.success&&json.success(result);
		oH.removeChild(oS);
	};
	var oH=document.getElementsByTagName('head')[0];
	var oS=document.createElement('script');
	oS.src=json.url+'?'+arr.join('&');
	oH.appendChild(oS);
}