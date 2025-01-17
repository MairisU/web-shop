<?php

namespace App\Database;

use PDO;

class Connection {
    private static ?PDO $connection = null;

    public static function getConnection(): PDO {
        if (self::$connection === null) {
            $config = require __DIR__ . '/../../config/config.php';
            $db = $config['db'];

            self::$connection = new PDO(
                "mysql:host={$db['host']};dbname={$db['dbname']}",
                $db['user'],
                $db['password']
            );
            self::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }

        return self::$connection;
    }
}
