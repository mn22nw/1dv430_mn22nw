<?php 
		
		require_once("connect_db.php");
		

		$statement=$handler->prepare("SELECT youtubeid FROM videogroup VG INNER JOIN `user` U 
		ON VG.videoboardID = U.videoboardID WHERE U.username = '".$_SESSION['username']. "';");
		$statement->execute();
		$results=$statement->fetchAll(PDO::FETCH_ASSOC);
	
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
		

	?>  