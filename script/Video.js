var Video = {
	init:function(link)
	{	
			//var containDiv = document.querySelector("#contain");
		var videoBoard = document.querySelector("#videoBoard");
		var containDiv = document.createElement("div");
		containDiv.className = "draggy";
		var videoDiv = document.createElement("div");
		var video = document.createElement("iframe");

		video.setAttribute("src", "http://www.youtube.com/embed/"+link);	  //embed sjukt viktig!
	 	videoDiv.className = "vidSize";
		videoDiv.appendChild(video);	
		containDiv.appendChild(videoDiv);
		videoBoard.appendChild(containDiv); 
	
	//containDiv.addEventListener('mousedown', initDrag, false);   
	
	//function initDrag(e) {
			$(function() {
	    $( ".draggy" ).draggable({
	    	
	    	containment: '#videoBoard'
	    });
	  });
	
	$(window).resize(function(){
	    $(".draggy").position({
	        of: "#videoBoard",
	        my: "right  top",
	        at: "right center",    
	        collision: "fit flip"
	    })
	 });

	$(".draggy").hover(function(){
		
		 $(this).css({'z-index' : '999'}); 
	      // function for mouseeneter
	      //"this" is selector
	},function(){
		 $(this).css({'z-index' : '0'}); 
	      // function for mouseleave	
	       //"this" is selector
	
	})  //end 
		//}
		},
		
	YouTubeGetID:function(url) {    //https://gist.github.com/takien/4077195
		  var ID = '';
		  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
		  if(url[2] !== undefined) {
		    ID = url[2].split(/[^0-9a-z_-]/i);
		    ID = ID[0];
		  }
		  else {
		    ID = url;
		  }
		  console.log(ID);
		    return ID;
		}}
