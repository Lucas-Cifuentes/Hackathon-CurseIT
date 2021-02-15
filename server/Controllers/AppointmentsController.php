<?php 

namespace Controllers;

use ADO as ADO;

class MedicalHistoriesController {
    public function Index() {
        $result = ADO::execute_sp("sp_get_appointments");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    Public function Add($id_pet, $description) {
        $result = ADO::execute_sp("sp_add_appointment($id_pet, $description)");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    public function Pet($id) {
        $result = ADO::execute_sp("sp_get_appointments_from_pet($id)");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }

    public function Veterinarian($id) {
        $result = ADO::execute_sp("sp_get_appointments_from_veterinarian($id)");
        echo json_encode($result, JSON_PRETTY_PRINT);
    }
}