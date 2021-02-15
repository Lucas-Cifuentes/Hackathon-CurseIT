<?php

namespace Controllers;

use ADO as ADO;

class PetTypesController {
    public function Index() {
        $result = ADO::execute_sp('sp_get_pet_types');
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    public function Add($name) {
        $result = ADO::execute_sp("sp_add_pet_types('$name')");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    public function Id($id) {
        $result = ADO::execute_sp("sp_get_pet_types($id)");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }
}