<?php
	include("functions.php");
	
	echo $password = password_encrypt("password") . "<br />";
	echo $hash = crypt("password", $password);
?>