<?php 
	
	include("db/connect_db.php");
	include("functions/security.php");
		
		//$variable = $_POST['variable'];
		//echo $variable;

		error_reporting(E_ALL);
		
		$username = "miaaim"; //'".$_SESSION['username']. "'
		$databasename = "favotube";
		try {
			
		$handler->beginTransaction();
		
		// SELECT videoboardid from USER //	
		$videoboardid= "SELECT `videoboardid` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
		
		$videoboardid = $handler->prepare($videoboardid);
		
		$vId = $videoboardid->execute();  //value of videoboardid example for miaaim it = 1;
		// --------------- END SELECT//	
		
		$title = escape("RUMPLE");
		$youtubeid = escape("erhdjsgrhsj");
		
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
	/*	
		// INSERT INTO TABLE videoboardid //
		$InsertVID = "INSERT INTO `favotube`.`youtubeid` (`youtubeid`, `title`)   
		VALUES (
            :youtubeid, 
            :title)";
                                          
		$stmt = $handler->prepare($InsertVID);                                              
		$stmt->bindParam(':youtubeid', $youtubeid, PDO::PARAM_STR);       
		$stmt->bindParam(':title', $title , PDO::PARAM_STR);  
		    
		$stmt->execute(); 
		// --------------- END INSERT// 
	 */
		
		
		$handler->commit();                  //commits the transaction if it is succesfull              
		
		}
		catch(Exception $e){
			
			// An exception has been thrown
		    // We must rollback the transaction
		    
		    $handler->rollback();
		}
		
/*
		try {
		    // First of all, let's begin a transaction
		    $handler->beginTransaction();
		
		    // A set of queries; if one fails, an exception should be thrown
		    $handler->query("INSERT INTO `favotube`.`youtubeid` (`youtubeid`, `title`) 
				VALUES ('xxx', 'titel')");
		  //  $handler->query('second query');
		    //$handler->query('third query');
		
		    // If we arrive here, it means that no exception was thrown
		    // i.e. no query has failed, and we can commit the transaction
		    $handler->commit();
		} catch (Exception $e) {
		    // An exception has been thrown
		    // We must rollback the transaction
		    $handler->rollback();
		}*/
?>