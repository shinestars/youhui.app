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
$cont=$_GET['cont'];
$sql = "select * from soquan WHERE tradename LIKE '%{$cont}%' LIMIT 0,{$size}";
$result = $db->query($sql);
if(!$result) {
   $sql = "select * from soquan WHERE tradename LIKE '%{$cont}' LIMIT 0,{$size}";
   $result = $db->query($sql);
   if(!$result) {
     $sql = "select * from soquan WHERE tradename LIKE '{$cont}%' LIMIT 0,{$size}";
        $result = $db->query($sql);
        if(!$result){
        exit(json_encode(['code'=>0,'msg'=>"搜索不到此商品"]));
        }
   }
}
foreach($result as $k=>$value){
if(strpos($result[$k]['codenum'],"减")) {
$str=strstr($result[$k]['codenum'],"减");
   $result[$k]['codenum']=substr($str,3,strlen($str)-6);
}else {
$result[$k]['codenum'] = substr($result[$k]['codenum'],0,strrpos($result[$k]['codenum'],'元'));
}
}
$row = json_encode(['code'=>1,'msg'=>$result]);
echo($row);


