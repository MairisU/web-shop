<?php

namespace App\Model;

use App\Database\Connection;

class Attribute {
    public static function all(): array {
        $stmt = Connection::getConnection()->query('SELECT * FROM attributes');
        return $stmt->fetchAll();
    }

    public static function find($id): ?array {
        $stmt = Connection::getConnection()->prepare('SELECT * FROM attributes WHERE id = :id');
        $stmt->execute(['id' => $id]);
        return $stmt->fetch() ?: null;
    }

    public static function create(array $data): bool {
        $stmt = Connection::getConnection()->prepare(
            'INSERT INTO attributes (name, value, product_id) VALUES (:name, :value, :product_id)'
        );
        return $stmt->execute([
            'name' => $data['name'],
            'value' => $data['value'],
            'product_id' => $data['product_id'],
        ]);
    }
}
