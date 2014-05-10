
<?php
//phpinfo();
include("db/connect_login.php");
include("functions/security.php");

$username = $_POST['Login_Username'];

$_SESSION['username']=$username;

if(isset($_POST['Login_Btn']) && $_POST['Login_Btn'] == 'Login'){
	
	//&& ($_POST['Login_Username']) && ($_POST['Login_Password'])
	$login = new login;
	$login->username = escape($_POST['Login_Username']);
	$login->password = escape($_POST['Login_Password']);
	$login->redirect = escape($_POST['Login_Redirect']);
	
	echo $login->doLogin();
}

?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>Login - Favoube</title>
		<meta name="description" content="">
		<meta name="author" content="Mia">

		<meta name="viewport" content="width=device-width" initial-scale="1.0">
		<link rel="stylesheet" type="text/css" href="css/login.css">
		<!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
	</head>

	<body>		
			<div class="LoginBox">
			<div class="title">Login</div>
			<form method="post">
				Username
				<input type="text" name="Login_Username" class="textbox" autocomplete="off"/>
				Password
				<input type="password" name="Login_Password" class="textbox"/>
				
				<input type="submit" name="Login_Btn" class="LoginBtn" value="Login" />
				<input type="hidden" name="Login_Redirect"  value="account.php" />
				
				
			</form>
	
		</div>

		<!--	<footer>
				<p>
					&copy; Copyright  by Mia
				</p>
		</footer>-->
	</body>
</html>
