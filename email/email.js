Email.send({
    Host : "smtp.qq.com",  //你所用邮箱的smtp地址
    Username : "1520402908@qq.com",      //你的邮箱用户名（如xxx@qq.com）
    Password : "zixxgjmmubujgdhf",      //你的邮箱密码(之前开通服务的授权码)
    To : '1520402908@qq.com',    //收件人邮箱地址
    From : "1520402908@qq.com",       //发件人邮箱地址
    Subject : "This is the subject",  //邮件主题
    Body : "And this is the body"     //邮件内容
}).then(
  message => alert("欢迎光临")
);