"use strict";

window.onload = function() {
	
var FAVOTUBE = FAVOTUBE || {};
	
	FAVOTUBE.util = FAVOTUBE.util || {};
	
	FAVOTUBE.util.init= function() { 
			var linkInput = document.querySelector("#linkInput");
				linkInput.focus();
				
				okButton.addEventListener('click', function(e) { 
						e = e || window.event;
						e.preventDefault(); 
				//kanske ha detta i annan function
				if (linkInput.value ===""|| linkInput.value === null){  //om formfält är tomt
					console.log("men va 17 har nu gjort");
					var errorm = document.querySelector(".errorm");
					errorm.textContent ="";
					var textNode1 = document.createTextNode("* This field can't be left empty.");
							errorm.appendChild(textNode1);
					}
				else{ //window.scrollTo(0,300);
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
	
	Video.init("http://www.youtube.com/watch?v=kdemFfbS5H0");
		FAVOTUBE.util.init();	
		 $( "audio,video" ).mediaelementplayer();
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



