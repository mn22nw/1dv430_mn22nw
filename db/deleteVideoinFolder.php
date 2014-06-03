<?php 
	
	include("../db/connect_db.php");
	include("../functions/security.php");
	
	error_reporting(E_ALL);
	//error_reporting(0);
		
		$username = "miaaim";// $_SESSION['username']; //already safe!
		$foldername = "Piano"; // $_POST['foldername']; 
		$youtubeidPost ="ESXgJ9-H-2U";// $_POST['youtubeid'];
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
			$SELECTyoutubeId= "SELECT `youtubeid` FROM `foldergroup` WHERE `folderId` = '".$resultFolderId["folderId"]. "' AND `youtubeid` = '".$youtubeid."' LIMIT 1";
			
			$ytbid= $handler->prepare($SELECTyoutubeId); 
			$ytbidValue = $ytbid->execute();  
			$row= $ytbid->fetch(PDO::FETCH_ASSOC);
			//echo $row["youtubeid"]."<--rad ur databas";
			//echo $youtubeid ."<--youtubid";
			
			if ($row["youtubeid"] === $youtubeid ) {
				//deleta videon här!
				
				// DELETE youtubevideo FROM FOLDERgroup //	
				$deleteContentSQL= "DELETE FROM `foldergroup` WHERE  `folderId` = '".$resultFolderId["folderId"]."' AND `youtubeid` = '".$youtubeid."'";
				$deleteContentFolder = $handler->prepare($deleteContentSQL);
				$deleteContentFolder->execute();  
				
				echo "The video was succesfully removed!";
			}
			
			// --------------- END DELETE/	
			
			else {
					
						echo "Something went wrong! Please try again later";   
						                    
			}
			$handler = null; // end db- connection
		}

		catch(Exception $e){
			//error selecting from database   
			}
?>