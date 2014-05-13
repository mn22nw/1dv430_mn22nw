<?php
define("DB_HOST", "db489871389.db.1and1.com");
define("DB_USER", "dbo489871389");
define("DB_PASS", "password");
define("DB_NAME", "db489871389");
$connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
// Test if connection succeeded
if(mysqli_connect_errno()) {
	die("Database connection failed: " . 
		mysqli_connect_error() . 
		" (" . mysqli_connect_errno() . ")" 
		);
}
?>