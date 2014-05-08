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
	<link type="text/css" rel="stylesheet" href="css/main.css"/>
	<link type="text/css" rel="stylesheet" href="css/buttons.css"/>
	<!--<link type="text/css" rel="stylesheet" media="print" href="print.css" />-->
	<link rel="shortcut icon" href="pics/favicon.ico" type="image/x-icon" />
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
	<div id="page" class="unselectable">
		
		
		<header id="headerMain">
			<img class ="logo unselectable" src="pics/logo.png" alt="logo" />
			<div class="validation">
				<input id="linkInput" type="text" name="Förnamn" value="" placeholder=" Paste your videolink here...">
				<div class="errorm"></div>
			</div>
			<a id="okButton" href="#">OK</a>
		</header> 
	<div id="topBar">
    <a href ="#" id="load_folders"> My Folders<span></span> </a>
	</div>
		<div id ="myFolders"></div>		
		<div id="videoBoard"></div>
	</div>
	
		
	<script type="text/javascript" src="pplayer/js/jquery.pplayer.js"></script>
	<script type='text/javascript' src="script/Video.js"></script>
	<script type='text/javascript' src="script/script.js"></script>
	<script type="text/javascript" src="script/my_jquery.js"></script>
	<script type="text/javascript" src="script/ajaxTester.js"></script>
	<script type="text/javascript" src="script/ajaxCon.js"></script>
 	</body>
 </html>