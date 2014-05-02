<?php

		header("Content-Type: application/json"); // ensure browser to that this is json data
		error_reporting(0);   //error_reporting(E_ALL);   om alla vill synas annars 0
 		require 'connection.php';
		require 'security.php';
	    $myArray = array();
	    if ($result = $mysqli->query("SELECT * FROM user")) {
	        $tempArray = array();
	        while($row = $result->fetch_object()) {
	                $tempArray = $row;
	                array_push($myArray, $tempArray);
	            }
	        echo json_encode($myArray);
	    }
	
	    $result->close();
	    $mysqli->close();
	
		 ?>	