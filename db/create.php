<?php
var_dump($_POST);
   include 'connection.php';
   
   $folderName = $_POST["folderName"];
   
   if (isset($_GET["folderName"])) 
		{
		  $user = $_GET["folderName"];
		  echo $user;
		  echo " is your username";
		} 
		else 
		{
		  $user = null;
		  echo "no username supplied";
		}
		   
   if(!$_POST['submit']) {
   	echo "Please enter a folder name";
	  header('Location: index.php');
   } else {
   	
	$userId = mysql_query ("SELECT userId from users where username = 'miaaim'");
   
   /* while ($row = mysql_fetch_array ($field)) {
        echo $row['userId'] . "<br />";
    }*/
	
   	mysql_query ("INSERT INTO folder (`folderId`, `name`,`userId`)
   					VALUES (NULL,  '$folderName' , '$userId") or die(mysql_error()); 
   }
?>