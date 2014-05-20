var Video = {
	init:function(youtubeID, title)
	{	
		var ifVideoExists = document.querySelector("[id='" + youtubeID + "']");   
		
		if(ifVideoExists === null){  // om ett ytubeklipp inte finns i rutan
			
			var videoBoard = document.querySelector("#videoBoard");
			var draggyDiv = document.createElement("div");
			draggyDiv.className ="draggy";
			var videoWrapper = document.createElement("div");
			videoWrapper.className = "videoWrapper";
			var videoDiv = document.createElement("div");
			videoDiv.id = youtubeID;
			videoDiv.className = "youtubeVideo";
			
			// -- TITLE --//
			var ptitle = document.createElement('p');
			ptitle.className = "title";
			ptitle.innerHTML = title;
			
			
			
			// -- EXITBUTTON --//
			var exitButton = document.createElement('a');
			exitButton.href = "#";
		    exitButton.className = 'exitButton';
		    exitButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			draggyDiv.parentNode.removeChild(draggyDiv);
			
			var idTostring = youtubeID.toString();
			// hämtar php som deletar youtubeid i databasen //
		    $.ajax({
		            type: 'post',                    
		            url:'/favotube/db/deleteyoutubeid.php',            
		            data:{"ytbid" : idTostring},
		            dataType:'text',                
		            success: function(rs)
		            {
		               console.log("den deletade " + rs);               
		              		            },
		            error: function(result) {
           			 alert("Error with delete youtubeid");
     			   }
    		    });			
			};	
			
			// -- EXITBUTTON --//
			/*var imgOver = document.createElement('img');

			imgOver.setAttribute("src", "http://img.youtube.com/vi/MwpMEbgC7DA/0.jpg");
			imgOver.className = "imgOver";
			//imgOver.style.backgroundImage="url('//img.youtube.com/vi/" + youtubeID + "/0.jpg')";
			//imgOver.style.backgroundSize="60px 120px";
			imgOver.id ="imgOver";*/
			
			// -- ENLARGE-BUTTON --//
			var enLarge = document.createElement('a');
			enLarge.href = "#";
		    enLarge.className = 'enLarge';
		    enLarge.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			Video.Enlarge(youtubeID);
			window.scrollTo(0,100);
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
			
			
			var infoAdd= document.createElement('p');
			infoAdd.className = "infoAdd";
			infoAdd.innerHTML = "Add to folder";
			var nameid = "infoadd" + youtubeID;
			
			// -- FavouriteBUTTON --//
			var favouriteBtn = document.createElement('a');
			favouriteBtn.href = "#";
		    favouriteBtn.className = 'favouriteBtn';
		   /* favouriteBtn.onclick = function (e) { 
		 	 e = e || window.event;
				e.preventDefault(); 
		
			console.log("favorit!");
			};	*/
			
			function func()
			{  
			   infoAdd.style.visibility = "visible";
			}
			
			function func1()
			{  
			   infoAdd.setAttribute("style", "visibility:hidden;");
			}
			
			infoAdd.style.visibility = "hidden";
			favouriteBtn.addEventListener("mouseover", func, false);
			favouriteBtn.addEventListener("mouseout", func1, false);
			
			
			
		/*	$('#imgOver').click(function(){
	     	 $(this).hide();
	     	 $("#"+youtubeID).get(0).playVideo();
			});*/

			draggyDiv.appendChild(exitButton);
			draggyDiv.appendChild(ptitle);
			//videoWrapper.appendChild(imgOver);
		 	videoWrapper.appendChild(videoDiv);
		 	
		 	draggyDiv.appendChild(videoWrapper);
		 	draggyDiv.appendChild(favouriteBtn);
		 	draggyDiv.appendChild(enLarge);
		 	draggyDiv.appendChild(infoAdd);

			videoBoard.appendChild(draggyDiv); 
			
			
			
			
			// --- VIKTIG !!! SKAPAR VIDEON !!!!! //
			
		 	$("#"+youtubeID).pPlayer({
			    youtubeVideoId: youtubeID,
			    autoplay: 0,
			    origin: "http://yoursite.com"
			});
			
		
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
		    return ID;
		},
	getTitle: function(id){
		//console.log("Rumple says " + id);  //id är korrekt
		var url = "http://gdata.youtube.com/feeds/api/videos/" + id +" ?v=2&alt=json";
		var title;
		
		$.getJSON(url, function(response){ 	
			title = response.entry.title.$t;			
			Video.init(id, title);  
		});	
		
	},
		
	getTitleAndAddTitleToDataBase: function(id){
		var url = "http://gdata.youtube.com/feeds/api/videos/" + id +" ?v=2&alt=json";
		var title;
		
		$.getJSON(url, function(response){ 
			//console.log(response);
			console.log(response.entry.title.$t + "FIRA?! :D");
			
			title = response.entry.title.$t;
			
			Video.init(id, title);  
			
			// hämtar php som läggertill youtubeid till databasen //
		    $.ajax({
		            type: 'post',                    
		            url:'/favotube/db/addyoutubeid.php',            
		            data:{"youtubeid" : id, "title" : title},
		            dataType:'text',                
		            success: function(rs)
		            {
		              // Don't need anything here! It's just successfull :D
		            },
		            error: function(result) {
           			 alert("Erroraddyoutubeid");
     			   }
    		    });  

		});
		
	} ,
	Enlarge: function(youtubeID)
	{		
			var bigVideo = document.createElement('div');
			bigVideo.id = 'bigVideo';
			var mask2 = document.createElement('div');
			mask2.id = 'mask2';

			var bigVideoWrapper = document.createElement('div');
			bigVideoWrapper.id= 'bigVideoWrapper';			
			
			// -- EXITBUTTON --//
			var exitButton = document.createElement('a');
			exitButton.href = "#";
		    exitButton.className = 'exitButton';
		    exitButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			bigVideo.parentNode.removeChild(bigVideo); 
			mask2.parentNode.removeChild(mask2);
			};


			//popup.appendChild(exitButton);  
			bigVideo.appendChild(exitButton);
			bigVideo.appendChild(bigVideoWrapper);
			document.body.appendChild(mask2); 
			document.body.appendChild(bigVideo);
	
	 $("#bigVideoWrapper").pPlayer({
			    youtubeVideoId: youtubeID,
			    autoplay: 0,
			    origin: "http://yoursite.com"
		}); 
			}
	}
