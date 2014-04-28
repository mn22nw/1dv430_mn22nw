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
	
	if($result = $conn->query("SELECT * FROM user")) { // if succes 
		
		if ($result->num_rows){ // like saying: is this a positive number? 
			echo 'succes!';
			
			
			
			while($row = $result->fetch_object()) { // bättre med object än assoc
				echo $row->username;  // acces as property
			}
			
			$result->free(); // cleaning up!!
			
			
			
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