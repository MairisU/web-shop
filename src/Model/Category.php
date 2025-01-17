<?php

namespace App\Model;

use App\Database\Connection;

class Category {
    public static function all(): array {
        $stmt = Connection::getConnection()->query('SELECT * FROM categories');
        return $stmt->fetchAll();
    }
}
