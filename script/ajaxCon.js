  function AjaxCon(url, callback){
	var READY_STATE_UNINITIALIZED = 0;
	var READY_STATE_OPENED = 1;
	var READY_STATE_SENT = 2;
	var READY_STATE_LOADING = 3;
	var READY_STATE_COMPLETE = 4; // "allt är färdigt o man har fått svar"



		var videoBoard = document.querySelector("#videoBoard");
	    var hr = this.getXHR();
	    var timer;
	    hr.open("get", url, true);
	   
	    hr.setRequestHeader("Content-type", "application/json");
	    hr.onreadystatechange = function() {
	    	
		   if(hr.readyState === READY_STATE_COMPLETE) {
				if(hr.status >= 200 && hr.status < 300 || hr.status === 304)
				{
			 	clearInterval(timer);
				//loadBar.parentNode.removeChild(loadBar);
				callback(hr.responseText);				//skickar med en funktion som kan köra responsen
		    	}
		    }
		    else
			{
				console.log("Läsfel, status:"+hr.status);	
			}
		 };
		 hr.send(null); //because no variables are being sent (exempelvis from input)
		  
		videoBoard.innerHTML = "requesting...";
	
	/*var loadBar = document.createElement('div'); 
	loadBar.className = 'popupLoadBar';

	var contain = document.querySelector("#container");
	contain.appendChild(loadBar);*/
	
	timer	= setInterval(function(){console.log("OMG IT TOOK FOREWA");
		 },400);

	
	/*
	var videoBoard = document.querySelector("#videoBoard");
	    var hr = new XMLHttpRequest();
	    hr.open("GET", "db/folderOutput.php", true);
	    hr.setRequestHeader("Content-type", "application/json");
	    hr.onreadystatechange = function() {
	    	
		    if(hr.readyState == 4 && hr.status == 200) {

			 	var data = JSON.parse(hr.responseText);// JSON.parse = helps it get ready for javascript parsing
			 	
			 	
			 	videoBoard.innerHTML = "";
				for(var obj in data){
					videoBoard.innerHTML += data[obj].name +"<hr />";
					console.log("heey");
				}
		    }
		    }
		    hr.send(null); //because no variables are being sent (exempelvis from input)
		  
		    videoBoard.innerHTML = "requesting..."; */

	
  }

  AjaxCon.prototype.getXHR = function(){
		var xhr = null;
		try {
			xhr = new XMLHttpRequest();	
		} catch (error){
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");	
			} catch (error){
				throw new Error("No XHR object available");
			}
		}
		return xhr;
  };

