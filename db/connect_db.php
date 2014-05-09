<?php	
		//error_reporting(0);   //error_reporting(E_ALL);   om alla vill synas annars 0
 		//require 'db/connection.php';
		//require 'db/security.php';
	 	// print_r(PDO::getAvailableDrivers());
	 	
	 	session_start();
		ob_start();
		
		
		try {
	 		$handler = new PDO('mysql:host=127.0.0.1;dbname=favotube','root','');
			$handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	 	}	catch(PDOException $e) {
	 		
	 		echo 'Sorry, We are having a database problem <br ';
	 		echo $e->getMessage();
			die(); 
	 	}
		
		
	 	/*	
	 	try {
	 		$handler = new PDO('mysql:host=mysql17.000webhost.com;dbname=a6072281_data1','a6072281_miaaim','test123');
			$handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	 	}	catch(PDOException $e) {
	 		
	 		echo 'Sorry, We are having a database problem <br ';
	 		echo $e->getMessage();
			die(); 
	 	} */
		

	 	 // A query is a request for information from a database
	 	
