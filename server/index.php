<?php 

 require "Config/Autoload.php";

 use Config\Autoload as Autoload;
 Autoload::Start();
 
 ini_set('display_errors', 1);
 ini_set('display_startup_errors', 1);
 error_reporting(E_ALL);

 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
 header('Content-type: application/json');

 use Router as Router;
 use Request as Request;

 Router::Route(new Request());

?>