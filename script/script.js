"use strict";

window.onload = function() {
	
var FAVOTUBE = FAVOTUBE || {};
	
	FAVOTUBE.util = FAVOTUBE.util || {};
	
	FAVOTUBE.util.init= function() { 
		
		
			var myFolderButton = document.querySelector("#load_folders");
			
			
			myFolderButton.addEventListener('click', function(e) { 
						e = e || window.event;
						e.preventDefault(); 
						console.log("det poppar icke");
						FAVOTUBE.util.popUp();	
						
						 $("#popup").load("../pages/myfolders.php");
						 
						});
						
		
			var linkInput = document.querySelector("#linkInput");
				linkInput.focus();
				
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
	FAVOTUBE.util.createVideos = function(url) { 
			var youtubeID = Video.YouTubeGetID(url);
			Video.init(youtubeID);// att göra: korta av ytubesträng till rätt   YCvFdWnzkcI
			//Video.init("YCvFdWnzkcI");
	};
	
	FAVOTUBE.util.getInputUrl= function() { 
			var linkInput = document.querySelector("#linkInput");
			return linkInput.value;
	};	
	
	FAVOTUBE.util.popUp =	function (){ 
			console.log("det poppar");
			var popup = document.createElement('div');
			popup.id = 'popup';
			var mask = document.createElement('div');
			mask.id = 'mask';
			
			
			var exitButton = document.createElement('div');
			exitButton.classname = 'exitButton1';
			var textNodeExitButton = document.createTextNode("Stäng");
			var pExitButton = document.createElement('p');
			pExitButton.appendChild(textNodeExitButton);
			exitButton.appendChild(pExitButton);
			
			exitButton.onclick = function (e) { 
				popup.parentNode.removeChild(popup); 
				mask.parentNode.removeChild(mask)
				};
		
			mask.onclick = function (e) { 
				popup.parentNode.removeChild(popup); 
				mask.parentNode.removeChild(mask)
				};
			
			
			//popup.appendChild(exitButton);   
			document.body.appendChild(popup);
			document.body.appendChild(mask);
			console.log("poppo"); 
	};
	
		FAVOTUBE.util.init();		
	
	//FAVOTUBE.util.createVideos("https://www.youtube.com/watch?feature=player_embedded&v=LcN3fdOR-FM"); 
	
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



