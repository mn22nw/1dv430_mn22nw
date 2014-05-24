<?php 
	
	include("connect_db.php");
	include("../functions/security.php");
			
		$username = $_SESSION['username'];
		$foldername = $_POST['foldername']; 
		$uppercasefoldername = ucfirst($foldername);
		
				error_reporting(E_ALL);
				$safe_foldername = escape($uppercasefoldername);
		
		try {
			
		$handler->beginTransaction();
		
		// SELECT userId from USER //	
			$SELECTuserid= "SELECT `userId` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
			
			$userid = $handler->prepare($SELECTuserid); 
			
			$useridValue = $userid->execute();  
			$result = $userid->fetch(PDO::FETCH_ASSOC);
			
			// --------------- END SELECT//	
		

		// SELECT correct folderid from folder //	
		$SELECTFolderid= "SELECT `folderId` FROM `folder` WHERE `userId` = '".$result["userId"]."' AND `name` = '".$safe_foldername."' LIMIT 1";
		
		$folderId = $handler->prepare($SELECTFolderid);
		
		$fId = $folderId->execute();   
		$resultfId = $folderId->fetch(PDO::FETCH_ASSOC);
		// --------------- END SELECT//	
		
		
		// DELETE FOLDERID FROM FOLDER //	
		$deleteSQL= "DELETE FROM `folder` WHERE  `folderId` = '".$resultfId["folderId"]."' ";
		
		$deleteFolder = $handler->prepare($deleteSQL);
		
		$deleteFolder->execute();  
		// --------------- END DELETE//	
		
	
		$handler->commit();                 
		
		}
		catch(Exception $e){

		    $handler->rollback();
			echo "There was a problem with deleting the folder from the database.";
		}

?> 