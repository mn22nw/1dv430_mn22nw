"use strict";

window.onload = function() {
	
var FAVOTUBE = FAVOTUBE || {};
	
	FAVOTUBE.util = FAVOTUBE.util || {};
	
	FAVOTUBE.util.init= function() { 
		
				
			// 2. This code loads the IFrame Player API code asynchronously.
	      var tag = document.createElement('script');
	
	      tag.src = "https://www.youtube.com/iframe_api";
	      var firstScriptTag = document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
			var myFolderButton = document.querySelector("#load_folders");
					
			myFolderButton.addEventListener('click', function(e) { 
						e = e || window.event;
						e.preventDefault(); 
										
						//Function that renders content, to send to popup-window//
						var contentfunction = FAVOTUBE.util.renderFoldersPopup();
						
						var folderPop = new PopUpFolders(); 

						folderPop.render.init(contentfunction, urlList.addfolder);
						// CHANCE HEADERCONTENT OF POPUP HERE //
						AjaxCon.PopupHeaderAddFolder(urlList.addfolder);
						
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
				
				
			var logout = document.querySelector(".signout");
			logout.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			AjaxCon.logout(logout); };
			
	};	
	
	FAVOTUBE.util.renderFolders = function(youtubeId) { 
		
		AjaxCon.initFolders(urlList.folderOutput, "myFolders", "openFolderBtn", true, youtubeId);
						// Link to php-file ---------- Div to render to --- classname of folderbuttons //
	};
	
	FAVOTUBE.util.renderFoldersPopup = function(youtubeId) { 
		AjaxCon.initFolders(urlList.folderOutput, "insidePopup", "openFolderBtn2", false, youtubeId);	
	};
	
	FAVOTUBE.util.renderFolderContent = function(youtubeId) { 
		AjaxCon.initFolders(urlList. insideFolderOutput, "insidePopup", "openFolderBtn2", false, youtubeId);	
	};
	
	FAVOTUBE.util.renderVideoboard = function() { 
			AjaxCon.initVideoboard(urlList.videoBoardOutput,FAVOTUBE.util.renderVideo);	
			
	};
	
	FAVOTUBE.util.renderVideo = function(url) {  
			var youtubeID = Video.YouTubeGetID(url);
			if (youtubeID){
			var title = Video.getTitle(youtubeID);}
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
					errorm.textContent ="";
							errorm.appendChild(textNode1);
					}
				else{ //window.scrollTo(0,300);
						errorm.textContent ="";
						FAVOTUBE.util.createVideos(linkInput.value);
						linkInput.value=""; }
	
					
	};	
	
	FAVOTUBE.util.createprofile= function() {
		/*var profileDiv = document.querySelector("#profilediv");
		var options = document.createElement('div');
		options.id = "options";
		
		var ul = document.createElement('ul');
		var li = document.createElement('li');
			li.className= "active";
			li.innerHTML = "Sign out";
			
			var lia = document.createElement('a');
			vas lispan = document.createElement('span');
			lispan.innerHtml
			lia.href="#";*/
		
		/*
		 
	 <li class='has-sub'><a href='#'><span>Products</span></a>
      <ul>
         <li class='has-sub'><a href='#'><span>Product 1</span></a>
            <ul>
               <li><a href='#'><span>Sub Item</span></a></li>
               <li class='last'><a href='#'><span>Sub Item</span></a></li>
            </ul>
         </li>
		
		
		ul.appendChild(li);
		options.appendChild(ul);
		profileDiv.appendChild(options); */
		FAVOTUBE.util.profileMenu(); 
	  
	},
	FAVOTUBE.util.profileMenu = function() {
		
		//tom
	};
	
		//--- RUNNING FUNCTIONS --- //

		FAVOTUBE.util.init();	
		FAVOTUBE.util.renderFolders();
		FAVOTUBE.util.renderVideoboard(); 
		FAVOTUBE.util.createprofile();
		
		
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




