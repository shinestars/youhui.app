<?php
/**
 * Created by PhpStorm.
 * User: rs
 * Date: 17/12/4
 * Time: 下午4:39
 */

include_once "MyPDO.class.php";
$db = MyPDO::getInstance('localhost','soquan','root','','utf8');
$begin=$_GET['begin'];
$sql = "select * from soquan WHERE sellername LIKE '%百草味%' or sellername LIKE '%鸿星尔克%' or sellername LIKE '%钱夫人家%' or sellername LIKE '%瓷肌%' or sellername LIKE '%春纪%' or sellername LIKE '%珀莱雅%' or sellername LIKE '%温碧泉%' or sellername LIKE '%水密码%' or sellername LIKE '%特步%' or sellername LIKE '%七匹狼%' or sellername LIKE '%欧诗漫%' or sellername LIKE '%红豆%' or sellername LIKE '%恒源祥%' limit {$begin},10" ;
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
