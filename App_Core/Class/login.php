<?php

class login{
	
	public $username;
	public $password;
	public $redirect;
	
	public function doLogin(){
		
		//return $this->username;	
		$Query = "SELECT * FROM user WHERE `username` = '".Clean($this->username). "'	AND `password`= '".Clean(md5($this->password)). "' ";
		
		$SQL = mysql_query($Query) or die(mysql_error());
	}
}

?>