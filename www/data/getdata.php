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
$sql = "select * from soquan LIMIT 0,$size";
$result = $db->query($sql);

$row = json_encode($result);

echo($row);


