"use strict";

window.onload = function() {
	
	
var createVideo= function(){
	//var containDiv = document.querySelector("#contain");
	var videoBoard = document.querySelector("#videoBoard");
	var containDiv = document.createElement("div");
	containDiv.id = "containDiv";
	containDiv.className = "draggy";

	//console.log("Hej");
	var video = document.createElement("iframe");
		
		
		video.setAttribute("src", "http://www.youtube.com/embed/LcN3fdOR-FM");	  //embed sjukt viktig!
	 	containDiv.className = "vidSize";
		containDiv.appendChild(video);	
		videoBoard.appendChild(containDiv);
		

};
createVideo();
}

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



