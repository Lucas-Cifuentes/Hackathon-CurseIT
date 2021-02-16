<?php 

use Request as Request;

require "Controllers/AppointmentsController.php";
require "Controllers/BreedsController.php";
require "Controllers/HomeController.php";
require "Controllers/MedicalHistoriesController.php";
require "Controllers/PetsController.php";
require "Controllers/PetTypesController.php";
require "Controllers/UsersController.php";

class Router
{
   public static function Route(Request $request)
   {
       $controllerName = $request->getController() . 'Controller';

       $methodName = $request->getMethod();

       $methodParameters = $request->getParameters();

       $controllerClassName = "Controllers\\". $controllerName;

       $controller = new $controllerClassName;

       if(!isset($methodParameters))
       call_user_func(array($controller, $methodName));
       else
       call_user_func_array(array($controller, $methodName), $methodParameters);
   }
}

?>