<?php 
		include("../db/connect_db.php");
		include("../functions/security.php");
		$username = $_SESSION['username']; //already safe!
				error_reporting(E_ALL);

		try { 		
			// SELECT userId from USER //	
			$SELECTuserid= "SELECT `userId` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
			
			$userid = $handler->prepare($SELECTuserid); 
			
			$useridValue = $userid->execute();  
			$result1 = $userid->fetch(PDO::FETCH_ASSOC);
				
			// --------------- END SELECT//	
			
			$statement=$handler->prepare("SELECT `name` FROM `folder` WHERE `userId`= '".$result1["userId"]. "'");
			$statement->execute();
			$results=$statement->fetchAll(PDO::FETCH_ASSOC);
		
			$json=json_encode($results);
			
			$data=json_encode($results);  //json string
			
			if(array_key_exists('callback', $_GET)){
	
			    header('Content-Type: text/javascript; charset=utf8');
			    header('Access-Control-Allow-Origin: http://favotube.comule.com/');
			    header('Access-Control-Max-Age: 3628800');
			    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
			
			    $callback = $_GET['callback'];
			    echo $callback.'('.$data.');';
		
			}else{
			    // normal JSON string
			    header('Content-Type: application/json; charset=utf8');
			
			    echo $data;
			}
			 }
		
			catch(Exception $e){
			    //error
			}
	?>  
	