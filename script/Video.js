var Video = {
	init:function(link)
	{	
		if(!document.querySelector("#"+ link)){  // om ett ytubeklipp inte finns i rutan
			
			var videoBoard = document.querySelector("#videoBoard");
			var draggyDiv = document.createElement("div");
			draggyDiv.className ="draggy";
			var videoWrapper = document.createElement("div");
			videoWrapper.className = "videoWrapper";
			var videoDiv = document.createElement("div");
			videoDiv.id = link;
			videoDiv.className = "youtube-video";
			
			var exitButton = document.createElement('div');
		    exitButton.className = 'exitButton';
		    exitButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			draggyDiv.parentNode.removeChild(draggyDiv);
			};	
			
			draggyDiv.appendChild(exitButton);
		 	videoWrapper.appendChild(videoDiv);
		 	draggyDiv.appendChild(videoWrapper);
			videoBoard.appendChild(draggyDiv); 
			
		 	$("#"+link).pPlayer({
			    youtubeVideoId: link,
			    autoplay: 0,
			    origin: "http://yoursite.com"
			});
			
			
		
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
		} else {
			
			var errorm = document.querySelector(".errorm");
			errorm.textContent ="The video is already open!";
		}
			
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
