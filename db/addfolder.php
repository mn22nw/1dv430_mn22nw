<?php 
	
	include("connect_db.php");
	include("../functions/security.php");
	
	error_reporting(E_ALL);
		
		$username = $_SESSION['username']; //already safe!
		$foldername = $_POST['foldername']; 
		$uppercasefoldername = ucfirst($foldername);
		
		//print_r($foldername);
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
			
			// INSERT new folder to folder-table //	
			$folderSql= "INSERT INTO `{$databasename}`.`folder` (`folderId`,`userId`, `name`)   
			VALUES ( 
				'',
	            :userId, 
	            :name)  ON DUPLICATE KEY update `name` = VALUES(`name`); ";     //
	            
	      	$addFolder = $handler->prepare($folderSql);     
			$addFolder->bindParam(':userId', $result["userId"], PDO::PARAM_STR);       
			$addFolder->bindParam(':name', $safe_foldername , PDO::PARAM_STR);  

			$addFolder->execute(); 
			// --------------- END INSERT//	
			
			$handler->commit();                  //commits the transaction if it is succesfull             
			
			}
			catch(Exception $e){

			    $handler->rollback();
			}
			
			echo "heeej";

?>