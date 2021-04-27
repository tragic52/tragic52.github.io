var GAMEACT = {
    common: {
        ua: window.navigator.userAgent.toLowerCase(),
        isIos: function () {
            var ua = GAMEACT.common.ua;
            return /iphone|ipod|ipad/i.test(ua)
        },
        isAndroid: function () {
            var ua = GAMEACT.common.ua;
            return /android/i.test(ua);
        },
        isWeiXin: function () {
            var ua = GAMEACT.common.ua;
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        },
        isQQ: function () {
            var sUserAgent = navigator.userAgent;
            var REGEXP_IOS_QQ = new RegExp("(iPad|iPhone|iPod).*? (IPad)?QQ\\/([\\d\\.]+)");
            var REGEXP_ANDROID_QQ = new RegExp("\\bV1_AND_SQI?_([\\d\\.]+)(.*? QQ\\/([\\d\\.]+))?", "ig");
            //判断是否是IOSQQ 或者 AndroidQQ打开
            var isIphoneOs_QQ = REGEXP_IOS_QQ.test(sUserAgent);
            var isAndroid_QQ = REGEXP_ANDROID_QQ.test(sUserAgent);

            if (isIphoneOs_QQ || isAndroid_QQ) {
                return true;
            } else {
                return false;
            }
        },
        qqLogin: function () {
            var qq_page = GAMEACT.config.qq_page,
                actName = GAMEACT.config.actName;
            var UA = navigator.userAgent;
            var REGEXP_IOS_QQ = /(iPad|iPhone|iPod).*? QQ\/([\d\.]+)/;
            var REGEXP_ANDROID_QQ = /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/;
            if (!REGEXP_IOS_QQ.test(UA) && !REGEXP_ANDROID_QQ.test(UA)) {
                setTimeout(function () {
                    window.location.href = 'mqqapi://forward/url?url_prefix=' + btoa(qq_page + "?_wv=49957") + "&version=1&src_type=web";
                }, 200);
            } else {
                window.location.href = qq_page + '?_wv=49957&type=qq';
            }
            pgvSendClick({hottag: 'cp.' + actName + '.index_wqgm.qqdl'});
        },
        wxLogin: function () {
            var self = GAMEACT,
                actName = self.config.actName,
                homePage = self.config.homePage,
                wxOpenLink = self.config.wx_open_link;
            if (self.common.isWeiXin()) {
                window.location.href = homePage;
            } else {
                window.location.href = wxOpenLink;
            }
            pgvSendClick({hottag: 'cp.' + actName + '.index_wqgg.wxdl'});
        },
        isMsdk: function () {
            if (milo.request('msdkEncodeParam')
                && milo.request('appid') != ''
                && milo.request('area') != ''
                && milo.request('partition') != '') {
                return true;
            } else {
                return false;
            }
        }, isZhushou: function () {
            if (milo.request('source')
                && milo.request('gameOpenid') != ''
                && milo.request('msdkEncodeParam') != ''
                && milo.request('serverId') != '') {
                return true;
            } else {
                return false;
            }
        },
        checkLogin: function (callback) {
            //校验是否登录了
            var isLogin = GAMEACT.data.isLogin;
            if (!isLogin) {
                GAMEACT.unLogin();
            } else {
                callback();
            }
        },
        amsRequest: function (args) {
            var amsCfg_temp = {
                "iActivityId": GAMEACT.config.actId, //活动id
                "sData": {}, // 传递额外参数
                "_everyRead": true, // 每次都重读amsCfg_475214这个对象
                "iFlowId": args.flowId, //流程id
                "sNeedSubmitPopDiv": !args.closeLoading ? true : false, // 是否开启loading层
                "fFlowSubmitEnd": function (res) {
                    //ame返回等于0是后走到这里
                    args.success(res);
                },
                "fFlowSubmitFailed": function (res) {
                    //失败会走到这个函数
                    //条件不满足，ame返回大于0是后走到这里
                    if (!args.hasOwnProperty('error')) {
                        alert(res.sMsg);
                        return false;
                    }
                    args.error(res);
                },
            };

            var amsObj = "amsCfg_" + args.flowId;
            window[amsObj] = amsCfg_temp;
            if (!args.sData) args.sData = GAMEACT.sData;
            window[amsObj].sData = args.sData;
            amsSubmit(GAMEACT.config.actId, args.flowId);
        },
        giftRequest: function (args) {
            var amsCfg_temp = {
                'iActivityId': GAMEACT.config.actId,
                'activityId': args.activityId,
                'sData': {},
                'sNeedSubmitPopDiv': !args.closeLoading ? true : false,
                '_everyRead': true,
                'onBeginGetGiftEvent': function () {
                    return 0;
                },
                'onGetGiftFailureEvent': function (callbackObj) {
                    if (!args.hasOwnProperty('error')) {
                        alert(callbackObj.sMsg);
                        return false;
                    }
                    args.error(callbackObj);
                },
                'onGetGiftSuccessEvent': function (callbackObj) {
                    args.success(callbackObj);
                }
            };

            var amsObj = "amsCfg_" + args.flowId;
            window[amsObj] = amsCfg_temp;
            if (!args.sData) args.sData = GAMEACT.sData;
            window[amsObj].sData = args.sData;
            amsSubmit(GAMEACT.config.actId, args.flowId);
        }
    },
    config: {
        appid: 'wx1cd4fbe9335888fe',
        qq_appid: '1104466820',
        wx_appid: 'wx95a3a4d7c627e07d',
        pc_appid: 'wxfa0c35392d06b82f',
        sServiceType: 'yxzj',
        qq_page: window.location.protocol + '//pvp.qq.com/act/a20200703friend/index_wqg.html',
        wx_page: window.location.protocol + '//pvp.qq.com/act/a20200703friend/index_wqg.html',
        homePage: window.location.protocol + '//pvp.qq.com/act/a20200703friend/index_wqg.html?acctype=wx&appid=wx1cd4fbe9335888fe',
        wx_open_link: '',
        actId: '315377',
        actName: 'a20200703friend',
        _server_url: window.location.protocol + '//gameact.qq.com/comm-htdocs/js/game_area/yxzj_server_select.js',
        source: "smoba_zhushou",
        shareInfo: {
            "shareUrl": window.location.protocol + '//pvp.qq.com/act/a20200703friend/index_wqg.html',
            "title": "召唤阿古朵和朋友们赢取好礼",
            "desc": "来王者营地参与阿古朵活动，召唤阿古朵抽取永久皮肤",
            "wxtitle": "召唤阿古朵和朋友们赢取好礼",
            "wxdesc": "来王者营地参与阿古朵活动，召唤阿古朵抽取永久皮肤",
            "imgUrl": window.location.protocol + '//game.gtimg.cn/images/yxzj/act/a20200703friend/share.jpg',
            "img_width": "120",
            "img_height": "120",
        }
    },
    sData: {
        sArea: '',
        sPlatId: ""
    },
    data: {
        isLogin: false,
        isBund: false,
        Shiwu: 0,
        zhaohuanNum: 0,
        hasZhaoHuan: 0,
        presentNum: 0,
        GiftNum: 0,
        isTujian: false
    },
    shareFun: function (callback) {
        var shareInfo = GAMEACT.config.shareInfo;
        shareInfo.wxShareLink = shareInfo.shareUrl;
        shareInfo.qqShareLink = shareInfo.shareUrl;
        shareInfo.actName = GAMEACT.config.actName;

        if (GAMEACT.common.isWeiXin()) {
            need("biz.wxclient", function (WXClient) {
                WXClient.init({"sAppId": "wx36896ec6df7cd95e", debug: false}, function (wx) {
                    WXClient.shareAll({
                        title: shareInfo.wxtitle,
                        desc: shareInfo.wxdesc,
                        link: shareInfo.wxShareLink,
                        imgUrl: shareInfo.imgUrl,
                        actName: shareInfo.actName,//点击流命名
                        success: function (sres) {
                        },
                        cancel: function (sres) {

                        }
                    });
                });
            });
        } else {
            include(location.protocol + '//www.iculture.cc/demo/pvpqq/qqmobile/qqapi.js', function () {
                mqq.ui.setOnShareHandler(function (type) {
                    if (type == "0") {
                    }
                    switch (type + '') {
                        case '0':
                            mqq.ui.shareMessage({
                                title: shareInfo.title,
                                desc: shareInfo.desc,
                                share_type: type,
                                share_url: shareInfo.qqShareLink,
                                image_url: shareInfo.imgUrl
                            }, function (result) {
                            });
                            break;
                        case '1':
                            mqq.ui.shareMessage({
                                title: shareInfo.title,
                                desc: shareInfo.desc,
                                share_type: type,
                                share_url: shareInfo.qqShareLink,
                                image_url: shareInfo.imgUrl
                            }, function (result) {
                            });
                            break;
                        case '2':
                            mqq.ui.shareMessage({
                                title: shareInfo.wxtitle,
                                desc: shareInfo.wxdesc,
                                share_type: type,
                                share_url: shareInfo.wxShareLink,
                                image_url: shareInfo.imgUrl
                            }, function (result) {
                            });
                            break;
                        case '3':
                            mqq.ui.shareMessage({
                                title: shareInfo.wxtitle,
                                desc: shareInfo.wxdesc,
                                share_type: type,
                                share_url: shareInfo.wxShareLink,
                                image_url: shareInfo.imgUrl
                            }, function (result) {
                            });
                            break;
                    }
                });
            })

        }
    },
    unLogin: function () {
        //未登录弹窗
        //TGDialogS("pop1")
        // launchCamp();
        launchCamp(
            `web?url=${encodeURIComponent(
                window.location.protocol + '//pvp.qq.com/act/a20200703friend/index_wqg.html'
            )}`
        );
    },
    //有登录态要做的事
    hasLogined: function (args) {
        $('#login_span').text(decodeURIComponent(args.nick));
        $("#unlogin").hide();
        $("#logined").show();
        if (!GAMEACT.common.isMsdk()) {
            $('#btn_role').show();
        }
        if (GAMEACT.common.isWeiXin()) {
            GAMEACT.config._server_url = window.location.protocol + '//pvp.qq.com/comm-htdocs/js/game_area/yxzj_WX_server_select.js';
        } else if (GAMEACT.common.isQQ()) {
            GAMEACT.config._server_url = window.location.protocol + '//pvp.qq.com/comm-htdocs/js/game_area/yxzj_SQ_server_select.js';
        }
        include(GAMEACT.config._server_url + "?_rand=" + Math.random(), function () {
            need(["biz.roleselector"], function (RoleSelector) {
                var roleobj = cloneClass(RoleSelector);
                roleobj.init({
                    'openToOpen': {
                        //"ams_appname": "TXYX_TO_GAME", //openid_to_openid接口的应用名称，固定不变
                        "sAMSTrusteeship": 1,
                        "ams_targetappid": "wx95a3a4d7c627e07d"  //需要进行openid转换的游戏业务appid，根据实际情况修改
                    },
                    'type': 'html',
                    'gameId': 'yxzj', //待定
                    'isQueryRole': true,
                    'channelContentId': 'channelContentId', //选择手Q、微信下来框的ID
                    'systemContentId': 'systemContentId', // 选择IOS 安卓下拉框的ID
                    'areaContentId': 'areaContentId', //小区下拉框的ID(sPartition对应的下来框)
                    'roleContentId': 'roleContentId', //角色选择框的ID
                    'confirmButtonId': 'doSubmit', //确定按钮的ID
                    'submitEvent': function (roleObj) {
                        //不要，要了提交不过去
                        // var aid = roleObj.submitData.areaid;
                        // if (aid == 2 || aid == 4) {
                        //     var plat = 0;
                        // } else {
                        //     plat = 1;
                        // }
                        GAMEACT.sData.sArea = roleObj.submitData.areaid;
                        GAMEACT.sData.sPlatId = roleObj.submitData.sPlatId;
                        GAMEACT.sData.sPartition = roleObj.submitData.sPartition;
                        GAMEACT.sData.sRoleId = roleObj.submitData.roleid;
                        GAMEACT.sData.sServiceType = roleObj.gameId;
                        GAMEACT.sData.sExtra = roleObj.submitData.roleid;
                        GAMEACT.sData.charac_no = roleObj.submitData.roleid;
                        GAMEACT.sData.sRoleName = encodeURIComponent(roleObj.submitData.rolename);
                        GAMEACT.sData.md5str = roleObj.submitData.md5str;
                        GAMEACT.sData.ams_checkparam = roleObj.submitData.checkparam;
                        GAMEACT.sData.checkparam = roleObj.submitData.checkparam;

                        amsCfg_680827.sData = GAMEACT.sData;
                        amsInit(315377, 680827);

                    }
                });

                roleobj.show();
            });
        });

        GAMEACT.Init();
    },
    Init: function () {
        var request = GAMEACT.common.amsRequest;
        var transId = '680477';
        if (GAMEACT.common.isMsdk()) {
            transId = '682057';
        }
        request({
            flowId: transId,
            success: function (res) {
                if (res.iRet == 0) {
                    GAMEACT.data.zhaohuanNum = parseInt(res.sOutValue1);
                    GAMEACT.data.hasZhaoHuan = parseInt(res.sOutValue2);
                    GAMEACT.data.presentNum = parseInt(res.sOutValue3);
                    GAMEACT.data.zhaohuanGift = res.sOutValue4.split(',');
                    GAMEACT.data.GiftNum = parseInt(res.sOutValue5);
                    GAMEACT.data.Shiwu = parseInt(res.sOutValue6);
                    GAMEACT.data.isTujian = parseInt(res.sOutValue7) == 1 ? true : false;

                    zhaohuanFriends();
                    $('.zhaohuan-num').text(GAMEACT.data.zhaohuanNum);
                    $('#gift-num').text(GAMEACT.data.presentNum)

                    if (GAMEACT.data.hasZhaoHuan > 0) {
                        $('#zhao-img').attr('src', '//game.gtimg.cn/images/yxzj/act/a20200703friend/c1-img' + GAMEACT.data.hasZhaoHuan + '.png');
                    }
                    if (GAMEACT.data.GiftNum >= 4) {
                        $('.open-btn').addClass('ykq-btn');
                    }

                    if (GAMEACT.data.isTujian) {
                        $('.tj-btn').addClass('ytj-btn');
                    }
                    if (res.sOutValue8) {
                        $('#login_span').text(decodeURIComponent(res.sOutValue8));
                    }
                }
            }
        });

        if (GAMEACT.common.isWeiXin() || GAMEACT.common.isQQ()) {
            amsCfg_680828.sData = GAMEACT.sData;
            amsInit(315377, 680828);
        }

    },
};
GAMEACT.shareFun();

//查询是否绑定的配置
amsCfg_680828 = {
    type: "query",
    iQueryFlowID: 680827,
    success: function (bindedInfo) {
        //已绑定时的扩展处理
        if (bindedInfo.iRet == 0) {
            GAMEACT.data.isBund = true;
            $('#login_span').text(decodeURIComponent(bindedInfo.jData.data.FroleName));
            GAMEACT.sData.sArea = bindedInfo.jData.data.Farea;
            // GAMEACT.sData.sPlatId = bindedInfo.jData.data.FplatId;
            GAMEACT.sData.sPartition = bindedInfo.jData.data.FPartition;
            GAMEACT.sData.sRoleId = bindedInfo.jData.data.FroleId;
        }
    },
    failure: function () {
        $('#btn_role').text('【绑定角色】');
        //未绑定时的扩展处理
    }
};

//提交绑定的配置
amsCfg_680827 = {
    type: "comit",
    needPopupRole: false,//是否弹默认角色框选角色
    roleInfo: null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
    iQueryFlowID: 680828,
    service: "yxzj",
    success: function (bindedInfo) {
        //已绑定时的扩展处理
        if (bindedInfo.iRet == 0) {
            GAMEACT.data.isBund = true;
            $('#login_span').text(decodeURIComponent(bindedInfo.jData.data.FroleName));
            showDialog.hide();
        }
    },
    failure: function () {
        //未绑定时的扩展处理
    }
};

$('#btn_login').click(function () {
    launchCamp(
        `web?url=${encodeURIComponent(
            window.location.protocol + '//pvp.qq.com/act/a20200703friend/index_wqg.html'
        )}`
    )
})

window.ams_login_avoid_conflict = true;
milo.ready(function () {
    need("biz.login", function (LoginManager) {
        LoginManager.checkLogin(function (userinfo) {
            if (GAMEACT.common.isMsdk()) {
                GAMEACT.data.isBund = 1;
                GAMEACT.data.isLogin = true;
                // if (milo.request('appid') == "wx95a3a4d7c627e07d") {
                //     GAMEACT.config._server_url = window.location.protocol + '//pvp.qq.com/comm-htdocs/js/game_area/yxzj_WX_server_select.js';
                //     GAMEACT.data.userPt = 1
                // } else {
                //     GAMEACT.config._server_url = window.location.protocol + '//pvp.qq.com/comm-htdocs/js/game_area/yxzj_SQ_server_select.js';
                //     GAMEACT.data.userPt = 2
                // }
                GAMEACT.data.isBund = 1;
                GAMEACT.sData.sArea = milo.request('area');
                GAMEACT.sData.sPlatId = GAMEACT.common.isIos() ? 0 : 1;
                GAMEACT.sData.sPartition = milo.request('partition');
                GAMEACT.sData.appid = milo.request('appid');
                GAMEACT.sData.sServiceType = GAMEACT.config.sServiceType;
                if (GAMEACT.sData.sPartition == '6011' || GAMEACT.sData.sPartition == '7011') {
                    GAMEACT.sData.sArea = GAMEACT.sData.sPartition == '6011' ? 6 : 7;
                }
                GAMEACT.hasLogined({
                    nick: '',
                    headImg: ''
                })
            } else if (GAMEACT.common.isZhushou()) {
                GAMEACT.data.isBund = 1;
                GAMEACT.data.isLogin = true;
                GAMEACT.sData.sArea = milo.request('areaId');
                GAMEACT.sData.sPlatId = milo.request('platid');
                GAMEACT.sData.sPartition = milo.request('serverId');
                GAMEACT.sData.source = 'smoba_zhushou';
                if (GAMEACT.sData.sArea == 3 || GAMEACT.sData.sArea == 4 || GAMEACT.sData.sArea == 7) {
                    GAMEACT.sData.appid = 'wxf4b1e8a3e9aaf978';
                    GAMEACT.sData.ams_targetappid = 'wx95a3a4d7c627e07d';
                } else {
                    GAMEACT.sData.appid = '1105200115';
                }
                GAMEACT.hasLogined({
                    nick: milo.request('roleName'),
                    headImg: ''
                })
            } else {
                var acctype = milo.cookie.get('acctype');
                //判断客户端与当前登录方式是否一致，不一致注销登录态信息，刷新页面
                if ((GAMEACT.common.isWeiXin() && acctype != 'wx') || (GAMEACT.common.isQQ() && acctype == 'wx')) {
                    LoginManager.logout(
                        {
                            logoutCallback: function () {
                                location.reload(true);
                            }
                        }
                    );
                    return;
                } else {
                    if (GAMEACT.common.isWeiXin()) {
                        GAMEACT.config._server_url = window.location.protocol + '//pvp.qq.com/comm-htdocs/js/game_area/yxzj_WX_server_select.js';
                        GAMEACT.data.isLogin = true;
                        GAMEACT.sData.sArea = 1;
                        GAMEACT.sData.sPlatId = GAMEACT.common.isIos() ? 0 : (GAMEACT.common.isAndroid() ? 1 : '');
                        GAMEACT.sData.appid = GAMEACT.config.appid;
                        GAMEACT.sData.sServiceType = "txyxhdh";
                        GAMEACT.sData.ams_targetappid = GAMEACT.config.wx_appid;
                        LoginManager.getUserInfoByWxOpenId({
                            "openid": milo.cookie.get("openid"),
                            "access_token": milo.cookie.get("access_token")
                        }, function (wxuser) {
                            var nick = wxuser.nickname.replace(/<span[^>]*>([\s\S]*?)<\/span>/g, '');
                            nick = milo.xss.filterWxNickName(nick).replace(/^[0o]*/, '');

                            var headImg = '';
                            if (wxuser.headimgurl != "") {
                                headImg = wxuser.headimgurl + "/0";
                                headImg = location.protocol + headImg.replace("https:", "").replace("http:", "");
                            }
                            GAMEACT.hasLogined({
                                nick: nick,
                                headImg: headImg
                            })
                        }, function () {
                            LoginManager.logout({
                                logoutCallback: function () {
                                    location.reload(true);
                                }
                            });
                        });
                    } else {
                        GAMEACT.data.isLogin = true;
                        GAMEACT.sData.appid = GAMEACT.config.qq_appid;
                        GAMEACT.sData.sArea = 2;
                        GAMEACT.sData.sPlatId = GAMEACT.common.isIos() ? 0 : (GAMEACT.common.isAndroid() ? 1 : '');
                        var nick = LoginManager.getNickName();
                        if (nick == '') {
                            nick = LoginManager.getUserUin();
                        }
                        nick = milo.xss.filterWxNickName(nick).replace(/<span[^>]*>([\s\S]*?)<\/span>/g, '').replace(/^[0o]*!/, '');
                        var headImg = location.protocol + "//q.qlogo.cn/g?b=qq&nk=" + userinfo.userUin + "&s=100";
                        GAMEACT.hasLogined({
                            nick: nick,
                            headImg: headImg,
                            qqUin: LoginManager.getUserUin()
                        })
                    }
                }
            }


        }, function () {
            if (GAMEACT.common.isWeiXin()) {//未登录时微信内打开活动进行微信授权
                LoginManager.loginByWX({
                    redirect_wx_url: window.location.protocol + "//iu.qq.com/wxauth/redirect.html?url=" + encodeURIComponent(GAMEACT.config.homePage)//回调url
                });
            } else if (GAMEACT.common.isQQ()) {
                LoginManager.login();
            } else {
                GAMEACT.unLogin();
            }
        }, {
            appConfig: {
                avoidConflict: true,
                WxAppId: 'wx1cd4fbe9335888fe',  //腾讯游戏活动号appid
                scope: 'snsapi_userinfo'  //snsapi_base获取用户openid信息，snsapi_userinfo可以获取到图像，昵称 等等信息
            }
        })
    });
})
var request = GAMEACT.common.amsRequest;
var giftRequest = GAMEACT.common.giftRequest;
var checkLogin = GAMEACT.common.checkLogin;

function zhaohuanFriends() {
    // $('.gift_zhaohun').removeClass('ljlq-btn')
    if (GAMEACT.data.hasZhaoHuan == 4) {
        $('.gift_zhaohun').addClass('ljlq-btn');
    } else if (GAMEACT.data.hasZhaoHuan == 3) {
        $('.gift_zhaohun:lt(3)').addClass('ljlq-btn')
    } else if (GAMEACT.data.hasZhaoHuan == 2) {
        $('.gift_zhaohun:lt(2)').addClass('ljlq-btn')
    } else if (GAMEACT.data.hasZhaoHuan == 1) {
        $('.gift_zhaohun:lt(1)').addClass('ljlq-btn')
    }

    for (var i in GAMEACT.data.zhaohuanGift) {
        if (GAMEACT.data.zhaohuanGift[i] == '1') {
            $('.gift_zhaohun').eq(i).removeClass('ljlq-btn').addClass('ylq-btn');
        }
    }
}

//绑定
$('#btn_role').click(function () {
    checkLogin(function () {
        if (GAMEACT.common.isZhushou()) {
            window.location.href = "smobagamehelper://changerole?top_in=1";
        } else {
            TGDialogS('pop-login');
        }
    })
})

var taskDone = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false
};
var taskHasLingqu = [];

function showTaskBtn() {
    $('.qwc-btn').removeClass('plj-btn pylq-btn');
    for (var i in taskDone) {
        if (taskDone[i] == true) {
            $('.qwc-btn').eq(i - 1).addClass('plj-btn');
        }
    }
    // console.log(111);
    // console.log(taskHasLingqu);
    for (var i in taskHasLingqu) {
        if (taskHasLingqu[i] == '1') {
            $('.qwc-btn').eq(i).removeClass('plj-btn').addClass('pylq-btn');
        }
    }
    TGDialogS('pop13')
}

function showTaskProcess() {
    if (GAMEACT.data.hasZhaoHuan >= 4) {
        TGDialogS('pop10')
        return;
    }
    // amsCfg_682056.sData = GAMEACT.sData;
    // amsSubmit(315377,682056);

    //680899
    request({
        flowId: '682056',
        success: function (res) {
            if (res.iRet == 0) {
                taskDone[1] = res.sOutValue1 >= 1 ? true : false;
                taskDone[2] = res.sOutValue2 >= 3 ? true : false;
                taskDone[3] = res.sOutValue3 >= 1 ? true : false;
                taskDone[4] = res.sOutValue4 >= 1 ? true : false;
                taskDone[5] = res.sOutValue5 >= 1 ? true : false;
                taskDone[6] = res.sOutValue6 >= 1 ? true : false;
                taskDone[7] = res.sOutValue7 >= 1 ? true : false;
                taskHasLingqu = res.sOutValue8.split(',');
                showTaskBtn();
            }
        },
        error: function (res) {
            console.log(res)
        }
    })
}

//提交请求至AME
// amsCfg_682056 = {
//     '_everyRead':true,//_everyRead参数用于控制缓存，设为true表示每次发请求都会读取amsCfg参数的值，建议加上
//     "iActivityId": 315377, //活动id
//     "sData" : {}, // 传递额外参数
//     "_everyRead" : true, // 每次都重读amsCfg_682056这个对象
//     "iFlowId":    682056, //流程id
//     "sNeedSubmitPopDiv":  true , // 是否开启loading层
//     "fFlowSubmitEnd": function(res){
//         console.log(res)
//         //ame返回等于0是后走到这里
//         alert(1111)
//     },
//     "fFlowSubmitFailed":function(res){
//         alert(222)
//     },
//     "fFlowProssFailed":function(res){
//
//     }
// };

//查询任务
$('.hq-btn,.hzz-btn').click(function () {
    checkLogin(function () {
        if (!GAMEACT.data.isBund) {
            TGDialogS('pop-login')
            return;
        }
        showTaskProcess();
    })
})

function launchGame(toast = () => {
}) {
    // ios
    if (GAMEACT.common.isZhushou()) {
        if (GAMEACT.common.isIos() && (typeof GameHelper === 'undefined' || typeof window.GameHelper.isAppInstall === 'undefined')) {
            window.open('tencentlaunch1104466820://');
            return true;
        }
        // android
        if (!GAMEACT.common.isIos() && (typeof GameHelper === 'undefined' || typeof window.GameHelper.launchGame === 'undefined')) {
            window.open('smoba1104466820://');
            return true;
        }
        // 先检查是否安装游戏
        if (GAMEACT.common.isIos()) {
            window.GameHelper.isAppInstall('com.tencent.smoba', ret => {
                if (!ret) {
                    toast('请先安装王者荣耀游戏客户端');
                } else {
                    window.open('tencentlaunch1104466820://');
                }
            });
        } else {
            window.launchGameCallBack = function (ret) {
                if (ret !== 1) {
                    toast('请先安装王者荣耀游戏客户端');
                }
            };
            window.GameHelper.launchGame('', 'launchGameCallBack');
        }
    } else if (GAMEACT.common.isMsdk()) {
        alert("请在游戏内参与5v5");
    } else {
        window.location.href = '//pvp.qq.com/act/a20180628code/index.htm';
    }

}

var taskZhaohuan = {
    1: {
        'num': 15, 'href': function () {
            launchCamp();
            return;
        }, transId: '680984'
    },
    2: {
        'num': 15, 'href': function () {
            launchCamp('infonews');
            return;
        }, transId: '681022'
    },
    3: {
        'num': 15, 'href': function () {
            launchGame();
            return;
        }, transId: '681036'
    },
    4: {
        'num': 20, 'href': function () {
            launchCamp('profile?userid=524124845');
            return;
        }, transId: '681039'
    },
    5: {
        'num': 20, 'href': function () {
            launchCamp('profile?userid=98813645');
            return;
        }, transId: '681040'
    },
    6: {
        'num': 20, 'href': function () {
            var lii = GAMEACT.common.isAndroid() ? 'infosubjectdetail?parentinfoid=600000046&infosubjectid=46' : 'newssubjectdetail?infosubjectid=46';
            launchCamp(lii)
            return;
        }, transId: '682033'
    },
    7: {
        'num': 20, 'href': function () {
            launchCamp('subjectdetail?subjectid=381');
            return;
        }, transId: '682037'
    }
};
//任务领取召唤值
$('.qwc-btn').click(function () {
    var that = $(this),
        type = $(this).data('type'),
        type = parseInt(type);
    checkLogin(function () {
        var taskNum = taskZhaohuan[type]['num'];
        var transId = taskZhaohuan[type]['transId'];
        if (taskHasLingqu[(type - 1)] == '1') {
            return;
        }
        if (!taskDone[type]) {
            taskZhaohuan[type]['href']();
            return;
        }

        GAMEACT.sData.type = type;
        request({
            flowId: transId,
            success: function (res) {
                if (res.iRet == 0) {
                    that.removeClass('plj-btn').addClass('pylq-btn');
                    GAMEACT.data.zhaohuanNum = GAMEACT.data.zhaohuanNum + taskNum;
                    $('.zhaohuan-num').text(GAMEACT.data.zhaohuanNum)
                    taskDone[type] = true;
                    taskHasLingqu[(type - 1)] = 1;
                } else {
                    alert(res.sMsg);
                }
            },
            error: function (res) {
                console.log(res)
                alert(res.sMsg)
            }
        })
    })
})


//召唤
$('.zh-btn').click(function () {
    checkLogin(function () {
        if (!GAMEACT.data.isBund) {
            TGDialogS('pop-login')
            return;
        }
        if (GAMEACT.data.hasZhaoHuan >= 4) {
            TGDialogS('pop10')
            return;
        }
        if (GAMEACT.data.zhaohuanNum < 30) {
            TGDialogS('pop8')
            return;
        }
        request({
            flowId: '680825',
            success: function (res) {
                if (res.iRet == 0) {
                    //召唤值
                    GAMEACT.data.zhaohuanNum = GAMEACT.data.zhaohuanNum - 30;
                    GAMEACT.data.zhaohuanNum = GAMEACT.data.zhaohuanNum < 0 ? 0 : GAMEACT.data.zhaohuanNum;
                    $('.zhaohuan-num').text(GAMEACT.data.zhaohuanNum);

                    //召唤次数
                    GAMEACT.data.hasZhaoHuan = GAMEACT.data.hasZhaoHuan + 1;
                    zhaohuanFriends();
                    //馈赠次数
                    GAMEACT.data.presentNum = GAMEACT.data.presentNum + 1;
                    GAMEACT.data.presentNum = GAMEACT.data.presentNum > 4 ? 4 : GAMEACT.data.presentNum;
                    $('#gift-num').text(GAMEACT.data.presentNum);

                    //页面图片变化
                    $('#zhao-img').attr('src', '//game.gtimg.cn/images/yxzj/act/a20200703friend/c1-img' + GAMEACT.data.hasZhaoHuan + '.png');
                    //召唤弹窗
                    var showIndex = GAMEACT.data.hasZhaoHuan + 1;
                    $('#share-tit').removeClass('share-tit2 share-tit3 share-tit4 share-tit5').addClass('share-tit' + showIndex);
                    $('#share-img').removeClass('share-img2 share-img3 share-img4 share-img5').addClass('share-img' + showIndex);
                    $('.zhao-sug-t').hide().eq(GAMEACT.data.hasZhaoHuan - 1).show();
                    shareZh();


                } else {
                    alert(res.sMsg);
                }
            },
            error: function (res) {
                console.log(res)
                if (res.sMsg == '召唤值不足') {
                    TGDialogS('pop8');
                } else {
                    alert(res.sMsg);
                }
            }
        })
    })
})

//召唤礼
var zhaohuanGiftImg = {
    1: {"img": "pop-img4.png", 'name': '阿古朵'},
    2: {"img": "pop-img1.png", 'name': '球球'},
    3: {"img": "pop-img3.png", 'name': '赤眼'},
    4: {"img": "pop-img6.png", 'name': '黑白'}
};
$('.gift_zhaohun').click(function () {
    var that = $(this),
        giftType = $(this).data('type'),
        useIndex = parseInt(giftType) - 1;

    checkLogin(function () {
        if (!GAMEACT.data.isBund) {
            TGDialogS('pop-login')
            return;
        }
        if (GAMEACT.data.hasZhaoHuan < giftType) {
            $('#pop15 .info-hint').text('您当前还未召唤' + zhaohuanGiftImg[giftType]['name'] + '，快去召唤吧');
            TGDialogS('pop15')
            return;
        }
        if (that.hasClass('ylq-btn')) {
            //召唤弹窗
            $('#share-tit').removeClass('share-tit2 share-tit3 share-tit4 share-tit5').addClass('share-tit' + (giftType+1));
            $('#share-img').removeClass('share-img2 share-img3 share-img4 share-img5').addClass('share-img' + (giftType+1));
            $('.zhao-sug-t').hide().eq(useIndex).show();
            shareZh();
            return;
        }
        GAMEACT.sData.giftType = giftType;
        giftRequest({
            'activityId': '355171',
            'flowId': '680047',
            success: function (res) {
                //ame返回等于0是后走到这里
                if (!res.iPackageId) {
                    alert(res.sMsg);
                    return;
                }
                $('#pop5 img').attr('src', '//game.gtimg.cn/images/yxzj/act/a20200703friend/' + zhaohuanGiftImg[giftType]['img']);
                $('#pop5 .pzh-t').text(res.sPackageName);
                $('#pzh-aaa').removeClass().addClass('spr pzh-tit' + useIndex);
                TGDialogS('pop5')
                GAMEACT.data.zhaohuanGift[useIndex] = 1;
                that.addClass('ylq-btn')
            },
            error: function (res) {
                console.log(res);
                alert(res.sMsg);
            }
        });

    })
})

//生成图鉴
$('.tj-btn').click(function () {
    checkLogin(function () {
        if (!GAMEACT.data.isBund) {
            TGDialogS('pop-login')
            return;
        }
        if (GAMEACT.data.hasZhaoHuan < 4) {
            TGDialogS('pop9')
            return;
        }

        if (GAMEACT.data.isTujian) {
            shareImg();
            return;
        }
        request({
            flowId: '682058',
            success: function (res) {
                if (res.iRet == 0) {
                    GAMEACT.data.isTujian = true;
                    $('.tj-btn').addClass('ytj-btn');
                    shareImg()
                } else {
                    alert(res.sMsg);
                }
            },
            error: function (res) {
                if (res.sMsg == '已生成图鉴') {
                    GAMEACT.data.isTujian = true;
                    $('.tj-btn').addClass('ytj-btn');
                    shareImg()
                } else {
                    alert(res.sMsg);
                }
            }
        })
    })

})

var giftLi = {
    1987051: 'pop-img4.png',
    1987053: 'pop-img3.png',
    1987054: 'pop-img5.png',
    1987055: 'pop-img2.png',
    1987056: 'pop-img6.png',
    1987057: 'pop-img7.png',
    1993503: 'pop-img8.png',
    1987052: 'pop-img1.png'
};
//馈赠
$('.open-btn').click(function () {
    checkLogin(function () {
        if (!GAMEACT.data.isBund) {
            TGDialogS('pop-login')
            return;
        }
        if (GAMEACT.data.GiftNum >= 4) {
            TGDialogS('pop11')
            return;
        }
        if (GAMEACT.data.presentNum < 1) {
            TGDialogS('pop12')
            return;
        }

        giftRequest({
            'activityId': '355171',
            'flowId': '680835',
            success: function (res) {
                //ame返回等于0是后走到这里
                if (!res.iPackageId) {
                    alert(res.sMsg);
                    return;
                }
                GAMEACT.data.GiftNum = GAMEACT.data.GiftNum + 1;
                GAMEACT.data.presentNum = GAMEACT.data.presentNum - 1;
                GAMEACT.data.presentNum = GAMEACT.data.presentNum < 0 ? 0 : GAMEACT.data.presentNum;
                $('#gift-num').text(GAMEACT.data.presentNum);
                if (res.iPackageId == '1987055' || (res.sPackageOtherInfo && res.sPackageOtherInfo == "RealGood") || res.sPackageRealFlag == 1) {
                    ++GAMEACT.data.Shiwu;
                    $('#pop7 .pzh-t').text(res.sPackageName);
                    $('#pop7 img').attr('src', '//game.gtimg.cn/images/yxzj/act/a20200703friend/' + giftLi[res.iPackageId]);
                    TGDialogS('pop7')
                } else {
                    $('#pop6 img').attr('src', '//game.gtimg.cn/images/yxzj/act/a20200703friend/' + giftLi[res.iPackageId]);
                    $('#pop6 .pzh-t').text(res.sPackageName);
                    TGDialogS('pop6')
                }

                if (GAMEACT.data.GiftNum >= 4) {
                    $('.open-btn').addClass('ykq-btn');
                }
            },
            error: function (res) {
                console.log(res);
                alert(res.sMsg);
            }
        });

    })
})
$('.info-btn,.hd-info').click(function () {
    checkLogin(function () {
        if (GAMEACT.data.Shiwu <= 0) {
            $('#pop15 .info-hint').text('您暂未获得Q币奖励，无需填写收货信息');
            TGDialogS('pop15')
            return;
        }
        amsCfg_680048.sData = GAMEACT.sData;
        amsCfg_680048.sData.iShow = 1;
        amsSubmit(315377, 680048);

    })
})
//提交个人信息
amsCfg_680048 = {
    'iActivityId': '315377', // AMS活动号
    "sData": {},
    'iFlowId': '680048', // 流程号
    '_everyRead': true,
    'success': function (res) { //提交成功的回调
        if (typeof res.jData == "object") { //返回已经提交的数据，填充页面
            need(["biz.provincecityselector", "util.form"], function (pcs, FormManager) {
                TGDialogS("pop-sh");
                g('btn_sure_add').onclick = function () {
                    var name = $('#name1').val();
                    var mail = $("#mail").val();
                    var mobile = $("#tel").val();
                    if (name == '') {
                        alert('请输入姓名');
                        return;
                    }
                    if (name.length > 30) {
                        alert('姓名的长度不能大于30');
                        return;
                    }
                    if (mobile == '') {
                        alert('请输入手机号');
                        return;
                    }
                    if (!milo.isMobile(mobile)) {
                        alert('您输入的手机号码有误');
                        return;
                    }
                    if (mail == '') {
                        alert('请输入邮箱');
                        return;
                    }
                    if (!milo.isMail(mail)) {
                        alert('您输入的邮箱格式有误');
                        return;
                    }
                    amsCfg_680048.sData = GAMEACT.sData;
                    amsCfg_680048.sData.sName = name;
                    // amsCfg_680048.sData.sExtend3 = mail;
                    amsCfg_680048.sData.sAddress = mail;
                    amsCfg_680048.sData.sMobile = mobile;
                    amsCfg_680048.sData.iShow = '';
                    amsSubmit(315377, 680048);
                }

                if (res.jData.sMobile && res.jData.sName && (res.jData.sAddress || res.jData.sExtend3)) {
                    $('#name1').val(decodeURIComponent(res.jData.sName));
                    $("#mail").val(decodeURIComponent(res.jData.sAddress));
                    $("#tel").val(res.jData.sMobile)
                }
            });

        } else {
            console.log(res);
            if (res.sMsg == '添加成功') {
                $('#pop15 .info-hint').text('恭喜，成功提交收获信息');
                TGDialogS('pop15')
            } else if (res.sMsg == '对不起，您没有获得实物奖励，不能提交获奖个人信息!') {
                $('#pop15 .info-hint').text('您暂未获得Q币奖励，无需填写收货信息');
                TGDialogS('pop15')
            } else {
                alert(res.sMsg);
            }
        }
    }
};







