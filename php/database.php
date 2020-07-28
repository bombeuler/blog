<?php

namespace blog;

use mysqli;

class db
{

    private $DB_HOST = "localhost";
    private $DB_USER = "root";
    private $DB_PASSWORD = "";
    private $DB_NAME = "blog";
    private $_db;

    private static $instance = null;

    public static function getInstance()
    {
        if (!self::$instance instanceof self) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    private function __construct()
    {
        $this->_db = new mysqli($this->DB_HOST, $this->DB_USER, $this->DB_PASSWORD, $this->DB_NAME);

        if ($this->_db->connect_error) {
            echo $this->_db->connect_error;
        }
    }

    private function __clone()
    {
        return false;
    }

    public function signIn($username, $password, $truename, $salt)
    {
        $stmt = $this->_db->prepare("INSERT INTO blog_user (username, password, truename, salt) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $username, $password, $truename, $salt);
        $result = $stmt->execute();
        if ($result) {
            return true;
        } else {
            return false;
        }
    }

    public function logIn($username, $password)
    {
        $sql="SELECT * FROM blog_user WHERE username= '$username'";
        $result=$this->_db->query($sql);
        if ($result->num_rows>0) {
            $res=$result->fetch_assoc();
            if(md5($password.$res['salt'])!=$res['password']){
                return 2;
            }
            return 0;
        } else {
            return 1;
        }
    }
}
