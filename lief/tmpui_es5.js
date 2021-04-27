"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * tmpUI.js
 * 
 * 基于HTML5的一些特性。
 * 模块化前端项目。
 * 
 */
var tmpUI =
/*#__PURE__*/
function () {
  function tmpUI(url) {
    var _this = this;

    _classCallCheck(this, tmpUI);

    _defineProperty(this, "status", {});

    _defineProperty(this, "config", {});

    _defineProperty(this, "version", 0);

    _defineProperty(this, "index", '/index.html');

    _defineProperty(this, "debug", true);

    _defineProperty(this, "loadQueue", 0);

    _defineProperty(this, "loadTotal", 0);

    _defineProperty(this, "loadDelay", 500);

    _defineProperty(this, "loadCallback", null);

    _defineProperty(this, "loadingPageInit", false);

    _defineProperty(this, "loadingPage", false);

    _defineProperty(this, "loadingIcon", false);

    _defineProperty(this, "loadingText", 'Loading...');

    this.state = {
      displayTrophy: true
    };
    this.loadConfig(url, function (config) {
      //初始化history
      history.replaceState(_this.state, null, ''); //写入配置文件

      _this.config = _this.rebuildConfig(config);

      _this.rebuildRunConfig(); //初始化当前页面的路由
      //this.route(window.location.pathname);


      _this.route(); //当页面前进与后退的时候，popstate监听历史记录变化，触发对应页面的ajax请求。


      window.addEventListener('popstate', function (e) {
        var newPage = e.state.newPage; //this.route(newPage);]

        _this.route();
      });
    });
  }

  _createClass(tmpUI, [{
    key: "loadConfig",
    value: function loadConfig(url, cb) {
      var xhttp = new XMLHttpRequest();
      var config = {};

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          config = JSON.parse(this.responseText);
          cb(config);
        }
      };

      xhttp.open("GET", url, true);
      xhttp.send();
    }
  }, {
    key: "rebuildRunConfig",
    value: function rebuildRunConfig(config) {
      //覆盖由配置文件设定的值
      if (this.config.loadingPage !== undefined) {
        this.loadingPage = this.config.loadingPage;
      }

      if (this.config.loadingText !== undefined) {
        this.loadingText = this.config.loadingText;
      }

      if (this.config.loadingIcon !== undefined) {
        this.loadingIcon = this.config.loadingIcon;
      }

      if (this.config.version !== undefined) {
        this.version = this.config.version;
      }
    }
  }, {
    key: "rebuildConfig",
    value: function rebuildConfig(config) {
      //处理cofnig文件中的预处理关系
      if (config.path !== undefined) {
        for (var url in config.path) {
          config.path[url].res = {}; //检查该项是否存在预加载的内容

          if (config.path[url].preload !== undefined) {
            for (var purl in config.path[url].preload) {
              //处理预加载的内容
              var pkey = config.path[url].preload[purl];

              for (var preload in config.preload[pkey]) {
                config.path[url].res[preload] = {};
                config.path[url].res[preload] = config.preload[pkey][preload];
              }
            }
          } //处理正文


          if (config.path[url].body !== undefined) {
            for (var _purl in config.path[url].body) {
              config.path[url].res[_purl] = config.path[url].body[_purl];
            }
          } //处理需要最后加载的内容


          if (config.path[url].append !== undefined) {
            for (var _purl2 in config.path[url].append) {
              //处理预加载的内容
              console.log(_purl2);
              console.log(config.path[url].append[_purl2]);
              var _pkey = config.path[url].append[_purl2];

              for (var append in config.append[_pkey]) {
                config.path[url].res[append] = {};
                config.path[url].res[append] = config.append[_pkey][append];
              }
            }
          }
        }
      }

      return config;
    }
  }, {
    key: "linkRebind",
    value: function linkRebind() {
      var _this2 = this;

      var atag = document.getElementsByTagName("a");

      if (atag.length > 0) {
        for (var i in atag) {
          if (_typeof(atag[i]) === 'object') {
            if (atag[i].getAttribute("tmpui-app") == 'true') {
              (function () {
                //获取绝对链接地址
                var a_url = atag[i].getAttribute("href"); //生成App内链接地址

                var url = _this2.index + '?tmpui_page=' + a_url; //写入到专用标签

                atag[i].setAttribute("tmpui-app-to", a_url); //修改原有标签到新地址

                atag[i].setAttribute("href", url); //修改事件行为

                atag[i].addEventListener('click', function (e) {
                  e.preventDefault();
                  history.pushState({
                    newPage: url
                  }, null, url); //ajax('GET', url, 'page=' + url, this.loader, true);

                  _this2.route();
                });
              })();
            }
          }
        }
      }

      return 'ok';
    }
  }, {
    key: "autofix",
    value: function autofix() {
      if (this.config.siteroot !== '') {
        var siteroot = this.config.siteroot;
        $('[tmpui-root]').each(function () {
          var autofixer = $(this).attr("tmpui-root");
          var src = $(this).attr("src");
          var href = $(this).attr("href");

          if (autofixer === 'true' && src !== undefined && src !== null) {
            $(this).attr("src", siteroot + src);
            $(this).attr("tmpui-root", 'false');
          }

          if (autofixer === 'true' && href !== undefined && href !== null) {
            $(this).attr("href", siteroot + href);
            $(this).attr("tmpui-root", 'false');
          }
        });
      }
    }
    /**
     * 路由功能，根据配置进行选路
     * @param {*} config 
     */

  }, {
    key: "route",
    value: function route() {
      var _this3 = this;

      var url = "/";
      var params = null; //获取参数

      params = this.getUrlVars(); //默认文件

      if (params.tmpui_page !== undefined) {
        url = params.tmpui_page;
      } //未能找到页面时的页面
      // if (this.config.path[url] !== undefined && this.config.nofound !== undefined) {
      //     url = this.config.path[this.config.nofound];
      // }


      $('.tmpUIRes').remove(); //查找路由

      this.loadpage(true);

      if (this.config.path[url] !== undefined) {
        //下载所需组件
        this.loaderStart(url, function () {
          //调整网页标题
          document.title = _this3.config.path[url].title; //写入到页面,处理资源时需要根据对应的资源类型进行处理

          _this3.draw(url); //处理链接关系


          _this3.autofix(); //绑定链接事件


          _this3.linkRebind(); //关闭载入动画


          $('#tmpui_body').ready(function () {
            setTimeout(function () {
              _this3.loadpage(false);
            }, _this3.loadDelay);
          });
        });
      }
    }
  }, {
    key: "draw",
    value: function draw(url) {
      for (var i in this.config.path[url].res) {
        if (this.config.path[url].res[i].type === 'js') {
          var content = this.config.path[url].res[i].dom;
          $('head').append("<script class=\"tmpUIRes\" type=\"text/javascript\" \">" + content + "</script>\n");
        }

        if (this.config.path[url].res[i].type === 'css') {
          $('head').append("<link class=\"tmpUIRes\" rel=\"stylesheet\" href=\"" + i + '?v=' + this.config.version + "\" >\n");
        }

        if (this.config.path[url].res[i].type === 'html') {
          if (this.config.path[url].res[i].target.type === "append") {
            var _content = this.config.path[url].res[i].dom;
            $('#tmpui_body').append(_content);
          }

          if (this.config.path[url].res[i].target.type === "body") {
            var _content2 = this.config.path[url].res[i].dom;
            $('#tmpui_body').html(_content2);
          }

          if (this.config.path[url].res[i].target.type === "id") {
            var id = this.config.path[url].res[i].target.val;
            var _content3 = this.config.path[url].res[i].dom;
            $('#' + id).replaceWith(_content3);
          }
        }

        this.log(i);
      }
    }
  }, {
    key: "loaderStart",
    value: function loaderStart(url, cb) {
      this.loadCallback = cb; //常规加载顺序

      for (var i in this.config.path[url].res) {
        this.loadTotal++;
      }

      for (var _i in this.config.path[url].res) {
        this.loaderUnit(url, _i);
      }
    }
  }, {
    key: "loaderUnit",
    value: function loaderUnit(target, i) {
      var _this4 = this;

      //初始化属性
      if (this.config.path[target].res[i].state === undefined) {
        this.config.path[target].res[i].state = 0;
        this.config.path[target].res[i].dom = 0;
      }

      if (this.config.path[target].res[i].state === 1) {
        //如果这个URL已经加载了，直接返回。
        this.loadQueue++;

        if (this.loadQueue == this.loadTotal) {
          this.loadCallback();
        }
      } else {
        //如果这个URL没有加载，加载后返回。
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            _this4.loadQueue++;
            _this4.config.path[target].res[i].state = 1;
            _this4.config.path[target].res[i].dom = xhttp.responseText;

            if (_this4.loadQueue == _this4.loadTotal) {
              _this4.loadCallback();
            }
          }
        };

        xhttp.open("GET", i + '?v=' + this.version, true);
        xhttp.send();
      }
    }
  }, {
    key: "loadpage",
    value: function loadpage(status) {
      if (!this.loadingPage) {
        this.log('Loading page exit.');
        return false;
      }

      if (!this.loadingPageInit) {
        $('#tmpui').append('<div id="tmpui_loading_bg"></div>');
        $('#tmpui_loading_bg').append('<div id="tmpui_loading_show"></div>');
        $('#tmpui_loading_show').append('<div style="text-align:center;margin-bottom:20px;" id="tmpui_loading_content"></div>');

        if (this.loadingIcon !== false) {
          $('#tmpui_loading_content').append('<img src="' + this.loadingIcon + '" style="vertical-align: middle;border-style: none;width:129px;height:129px;"/>');
        } else {
          $('#tmpui_loading_content').append('<div style="text-align:center;font-family: fa5-proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;">' + this.loadingText + '</div>');
        }

        this.loadingPageInit = true;
        this.log('Loading page created.');
      }

      if (status) {
        $('body').css('overflow', 'hidden');
        $('#tmpui').show();
        this.log('Loading page on');
      } else {
        $('body').css('overflow', '');
        $('#tmpui').fadeOut();
        this.log('Loading page off');
      }
    }
  }, {
    key: "getUrlVars",
    value: function getUrlVars() {
      var vars = [],
          hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }

      return vars;
    }
  }, {
    key: "log",
    value: function log(msg) {
      if (this.debug) {
        console.log(msg);
      }
    }
  }]);

  return tmpUI;
}();