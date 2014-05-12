<?php 
	
	include("connect_db.php");
	include("../functions/security.php");
		
		$youtubeid = $_POST['youtubeid'];
		$title = $_POST['title'];
		
		$jsontesting ='{ $title:1,"b":2,"c":3,"d":4}';
		//echo $variable;

		error_reporting(E_ALL);
		
		$username = "miaaim"; //'".$_SESSION['username']. "'
		$databasename = "favotube";
		try {
			
		$handler->beginTransaction();
		
		// SELECT videoboardid from USER //	
		$SELECTid= "SELECT `videoboardid` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
		
		$videoboardid = $handler->prepare($SELECTid);
		
		$vId = $videoboardid->execute();  //value of videoboardid example for miaaim it = 1;
		// --------------- END SELECT//	
	
		
		 // INSERT INTO TABLE youtubeid //
		$InsertYTB = "INSERT INTO `{$databasename}`.`youtubeid` (`youtubeid`, `title`)   
		VALUES (
            :youtubeid, 
            :title)";
                                          
		$stmt = $handler->prepare($InsertYTB);                                              
		$stmt->bindParam(':youtubeid', $youtubeid, PDO::PARAM_STR);       
		$stmt->bindParam(':title', $title , PDO::PARAM_STR);  
		    
		$stmt->execute(); 
		// --------------- END INSERT//
		
		// INSERT INTO TABLE videogroup//
		$InsertVID = "INSERT INTO `{$databasename}`.`videogroup` (`videoid`, `videoboardid`, `youtubeid`, `positionX`, `positionY`)   
		VALUES (
            '', 
            :videoboardid,
			:youtubeid,
			'12',
			'12')";
                                          
		$stmtVid = $handler->prepare($InsertVID);                                              
		$stmtVid->bindParam(':videoboardid', $vId, PDO::PARAM_STR);       
		$stmtVid->bindParam(':youtubeid', $youtubeid , PDO::PARAM_STR);  
		    
		$stmtVid->execute(); 
		// --------------- END INSERT// 
		
		$handler->commit();                  //commits the transaction if it is succesfull              
		
		}
		catch(Exception $e){
			
			// An exception has been thrown
		    // We must rollback the transaction
		    
		    $handler->rollback();
		}
		
		echo $jsontesting;
		
?>