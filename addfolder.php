<?php 
	
	include("../db/connect_db.php");
	include("../functions/security.php");

	
	error_reporting(0); 
		
		$username = $_SESSION['username']; //already safe!
		$foldername = $_POST['foldername']; 
		$uppercasefoldername = ucfirst($foldername);

		$safe_foldername = escape($uppercasefoldername);
				
		try {
			
			
			// SELECT userId from USER //	
			$SELECTuserid= "SELECT `userId` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
			
			$userid = $handler->prepare($SELECTuserid); 
			
			$useridValue = $userid->execute();  
			$result = $userid->fetch(PDO::FETCH_ASSOC);
			
			// --------------- END SELECT//	
			
			// Check if folder already exists//	
			$SELECTcheckFoldername = "SELECT `name` FROM `folder` WHERE `userId` = '".$result["userId"]."'  AND `name` =  '".$uppercasefoldername."' LIMIT 1";
			
			$checkName = $handler->prepare($SELECTcheckFoldername); 
			$checkName->execute();  
			
			// --------------- END SELECT//	
			
			if ($checkName->rowCount() === 0 ) {
				try { 
		
			$handler->beginTransaction();
			
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
			
			$handler->commit();                         
			echo "Success"; 
			}
			catch(Exception $e){

			    $handler->rollback();
			} 
				
			}
			
			// --------------- END SELECT//	
			else {
					
			echo "You already have a folder called ".$uppercasefoldername;
			
			}
			 
			}
			
			catch(Exception $e){
					//exeption
			} 
			

?>