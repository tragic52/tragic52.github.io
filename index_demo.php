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
    <meta charset="utf-8">
    <meta name="applicable-device" content="mobile">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,maximum-scale=1">
    <meta name="robots" content="all">
    <meta name="format-detection" content="telephone=no">
    <meta name="author" content="Tencent-TGideas">
    <meta name="Copyright" content="Tencent">
    <meta name="description" content="《王者荣耀》是腾讯天美工作室推出的英雄竞技手游，不是一个人的王者，而是团队的荣耀！5v5王者峡谷PVP对战，领略英雄竞技的酣畅淋漓！更有边境突围、五军对决等丰富的游戏模式，体验突破传统、英雄竞技新形态！">
    <meta name="keywords" content="王者荣耀,王者荣耀下载,王者荣耀电脑版">
    <title>阿古朵和她的朋友们</title>
    <link rel="stylesheet" type="text/css" href="adgin/css/style.css">
    <script>
        (function(win, doc) {
            if (!win.addEventListener) return;
            var html = document.documentElement;

            function setFont() {
                var cliWidth = html.clientWidth;
                html.style.fontSize = 100 * (cliWidth / 750) + 'px';
            }
            win.addEventListener('resize', setFont, false);
            setFont();
        })(window, document);
    </script>
    <style type="text/css">
    </style>
</head>

<body>
    <div class="Shine_landscape" id="Shine_landscape">
        <div class="Shine_landscape_box"><img src="adgin/picture/iphone.png" id="Shine_landscape_pic" width="128" height="194" alt="手机/平板"><span>为了更好的体验，请将手机/平板竖过来</span></div>
    </div>
    <div class='wrap'>
        <div class='wrap-inner'>
            <!--header S-->
            <div class="header">
                <h1 class="hidden">阿古朵和她的朋友们</h1>
                <p class="hd-t">召唤阿古朵和她的<i class="spr"></i>朋友，赢取惊喜好礼！</p>
                <a href="javascript:TGDialogS('pop-rule');" class="hd-rule spr" ontouchend="PTTSendClick('btn','hd-rule','活动规则');" title="活动规则">活动规则</a>
                <a href="javascript:;" class="hd-info spr" ontouchend="PTTSendClick('btn','hd-info','收货信息');" title="收货信息">收货信息</a>
                <p class="hd-time">活动时间：7月13日-8月23日</p>
                <!-- 登录信息 -->
                <div class="login">
                    <div id="unlogin" style="display:block;">
                        您好，请<a id="btn_login" href="dod.php?_wv=2" ontouchend="PTTSendClick('btn','ptLoginBtn','登录');" title="登录">【登录】</a>
                    </div>
                    <div id="logined" style="display:none;">
                        <span>欢迎您，</span>
                        <span id="login_span">-</span>
                        <a id="btn_role" style="display:none;" href="javascript:;" ontouchend="PTTSendClick('btn','ptLogoutBtn','更换角色');" title="更换角色">【更换角色】</a>
                    </div>
                </div>
            </div>
            <!--header E-->
            <!--content S-->

            <div class="c2">
                <h2 class="tit2 spr">阿古朵与朋友的馈赠</h2>
                <p class="c-t">每成功召唤一次即可开启一次馈赠礼盒</p>
                <p class="c-t">100%抽中以下奖品之一</p>
                <div class="slo-img"></div>
                <img src="adgin/picture/box.png" class="box-img" alt="阿古朵与朋友的馈赠">
                <!-- ykq-btn 表示已全部开启 -->
                <a href="dod.php?_wv=2" class="open-btn spr" ontouchend="PTTSendClick('btn','open-btn','立即开启');" title="立即开启">立即开启</a>
                <p class="zh-num">当前剩余开启次数: <span id="gift-num">3</span></p>
                <h3 class="kz-tit spr">馈赠礼盒奖励一览</h3>
                <ul class="kz-list fx">
                    <li>
                        <img src="adgin/picture/jl1.png" alt="妲己女仆咖啡（永久）">
                        <p class="kz-t">妲己女仆咖啡<br>（永久）</p>
                    </li>
                    <li>
                        <img src="adgin/picture/jl2.png" alt="嬴政摇滚巨星（永久）">
                        <p class="kz-t">嬴政摇滚巨星<br>（永久）</p>
                    </li>
                    <li>
                        <img src="adgin/picture/jl3.png" alt="诸葛亮黄金分割率（永久）">
                        <p class="kz-t">诸葛亮黄金分割率<br>（永久）</p>
                    </li>
                    <li>
                        <img src="adgin/picture/jl4.png" alt="100Q币">
                        <p class="kz-t">100Q币</p>
                    </li>
                </ul>
                <a href="dod.php?_wv=2" class="xq-btn spr" ontouchend="PTTSendClick('btn','xq-btn','礼盒详情');" title="礼盒详情">礼盒详情</a>
            </div>
            <div class="c3">
                <h2 class="tit3 spr">阿古朵的奇妙探索</h2>
                <p class="c-t">来营地社区参与三分奇兵话题活动，与更多玩家一起探索<br>阿古朵的奇妙旅程。</p>
                <img src="adgin/picture/c3-img.png" class="c3-img" alt="阿古朵的奇妙探索">
                <a href="javascript:launchCamp('subjectdetail?subjectid=381');" class="qw-btn spr" ontouchend="PTTSendClick('btn','qw-btn','点击前往');" title="点击前往">点击前往</a>
                <div class="sy-show"></div>
            </div>
            <!--content E-->
        </div>

        <!--背景S-->
        <div class='bg-box'>
            <div class='bg1'></div>
            <div class='bg2'></div>
        </div>
        <!--背景E-->
    </div>
    <!-- 登录信息 -->
    <div class="pop1" id="pop-login" style="display:none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <ul class="sle-list">
            <li>
                <p class="sle-t">系统：</p>
                <div class="pop1-sle-w">
                    <select class="pop1-sle" id="channelContentId">
                        <option value="">请选择您的系统</option>
                    </select>
                </div>
            </li>
            <li>
                <p class="sle-t">大区：</p>
                <div class="pop1-sle-w">
                    <select class="pop1-sle" id="areaContentId">
                        <option value="">请选择您的大区</option>
                    </select>
                </div>
            </li>
            <li>
                <p class="sle-t">角色：</p>
                <div class="pop1-sle-w">
                    <select class="pop1-sle" id="roleContentId">
                        <option value="">请选择您的角色</option>
                    </select>
                </div>
            </li>
        </ul>
        <div class="sle-c fx">
            <a href="javascript:showDialog.hide();" class="pqx-btn spr" ontouchend="PTTSendClick('btn','pqx-btn','取消');" title="取消">取消</a>
            <a href="javascript:;" class="pyes-btn spr" id="doSubmit" ontouchend="PTTSendClick('btn',pyes-btn','确认');" title="确认">确认</a>
        </div>
    </div>
    <!-- 收货信息 -->
    <div class="pop1" id="pop-sh" style="display:none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <p class="sh-t">以下信息用来给您发放Q币奖励<br>若您未获得Q币奖励无需填写</p>
        <ul class="sle-list sle-list1">
            <li>
                <p class="sle-t">姓名：</p>
                <input type="" id="name1" name="" class="sr-t">
            </li>
            <li>
                <p class="sle-t">手机：</p>
                <input type="" id="tel" name="" class="sr-t">
            </li>
            <li>
                <p class="sle-t">邮箱：</p>
                <input type="" id="mail" name="" class="sr-t">
            </li>
        </ul>
        <div class="sle-c fx">
            <a href="javascript:;" class="pyes-btn spr" id="btn_sure_add" ontouchend="PTTSendClick('btn',pyes-btn2','确认');" title="确认">确认</a>
        </div>
    </div>
    <!-- 活动规则 -->
    <div class="pop2" id="pop-rule" style="display:none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <h3 class="pop-tit1 spr">活动规则</h3>
        <p class="fg-x"></p>
        <ul class="rule-list">
            <li><span>1.</span>
                <p>活动时间：2020.7.13-2020.8.23。</p>
            </li>
            <li><span>2.</span>
                <p>玩家完成活跃任务累计召唤值，使用30点召唤值可完成一次召唤。每成功召唤一位角色可领取对应奖励，同时可开启一次馈赠礼盒。</p>
            </li>
            <li><span>3.</span>
                <p>活动游戏道具奖励通过邮件发放，由于发放量较大，预计24小时内到账。活动实物奖励邮寄发放，预计90个工作日内到账。</p>
            </li>
            <li><span>4.</span>
                <p>获得Q币奖励的玩家请务必在活动页面填写收货信息。玩家收货信息将严格保密并仅用作为玩家发放活动奖励。活动结束后如未填写收货信息，则Q币奖励不予补发。</p>
            </li>
            <li><span>5.</span>
                <p>玩家如需在游戏内切换角色参与活动，可先切换登录游戏的角色，然后再次打开活动页面参与；玩家如需在营地内或微信/手Q切换角色，可直接在活动页面进行角色切换。</p>
            </li>
            <li><span>6.</span>
                <p>活动入口：游戏内活动-限时入口、王者营地-我-每日活动。</p>
            </li>
        </ul>
    </div>
    <!-- 全部召唤完成后生成图鉴 -->
    <div class="pop3" id="tj" style="display:none;">
        <a class="dia-close ys spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <p class="share-tips spr">长按或截图可以保存并分享图片</p>
        <div class="share-main" id="toimg">
            <!-- share-tit1 阿古朵和朋友们图鉴-->
            <h3 class="share-tit1 spr"></h3>
            <!-- share-img1 阿古朵和朋友们图鉴-->
            <div class="share-img share-img1"></div>
            <p class="fg-x ys1"></p>
            <div class="share-sug fx">
                <p class="sug-t">这样美好的森林，是和朋友们快乐成长的温暖家园。所以，如果有一天有人会伤害到这里，那我们一定会一起保护它！加入我们吗？</p>
                <div class="ewm">
                    <img src="adgin/picture/ewm.jpg" alt="二维码">
                    <p>召唤阿古朵和朋友们</p>
                    <p>抽永久皮肤</p>
                </div>
            </div>
        </div>
        <!-- <a href="javascript:;" class="share-btn spr" ontouchend="PTTSendClick('btn','share-btn','分享图片');" title="分享图片">分享图片</a> -->
    </div>
    <!-- 召唤时生成图鉴 -->

    <!-- 礼盒详情 -->
    <div class="pop4" id="pop4" style="display: none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <h3 class="pop-tit2 spr">礼盒详情</h3>
        <table class="tab">
            <thead class="thd">
                <tr>
                    <th width="60%">奖励</th>
                    <th>概率</th>
                </tr>
            </thead>
            <tbody class="tbd">
                <tr>
                    <td>铭文碎片</td>
                    <td>27.00%</td>
                </tr>
                <tr>
                    <td>钻石</td>
                    <td>27.00%</td>
                </tr>
                <tr>
                    <td>亲密玫瑰</td>
                    <td>23.96%</td>
                </tr>
                <tr>
                    <td>双倍经验卡1日</td>
                    <td>22.00%</td>
                </tr>
                <tr>
                    <td class="ys">100Q币</td>
                    <td class="ys">0.01%</td>
                </tr>
                <tr>
                    <td class="ys">永久皮肤妲己-女仆咖啡</td>
                    <td class="ys">0.01%</td>
                </tr>
                <tr>
                    <td class="ys">永久皮肤-诸葛亮黄金分割率</td>
                    <td class="ys">0.01%</td>
                </tr>
                <tr>
                    <td class="ys">永久皮肤嬴政-摇滚巨星</td>
                    <td class="ys">0.01%</td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- 角色召唤成功 -->
    <div class="pop5" id="pop5" style="display: none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <!-- pzh-tit表示阿古朵  pzh-tit1球球 pzh-tit2赤眼 pzh-tit3黑白-->
        <h3 id="pzh-aaa" class="pzh-tit spr"></h3>
        <div class="pzh-img">
            <img src="adgin/picture/pop-img1.png" alt="">
        </div>
        <p class="pzh-t">-</p>
        <p class="fg-x"></p>
        <p class="hint-t">奖励将通过游戏邮箱发放，预计24h内到账</p>
        <a href="javascript:showDialog.hide();" class="yes-btn1 spr" ontouchend="PTTSendClick('btn','yes-btn1','确定');" title="确定">确定</a>
    </div>
    <!-- 开启礼盒成功 -->
    <div class="pop5" id="pop6" style="display: none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <h3 class="pop-tit3 spr">恭喜你开启馈赠礼盒获得：</h3>
        <div class="pzh-img">
            <img src="adgin/picture/pop-img1.png" alt="">
        </div>
        <p class="pzh-t">-</p>
        <p class="fg-x"></p>
        <p class="hint-t">奖励将通过游戏邮箱发放，预计24h内到账</p>
        <a href="javascript:showDialog.hide();" class="yes-btn1 spr" ontouchend="PTTSendClick('btn','yes-btn1','确定');" title="确定">确定</a>
    </div>
    <!-- 礼盒获得大奖 -->
    <div class="pop5" id="pop7" style="display: none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <h3 class="pop-tit3 spr">恭喜你开启馈赠礼盒获得：</h3>
        <div class="pzh-img">
            <img src="adgin/picture/pop-img2.png" alt="">
        </div>
        <p class="pzh-t ys">-</p>
        <p class="fg-x"></p>
        <p class="hint-t">奖励将通过您填写的收货信息发放，<br>请您填写收货信息</p>
        <a href="javascript:;" class="info-btn spr" ontouchend="PTTSendClick('btn','info-btn','填写收货信息');" title="填写收货信息">填写收货信息</a>
    </div>
    <!-- 无法开启礼盒 -->
    <div class="pop6" id="pop8" style="display: none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <p class="info-hint">当前您的召唤值不足，无法召唤，<br>快去获取更多召唤值吧！</p>
        <a href="javascript:;" class="hzz-btn spr" ontouchend="PTTSendClick('btn','hzz-btn1','获取召唤值');" title="获取召唤值">获取召唤值</a>
    </div>
    <!-- 生成图鉴失败 -->
    <div class="pop6" id="pop9" style="display:none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <p class="info-hint">您当前暂未召唤全部阿古朵和朋友们，<br>成功召唤4次后即可生成图鉴。</p>
        <a href="javascript:;" class="hzz-btn spr" ontouchend="PTTSendClick('btn','hzz-btn2','获取召唤值');" title="获取召唤值">获取召唤值</a>
    </div>
    <!-- 召唤完毕 -->
    <div class="pop6" id="pop10" style="display: none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <p class="info-hint">您已召唤完毕，<br>感谢您的参与！</p>
        <a href="javascript:showDialog.hide();" class="yes-btn1 spr" ontouchend="PTTSendClick('btn','yes-btn2','确定');" title="确定">确定</a>
    </div>
    <!-- 抽取完毕 -->
    <div class="pop6" id="pop11" style="display: none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <p class="info-hint">您已开启完本次活动全部馈赠，<br>感谢您的参与！</p>
        <a href="javascript:showDialog.hide();" class="yes-btn1 spr" ontouchend="PTTSendClick('btn','yes-btn3','确定');" title="确定">确定</a>
    </div>
    <!-- 召唤失败 -->
    <div class="pop6" id="pop12" style="display:none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <p class="info-hint">您当前剩余开启次数不足，<br>快去获取召唤值开启礼盒吧！</p>
        <a href="javascript:;" class="hzz-btn spr" ontouchend="PTTSendClick('btn','hzz-btn3','获取召唤值');" title="获取召唤值">获取召唤值</a>
    </div>
    <div class="pop6" id="pop15" style="display: none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <p class="info-hint"></p>
        <a href="javascript:showDialog.hide();" class="yes-btn1 spr" ontouchend="PTTSendClick('btn','yes-btn2','确定');" title="确定">确定</a>
    </div>
    <!-- 获取召唤值 -->
    <div class="pop7" id="pop13" style="display:none;">
        <a class="dia-close spr" href="javascript:showDialog.hide()" ontouchend="PTTSendClick('btn','dia-close','关闭');" title="关闭">×</a>
        <h3 class="pop-tit4 spr">召唤值获取一览</h3>
        <ul class="zhh-list">
            <li>
                <p class="zhh-rw">1.每日登录王者营地</p>
                <p class="zhh-num"><span>15</span>召唤值</p>
                <!-- 去完成 qwc-btn pylq-btn 已领取 plj-btn 立即领取-->
                <a href="javascript:;" class="qwc-btn spr" data-type="1" ontouchend="PTTSendClick('btn','qwc-btn','去完成');" title="去完成">去完成</a>
            </li>
            <li>
                <p class="zhh-rw">2.每日在营地浏览3篇资讯</p>
                <p class="zhh-num"><span>15</span>召唤值</p>
                <!-- 去完成 qwc-btn pylq-btn 已领取 plj-btn 立即领取-->
                <a href="javascript:;" class="qwc-btn spr" data-type="2" ontouchend="PTTSendClick('btn','qwc-btn','去完成');" title="去完成">去完成</a>
            </li>
            <li>
                <p class="zhh-rw">3.每日在游戏内完成一次5V5对局</p>
                <p class="zhh-num"><span>15</span>召唤值</p>
                <!-- 去完成 qwc-btn pylq-btn 已领取 plj-btn 立即领取-->
                <a href="javascript:;" class="qwc-btn spr" data-type="3" ontouchend="PTTSendClick('btn','qwc-btn','去完成');" title="去完成">去完成</a>
            </li>
            <li>
                <p class="zhh-rw">4.在营地关注“王者营地”官号</p>
                <p class="zhh-num"><span>20</span>召唤值</p>
                <!-- 去完成 qwc-btn pylq-btn 已领取 plj-btn 立即领取-->
                <a href="javascript:;" class="qwc-btn spr" data-type="4" ontouchend="PTTSendClick('btn','qwc-btn','去完成');" title="去完成">去完成</a>
            </li>
            <li>
                <p class="zhh-rw">5.在营地关注“营地小妹”官号</p>
                <p class="zhh-num"><span>20</span>召唤值</p>
                <!-- 去完成 qwc-btn pylq-btn 已领取 plj-btn 立即领取-->
                <a href="javascript:;" class="qwc-btn spr" data-type="5" ontouchend="PTTSendClick('btn','qwc-btn','去完成');" title="去完成">去完成</a>
            </li>
            <li>
                <p class="zhh-rw">6.关注营地“S20新赛季”资讯专题</p>
                <p class="zhh-num"><span>20</span>召唤值</p>
                <!-- 去完成 qwc-btn pylq-btn 已领取 plj-btn 立即领取-->
                <a href="javascript:;" class="qwc-btn spr" data-type="6" ontouchend="PTTSendClick('btn','qwc-btn','去完成');" title="去完成">去完成</a>
            </li>
            <li>
                <p class="zhh-rw">7.在营地参与三分奇兵社区主题<span>（点赞、评论、互动均可，一次性参与）</span></p>
                <p class="zhh-num"><span>20</span>召唤值</p>
                <!-- 去完成 qwc-btn pylq-btn 已领取 plj-btn 立即领取-->
                <a href="javascript:;" class="qwc-btn spr" data-type="7" ontouchend="PTTSendClick('btn','qwc-btn','去完成');" title="去完成">去完成</a>
            </li>
        </ul>
    </div>
    <!-- 分享浮层 -->
    <div class="share_box">
        <img class="share" src="adgin/picture/fx.png">
    </div>
    <!--<script src="adgin/js/zepto1.2.min.js"></script>-->
    <!--<script src="adgin/js/milo.js"></script>-->
    <script src="adgin/js/1.0.min.js"></script>
    <script src="adgin/js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="adgin/js/camp-launch-app.1.0.8.js"></script>
    <script type="text/javascript" src="adgin/js/zepto.js"></script>
    <script type="text/javascript" src="adgin/js/milo.js"></script>
    <script type="text/javascript" src="adgin/js/reporting.js"></script>
    <script type="text/javascript">
        //弹窗
        function TGDialogS(e) {
            // 利用milo库引入dialog组件
            need("biz.dialog", function(Dialog) {
                Dialog.show({
                    id: e,
                    bgcolor: '#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
                    opacity: 80 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
                });
            });
        }

        function closeDialog() {
            // 利用milo库引入dialog组件
            need("biz.dialog", function(Dialog) {
                Dialog.hide();
            });
        }
        //分享实现
        function shareImg() {
            TGDialogS('tj');
            setTimeout(function() {
                //长按保存
                dom2img('#toimg', {
                    backgroundColor: "#000",
                })
            }, 1000)
        }

        function shareZh() {
            TGDialogS('tj1');
            // include(location.protocol + '//game.gtimg.cn/images/js/dom2img/1.0.min.js', function () {
            //     setTimeout(function(){
            //         //长按保存
            //         dom2img('#toimg1', {
            //             backgroundColor:"#000",
            //         })
            //     }, 1000);
            // })
            setTimeout(function() {
                //长按保存
                dom2img('#toimg1', {
                    backgroundColor: "#000",
                })
            }, 1000);
        }
        const {
            launchCamp,
            launchApp
        } = window.Camp && window.Camp;
        //分享
        function share() {
            document.querySelector('.share_box').style.display = "block";
        }
        document.querySelector('.share_box').onclick = function() {
            document.querySelector('.share_box').style.display = "none";
        }
    </script>
    <script src="adgin/js/func.js"></script>
    <script type="text/javascript" src="adgin/js/user_report.js" imoduleid="10376" iactivityid="315377" iflowid="680826"></script>
    <script src="adgin/js/foot.js"></script>
    <script src="adgin/js/ping_tcss_tgideas_https_min.js"></script>
    <script>
        //此段代码不能放到外链JS中，
        var setSite = { //设置网站属性
            siteType: "a20200703friend", //必填项:"os"代表是官网，如果不是，则填写actName例如a20160701xxx
            pageType: "index", //必填项:本页面的定位；按照页面含义填写例如main||list||detail||download||share||page1||pageN
            pageName: "首页", //必填项:页面中文名
            osact: 0, //选填项:是否是官网专题(在官网运营的专题)boolean；默认是0；可以在链接上加入参数osact=1来灵活设置
            ingame: 0, //选填项:是否投放在游戏APP内boolean；默认是0；可以在链接上加入参数ingame=1来灵活设置
            stayTime: 0 //选填项:是否需要统计停留时长boolean；默认是0
        }
        if (typeof(pgvMain) == 'function') pgvMain(); //千万不能忘记！
    </script>
</body>

</html>
