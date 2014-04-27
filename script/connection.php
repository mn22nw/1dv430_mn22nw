<?php
	//echo("<script>console.log('PHP: "rumple"');</script>");
    $dbhost = 'localhost';
	$dbuser = 'miaaim';
	$dbpass = 'test';
	$db = 'favotube';
   
    $conn= new mysqli($dbhost,$dbuser,$dbpass, $db);  // FUNKAR!
    
    
	if($conn->connect_errno){   // Felhantering!    if positive there is an error
		echo $conn->connect_errno;  // errornummer
		die('Sorry we are having some problems.');
	}
	
	if($result = $conn->query("SELECT * FROM users")) { // if succes 
		
		if ($result->num_rows){ // like saying: is this a positive number? 
			echo 'succes!';
			
			$rows = $result->fetch_all(MYSQLI_ASSOC);
			
			foreach($rows as $row) {
				echo $row['username'];
			}
			
			echo '<pre>', print_r($rows), '</pre>' ;
			
			
			
		} else {
			die($conn->error);
		}	
	}
		
	//ger inget error om man gör fel
	
	
	//print_r($result);
	
	
	
	
	
	// Check connection
	/*if (mysqli_connect_errno())
 	 {
 	 echo "Failed to connect to MySQL: " . mysqli_connect_error();
 	 }

	echo("<script>console.log('RUMPLE');</script>");
	mysqli_close($conn); */
?>