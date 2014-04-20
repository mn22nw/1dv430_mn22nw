"use strict";

window.onload = function() {
	
var FAVOTUBE = FAVOTUBE || {};
	
	FAVOTUBE.util = FAVOTUBE.util || {};
	
	FAVOTUBE.util.createVideos = function() { 
			
			Video.init("LcN3fdOR-FM");// att göra: korta av ytubesträng till rätt   YCvFdWnzkcI
			Video.init("YCvFdWnzkcI");
			console.log("jahapp");
	};
	
	FAVOTUBE.util.renderMemory= function() { 
			var memoryWindow = new PopUpMemory(); 
			var content = document.createElement("div");
			content.className = "memory";
			memoryWindow.render.init(content, "Memory", "Memory", "small_icon2");
	};	
	
	FAVOTUBE.util.createVideos(); 
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



