"use strict";

window.onload = function() {
	


var createVideo= function(link){
	//var containDiv = document.querySelector("#contain");
	var videoBoard = document.querySelector("#videoBoard");
	var containDiv = document.createElement("div");
	containDiv.className = "draggy";
	var videoDiv = document.createElement("div");
	//console.log("Hej");
		var video = document.createElement("iframe");

		video.setAttribute("src", "http://www.youtube.com/embed/"+link);	  //embed sjukt viktig!
	 	videoDiv.className = "vidSize";
		videoDiv.appendChild(video);	
		containDiv.appendChild(videoDiv);
		videoBoard.appendChild(containDiv);
		
		$(function() {
    $( ".draggy" ).draggable({
    	
    	containment: '#page'
    });
  });

$(window).resize(function(){
    $(".draggy").position({
        of: "#page",
        my: "right  top",
        at: "right center",    
        collision: "fit flip"
    })
 });

};


createVideo("LcN3fdOR-FM");   // att göra: korta av ytubesträng till rätt   YCvFdWnzkcI
createVideo("YCvFdWnzkcI");
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



