<?php 
	
	include("connect_db.php");
	include("../functions/security.php");
			
		$ytbid = $_POST['ytbid'];
		
		echo $ytbid;
		error_reporting(E_ALL);
		
		$username = $_SESSION['username'];
		$databasename = "favotube";
		
		try {
			
		$handler->beginTransaction();
		
		
		// SELECT videoboardid from USER //	
		$SELECTid= "SELECT `videoboardid` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
		
		$videoboardid = $handler->prepare($SELECTid);
		
		$vId = $videoboardid->execute();  //value of videoboardid example for miaaim it = 1;
		// --------------- END SELECT//	
		
		
		// DELETE YOUTUBEVIDEO FROM VIDEOGROUP //	
		$deleteSQL= "DELETE FROM `videogroup` WHERE  `youtubeid` = '".$ytbid."' &&  `videoboardid` = '".$vId."' ";
		
		$deleteYTB = $handler->prepare($deleteSQL);
		
		$deleteYTB->execute();  
		// --------------- END DELETE//	
		
		
	
		$handler->commit();                  //commits the transaction if it is succesfull              
		
		}
		catch(Exception $e){
			
			// An exception has been thrown
		    // We must rollback the transaction
		    
		    $handler->rollback();
			$jsontesting ='{"nej":1,"b":2,"c":3,"d":4}';
			echo $jsontesting;
		}
		
		
		
?> 