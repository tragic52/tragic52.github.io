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
            //�ж��Ƿ���IOSQQ ���� AndroidQQ��
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
            //У���Ƿ��¼��
            var isLogin = GAMEACT.data.isLogin;
            if (!isLogin) {
                GAMEACT.unLogin();
            } else {
                callback();
            }
        },
        amsRequest: function (args) {
            var amsCfg_temp = {
                "iActivityId": GAMEACT.config.actId, //�id
                "sData": {}, // ���ݶ������
                "_everyRead": true, // ÿ�ζ��ض�amsCfg_475214�������
                "iFlowId": args.flowId, //����id
                "sNeedSubmitPopDiv": !args.closeLoading ? true : false, // �Ƿ���loading��
                "fFlowSubmitEnd": function (res) {
                    //ame���ص���0�Ǻ��ߵ�����
                    args.success(res);
                },
                "fFlowSubmitFailed": function (res) {
                    //ʧ�ܻ��ߵ��������
                    //���������㣬ame���ش���0�Ǻ��ߵ�����
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
            "title": "�ٻ����Ŷ��������Ӯȡ����",
            "desc": "������Ӫ�ز��밢�Ŷ����ٻ����Ŷ��ȡ����Ƥ��",
            "wxtitle": "�ٻ����Ŷ��������Ӯȡ����",
            "wxdesc": "������Ӫ�ز��밢�Ŷ����ٻ����Ŷ��ȡ����Ƥ��",
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
                        actName: shareInfo.actName,//���������
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
        //δ��¼����
        //TGDialogS("pop1")
        // launchCamp();
        launchCamp(
            `web?url=${encodeURIComponent(
                window.location.protocol + '//pvp.qq.com/act/a20200703friend/index_wqg.html'
            )}`
        );
    },
    //�е�¼̬Ҫ������
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
                        //"ams_appname": "TXYX_TO_GAME", //openid_to_openid�ӿڵ�Ӧ�����ƣ��̶�����
                        "sAMSTrusteeship": 1,
                        "ams_targetappid": "wx95a3a4d7c627e07d"  //��Ҫ����openidת������Ϸҵ��appid������ʵ������޸�
                    },
                    'type': 'html',
                    'gameId': 'yxzj', //����
                    'isQueryRole': true,
                    'channelContentId': 'channelContentId', //ѡ����Q��΢���������ID
                    'systemContentId': 'systemContentId', // ѡ��IOS ��׿�������ID
                    'areaContentId': 'areaContentId', //С���������ID(sPartition��Ӧ��������)
                    'roleContentId': 'roleContentId', //��ɫѡ����ID
                    'confirmButtonId': 'doSubmit', //ȷ����ť��ID
                    'submitEvent': function (roleObj) {
                        //��Ҫ��Ҫ���ύ����ȥ
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

//��ѯ�Ƿ�󶨵�����
amsCfg_680828 = {
    type: "query",
    iQueryFlowID: 680827,
    success: function (bindedInfo) {
        //�Ѱ�ʱ����չ����
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
        $('#btn_role').text('���󶨽�ɫ��');
        //δ��ʱ����չ����
    }
};

//�ύ�󶨵�����
amsCfg_680827 = {
    type: "comit",
    needPopupRole: false,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
    roleInfo: null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
    iQueryFlowID: 680828,
    service: "yxzj",
    success: function (bindedInfo) {
        //�Ѱ�ʱ����չ����
        if (bindedInfo.iRet == 0) {
            GAMEACT.data.isBund = true;
            $('#login_span').text(decodeURIComponent(bindedInfo.jData.data.FroleName));
            showDialog.hide();
        }
    },
    failure: function () {
        //δ��ʱ����չ����
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
                //�жϿͻ����뵱ǰ��¼��ʽ�Ƿ�һ�£���һ��ע����¼̬��Ϣ��ˢ��ҳ��
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
            if (GAMEACT.common.isWeiXin()) {//δ��¼ʱ΢���ڴ򿪻����΢����Ȩ
                LoginManager.loginByWX({
                    redirect_wx_url: window.location.protocol + "//iu.qq.com/wxauth/redirect.html?url=" + encodeURIComponent(GAMEACT.config.homePage)//�ص�url
                });
            } else if (GAMEACT.common.isQQ()) {
                LoginManager.login();
            } else {
                GAMEACT.unLogin();
            }
        }, {
            appConfig: {
                avoidConflict: true,
                WxAppId: 'wx1cd4fbe9335888fe',  //��Ѷ��Ϸ���appid
                scope: 'snsapi_userinfo'  //snsapi_base��ȡ�û�openid��Ϣ��snsapi_userinfo���Ի�ȡ��ͼ���ǳ� �ȵ���Ϣ
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

//��
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

//�ύ������AME
// amsCfg_682056 = {
//     '_everyRead':true,//_everyRead�������ڿ��ƻ��棬��Ϊtrue��ʾÿ�η����󶼻��ȡamsCfg������ֵ���������
//     "iActivityId": 315377, //�id
//     "sData" : {}, // ���ݶ������
//     "_everyRead" : true, // ÿ�ζ��ض�amsCfg_682056�������
//     "iFlowId":    682056, //����id
//     "sNeedSubmitPopDiv":  true , // �Ƿ���loading��
//     "fFlowSubmitEnd": function(res){
//         console.log(res)
//         //ame���ص���0�Ǻ��ߵ�����
//         alert(1111)
//     },
//     "fFlowSubmitFailed":function(res){
//         alert(222)
//     },
//     "fFlowProssFailed":function(res){
//
//     }
// };

//��ѯ����
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
        // �ȼ���Ƿ�װ��Ϸ
        if (GAMEACT.common.isIos()) {
            window.GameHelper.isAppInstall('com.tencent.smoba', ret => {
                if (!ret) {
                    toast('���Ȱ�װ������ҫ��Ϸ�ͻ���');
                } else {
                    window.open('tencentlaunch1104466820://');
                }
            });
        } else {
            window.launchGameCallBack = function (ret) {
                if (ret !== 1) {
                    toast('���Ȱ�װ������ҫ��Ϸ�ͻ���');
                }
            };
            window.GameHelper.launchGame('', 'launchGameCallBack');
        }
    } else if (GAMEACT.common.isMsdk()) {
        alert("������Ϸ�ڲ���5v5");
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
//������ȡ�ٻ�ֵ
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


//�ٻ�
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
                    //�ٻ�ֵ
                    GAMEACT.data.zhaohuanNum = GAMEACT.data.zhaohuanNum - 30;
                    GAMEACT.data.zhaohuanNum = GAMEACT.data.zhaohuanNum < 0 ? 0 : GAMEACT.data.zhaohuanNum;
                    $('.zhaohuan-num').text(GAMEACT.data.zhaohuanNum);

                    //�ٻ�����
                    GAMEACT.data.hasZhaoHuan = GAMEACT.data.hasZhaoHuan + 1;
                    zhaohuanFriends();
                    //��������
                    GAMEACT.data.presentNum = GAMEACT.data.presentNum + 1;
                    GAMEACT.data.presentNum = GAMEACT.data.presentNum > 4 ? 4 : GAMEACT.data.presentNum;
                    $('#gift-num').text(GAMEACT.data.presentNum);

                    //ҳ��ͼƬ�仯
                    $('#zhao-img').attr('src', '//game.gtimg.cn/images/yxzj/act/a20200703friend/c1-img' + GAMEACT.data.hasZhaoHuan + '.png');
                    //�ٻ�����
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
                if (res.sMsg == '�ٻ�ֵ����') {
                    TGDialogS('pop8');
                } else {
                    alert(res.sMsg);
                }
            }
        })
    })
})

//�ٻ���
var zhaohuanGiftImg = {
    1: {"img": "pop-img4.png", 'name': '���Ŷ�'},
    2: {"img": "pop-img1.png", 'name': '����'},
    3: {"img": "pop-img3.png", 'name': '����'},
    4: {"img": "pop-img6.png", 'name': '�ڰ�'}
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
            $('#pop15 .info-hint').text('����ǰ��δ�ٻ�' + zhaohuanGiftImg[giftType]['name'] + '����ȥ�ٻ���');
            TGDialogS('pop15')
            return;
        }
        if (that.hasClass('ylq-btn')) {
            //�ٻ�����
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
                //ame���ص���0�Ǻ��ߵ�����
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

//����ͼ��
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
                if (res.sMsg == '������ͼ��') {
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
//����
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
                //ame���ص���0�Ǻ��ߵ�����
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
            $('#pop15 .info-hint').text('����δ���Q�ҽ�����������д�ջ���Ϣ');
            TGDialogS('pop15')
            return;
        }
        amsCfg_680048.sData = GAMEACT.sData;
        amsCfg_680048.sData.iShow = 1;
        amsSubmit(315377, 680048);

    })
})
//�ύ������Ϣ
amsCfg_680048 = {
    'iActivityId': '315377', // AMS���
    "sData": {},
    'iFlowId': '680048', // ���̺�
    '_everyRead': true,
    'success': function (res) { //�ύ�ɹ��Ļص�
        if (typeof res.jData == "object") { //�����Ѿ��ύ�����ݣ����ҳ��
            need(["biz.provincecityselector", "util.form"], function (pcs, FormManager) {
                TGDialogS("pop-sh");
                g('btn_sure_add').onclick = function () {
                    var name = $('#name1').val();
                    var mail = $("#mail").val();
                    var mobile = $("#tel").val();
                    if (name == '') {
                        alert('����������');
                        return;
                    }
                    if (name.length > 30) {
                        alert('�����ĳ��Ȳ��ܴ���30');
                        return;
                    }
                    if (mobile == '') {
                        alert('�������ֻ���');
                        return;
                    }
                    if (!milo.isMobile(mobile)) {
                        alert('��������ֻ���������');
                        return;
                    }
                    if (mail == '') {
                        alert('����������');
                        return;
                    }
                    if (!milo.isMail(mail)) {
                        alert('������������ʽ����');
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
            if (res.sMsg == '��ӳɹ�') {
                $('#pop15 .info-hint').text('��ϲ���ɹ��ύ�ջ���Ϣ');
                TGDialogS('pop15')
            } else if (res.sMsg == '�Բ�����û�л��ʵ�ｱ���������ύ�񽱸�����Ϣ!') {
                $('#pop15 .info-hint').text('����δ���Q�ҽ�����������д�ջ���Ϣ');
                TGDialogS('pop15')
            } else {
                alert(res.sMsg);
            }
        }
    }
};







