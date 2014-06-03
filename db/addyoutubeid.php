<?php 
	
	include("../db/connect_db.php");
	include("../functions/security.php");
		
		$youtubeid = $_POST['youtubeid'];
		$title = $_POST['title'];

		error_reporting(E_ALL);
		
		$username = $_SESSION['username'];
		try { 
			
		$handler->beginTransaction();
		
		// SELECT videoboardid from USER //	
		$SELECTid= "SELECT `videoboardid` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
		
		$videoboardid = $handler->prepare($SELECTid);
		
		$vId = $videoboardid->execute();  
		$result = $videoboardid->fetch(PDO::FETCH_ASSOC); 
		// --------------- END SELECT//	
	
		
		 // INSERT INTO TABLE youtubeid //
		$InsertYTB = "INSERT INTO `{$databasename}`.`youtubeid` (`youtubeid`, `title`)   
		VALUES (
            :youtubeid, 
            :title) ON DUPLICATE KEY update `youtubeid` = VALUES(`youtubeid`);"; 
			//ON DUPLICATE KEY UPDATE `youtubeid` = `{$youtubeid}`
                                          
		$stmt = $handler->prepare($InsertYTB);                                              
		$stmt->bindParam(':youtubeid', $youtubeid, PDO::PARAM_STR);       
		$stmt->bindParam(':title', $title , PDO::PARAM_STR);  
		    
		$stmt->execute(); 
		// --------------- END INSERT//

		$handler->commit();                  //commits the transaction if it is succesfull              
		
		}
		catch(Exception $e){
			
			// An exception has been thrown
		    // We must rollback the transaction
		    
		    $handler->rollback();
		}
		
		
?>