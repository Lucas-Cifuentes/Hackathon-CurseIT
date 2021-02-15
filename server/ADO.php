<?php

class ADO
{
    private static $ado;

    private function __construct() {
        
    }

    public static function connect() {
        if (is_null(self::$ado)) {
            self::$ado = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASS);
            self::$ado->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
    }

    public static function execute_sp($sp) {
        self::connect();
        $statement = self::$ado->prepare("CALL $sp");
        $statement->execute();
        return $statement->fetchAll();
    }
}