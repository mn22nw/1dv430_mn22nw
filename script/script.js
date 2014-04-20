"use strict";

window.onload = function() {
	
var FAVOTUBE = FAVOTUBE || {};
	
	FAVOTUBE.util = FAVOTUBE.util || {};
	
	FAVOTUBE.util.createVideos = function(url) { 
			var linkInput = document.querySelector("#linkInput");
			linkInput.focus();
			var youtubeID = Video.YouTubeGetID(url);
			Video.init(youtubeID);// att göra: korta av ytubesträng till rätt   YCvFdWnzkcI
			//Video.init("YCvFdWnzkcI");
	};
	
	FAVOTUBE.util.renderMemory= function() { 
			var memoryWindow = new PopUpMemory(); 
			var content = document.createElement("div");
			content.className = "memory";
			memoryWindow.render.init(content, "Memory", "Memory", "small_icon2");
	};	
	
	FAVOTUBE.util.createVideos("https://www.youtube.com/watch?feature=player_embedded&v=LcN3fdOR-FM"); 
	FAVOTUBE.util.createVideos("https://www.youtube.com/watch?v=YCvFdWnzkcI"); 
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



