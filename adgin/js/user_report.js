(function(a,f){var d;var h=function(){if(a.currentScript){return a.currentScript}if(d&&d.readyState==="interactive"){return d}d=null;var j=a.getElementsByTagName("script");for(var l=0,k;k=j[l++];){if(k.tagName==="SCRIPT"&&k.readyState==="interactive"){d=k;return d}}return d};var e=function(i){var j=h().getAttribute(i);if(j!=null){return j}return null};var c=e("iModuleId");var g=e("iActivityId");var b=e("iFlowId");f&&f.ready(function(){if(!c||!g||!b){console.error("no user report module");return}need("biz.login",function(i){i.checkLogin(function(j){window["amsCfg_"+b]={"_everyRead":true,"iActivityId":g,"activityId":c,"iFlowId":b,"sData":{"type":1},"sNeedSubmitPopDiv":false,"fFlowSubmitEnd":function(k){},"fFlowSubmitFailed":function(k){console.error(k.sMsg)},"fFlowProssFailed":function(k){console.error("fFlowProssFailed",k)},"objCustomFun":function(){console.error("objCustomFun")}};amsSubmit(g,b)},function(){})})})})(document,milo);
