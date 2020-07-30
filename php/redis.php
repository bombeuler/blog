<?php

namespace blog;

use Redis;

class rd
{

    private $DB_HOST = "127.0.0.1";
    private $DB_PORT = "6379";
    private $_redis;

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
        $this->_redis = new Redis();
        $this->_redis->connect($this->DB_HOST, $this->DB_PORT);

    }

    private function __clone()
    {
        return false;
    }
}
