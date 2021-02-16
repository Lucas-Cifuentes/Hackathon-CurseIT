<?php

class ADO
{
    private static $ado;

    private function __construct() {
        
    }

    public static function connect() {
        if (is_null(self::$ado)) {
            self::$ado = new PDO("mysql:host=".getenv('DB_HOST').";dbname=".getenv('DB_NAME'), getenv('DB_USER'), getenv('DB_PASS'));
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