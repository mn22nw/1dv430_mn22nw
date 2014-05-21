<?php 
	
	include("connect_db.php");
	include("../functions/security.php");
	
	error_reporting(E_ALL);
		
		$username = $_SESSION['username']; //already safe!
		$foldername = $_POST['foldername']; 
		$youtubeid = $_POST['youtubeid'];
		//print_r($foldername);
				error_reporting(E_ALL);
		$safe_foldername = escape($foldername);

		try {
			// SELECT userId from USER //	
			$SELECTuserid= "SELECT `userId` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
			
			$userid = $handler->prepare($SELECTuserid); 
			
			$useridValue = $userid->execute();  
			$result = $userid->fetch(PDO::FETCH_ASSOC);
			
			// --------------- END SELECT//	
			
			// SELECT FOLDERID FROM FOLDER //	
			$folderIdSQL= "SELECT `folderId` FROM `folder` WHERE `userId` = '".$result["userId"]. "' AND `name` = '".$safe_foldername. "'";
	      	$getFolderId = $handler->prepare($folderIdSQL);     
			$folderId = $getFolderId->execute(); 
			$resultFolderId = $getFolderId->fetch(PDO::FETCH_ASSOC);
			echo $resultFolderId["folderId"]."<--folderid";  
			// --------------- END SELECT//	
			
			// SELECT youtubeid from foldergroup based on id//	
			$SELECTyoutubeId= "SELECT `youtubeid` FROM `foldergroup` WHERE `folderId` = '".$resultFolderId["folderId"]. "' AND `youtubeid` = '".$youtubeid. "' LIMIT 1";
			
			$ytbid= $handler->prepare($SELECTyoutubeId); 
			
			$ytbidValue = $ytbid->execute();  
			$row= $ytbid->fetch(PDO::FETCH_ASSOC);
			echo $row["youtubeid"]."<--rad ur databas";
			echo $youtubeid ."<--youtubid";
			
			if ($row["youtubeid"] === $youtubeid ) {
				
				echo "The video already exists in you folder";
			}
			
			// --------------- END SELECT//	
			else {
					try { 
						
						$handler->beginTransaction();
						
						// INSERT new folder to folder-table //	
						$folderSql= "INSERT INTO `{$databasename}`.`foldergroup` (`fgroupid`,`folderId`,`youtubeid`)   
						VALUES ( 
							'',
				            :folderId, 
				            :youtubeid)  ON DUPLICATE KEY update `youtubeid` = VALUES(`youtubeid`);  ";     //
				            
				      	$addFolder = $handler->prepare($folderSql);     
						$addFolder->bindParam(':folderId', $resultFolderId["folderId"], PDO::PARAM_STR);        
						$addFolder->bindParam(':youtubeid', $youtubeid , PDO::PARAM_STR);  
			
						$addFolder->execute(); 
						// --------------- END INSERT//	
						
						
						$handler->commit();    
						
						echo "The video was successfully added to your folder! ";                         
						
						}
						catch(Exception $e){
			
						    $handler->rollback();
						}
			
			}
			
		}

		catch(Exception $e){
			//error selecting from database   
			}
?>