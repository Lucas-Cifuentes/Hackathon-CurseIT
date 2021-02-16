<?php

namespace Controllers;

require_once "./ADO.php";

use ADO as ADO;

class UsersController {
    public function Index() {
        $results = ADO::execute_sp('sp_get_users');
        echo json_encode($results, JSON_PRETTY_PRINT);
    }

    public function Add($username, $password, $id_user_type, $name, $lastname, $dni) {
        $result = ADO::execute_sp("sp_add_user('$username', '$password', $id_user_type, '$name', '$lastname', '$dni')");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    public function Id($id) {
        $result = ADO::execute_sp("sp_get_user($id)");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    public function Login($username, $password) {
        $result = ADO::execute_sp("sp_login_user('$username', '$password')");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }
}
