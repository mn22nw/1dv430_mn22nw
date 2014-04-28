 <?php	
 
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
