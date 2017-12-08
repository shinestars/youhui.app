<?php
/**
 * Created by PhpStorm.
 * User: rs
 * Date: 17/11/23
 * Time: 下午4:28
 */

include_once "MyPDO.class.php";
$db = MyPDO::getInstance('localhost','soquan','root','','utf8');
$size=$_GET['size'];
$begin=$_GET['begin'];
if(isset($_GET['cont'])) {
$cont=$_GET['cont'];
$result=$db->query("select * from soquan WHERE tradesort LIKE '%{$cont}%' or tradesort LIKE '%{$cont}' or tradesort LIKE '{$cont}%' LIMIT {$begin},{$size}");
}else {
$result=$db->query("select * from soquan  LIMIT {$begin},{$size}");
}
$flag=array();
foreach($result as $v){
$flag[]=$v['price'];
}
array_multisort($flag,SORT_DESC,$result);

foreach($result as $k=>$value){
if(strpos($result[$k]['codenum'],"减")) {
$str=strstr($result[$k]['codenum'],"减");
   $result[$k]['codenum']=substr($str,3,strlen($str)-6);
}else {
$result[$k]['codenum'] = substr($result[$k]['codenum'],0,strrpos($result[$k]['codenum'],'元'));
}
if($result[$k]['price']-$result[$k]['codenum'] >= 20) {
         unset($result[$k]);
     }
}
$row = json_encode($result);
echo($row);



