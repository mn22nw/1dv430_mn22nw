<?php	
	
	$DBhost = 'localhost';
	$DBuser = 'root';
	$DBPass = '';
	$DBName = 'favotube';
	
	mysql_connect($DBhost,$DBuser, $DBPass) or die(mysql_error);
	mysql_select_db($DBName);
	
	
	function Clean($val) {
	 	
		return mysql_real_escape_string($val);
	 }
	
	include("App_Core/Class/login.php");
	
	
?>