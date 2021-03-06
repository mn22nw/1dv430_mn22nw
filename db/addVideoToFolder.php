<?php 
	
	include("../db/connect_db.php");
	include("../functions/security.php");
	
	//error_reporting(E_ALL);
	error_reporting(0);
		
		$username = $_SESSION['username']; //already safe!
		$foldername = $_POST['foldername']; 
		$youtubeidPost = $_POST['youtubeid'];
		$safe_foldername = escape($foldername);
		
		if (is_array($youtubeidPost)){
		$youtubeid = implode("",$youtubeidPost);}
		
		else {$youtubeid = $youtubeidPost;}

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
			//echo $resultFolderId["folderId"]."<--folderid";  
			// --------------- END SELECT//	
			
			// SELECT youtubeid from foldergroup based on id//	
			$SELECTyoutubeId= "SELECT `youtubeid` FROM `foldergroup` WHERE `folderId` = '".$resultFolderId["folderId"]. "' AND `youtubeid` = '".$youtubeid. "' LIMIT 1";
			
			$ytbid= $handler->prepare($SELECTyoutubeId); 
			$ytbidValue = $ytbid->execute();  
			$row= $ytbid->fetch(PDO::FETCH_ASSOC);
			//echo $row["youtubeid"]."<--rad ur databas";
			//echo $youtubeid ."<--youtubid";
			
			if ($row["youtubeid"] === $youtubeid ) {
				
				echo "The video already exists in ";
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
						
						echo "The video was successfully added to ";                         
						
						}
						catch(Exception $e){
			
						    $handler->rollback();
						    echo "Sorry, the video was not added correctly. Is it a valid youtubelink? ";       
						}
			
			}
			$handler = null; // end db- connection
		}

		catch(Exception $e){
			//error selecting from database   
			}
?>