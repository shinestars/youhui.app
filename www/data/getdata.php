<?php
/**
 * Created by PhpStorm.
 * User: rs
 * Date: 17/12/4
 * Time: 下午4:39
 */
include_once "MyPDO.class.php";
$db = MyPDO::getInstance('localhost','soquan','root','','utf8');
$size=$_GET['size'];
$sql = "select * from soquan LIMIT {$size},10";
$result = $db->query($sql);
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


