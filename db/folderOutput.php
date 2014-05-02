		<?php 
		
		require_once("connect_db.php");


		$statement=$handler->prepare("SELECT name FROM folder");
		$statement->execute();
		$results=$statement->fetchAll(PDO::FETCH_ASSOC);
	
		$json=json_encode($results);
		
		echo $json;



/*
    $stmt = $pdo->prepare("SELECT name FROM folder");

    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($rows);
		
		
		
		<?php header("Content-Type: application/json");
	
			require_once("db/connect_db.php");
			
			$i = 0;
			$jsonData = '{';
		
			$query = $handler->query('SELECT * from folder');
		
			/* while($r = $query->fetch(PDO::FETCH_ASSOC)){
		 	echo $r['name'], '<br />';
			} 
			
			$jsonData .= '"Användare":[';
			
			while($r = $query->fetch(PDO::FETCH_OBJ)){
				//echo $r->name;
				$i++;
				$namn = $r->name;
				$jsonData .= '{ "id":"'.$namn.'" },';
				
				
		 	//echo '<script type="text/javascript"> console.log( "'. $r->name. '");</script>' .'<br />';
				}
		
				$test = "test";
				$jsonData .= '{"hehu?":'.$test.'"}]';
	

			$jsonData .= '}';
			print_r($jsonData);
		   // echo $jsonData;	*/	?>  