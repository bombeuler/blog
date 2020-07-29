<?php
include_once 'database.php';

use blog\db;

$db = db::getInstance();
$token='';

switch ($_POST['type']) {
    case 'register':
        $username = $_POST['username'];
        $password = $_POST['password'];
        $truename = $_POST['truename'];
        $salt = $_POST['salt'];

        $result = $db->signIn($username, $password, $truename, $salt);
        if ($result) {
            $status = 0;
            $token=md5($username.'onecho');
        } else {
            $status = 1;
        }

        echo json_encode(['status' => $status,'meta'=>['token'=>$token]]);
        break;
    case 'login':
        $username = $_POST['username'];
        $password = $_POST['password'];

        $result = $db->logIn($username, $password);
        if (!$result) {
            $token=md5($username.'onecho');
        }
        echo json_encode(['status' => $result,'meta'=>['token'=>$token]]);
}
