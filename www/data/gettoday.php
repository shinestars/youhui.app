<?php
include_once "MyPDO.class.php";
$db = MyPDO::getInstance('localhost','soquan','root','','utf8');
$size=$_GET['size'];
$today=date('Y-m-d',time());
if(isset($_GET['cont'])) {
$cont=$_GET['cont'];
$result=$db->query("select * from soquan WHERE tradesort LIKE '%{$cont}%' or tradesort LIKE '%{$cont}' or tradesort LIKE '{$cont}%' and codee = '{$today}' limit {$size}");
}else {
$result=$db->query("select * from soquan where codee = '{$today}' limit {$size}");
}
foreach($result as $k=>$value){
if(strpos($result[$k]['codenum'],"减")) {
$str=strstr($result[$k]['codenum'],"减");
   $result[$k]['codenum']=substr($str,3,strlen($str)-6);
}else {
$result[$k]['codenum'] = substr($result[$k]['codenum'],0,strrpos($result[$k]['codenum'],'元'));
}
}
$row = json_encode($result);
echo($row);


