"use strict";

window.onload = function() {
	
var FAVOTUBE = FAVOTUBE || {};
	
	FAVOTUBE.util = FAVOTUBE.util || {};
	
	FAVOTUBE.util.init= function() { 
		
			var myFolderButton = document.querySelector("#load_folders");
					
			myFolderButton.addEventListener('click', function(e) { 
						e = e || window.event;
						e.preventDefault(); 
										
						//Function that renders content, to send to popup-window//
						var contentfunction = FAVOTUBE.util.renderFoldersPopup();
						
						// headercontent to sent to popup-window //
						
						
						var folderPop = new PopUpFolders(); 

						folderPop.render.init(contentfunction, "/favotube/db/addfolder.php");
									
						//FAVOTUBE.util.popUp(contentfunction, "/favotube/db/addfolder.php");	
						
				});		 

			
			$('#linkInput').focus();	
				
			$('#linkInput').on('keyup', function(e) {
			    if (e.keyCode === 13) {
					    e = e || window.event;
						e.preventDefault(); 
						$('#linkInput').focus();	
						FAVOTUBE.util.getInputUrl();
			   
			    }
			});
			
			okButton.addEventListener('click', function(e) { 
						e = e || window.event;
						e.preventDefault(); 
						$('#linkInput').focus();	
						FAVOTUBE.util.getInputUrl();
				}, false);
				
			
	};	
	
	FAVOTUBE.util.renderFolders = function() { 
		
		AjaxCon.initFolders("/favotube/db/folderOutput.php", "myFolders", "openFolderBtn");
						// Link to php-file ---------- Div to render to --- classname of folderbuttons //
	};
	
	FAVOTUBE.util.renderFoldersPopup = function() { 
		AjaxCon.initFolders("/favotube/db/folderOutput.php", "insidePopup", "openFolderBtn2");	
	};
	
	FAVOTUBE.util.renderFolderContent = function() { 
		AjaxCon.initFolders("/favotube/db/insideFolderOutput.php", "insidePopup", "openFolderBtn2");	
	};
	
	FAVOTUBE.util.renderVideoboard = function() { 
			AjaxCon.initVideoboard("/favotube/db/videoBoardOutput.php",FAVOTUBE.util.renderVideo );	
	};
	
	FAVOTUBE.util.renderVideo = function(url) {  
			var youtubeID = Video.YouTubeGetID(url);
			var title = Video.getTitle(youtubeID);
	};
	
	FAVOTUBE.util.createVideos = function(url) {   //ska till databas dessutom!
			var youtubeID = Video.YouTubeGetID(url);
			var title = Video.getTitleAndAddTitleToDataBase(youtubeID);
			//Video.init(youtubeID, title);  flyttar denna till titelfunktionen annars funkar det aldriii

	};
	
	FAVOTUBE.util.getInputUrl= function() { 
			var linkInput = document.querySelector("#linkInput");
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
						FAVOTUBE.util.createVideos(linkInput.value);
						linkInput.value=""; }
											
			
					
	};	
	
	FAVOTUBE.util.createprofile= function() {
		
		document.getElementById("username").innerHTML ="<?php echo 'heej'; ?>" ;
		console.log(username);
	  
	};
	
	FAVOTUBE.util.popUp =	
	
		//--- RUNNING FUNCTIONS --- //

		FAVOTUBE.util.init();	
		//FAVOTUBE.util.createprofile();	
		FAVOTUBE.util.renderFolders();
		FAVOTUBE.util.renderVideoboard(); 

};




