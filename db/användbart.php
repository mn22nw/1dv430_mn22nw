 <?php	
 
 /* RESERV PHP LOGIN
  
  <?php
		//phpinfo();
		include("db/connect_login.php");
		include("functions/security.php");
		
		if(isset($_POST['Login_Username'])){ 
		$username = $_POST['Login_Username'];
		
		$_SESSION['username']=$username;
		}
		
		if(isset($_POST['Login_Btn']) && $_POST['Login_Btn'] == 'Login' && $_POST['Login_Username'] && $_POST['Login_Password']){
			
		
			$login = new login;
			$login->username = escape($_POST['Login_Username']);
			$login->password = escape($_POST['Login_Password']);
			$login->redirect = escape($_POST['Login_Redirect']);
			
			echo $login->doLogin();
		}
		
		?>
  */
  
/* session login logout 
 * [20:24:19] annie sahlberg: <?php
 
session_start();

if($_SESSION['username']){
}else{
 header('Location: ../index.php');
}


if(isset($_POST['logout'])){
 session_destroy();
 header('Location: ../index.php');
} */
 
 
 // BINDING VALUES //
	
/*	if(isset($_GET['username'], $_GET['password'])){
		$un = trim($_GET['username']);
		$pw = trim($_GET['password']);
		
		$users = $conn->prepare("SELECT username, password FROM users WHERE password = ? AND pw = ? ");
		
		$users->bind_param('si', $un, $pw ); // s = string i = integer
		$users->execute();
		
		$users->bind_result($un, $pw);
		
		while($users->fetch()){
			echo $username;
		}
	}
	*/
	
	// INSERT //
	
	if(isset($_GET['username'], $_GET['password'])){  
		$username = $conn->real_escape_string(trim($_GET['username']));  // real_escape_string skyddar mot sql injections alla ' lägger den till \ framför
		$password = $conn->real_escape_string(trim($_GET['password']));
		
		if($insert = $conn->query("
		INSERT INTO users (username, password)
		VALUES ('{$username}', '{$password}')
		")) {echo $conn->affected_rows;
		}
	}
	
	
	// UPPDATERA TABLE //
		if($update = $conn->query("UPDATE folder SET name = 'Piano'")){
			
			// var_dump($update); returnerar true
			echo $conn->affected_rows;
		}
	
	// DELETE TABLE/Column //
	
	if($delete = $conn->query("DELETE FROM folder WHERE folderId = 15")){
			
			// var_dump($delete); returnerar true
			echo $conn->affected_rows;
		}
	
	
		// SELECT // - typ?
	
	/*if(isset($_GET['username'])){
		$username = trim($_GET['username']);
		
		$users = $conn->prepare("SELECT name FROM folder WHERE userId = 2 ");	
	}*/
	
	?> 
	
	
	<!-- <?php
	 	error_reporting(0);   //error_reporting(E_ALL);   om alla vill synas annars 0
 		require 'db/connection.php';
		require 'functions/security.php';
	 ?> -->
<!-- <script>
		$(document).ready( function() {
	    $("#load_folders").on("click", function() {
	        $("#myFolders").load("pages/myfolders.php");
	    });
		});</script> -->