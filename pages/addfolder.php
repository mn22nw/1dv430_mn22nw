<!doctype html>
<html lang="sv">
	<head> 
	<meta charset="utf-8" />
	<meta name="viewport" content="width:device-width, initial-scale=1.0" />
	<title>Favotube - My folders</title>
	<link type="text/css" rel="stylesheet" href="../css/main.css"/>
	</head>
 	<body>
 		<div id="addfolder">
	<h3>Add folder</h3>	
	<form method="post">
		<label for="folderName">Folder Name:</label>
		<input id="folderName" type="text" name="folderName" value="" placeholder="Name">
		<br />
		<input type="submit" name="Add_folder" value="Add folder"; />
	</form>
	</div>

<?php 
	
	include("db/connect_db.php");
	include("functions/security.php");
	
	error_reporting(E_ALL);
		
		$username = "miaaim"; //$_SESSION['username']; //already safe!
		
		if(isset($_POST['Add_folder'])) {
				
				error_reporting(E_ALL);
		
				$foldername = ucfirst($_POST['folderName']);
				$safe_foldername = escape($foldername);

		try { 
			
			$handler->beginTransaction();
			
			// SELECT userId from USER //	
			$SELECTuserid= "SELECT `userId` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";
			
			$userid = $handler->prepare($SELECTuserid); 
			
			$useridValue = $userid->execute();  
			
			// --------------- END SELECT//	
			
			// INSERT new folder to folder-table //	
			$folderSql= "INSERT INTO `{$databasename}`.`folder` (`folderId`,`userId`, `name`)   
			VALUES ( 
				'',
	            :userId, 
	            :name)  ON DUPLICATE KEY update `name` = VALUES(`name`); ";     //
	            
	      	$addFolder = $handler->prepare($folderSql);     
			$addFolder->bindParam(':userId', $useridValue, PDO::PARAM_STR);       
			$addFolder->bindParam(':name', $safe_foldername , PDO::PARAM_STR);  

			$addFolder->execute(); 
			// --------------- END INSERT//	
			
			$handler->commit();                  //commits the transaction if it is succesfull              
			
			}
			catch(Exception $e){

			    $handler->rollback();
			}
				
		} 
		
?>