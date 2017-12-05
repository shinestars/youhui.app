<?php
include_once "MyPDO.class.php";
$db = MyPDO::getInstance('localhost','soquan','root','','utf8');
$size=$_GET['size'];
$today=date('Y-m-d',time());
$sql = "select * from soquan where codee = '{$today}' limit {$size}";
$result = $db->query($sql);
foreach($result as $k=>$value){
   $str=strstr($result[$k]['codenum'],"减");
   $result[$k]['codenum']=substr($str,3,strlen($str)-6);
   }
$row = json_encode($result);
echo($row);
