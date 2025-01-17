<?php

namespace App\Model;

use App\Database\Connection;

class Product {
    public static function all(): array {
        $stmt = Connection::getConnection()->query('SELECT * FROM products');
        return $stmt->fetchAll();
    }

    public static function find($id): ?array {
        $stmt = Connection::getConnection()->prepare('SELECT * FROM products WHERE id = :id');
        $stmt->execute(['id' => $id]);
        return $stmt->fetch() ?: null;
    }
}
