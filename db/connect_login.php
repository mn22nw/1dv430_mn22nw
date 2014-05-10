<?php	
	
	session_start();
	ob_start();
	
	$DBhost = 'localhost';
	$DBuser = 'root';
	$DBPass = '';
	$DBName = 'favotube';
	
	mysql_connect($DBhost,$DBuser, $DBPass) or die(mysql_error);
	mysql_select_db($DBName);
	
	
	function Clean($val) {
	 	
		return mysql_real_escape_string($val);
	 }
	
	include("db/Class/login.php");
	
	/*
	
	$DBhost = 'mysql17.000webhost.com';
	$DBuser = 'a6072281_miaaim';
	$DBPass = 'test123';
	$DBName = 'a6072281_data1';
	
	mysql_connect($DBhost,$DBuser, $DBPass) or die(mysql_error);
	mysql_select_db($DBName);
	
	
	function Clean($val) {
	 	
		return mysql_real_escape_string($val);
	 }
	
	include("App_Core/Class/login.php"); */
	
/*$mysql_host = "mysql17.000webhost.com";
$mysql_database = "a6072281_data1";
$mysql_user = "a6072281_miaaim";
$mysql_password = "test123";*/	
?>
