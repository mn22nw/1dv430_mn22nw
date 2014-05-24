<?php 
	
	include("connect_db.php");
	include("../functions/security.php");
			
		$ytbid = $_POST['ytbid'];
		
		echo $ytbid;
		
		$username = $_SESSION['username'];
		
		try {
			
		$handler->beginTransaction();
		
		// SELECT userId from USER //	
			$SELECTuserid= "SELECT `userId` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
			
			$userid = $handler->prepare($SELECTuserid); 
			
			$useridValue = $userid->execute();  
			$result = $userid->fetch(PDO::FETCH_ASSOC);
			
			// --------------- END SELECT//	
		

		// SELECT videoboardid from USER //	
		$SELECTid= "SELECT `videoboardid` FROM `user` WHERE `userId` = '".$result["userId"]."' LIMIT 1";
		
		$videoboardid = $handler->prepare($SELECTid);
		
		$vId = $videoboardid->execute();   
		$resultvId = $videoboardid->fetch(PDO::FETCH_ASSOC);
		// --------------- END SELECT//	
		
		
		// DELETE YOUTUBEVIDEO FROM VIDEOGROUP //	
		$deleteSQL= "DELETE FROM `videogroup` WHERE  `youtubeid` = '".$ytbid."' AND  `videoboardid` = '".$resultvId["videoboardid"]."' ";
		
		$deleteYTB = $handler->prepare($deleteSQL);
		
		$deleteYTB->execute();  
		// --------------- END DELETE//	
		
	
		$handler->commit();                  //commits the transaction if it is succesfull              
		
		}
		catch(Exception $e){
			
			// An exception has been thrown
		    // We must rollback the transaction
		    
		    $handler->rollback();
			echo "There was an error with deleting the video from the database.";
		}
		
		
		
?> 