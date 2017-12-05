<?php
/**
 * Created by PhpStorm.
 * User: rs
 * Date: 17/12/4
 * Time: 下午4:39
 */

include_once "MyPDO.class.php";
$db = MyPDO::getInstance('localhost','soquan','root','','utf8');
$size=$_GET['keyword'];
$sql = "select * from soquan WHERE productname LIKE '%男%秋%'" ; //方法一    LIMIT 0,15获取多少条数据
//LOCATE('男秋装', `productname`)>0 //方法二
$result = $db->query($sql);
$row = json_encode($result);
echo($row);
