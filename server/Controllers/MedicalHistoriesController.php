<?php 

namespace Controllers;

use ADO as ADO;

class MedicalHistoriesController {
    public function Index() {
        $result = ADO::execute_sp("sp_get_medical_histories");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    Public function Add($id_pet, $description) {
        $result = ADO::execute_sp("sp_add_medical_histories($id_pet, $description)");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    public function Pet($id) {
        $result = ADO::execute_sp("sp_get_medical_histories_from_pet($id)");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }
}