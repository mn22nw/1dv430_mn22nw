<?php 
		
		include("connect_db.php");
		include("../functions/security.php");
		
		$username = "miaaim"; //$_SESSION['username']; //already safe!
		
		$foldername = $_POST['foldername']; 
		//print_r($foldername);
				error_reporting(E_ALL);
				$safe_foldername = escape($foldername);

		try { 		
			// SELECT userId from USER //	
			$SELECTuserid= "SELECT `userId` FROM `user` WHERE `username` = '".$username. "' LIMIT 1";	
			$userid = $handler->prepare($SELECTuserid); 
			$useridValue = $userid->execute();  
			
			// --------------- END SELECT//	
			
			// SELECT YOUTUBEVIDEOS FROM FOLDERGROUP //	
			$folderIdSQL= "SELECT `folderId` FROM `folder` WHERE `userId` = '".$useridValue. "' && `name` = '".$foldername. "'";
	      	$getFolderId = $handler->prepare($folderIdSQL);     
			$folderId = $getFolderId->execute(); 

			// --------------- END SELECT//	
			
			// SELECT YOUTUBEVIDEOS FROM FOLDERGROUP //	
			$youtubeSQL= "SELECT `youtubeId` FROM `foldergroup` WHERE `folderId` = '".$folderId. "'";
	      	$getVideos = $handler->prepare($youtubeSQL);   

			$allVideos = $getVideos->execute(); 
			
			$results=$getVideos->fetchAll(PDO::FETCH_ASSOC);
			
	
			$data=json_encode($results);  //json string
		
		
		if(array_key_exists('callback', $_GET)){

		    header('Content-Type: text/javascript; charset=utf8');
		    header('Access-Control-Allow-Origin: http://www.example.com/');
		    header('Access-Control-Max-Age: 3628800');
		    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
		
		    $callback = $_GET['callback'];
		    echo $callback.'('.$data.');';
	
		}else{
		    // normal JSON string
		    header('Content-Type: application/json; charset=utf8');
		
		    echo $data;
		}
		
			}
			catch(Exception $e){
			    //error
			}

	?>  