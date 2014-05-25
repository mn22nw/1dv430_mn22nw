<?php	
		//error_reporting(0);   //error_reporting(E_ALL);   om alla vill synas annars 0
 		//require 'db/connection.php';
		//require 'db/security.php';
	 	// print_r(PDO::getAvailableDrivers());
	 	
	 	session_start();
		ob_start();
		
		$databasename = "favotube";
	 	
	 	try {
	 		$handler = new PDO('mysql:host=127.0.0.1;dbname=favotube','root','');
			$handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	 	}	catch(PDOException $e) {
	 		
	 		echo 'Sorry, We are having a database problem <br /> ';
	 		echo $e->getMessage();
			die(); 
	 	}
		
/*	
    $dbhost = 'localhost';
	$dbuser = 'miaaim';
	$dbpass = 'test';
	$db = 'favotube';
   
    $conn= new mysqli($dbhost,$dbuser,$dbpass, $db);  // FUNKAR!
    */
    

?>