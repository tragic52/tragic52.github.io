(function () {
    console.log("from local")
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt) {
            var len = this.length;
            var start = Number(arguments[1]) || 0;
            start = start < 0 ? Math.ceil(start + len) : Math.floor(start);
            for (; start < len; start++) {
                if (start in this && this[start] === elt) return start
            }
            return -1
        }
    }

    if (window["no_webtips_flag"]) {
        window["gpmtips"] = {
            init: function () {
            }
        };
        return
    }

    var CONTAINER_STR = "ractWrap";
    var IFRAME_BOX_STR = "ractBox";
    var IFRAME_STR = "ractIfr";
    var EXPAND_BUTTON_STR = "expandBtn";
    var LAYER_AARROW_STR = "layerArrow";
    var MASK_STR = "MASK_BY_GPMTIPS";
    var d = document,
        nu = navigator.userAgent.toLowerCase(),
        ie = nu.indexOf("msie") != -1,
        bv = (nu.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
        ie7 = ie && bv.substr(0, 1) == "7",
        ie6 = ie && bv.substr(0, 1) == "6",
        opera = nu.indexOf("opera") != -1,
        dt = new Date,
        api = "//apps.game.qq.com/client_pop/api.php?",

        REPORT_URL = "//apps.game.qq.com/client_pop/doGPMReport?",

        act_data_url = "//apps.game.qq.com/client_pop/webtips?",

        apicfg = "//apps.game.qq.com/client_pop/tpl/webtips/",
        apicfgori = "//ossweb-img.qq.com/images/clientpop/webtips/",
        apijson = "//ossweb-img.qq.com/images/clientpop/js/json.js",
        game = getGameNameByHost(),
        games = new Array("cf", "wf", "nz", "lol", 'fo4',"xy", "woz", "ava", "x5", "dj2", "dzs", "speed", "nba2k", "dnf", "bns", "smite", "codo", "codol", "zzlt", "tps", "fifa", "x52", "wuxia", "mh", "jf", "tthl", "yxzj", "age", "yl", "xx", "qhyx"),
        adm_gray_games = new Array("dnf", "cf"),
        gamesAct = new Array("cf", "x5", "nz", "x52", "codol", "fifa", "eafifa", "qhyx", "nfsol", "tps"),
        newWebtipsApiGray = new Array("codol", "codo", "speed", "nba2k", "x5", "dnf", "age", "tthl", "nz", "xx"),
        newWebtipsApiFlag = false,
        cn = "ractWrap",

        ACT_DATA_STR = "gpmtips_data",
        ACT_DATA_HISTORY_STR = "gpmtips_data_his",
        GPMTIPS_CONFIG_STR = "gpmtips_cfg",
        COOKIE_DEFAULT_EXPIRES = 30,
        ACT_DATA_HISTORY_EXPIRES = 60 * 24 * 365,
        MAX_SHOW_COUNT = 2,
        MAX_SHOW_EXPIRES = 60 * 24 * 14,

        currentUrl = window.location.href.split("?")[0],
        style = 1,
        grey = true,
        webtipsIsShowed = false;
    var act_data = new Array;//娲诲姩鏁版嵁
    var stylemap = {
        1: {
            cssapi: "//ossweb-img.qq.com/images/clientpop/css/1/"
        },
        2: {
            cssapi: "//ossweb-img.qq.com/images/clientpop/css/2/"
        },
        3: {
            cssapi: "//ossweb-img.qq.com/images/clientpop/css/3/"
        },
        4: {
            cssapi: "//ossweb-img.qq.com/images/clientpop/css/4/"
        },
        5: {
            cssapi: "//ossweb-img.qq.com/images/clientpop/css/1/"
        }
    };
    var Tween = {
        Quart: {
            easeOut: function (t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b
            }
        }
    };
    var slideAct = function (id, pos) {
        this._x = document.getElementById(id);
        this._d = 321;
        this.t = 0;
        this.c = this._d;
        this.b = -this._d;
        this.d = 30;
        this._s = 1;
        this._p = pos
    };
    slideAct.prototype = {
        init: function (layerArrowId) {
            this._x.style[this._p] = this.b + "px";
            if (this._p == "right") {
                var arrow = document.getElementById(layerArrowId);
                arrow.style.backgroundPosition = "-50px -30px"
            }
        },
        slide: function (layerArrowId) {
            if (this.c && this.t < this.d) {
                this._x.style[this._p] = Math.round(Tween.Quart.easeOut(this.t++, this.b, this.c, this.d)) + "px";
                setTimeout(Bind(this, this.slide), 10)
            } else {
                var arrow = document.getElementById("layerArrow");
                if (this._p == "left") {
                    if (this.b == -this._d) {
                        arrow.style.backgroundPosition = "-50px -30px";
                        this.b = 0;
                        this.c = -this._d
                    } else {
                        arrow.style.backgroundPosition = "-50px 0";
                        this.b = -this._d;
                        this.c = this._d
                    }
                } else {
                    if (this.b == -this._d) {
                        arrow.style.backgroundPosition = "-50px 0";
                        this.b = 0;
                        this.c = -this._d
                    } else {
                        arrow.style.backgroundPosition = "-50px -30px";
                        this.b = -this._d;
                        this.c = this._d
                    }
                }
                this.t = 0
            }
        },
        isOpen: function () {
            var arrow = document.getElementById("layerArrow");
            if (this._p === "right") {
                return arrow.style.backgroundPosition === "-50px -30px"
            } else {
                return arrow.style.backgroundPosition === "-50px 0px"
            }
        }
    };

    function Bind(object, fun) {
        var args = Array.prototype.slice.call(arguments).slice(2);
        return function () {
            return fun.apply(object, args.concat(Array.prototype.slice.call(arguments)))
        }
    }

    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break
            }
        }
        return flag
    }

    function renAds(data, hide, from) {
        var style;
        if (data) {
            style = data.style;
            var sty = stylemap[style];
            var cssapi = sty.cssapi;
            if (game == "tps") {
                cssapi = cssapi + "tps.css"
            } else if (game == "cf") {
                cssapi = cssapi + "cf.css"
            } else if (game == "speed") {
                cssapi = cssapi + "speed.css"
            } else if (game == "yl") {
                cssapi = cssapi + "yl.css"
            } else {
                cssapi = cssapi + "default.css"
            }
            loadStyle(cssapi);

            //娓叉煋妯℃澘鍒伴〉闈紝骞剁粦瀹氫簨浠�

            asTpl(data, hide);

            if (hide) {
                // resetcss(true)
            } else {
                doReport("pop", data.id, from, data.url);//涓婃姤涓€娆℃樉绀�
                uCookie(data.id, "opened", 1)//鏈湴璁板綍涓€娆℃樉绀�
                // resetcss(false)
            }
            if (ie6) {
                ade(window, "scroll", pos);
                ade(window, "resize", pos)
            }
        }
    }

    function asTpl(data, hide) {
        var div = d.createElement("div");
        var mask = document.createElement("div");
        var style = data.style;
        var containerId = CONTAINER_STR + style;
        var iframeBoxId = IFRAME_BOX_STR + style;
        var iframeId = IFRAME_STR + style;
        var expandBtnId = EXPAND_BUTTON_STR + style;
        var layerArrowId = LAYER_AARROW_STR + style;
        var ifr = d.createElement("iframe");
        var game = sExchange();
        div.id = containerId;
        mask.id = MASK_STR;
        var containerWidth = data.width ? data.width + "px" : "400px";
        var containerHeight = data.height ? data.height + "px" : "240px";
        var ractContentWidth = data.width ? data.width + "px" : "400px";
        var ractContentHeight = data.height ? data.height + "px" : "240px";
        var ractContentStyle = "";
        if (d.getElementById(containerId)) {
            var child = document.getElementById(containerId);
            child.parentNode.removeChild(child)
        }
        mask.className = "mask_by_luoganluo";
        if ("lol" == game) {
            ractContentWidth = "220px";
            ractContentHeight = "110px"
        }
        ractContentStyle = "width:" + ractContentWidth + ";height:" + ractContentHeight + ";";
        if (style == "2") {
            div.className = "layer_right layer";
            (function () {
                var div_arrow = document.createElement("div");
                div_arrow.className = "layer_arrow column";
                var div_arrow_son = document.createElement("div");
                div_arrow_son.className = "lay_item";
                div_arrow_son.onclick = function () {
                    do_close()
                };
                var span = document.createElement("sapn");
                span.className = "arrow arrow_left";
                span.id = layerArrowId;
                span.cssText = "background-position: -50px 0px;";
                div_arrow.appendChild(div_arrow_son);
                div_arrow.appendChild(span);
                var div_layer_tit = document.createElement("div");
                div_layer_tit.className = "layer_arrow column";
                var div_layer_tit_son = document.createElement("div");
                div_layer_tit_son.className = "layer_item";
                var em = document.createElement("em");
                em.className = "layer_tit_txt";
                em.innerText = "鐑棬娲诲姩";
                div_layer_tit_son.appendChild(em);
                div_layer_tit.appendChild(div_layer_tit_son);
                var div_box = document.createElement("div");
                div_box.className = "ract-content column";
                div_box.cssText = ractContentStyle;
                var iframeBox = document.createElement("div");
                iframeBox.className = "layer_item";
                iframeBox.id = iframeId;
                div.appendChild(div_arrow);
                div.appendChild(div_layer_tit);
                div.appendChild(div_box)
            })()
        } else if (style == "3") {
            div.className = "layer_left layer";
            (function () {
                var div_arrow = document.createElement("div");
                div_arrow.className = "layer_arrow column";
                var div_arrow_son = document.createElement("div");
                div_arrow_son.className = "lay_item";
                div_arrow_son.onclick = function () {
                    do_close(data)
                };
                var span = document.createElement("sapn");
                span.className = "arrow arrow_left";
                span.id = layerArrowId;
                span.cssText = "background-position: -50px 0px;";
                div_arrow.appendChild(div_arrow_son);
                div_arrow.appendChild(span);
                var div_layer_tit = document.createElement("div");
                div_layer_tit.className = "layer_arrow column";
                var div_layer_tit_son = document.createElement("div");
                div_layer_tit_son.className = "layer_item";
                var em = document.createElement("em");
                em.className = "layer_tit_txt";
                em.innerText = "鐑棬娲诲姩";
                div_layer_tit_son.appendChild(em);
                div_layer_tit.appendChild(div_layer_tit_son);
                var div_box = document.createElement("div");
                div_box.className = "ract-content column";
                div_box.cssText = ractContentStyle;
                var iframeBox = document.createElement("div");
                iframeBox.className = "layer_item";
                iframeBox.id = iframeId;
                div.appendChild(div_arrow);
                div.appendChild(div_layer_tit);
                div.appendChild(div_box)
            })()
        } else if (style == "5") {
            div.style.width = containerWidth;
            div.style.height = containerHeight;
            var hideclose = false;
            div.className = "ract-box ract-box-center";
            if (["133789", "169928", "169929", "169930", "169931", "169932"].indexOf(data.id) >= 0) {
                hideclose = true
            }
            (function () {
                var box = document.createElement("div");
                box.id = iframeBoxId;
                box.className = "ract-content";
                box.cssText = ractContentStyle;
                var a = document.createElement("a");
                a.className = "collapse02";
                a.style.display = hideclose ? "none" : "";
                a.innerText = "鍏抽棴";
                a.onclick = function () {
                    do_close(data)
                };
                box.appendChild(a);
                div.appendChild(box)
            })()
        } else {
            //style涓�1鍜�4鐨勬儏鍐�

            if (style == 4) {
                div.className = "ract-box ract-box-left"
            } else if (style = 1) {
                div.className = "ract-box ract-box-right"
            }

            var hideclose = false;
            if (["133789", "169928", "169929", "169930", "169931", "169932"].indexOf(data.id) >= 0) {
                hideclose = true
            }
            (function () {
                var box = document.createElement("div");
                box.id = iframeBoxId;
                box.className = "ract-content";
                box.cssText = ractContentStyle;
                box.style.height = containerHeight;
                box.style.width = containerWidth;
                box.style.display = hide ? "none" : "";
                var a = document.createElement("a");
                a.className = "collapse02";
                a.style.display = hideclose ? "none" : "";
                a.innerText = "鍏抽棴";
                a.onclick = function () {
                    do_close(data)
                };
                var a_expandBtn = document.createElement("a");
                a_expandBtn.className = "expand";
                a_expandBtn.id = expandBtnId;
                a_expandBtn.style.display = hide ? "" : "none";
                a_expandBtn.onclick = function () {
                    do_open(data)
                };
                a_expandBtn.innerText = game.toUpperCase() + "娲诲姩鎺ㄨ崘";
                box.appendChild(a);
                div.appendChild(a_expandBtn);
                div.appendChild(box)
            })()
        }
        ifr.id = iframeId;
        ifr.name = iframeId;
        ifr.className = "ract-ifr";
        ifr.setAttribute("data", data.id);
        ifr.setAttribute("frameborder", "no", 0);
        ifr.setAttribute("border", "no");
        ifr.setAttribute("scrolling", "no");
        ifr.onload = function () {};

        if (style == "5") {
            mask.appendChild(div);
            document.body.appendChild(mask)
            mask.style.display = hide ? "none" : ""
        } else {
            d.body.appendChild(div)
        }
        getelm(iframeBoxId).appendChild(ifr);

        var tarPage = getString(data.url, "tarPage");

        if (tarPage) {
            if (!samePagecheck(tarPage)) {
                getelm(containerId).style.cssText = "display:none;";
                return
            }
            ifr.src = data.url + "&url=" + window.location
        } else {
            ifr.src = data.url + "&url=" + window.location
        }

        var side = "";
        if (style == "2") {
            side = "right"
        } else if (style == "3") {
            side = "left"
        }
        if (style == "3" || style == "2") {
            var sAct = new slideAct(containerId, side);
            sAct.init(layerArrowId);
            if (hide === false) {
                sAct.slide(layerArrowId)
            }
            data.sAct = sAct
        }
    }

    function uCookie(id, k, v) {
        update(ACT_DATA_STR);
        function update(key) {
            var updateFlag = false,
                arrString = gCookie(key),
                arr;
            if (arrString) {
                arr = JSON.parse(arrString);
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].id == id) {
                        if (k == "opened" || k == "clicked") {
                            arr[i][k] = arr[i][k] + v
                        } else {
                            arr[i][k] = v
                        }
                        if (arr[i]["opened"] >= MAX_SHOW_COUNT) {
                            updateHara(id)
                        }
                        updateFlag = true
                    }
                }
                if (updateFlag) {
                    sCookie(key, JSON.stringify(arr))
                }
            }
        }
    }



    function doShow() {

        renderAdData(act_data);

        function renderAdData(data) {
            console.log("renderAdData", data);
            if (data.length) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].opened <= MAX_SHOW_COUNT && checkExpireLimit(data[i].id)) {
                        data[i]["display"] = 1;//鏄剧ず鐘舵€佷负鏄剧ず
                        renAds(data[i], false)
                    } else {
                        data[i]["display"] = 0;//鏄剧ず鐘舵€佷负涓嶆樉绀�
                        renAds(data[i], true)
                    }
                }
            }
        }
    }

    function getAds() {

        var act_data_str = gCookie(ACT_DATA_STR);

        function callback() {
            if (typeof TgWebtipsGPMAds != "undefined" && TgWebtipsGPMAds.iRet == 0) {
                var data = formatterActData(TgWebtipsGPMAds.data);
                if (data.length > 0) {
                    sCookie(ACT_DATA_STR, JSON.stringify(data), COOKIE_DEFAULT_EXPIRES)
                }
                act_data = data;
                doShow()
            }
        }

        var params = {
            iUin: getuin(),
            sServiceType: game,
            currentUrl: currentUrl
        }
        var queryStr = serialize(params);
        if (act_data_str == "") {
            ls(act_data_url + queryStr, callback)
        } else {
            act_data = JSON.parse(act_data_str);
            doShow()
        }
    }

    function formatterActData(originData) {
        var result = [];
        if (originData.length == 0) return
        for (var i in originData) {
            if (originData[i]["isCustomUrls"] == 0) {
                result.push({
                    id: originData[i].actId,
                    url: originData[i].url,
                    opened: 0,
                    clicked: 0,
                    display: 1,
                    style: originData[i].style,
                    width: originData[i].width,
                    height: originData[i].height
                })
            }
        }
        return result
    }





    function checkExpireLimit(id) {
        var data = gCookie(ACT_DATA_HISTORY_STR);
        data = data ? JSON.parse(data) : "";
        if (data instanceof Array && data.length) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == id && Math.round((new Date).getTime() / 1e3) < data[i].valid) {
                    return false
                }
            }
        }
        return true
    }

    //鏇存柊鐢ㄦ埛鏈€鍚庝竴娆℃搷浣滃箍鍛婄殑鏃堕棿锛屾湁鏁堟椂闂存槸MAX_SHOW_EXPIRES(涓ゅ懆)
    function updateHara(id) {
        var data = gCookie(ACT_DATA_HISTORY_STR);
        data = data ? JSON.parse(data) : "";
        var _exist = false;
        var expires = Math.round((new Date).getTime() / 1e3) + MAX_SHOW_EXPIRES * 60;
        if (data instanceof Array && data.length) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    data[i].valid = expires.toString();
                    _exist = true
                }
            }
            if (!_exist) {
                data.push({
                    id: id,
                    valid: expires
                })
            }
        } else {
            data = [{
                id: id,
                valid: expires
            }]
        }
        sCookie(ACT_DATA_HISTORY_STR, JSON.stringify(data), ACT_DATA_HISTORY_EXPIRES);
        return true
    }

    //妫€娴嬪彉閲忕被鍨嬬殑鍑芥暟
    function type(v) {
        return Object.prototype.toString.call(v).substring(8).replace("]", '').toLowerCase()
    }

    //鏀瑰啓涓婃姤鍑芥暟r
    function doReport(t, id) {
        var params = {
            uin: getuin(),
            sServiceType: game,
            actId: id,
            op: t,
            channel: 3
        }
        //newWebtipsApiFlag
        var queryString = serialize(params)
        newWebtipsApiFlag || ls(REPORT_URL + queryString, function () {
        })
    }

    /*
    *瀵硅薄搴忓垪鍖栨垚url query瀛楃涓茬殑鏍煎紡
    *input params:{a:'1',b:[2,3]}
    *output  a=1&b=2&b=3
    */

    function serialize(params) {
        var res = ""
        for (var i in params) {
            if (type(params[i]) === "array") {
                res += "&" + serializeArr(i, params[i])
            } else {
                res += "&" + i + "=" + params[i]
            }
        }

        function serializeArr(key, arr) {
            var res = ""
            for (var i = 0; i < arr.length; i++) {
                res += "&" + key + "=" + arr[i]
            }
            return res.substring(1)
        }

        return res.substring(1)
    }


    /*涓婃姤鍥炶皟鍑芥暟锛屼笂鎶ユ垚鍔熶箣鍚庢洿鏂版椿鍔ㄧ殑鎵撳紑鍜岀偣鍑绘暟鎹�*/
    function dor() {
        //涓婃姤鎴愬姛涔嬪悗鐨勫洖璋冨嚱鏁帮紝TgWebtipsGPMReport灏辨槸涓婃姤鎴愬姛鍚庤繑鍥炵殑鏁版嵁
        if (typeof TgWebtipsGPMReport != "undefined" && TgWebtipsGPMReport.iRet == 0) {
            var tgr = TgWebtipsGPMReport;
            if (haspro(tgr, "op") && haspro(tgr, "actId") && tgr.op == "click" && tgr.actId) {
                uCookie(tgr.actId, "opened", 1);//杩欓噷鍙堟洿鏂颁簡鎵撳紑娆℃暟,鍦ㄤ箣鍓嶇殑娴佺▼涓凡缁忚窡鏂拌繃
                uCookie(tgr.actId, "clicked", 1);//杩欓噷浠荤劧璺熸柊浜嗙偣鍑�
            }
        }
    }

    //杩欎竴娈垫槸浠€涔堟剰鎬�
    function resetcss(a,containerId) {
        if (getelm("_feedback_layout")) {
            var _css;
            if (a) {
                getelm(containerId).className += " ract-feedback"
            } else {
                getelm(containerId).className = "ract-box"
            }
        }
    }

    function do_close(data) {
        var style = data.style;
        var iframeBoxId = IFRAME_BOX_STR + style;
        var expandBtnId = EXPAND_BUTTON_STR + style;
        var containerId = CONTAINER_STR + style;

        var _actId = data.id;
        var sAct = data.sAct;
        if (style == "2" || style == "3") {

            sAct.slide();

            if (sAct.isOpen()) {
                doReport("pop", _actId);
                uCookie(_actId, "opened", 1)
            }
        } else if (style == "5") {
            getelm(containerId).style.display = "none";
            getelm(MASK_STR).style.display = "none"
        } else {
            getelm(iframeBoxId).style.display = "none";
            getelm(expandBtnId).style.display = "block"
        }

        // resetcss(true,containerId);

        if (ie6) {
            pos()
        }
    }

    function do_open(data) {
        var style = data.style;
        var iframeBoxId = IFRAME_BOX_STR + style;
        var expandBtnId = EXPAND_BUTTON_STR + style;
        var iframeId = IFRAME_STR + style;
        var _actId = data.id;


        if (style == "2" || style == "3") {
            sAct.slide()
        } else {
            getelm(iframeBoxId).style.display = "block";
            getelm(expandBtnId).style.display = "none"
        }

        // resetcss(false);

        doReport("pop", _actId)//涓婃姤鐐瑰嚮鏁版嵁锛屾洕鍏夐噺鏁版嵁鍦ㄥ祵濂楃殑iframe涓笂鎶�
        uCookie(_actId, "opened", 1)//褰撳墠娲诲姩琚偣鍑诲紑锛屽睍绀烘鏁板姞1
    }

    function getuin() {
        return gCookie("pt2gguin") ? gCookie("pt2gguin").substr(1).replace(/\b(0+)/gi, "") : ""
    }

    function getelm(id) {
        return "string" == typeof id ? d.getElementById(id) : id
    }

    function pi(i) {
        return parseInt(i)
    }

    function haspro(e, key) {
        return e.hasOwnProperty(key)
    }

    function inarr(a, e) {
        var s = String.fromCharCode(2);
        var r = new RegExp(s + e + s);
        return r.test(s + a.join(s) + s)
    }

    function sCookieSpecific(name, value, e) {
        var dt = new Date;
        var e = arguments[2] || COOKIE_DEFAULT_EXPIRES;
        if (e) {
            dt.setMinutes(dt.getMinutes() + pi(e))
        }
        var cookietemp = escape(name) + "=" + escape(value) + (e ? ";expires=" + dt.toUTCString() : "");
        d.cookie = cookietemp
    }

    function sCookie(name, value, e) {
        var dt = new Date;
        var e = arguments[2] || COOKIE_DEFAULT_EXPIRES;
        if (e) {
            dt = new Date(dt.getTime() + pi(e * 60 * 1e3))
        }
        var cookietemp = escape(name) + "=" + escape(value) + (e ? ";path=/;expires=" + dt.toUTCString() : "");
        d.cookie = cookietemp
    }

    function gCookie(name) {
        var sRE = "(?:; |^)" + name + "=([^;]*);?";
        var oRE = new RegExp(sRE);
        if (oRE.test(document.cookie)) {
            return unescape(RegExp["$1"])
        } else {
            return ""
        }
    }

    function loadStyle(url, fn) {
        var h = d.getElementsByTagName("HEAD").item(0);
        var s = d.createElement("link");
        s.rel = "stylesheet";
        s.type = "text/css";
        s.media = "all";
        s.href = url;
        h.appendChild(s)
    }

    function ade(obj, evt, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false)
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn)
        }
    }

    function pos() {
        var _fh = 0;
        if (getelm("_feedback_layout")) {
            _fh = 23
        }
        if (ie6) {
            _fh = 0
        }
        getelm(cn).style.top = d.documentElement.scrollTop + d.documentElement.clientHeight - getelm(cn).offsetHeight - 2 - _fh + "px"
    }

    //jsonp鍑芥暟,瀹炵幇璺ㄥ煙
    function jsonp(obj) {

        function appendParams(url, params) {
            var queryStr = serialize(params);
            if (url.indexOf("?") > -1) {
                url = url + "&" + queryStr;
            } else {
                url += queryStr;
            }
            return url.replace("?&","?")
        }

        var defaultOptions = {
            url: "",
            params: {},
            success: function () {
            },
            error: function () {
            },
            timeout: 600000
        };

        for (var i in obj) {
            defaultOptions[i] = obj[i]
        }

        var timer=setTimeout(function () {

        },defaultOptions.timeout)

        function cleanUp() {
            if(script.parentNode){
                script.parentNode.removeChild(script)
            }
            clearTimeout(timer);
        }


        var callbackName = "jsonpcallback" + (Math.random() + "").replace(".", "");

        window[callbackName] =function(){
            cleanUp();
            var arg=Array.prototype.splice.call(arguments,0);
            if(typeof defaultOptions.success==="function"){
                defaultOptions.success.apply(null,arg);
            }
        }

        defaultOptions.url = appendParams(defaultOptions.url, defaultOptions.params);

        var script = document.createComment("script");

        script.type = "text/javascript";
        script.onerror = function () {
            defaultOptions.error()
        };

        if (!!defaultOptions.url) {
            script.src = defaultOptions.url
        } else {
            console.error("invalid url");
            return
        }
        document.getElementsByTagName("head")[0].appendChild(script)
    }

    function ls(url, callback, charset) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (charset) {
            script.setAttribute("charset", charset)
        }
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                    document.getElementsByTagName("head")[0].removeChild(this)
                }
            }
        } else {
            script.onload = function () {
                callback();
                document.getElementsByTagName("head")[0].removeChild(this)
            }
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script)
    }

    function lsWithFail(url, callback, charset, failFunc) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (charset) {
            script.setAttribute("charset", charset)
        }
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                    document.getElementsByTagName("head")[0].removeChild(this)
                }
            };
            if (script.readyState === "loaded" && script.nextSibling == null) {
                if (failFunc) {
                    failFunc()
                }
            }
        } else {
            script.onload = function () {
                callback();
                document.getElementsByTagName("head")[0].removeChild(this)
            };
            script.onerror = function () {
                if (failFunc) {
                    failFunc()
                }
                d.onerror = null
            }
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script)
    }

    function urlEncode(param, key, encode) {
        if (param == null) return "";
        var paramStr = "";
        var t = typeof param;
        if (t == "string" || t == "number" || t == "boolean") {
                paramStr += "&" + key + "=" + (encode == null || encode ? encodeURIComponent(param) : param)
        } else {
            for (var i in param) {
                var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
                paramStr += urlEncode(param[i], k, encode)
            }
        }
        return paramStr
    }

    function urlDecode(paramStr) {
        if (paramStr == null) return {};
        var res = {};
        var arr = paramStr.split("&");
        var eachStr = "";
        var eachArr = [];
        var eachKey = "";
        var eachValue = "";
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                eachStr = arr[i];
                eachArr = eachStr.split("=");
                if (eachArr.length == 2) {
                    eachKey = eachArr[0];
                    eachValue = eachArr[1];
                    res[eachKey] = eachValue
                }
            }
        }
        return res
    }

    function doCfg() {
        if (typeof config != "undefined") {
            if (haspro(config, "iShowCount") && haspro(config, "iSendApi") && haspro(config, "iOnlineCount")) {
                sCookie(GPMTIPS_CONFIG_STR, JSON.stringify(config));//娲诲姩鏁版嵁鐨勯厤缃枃浠跺瓨鍦╟ookie锛屼箣鍚庡苟娌℃湁鐢ㄥ埌
                if (parseInt(config.iOnlineCount) > 0) {
                    if (parseInt(config.iShowCount)) {
                        MAX_SHOW_COUNT = pi(config.iShowCount)
                    }
                    if (parseInt(config.iSendApi)) {
                        COOKIE_DEFAULT_EXPIRES = parseInt(config.iSendApi)
                    }
                    getAds()
                } else {
                    var params = {
                        channel: 3,
                        sServiceType: game,
                        uin: getuin(),
                        op: 'judge',
                        actId: 0,
                        iRet: 1,
                        sMsg: "no data"
                    }
                    var queryStr = serialize(params);
                    var report_url = REPORT_URL + queryStr;
                    ls(report_url, function () {})
                }
            }
        }
    }

    function getString(url, sName) {
        var sRE = "([?&])" + sName + "=([^&]*)";
        var oRE = new RegExp(sRE);
        if (oRE.test(url)) {
            return RegExp["$2"]
        } else {
            return null
        }
    }

    function samePagecheck(tarPage) {
        var tarPage = tarPage.substring(0, tarPage.lastIndexOf("/"));
        tarPage = tarPage + "/";
        var curPage = window.location.origin + window.location.pathname;
        curPage = curPage.substring(0, curPage.lastIndexOf("/"));
        curPage = curPage + "/";
        if (curPage == tarPage) {
            return false
        }
        return true
    }

    function sExchange() {
        game = location.hostname.replace(".qq.com", "");
        if (game == "sm") {
            game = "smite"
        }
        if (game == "5s") {
            game = "x52"
        }
        if (game == "eafifa") {
            game = "fifa"
        }
        if (game == "mho") {
            game = "mh"
        }
        if (game == "pvp") {
            game = "yxzj"
        }
        return game
    }

    function getGameNameByHost() {
        game = location.hostname.replace(".qq.com", "");
        var nameMap = {
            'sm': "smite",
            "5s": "x52",
            "eafifa": "fifa",
            "mho": "mh",
            "pvp": "yxzj"
        };
        if (nameMap.hasOwnProperty(game)) {
            game = nameMap[game]
        }
        return game
    }

    function contain(str, objOfStr) {
        var str = str || "";
        var objOfStr = objOfStr || {};
        for (var i in objOfStr) {
            if (str.indexOf(i) > -1) {
                return true
            }
        }
        return false
    }

    function doInit() {
        var currentUrl = window.location.href.split("?")[0];
        var noPopUrl = window.location.href;
        var actName = noPopUrl.replace("//cf.qq.com/", "").split("/");
        var str = currentUrl.replace(/[^A-Za-z0-9]/g, "_");

        var url = apicfgori + game + "WebtipsSystemConfig.js?r=" + Math.random();//鑾峰彇褰撳墠瀹樼綉涓婄殑娲诲姩鏁版嵁config


        var noPopActNames = {
            a20141211pop: true,
            a20150116circle: true,
            a20140115game: true,
            a20150624impaction: true
        };
        var noPopUrls = {
            "//nz.qq.com/cp/a20151127qqnc/": true,
            "//cf.qq.com/act/a20141116lucky/index2.htm": true,
            "//cf.qq.com/act/a20160516ntclsacts/index.htm": true,
            "//cf.qq.com/act/a20160726hxb/index.htm": true,
            "//cf.qq.com/cp/a20160722nqy/index.htm": true,
            "//cf.qq.com/cp/a20160901tkw/neiqian.htm": true,
            "//cf.qq.com/cp/a20160901tkw/neiqian.htm": true,
            "//cf.qq.com/cp/a20160919gqsq/index.htm": true,
            "//cf.qq.com/cp/a20160913nhl/index.htm": true,
            "//cf.qq.com/cp/a20160913nhl/page01.htm": true,
            "//cf.qq.com/cp/a20160913nhl/page02.htm": true,
            "//cf.qq.com/cp/a20160902nhyd/index.htm": true,
            "//cf.qq.com/cp/a20160919inside/index.htm": true,
            "//nz.qq.com/client/nsl/index.shtml": true
        };
        var noPopUrlWords = {
            a20151126wb: true,
            "codol.qq.com/web201507/pages/": true
        };
        if (game) {
            act_data_url = '//idata.game.qq.com/outer/client_pop/idata_webtipsindex?';
            newWebtipsApiFlag = true
        }
        if (!inarr(games, game)) {
            return
        }
        if (!IsPC()) {
            return
        }
        if (actName[1] in noPopActNames || noPopUrl in noPopUrls || contain(noPopUrl, noPopUrlWords)) {
            return
        }
        if (currentUrl == "") {
            return
        }
        ls(url, doCfg)
    }

    function inUinList(u) {
        if (grey) {
            var l = ["286410504", "120011646", "320000729", "752816539", "408675832", "515839387", "542715473", "66410908", "16621243", "117840809", "16064454", "3749999974", "2838183537", "179314306", "39257794", "1185941985", "3074585435", "1356177380", "2975172730", "2726237081", "3157952263", "2248932665", "1809984871", "170991018"];
            if (l.length > 0) {
                if (inarr(l, u)) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
        return false
    }

    setTimeout(function () {
        ls(location.protocol + "//ossweb-img.qq.com/images/clientpop/js/history/gpmhistory.js", function () {})
    }, 3e3);
    if (inarr(gamesAct, sExchange())) {
        if (typeof x5actflag == "undefined") {
            ls("//ossweb-img.qq.com/images/clientpop/js/acthelper/slideTips.js?_" + Math.random(), function () {
            })
        }
    }
    if (["cf", "codol", "nz", "speed", "x5", "yl", "fifa", "dnf"].indexOf(getGameNameByHost()) > -1) {
        ls("//ossweb-img.qq.com/images/js/recommend/recommend.js?_" + Math.random(), function () {})
    }
    window["gpmtips"] = {
        init: function () {
            if (typeof JSON == "object") {
                if (typeof JSON.stringify !== "function" || typeof JSON.parse !== "function") {
                    ls(apijson, doInit)
                } else {
                    doInit()
                }
            } else {
                ls(apijson, doInit)
            }
        }
    };
    gpmtips.init()
})();