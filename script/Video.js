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
			var atitle = document.createElement('a');
				atitle.href ="//www.youtube.com/watch?v="+ youtubeID;
				atitle.setAttribute('target', '_blank');
				atitle.className ="title";
				atitle.innerHTML = title;				
				
			
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
		            url:urlList.deleteyoutubeid,           
		            data:{"ytbid" : idTostring},
		            dataType:'text',                
		            success: function(rs)
		            {
		               console.log("den deletade " + rs);               
		              		            },
		            error: function(result) {
           			 console.log("Error with delete youtubeid");
     			   }
    		    });			
			};	
			
			// -- Tryting to add image over video (to remove youtubes playbutton on video) --//
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
			var infoEnlarge= document.createElement('p');
			infoEnlarge.className = "infoAdd";
			infoEnlarge.innerHTML = "Enlarge video";
				
			var infoAdd= document.createElement('p');
			infoAdd.className = "infoAdd";
			infoAdd.innerHTML = "Add to folder";
			
			// -- FavouriteBUTTON --//
			var favouriteBtn = document.createElement('a');
			favouriteBtn.href = "#";
		    favouriteBtn.className = 'favouriteBtn';
		    favouriteBtn.onclick = function (e) { 
		 	 e = e || window.event;
				e.preventDefault(); 
			window.scrollTo(0,100);
			
			//Function that renders content, to send to popup-window//
			var contentfunction = AjaxCon.foldersFavouritePopup(urlList.folderOutput, "insidePopup", "openFolderBtn2", youtubeID);	
						
			var addFolderPopUp = new PopUpFolders(); 

			addFolderPopUp.render.init(contentfunction, urlList.addfolder);
			var title = document.querySelector(".folderTitle");
				title.innerHTML = "Select a folder";
			};	
			
			infoAdd.style.display = "none";
			infoEnlarge.style.display = "none";
			
			favouriteBtn.addEventListener("mouseover", function(e) {
				infoAdd.style.display = "inline";
							}, false);
			favouriteBtn.addEventListener("mouseout", function(e) {
				infoAdd.setAttribute("style", "display:none;");
							}, false);
			
			enLarge.addEventListener("mouseover",  function(e) {
				infoEnlarge.style.display = "inline";
							}, false);
			enLarge.addEventListener("mouseout", function(e) {
				infoEnlarge.setAttribute("style", "display:none;");
							}, false);
			
			
			
		/*	$('#imgOver').click(function(){
	     	 $(this).hide();
	     	 $("#"+youtubeID).get(0).playVideo();
			});*/
			draggyDiv.appendChild(exitButton);
			draggyDiv.appendChild(atitle);
			//videoWrapper.appendChild(imgOver);
		 	videoWrapper.appendChild(videoDiv);
		 	
		 	draggyDiv.appendChild(videoWrapper);
		 	draggyDiv.appendChild(favouriteBtn);
		 	draggyDiv.appendChild(enLarge);
		 	draggyDiv.appendChild(infoAdd);
		 	draggyDiv.appendChild(infoEnlarge);
			
			$('#videoBoard').prepend(draggyDiv);
			//videoBoard.appendChild(draggyDiv); 
			

		 	$("#"+youtubeID).pPlayer({
			    youtubeVideoId: youtubeID,
			    autoplay: 0,
			    origin: "http://www.favotube.comule.com"
			});
			
		
		} else {
			
			var errorm = document.querySelector(".errorm");
			errorm.textContent ="The video is already open!";
			var timer= setTimeout(function(){
				errorm.textContent ="";
			},4000);
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
		 
		 /* if (ID[0].length  !== 11) {

		  	var errorm = document.querySelector(".errorm");
			errorm.textContent ="This is not a valid youtubelink!" + ID[0].length;
			var timer= setTimeout(function(){
				errorm.textContent ="";
			},4000);
			return false;
		  }*/
		    return ID;
		},
	getTitle: function(id){
		var url = "http://gdata.youtube.com/feeds/api/videos/" + id +" ?v=2&alt=json";
		var title;
		
		$.getJSON(url, function(response){ 	
			title = response.entry.title.$t;			
			Video.init(id, title);  
		});	
		
	},
		
	getTitleAndAddTitleToDataBase: function(id, value, callback){
		var url = "http://gdata.youtube.com/feeds/api/videos/" + id +" ?v=2&alt=json";
		var title;
		
		$.getJSON(url, function(response){ 		
			title = response.entry.title.$t;
			
			 if(value) {
				
			
			// hämtar php som läggertill youtubeid till databasen + videoboard//
		    $.ajax({
		            type: 'post',                    
		            url:urlList.addyoutubeidToVideoboard,            
		            data:{"youtubeid" : id, "title" : title},
		            dataType:'text',                
		            success: function(rs)
		            {
		              // Don't need anything here! It's just successfull :D
		              Video.init(id, title); 
		            },
		            error: function(result) {
           			 console.log("Error adding youtubeid");
     			   }
    		    });  
    		     
    		  }
			else {	
				// hämtar php som läggertill youtubeid till databasen //
		    $.ajax({
		            type: 'post',                    
		            url:urlList.addyoutubeid,            
		            data:{"youtubeid" : id, "title" : title},
		            dataType:'text',                
		            success: function(rs)
		            {
		              // Don't need anything here! It's just successfull :D
		            },
		            error: function(result) {
           			 console.log("Error adding youtubeid");
     			   }
    		    });  
    		    callback();
    		  };
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
			    origin: "http://www.favotube.comule.com"
		}); 
			}
	};
