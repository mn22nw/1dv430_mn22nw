		<?php 
		
		require_once("connect_db.php");


		$statement=$handler->prepare('SELECT youtubeid FROM videogroup VG INNER JOIN `user` U 
		ON VG.videoboardID = U.videoboardID WHERE U.username = "miaaim";');
		$statement->execute();
		$results=$statement->fetchAll(PDO::FETCH_ASSOC);
	
		$json=json_encode($results);
		
		echo $json;
	?>  