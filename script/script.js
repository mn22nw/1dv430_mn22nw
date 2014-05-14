"use strict";

window.onload = function() {
	
var FAVOTUBE = FAVOTUBE || {};
	
	FAVOTUBE.util = FAVOTUBE.util || {};
	
	FAVOTUBE.util.init= function() { 
		
			var myFolderButton = document.querySelector("#load_folders");
					
			myFolderButton.addEventListener('click', function(e) { 
						e = e || window.event;
						e.preventDefault(); 

						FAVOTUBE.util.popUp("pages/myfolders.php");	
						
				});		 

			
			$('#linkInput').focus();	
			$('#linkInput').focusout(function(){
       			  $('#linkInput').focus();
     				});
				
				okButton.addEventListener('click', function(e) { 
						e = e || window.event;
						e.preventDefault(); 
				
				//kanske ha detta i annan function
				
				var errorm = document.querySelector(".errorm");
				
				if (linkInput.value ===""|| linkInput.value === null){  //om formfält är tomt
					errorm.textContent ="";
					var textNode1 = document.createTextNode("* This field can't be left empty.");
					console.log("men va 17 har nu gjort");
					errorm.textContent ="";
					
							errorm.appendChild(textNode1);
					}
				else{ //window.scrollTo(0,300);
						errorm.textContent ="";
						var urlValue = FAVOTUBE.util.getInputUrl();
						FAVOTUBE.util.createVideos(urlValue);
						linkInput.value=""; }
											
						linkInput.focus();
					}, false);
			
	};	
	
	FAVOTUBE.util.renderFolders = function() { 
			
			AjaxCon.initFolders("/favotube/db/folderOutput.php");
			
	};
	
	FAVOTUBE.util.renderVideoboard = function() { 
			AjaxCon.initVideoboard("/favotube/db/videoBoardOutput.php",FAVOTUBE.util.renderVideo );	
	};
	
	FAVOTUBE.util.renderVideo = function(url) {  
			var youtubeID = Video.YouTubeGetID(url);
			var title = Video.getTitle(youtubeID);
			//Video.init(youtubeID, title);  flyttar denna till titelfunktionen annars funkar det aldriii
	};
	
	FAVOTUBE.util.createVideos = function(url) {   //ska till databas dessutom!
			var youtubeID = Video.YouTubeGetID(url);
			var title = Video.getTitleAndAddTitleToDataBase(youtubeID);
			//Video.init(youtubeID, title);  flyttar denna till titelfunktionen annars funkar det aldriii

	};
	
	FAVOTUBE.util.getInputUrl= function() { 
			var linkInput = document.querySelector("#linkInput");
			return linkInput.value;
	};	
	
	FAVOTUBE.util.createprofile= function() {
		
		document.getElementById("username").innerHTML ="<?php echo 'heej'; ?>" ;
		console.log(username);
	  
	};
	
	FAVOTUBE.util.popUp =	function (pageurl){ 
					
			var popup = document.createElement('div');
			popup.id = 'popup';
			var mask = document.createElement('div');
			mask.id = 'mask';
			
			var folderTag = document.createElement('div');
			folderTag.className= 'folderTag';
			
			// -- EXITBUTTON --//
			var exitButton = document.createElement('a');
			exitButton.href = "#";
		    exitButton.className = 'exitButton';
		    exitButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			dpopup.parentNode.removeChild(popup); 
				mask.parentNode.removeChild(mask);
			};

			mask.onclick = function (e) { 
				popup.parentNode.removeChild(popup); 
				mask.parentNode.removeChild(mask);
				};
				
			//popup.appendChild(exitButton);  
			popup.appendChild(exitButton);
			popup.appendChild(folderTag);
			document.body.appendChild(mask); 
			document.body.appendChild(popup);
			
			//$("#popup").load(pageurl); 
	};
	
		//--- RUNNING FUNCTIONS --- //
	
		FAVOTUBE.util.init();	
		//FAVOTUBE.util.createprofile();	
		FAVOTUBE.util.renderFolders();
		FAVOTUBE.util.renderVideoboard(); 

	
};
   // jQuery methods go here...

/*	var youtubeId = "_XDy8nEFJSk";
console.log("awwh")
	function YoutubeVideos(youtubeId, function(video){
  console.log(video.title);
  var webm = video.getSource("video/webm", "medium");
  console.log("WebM: " + webm.url);
  var mp4 = video.getSource("video/mp4", "medium");
  console.log("MP4: " + mp4.url);

  $("<video controls='controls'/>").attr("src", webm.url).appendTo("body");
  
});*/



