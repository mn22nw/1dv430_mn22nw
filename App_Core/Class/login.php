<?php

class login{
	
	public $username;
	public $password;
	public $redirect;
	
	public function doLogin(){
		
		//return $this->username;	
		$Query = "SELECT * FROM user WHERE `username` = '".Clean($this->username). "'	AND `password`= '".Clean($this->password). "' ";
		
		$SQL = mysql_query($Query) or die(mysql_error());
		$Active = mysql_num_rows($SQL);
		if($Active == 1){
			
			//found user
			$UserId = mysql_fetch_object($SQL);
			mysql_query("UPDATE user SET LastLogin = '".date('Y-m-d H:i:s')."' AND LoginSession = '".Clean(session_id())."' WHERE userId =".$UserId->userId) or die(mysql_error());
			header("Location: ".$this->redirect);
			die();
		}else {
			//ERROR - User does not exist
		}
	}
}

?>