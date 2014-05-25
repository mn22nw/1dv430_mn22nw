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
						
						var folderPop = new PopUpFolders(); 

						folderPop.render.init(contentfunction, urlList.addfolder);
						
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
		
		AjaxCon.initFolders(urlList.folderOutput, "myFolders", "openFolderBtn");
						// Link to php-file ---------- Div to render to --- classname of folderbuttons //
	};
	
	FAVOTUBE.util.renderFoldersPopup = function() { 
		AjaxCon.initFolders(urlList.folderOutput, "insidePopup", "openFolderBtn2");	
	};
	
	FAVOTUBE.util.renderFolderContent = function() { 
		AjaxCon.initFolders(urlList. insideFolderOutput, "insidePopup", "openFolderBtn2");	
	};
	
	FAVOTUBE.util.renderVideoboard = function() { 
			AjaxCon.initVideoboard(urlList.videoBoardOutput,FAVOTUBE.util.renderVideo );	
			
	};
	
	FAVOTUBE.util.renderVideo = function(url) {  
			var youtubeID = Video.YouTubeGetID(url);
			var title = Video.getTitle(youtubeID);
	};
	
	FAVOTUBE.util.createVideos = function(url) {   //ska till databas dessutom!
			var youtubeID = Video.YouTubeGetID(url);
			var title = Video.getTitleAndAddTitleToDataBase(youtubeID, true, function(){});
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
	
		//--- RUNNING FUNCTIONS --- //

		FAVOTUBE.util.init();	
		//FAVOTUBE.util.createprofile();	
		FAVOTUBE.util.renderFolders();
		FAVOTUBE.util.renderVideoboard(); 
		
		
		var timer= setTimeout(function(){
		var test= document.createElement('div');
		test.className ="test";
		var iframes = document.querySelectorAll(".pp-video");
						for (var i = 0, len = iframes.length; i < len; i++) {
						    //work with checkboxes[i]
						//  iframe[0].appendChild(test);
						 // iframes[0].firstElementChild.innerHTML = "";
						}
		 },4000);
		
		//clearInterval(timer);
};




