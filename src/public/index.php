<?php
require __DIR__ . '/../../vendor/autoload.php';

use App\Utils\GraphQLServer;

header('Content-Type: application/json');
GraphQLServer::handleRequest($_POST);
