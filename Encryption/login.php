<?php
	require_once("db.php");
	require_once("functions.php");
	
		if(isset($_POST['submit'])) {
		global $connection; 
		
		$username = $_POST['username'];
		$safe_username = mysqli_real_escape_string($connection, $username);
		
		$password = $_POST['password'];
		
		$query = "SELECT * FROM accounts WHERE username = '{$safe_username}'";
		$result = mysqli_query($connection, $query);
		if($row = mysqli_fetch_assoc($result)) {
			$set_password = $row['password'];
			$input_password = crypt($password, $set_password);
			
			if($input_password == $set_password) {
				echo "winnar";
			} else {
				echo "wrong info";
			}
		} else {
			echo "wrong info";
		}
	}
	
?>