<?php
	//echo("<script>console.log('PHP: "rumple"');</script>");
    $dbhost = 'localhost';
	$dbuser = 'miaaim';
	$dbpass = 'test';
	
	$db = 'favotube';
   
    $conn=mysql_connect($dbhost,$dbuser,$dbpass);
	mysql_select_db($db);
	// Check connection
	/*if (mysqli_connect_errno())
 	 {
 	 echo "Failed to connect to MySQL: " . mysqli_connect_error();
 	 }

	echo("<script>console.log('RUMPLE');</script>");
	mysqli_close($conn); */
?>