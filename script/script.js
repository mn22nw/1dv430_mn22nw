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
						
						FAVOTUBE.util.popUp(contentfunction, "/favotube/db/addfolder.php");	
						
				});		 

			
			$('#linkInput').focus();	
				
			$('#linkInput').on('keyup', function(e) {
			    if (e.keyCode === 13) {
			       // $('#mySubmit').click();
			       console.log("hoppla");
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
	
	FAVOTUBE.util.popUp =	function (contentfunction, url){ 
					
			var popup = document.createElement('div');
			popup.id = 'popup';
			var mask = document.createElement('div');
			mask.id = 'mask';
			
			var folderTag = document.createElement('div');
			folderTag.className= 'folderTag';
			
			// HEADER - WITH INPUT!! //
			var header = document.createElement('div');
			header.className= 'headerPopup';
			
			var add = document.createElement("p");
			add.className ="addTitle";
			add.innerHTML="Add Folder";
			
				
			var i = document.createElement("input"); //input element, text
			i.setAttribute('type',"text");
			i.setAttribute('maxlength',"30");
			i.className = "inputPopup";
			
			var p = document.createElement("p");
			p.innerHTML = "Name:";
			p.className = "titleheaderPopup";
			
			
			
			var addButton = document.createElement("a"); //input element, Submit button
			addButton.href ="#";
			addButton.className = "addFolderBtn";
			addButton.innerHTML = "Add folder";
			
			var errormheader = document.createElement("p");

			addButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			
				if (i.value ===""|| i.value === null){  //om formfält är tomt
					errormheader.innerHTML = "";
					errormheader.innerHTML = "*This field can't be left empty.";
					}
				else{ //window.scrollTo(0,300);
						errormheader.innerHTML = "";
						console.log (i.value);
						 $.ajax({
				            type: 'post',                    
				            url: url,            
				            data:{"foldername" : i.value},
				            dataType:'text',                
				            success: function(rs)
				            {
				              // Don't need anything here! It's just successfull :D
				              console.log("den borde lagt till!" + rs);
				              
				              
				            },
				            error: function(result) {
		           			 alert("Error adding folder!");
		     			   }
		    		    });  
					}
			};
			
			
			
			header.appendChild(add);
			header.appendChild(p);
			header.appendChild(i);
			header.appendChild(addButton);
			header.appendChild (errormheader);
			
			var insidePopup = document.createElement('div');
			insidePopup.id= 'insidePopup';			
			
			// -- EXITBUTTON --//
			var exitButton = document.createElement('a');
			exitButton.href = "#";
		    exitButton.className = 'exitButton';
		    exitButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			popup.parentNode.removeChild(popup); 
			mask.parentNode.removeChild(mask);
			};

			mask.onclick = function (e) { 
				popup.parentNode.removeChild(popup); 
				mask.parentNode.removeChild(mask);
				};
			//popup.appendChild(exitButton);  
			popup.appendChild(exitButton);
			popup.appendChild(header);
			popup.appendChild(folderTag);
			popup.appendChild(insidePopup);
			document.body.appendChild(mask); 
			document.body.appendChild(popup);
			
			var timer= setInterval(function(){
			contentfunction();}
			,300);
			
			clearInterval(timer);
			//$(".headerPopup").load(headercontent); 
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



