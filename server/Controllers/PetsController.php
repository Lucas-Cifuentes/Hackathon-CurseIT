<?php 

namespace Controllers;

use ADO as ADO;

class PetsController {
    public function Index() {
        $result = ADO::execute_sp("sp_get_pets");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    Public function Add($id_owner, $id_breed, $name, $age) {
        $result = ADO::execute_sp("sp_add_pet($id_owner, $id_breed, '$name', $age)");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    public function User($id) {
        $result = ADO::execute_sp("sp_get_pets_from_user($id)");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }
}