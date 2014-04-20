var Video = {
	init:function(link)
	{	
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

	$(".draggy").hover(function(){
		
		 $(this).css({'z-index' : '999'}); 
	      // function for mouseeneter
	      //"this" is selector
	},function(){
		 $(this).css({'z-index' : '0'}); 
	      // function for mouseleave	
	       //"this" is selector
	
	})  //end
	
		}};
