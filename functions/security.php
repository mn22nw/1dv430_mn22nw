<?php

function escape($string){
	return htmlentities(trim($string), ENT_QUOTES, 'UTF-8');
}

// convert the characters that we have seen to their entity equivalent. 
//	ENT_QUOTES  =  will escape single and doublequotes 
// Character encoding of UTF-8