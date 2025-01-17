<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class MutationType extends ObjectType {
    public function __construct() {
        $config = [
            'name' => 'Mutation',
            'fields' => [
                'sum' => [
                    'type' => Type::int(),
                    'args' => [
                        'x' => ['type' => Type::int()],
                        'y' => ['type' => Type::int()],
                    ],
                    'resolve' => static fn ($rootValue, array $args): int => $args['x'] + $args['y'],
                ],
                // Add more fields here as needed
            ],
        ];

        parent::__construct($config);
    }
}
