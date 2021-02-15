<?php

namespace Controllers;

use ADO as ADO;

class BreedsController {
    public function Index() {
        $result = ADO::execute_sp('sp_get_breeds');
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    public function Add($id_pet_type, $name) {
        $result = ADO::execute_sp("sp_add_breed($id_pet_type, '$name')");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }
}