<!doctype html>
<html lang="sv">
	<head> 
	<meta charset="utf-8" />
	<meta name="viewport" content="width:device-width, initial-scale=1.0" />
	<title>Favotube</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
	
	<script src="//www.youtube.com/iframe_api"></script>
	<link rel="stylesheet" type="text/css" href="pplayer/assets/pplayer.css">
	
	<script src="jquery.ui.touch-punch.min.js"></script>
	<link type="text/css" rel="stylesheet" href="../css/main.css"/>
	<link type="text/css" rel="stylesheet" media="print" href="print.css" />
	<link rel="shortcut icon" href="pics/favicon1.ico" type="image/x-icon" />
	<link rel="apple-touch-icon" href="pics/appleicon.png" />
	<script>  
		 document.createElement("header"); 
		 document.createElement("hgroup");  
		 document.createElement("footer"); 
		 document.createElement("article"); 
		 document.createElement("main"); 
		 document.createElement("section"); 
		 document.createElement("nav"); 
		 document.createElement("aside"); 
		 document.createElement("address"); 
	</script> 

	</head>

	 	<body>
		<div id="page">
		<header id="headerFolders">
			
		</header> 
		
		
	<p>MINA MAPPAR KOMMER HAMNA HÄR</p>
	
	<p>Det funkar inte att lägga till mapp just nu</p>
		
	<h3>Add folder</h3>	
	<form action="script/create.php" method="post">
		<label for="folderName">Folder Name:</label>
		<input id="folderName" type="text" name="folderName" value="" placeholder="Name">
		<br />
		
		<input type="submit" name="submit" />
	</form>
	</div>
	 <?php
	 	error_reporting(0);   //error_reporting(E_ALL);   om alla vill synas annars 0
 		require 'db/connection.php';
		require 'functions/security.php';
	 ?> 
	 <script type="text/javascript" src="pplayer/js/jquery.pplayer.js"></script>
	<script type='text/javascript' src="script/Video.js"></script>
	<script type='text/javascript' src="script/script.js"></script>
	<script type="text/javascript" src="script/my_jquery.js"></script>
	
	
 	</body>
 </html>
