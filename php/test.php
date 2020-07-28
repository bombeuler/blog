<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blog";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
 
// 预处理及绑定
$stmt = $conn->prepare("INSERT INTO blog_user (username, password, salt) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $password, $salt);
 
// 设置参数并执行
$username = "John";
$password = "Doe";
$salt = "john@example.com";
$stmt->execute();
 
$username = "Mary";
$password = "Moe";
$salt = "mary@example.com";
$stmt->execute();
 
$username = "Julie";
$password = "Dooley";
$salt = "julie@example.com";
$stmt->execute();
 
echo "新记录插入成功";
 
$stmt->close();
$conn->close();