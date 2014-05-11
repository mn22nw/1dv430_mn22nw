var Video = {
	init:function(youtubeID)
	{	
		var ifVideoExists = document.querySelector("[id='" + youtubeID + "']");   
		
		console.log(ifVideoExists);
		
		if(ifVideoExists === null){  // om ett ytubeklipp inte finns i rutan
			
			var videoBoard = document.querySelector("#videoBoard");
			var draggyDiv = document.createElement("div");
			draggyDiv.className ="draggy";
			var videoWrapper = document.createElement("div");
			videoWrapper.className = "videoWrapper";
			var videoDiv = document.createElement("div");
			videoDiv.id = youtubeID;
			videoDiv.className = "youtube-video";
			
			// -- EXITBUTTON --//
			var exitButton = document.createElement('a');
			exitButton.href = "#";
		    exitButton.className = 'exitButton';
		    exitButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			draggyDiv.parentNode.removeChild(draggyDiv);
			
			// hämtar php som läggertill youtubeid till databasen //
		    $.ajax({
		            type: 'post',                    
		            url:'/favotube/db/deleteyoutubeid.php',            
		            data:{"youtubeid" : youtubeID},
		            dataType:'text',                
		            success: function(rs)
		            {
		               console.log("den deletade" + rs);
		            },
		            error: function(result) {
           			 alert("Error with delete youtubeid");
     			   }
    		    });
			
			
			};	
			
			// -- ENLARGE-BUTTON --//
			var enLarge = document.createElement('a');
			enLarge.href = "#";
		    enLarge.className = 'enLarge';
		    enLarge.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			console.log("förstorar!");
			};
			
			// -- HideBUTTON --//
			var hideButton = document.createElement('a');
			hideButton.href = "#";
		    hideButton.className = 'hideButton';
		    hideButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			console.log("förstorar!");
			};	
			
			// -- FavouriteBUTTON --//
			var favouriteBtn = document.createElement('a');
			favouriteBtn.href = "#";
		    favouriteBtn.className = 'favouriteBtn';
		    favouriteBtn.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			console.log("favorit!");
			};	
			
			draggyDiv.appendChild(exitButton);
			draggyDiv.appendChild(enLarge);
			draggyDiv.appendChild(hideButton);
		 	videoWrapper.appendChild(videoDiv);
		 	draggyDiv.appendChild(videoWrapper);
		 	draggyDiv.appendChild(favouriteBtn);
			videoBoard.appendChild(draggyDiv); 
			
		 	$("#"+youtubeID).pPlayer({
			    youtubeVideoId: youtubeID,
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
		},
		
	getTitle: function(id){
		console.log("Rumple says" + id);  //id är korrekt

		var url = "http://gdata.youtube.com/feeds/api/videos/" + id +" ?v=2&alt=json";

		
		$.getJSON(url, function(response){ 
			//console.log(response);
			console.log(response.entry.title.$t + "FIRA?! :D");
			
			return response.entry.title.$t;
		});
		
	}
	}
