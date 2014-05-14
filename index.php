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
		<link rel="shortcut icon" href="pics/favicon.ico">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
	</head>

	<body>	
		<div id="header"> <header id="headerMain">
			<img class ="logo unselectable" src="pics/logo_small.png" alt="small logo " /> </div>
			<div class="LoginBox">
			<div class="title">Login</div>
			<form method="post">
				Username
				<input type="text" name="Login_Username" id="username" class ="textbox" autocomplete="off"/>
				Password
				<input type="password" name="Login_Password" class="textbox"/>
				
				<input type="submit" name="Login_Btn" class="LoginBtn" value="Login" />
				<input type="hidden" name="Login_Redirect"  value="account.php" />
				
			</form>
			<div id = "feedbackLogin">
				<?php 
				include("db/connect_db.php");
				include("functions/security.php");
				include("functions/functions.php");		
			
				if(isset($_POST['Login_Btn'])) {
				
				error_reporting(E_ALL);
		
				$username = $_POST['Login_Username'];
				$safe_username = escape($username);
				$password = $_POST['Login_Password'];
		
				//echo $testing = password_encrypt($safe_password) . "<br />";
				//echo $hash = crypt($safe_password, $testing); 
				
				$query= "SELECT * FROM `user` WHERE `username` = '".$safe_username. "'";
				
				$sq= $handler->prepare($query);
				
				$sq->execute(); 
				
				$r = $sq->fetchALL();
				
				    if ($sq->rowCount() != 1) {
				      echo "The username does not exist!";
				    }		    
				    else
					    {
					    foreach($r as $row)
					    {
						$set_password = $row['password']; // password from database
						
						$input_password = crypt($password, $set_password); // compares password from database with input
						
							if($input_password == $set_password) {
								$_SESSION['username']=$username;
								$redirect = $_POST['Login_Redirect']; 
								header("Location: ".$redirect);
							} else {
								echo "Wrong Password";
							}
					    }   
				    }  
			} ?> 
			</div>
	
		</div>
		<!--	<footer>
				<p>
					&copy; Copyright  by Mia
				</p>
		</footer>-->
		
		<script type='text/javascript'> 
		var inputfocus = document.querySelector("#username");
		inputfocus.focus();
		</script>
	</body>
</html>
