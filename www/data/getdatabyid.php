<?php
/**
 * Created by PhpStorm.
 * User: rs
 * Date: 17/11/23
 * Time: 下午4:28
 */

include_once "MyPDO.class.php";
$db = MyPDO::getInstance('localhost','soquan','root','','utf8');
$id=$_GET['id'];
$result=$db->query("SELECT * FROM soquan WHERE id=$id");
$row = json_encode($result);
echo($row);
