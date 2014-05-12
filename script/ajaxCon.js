var AjaxCon = {

initVideoboard: function getVideos(url, renderfunction) {
 	$("#videoBoard").append("<img src='pics/loader.gif' alt='Loading'/>");
 	console.log("kommer hit iaf!")

$.ajax({
    url: url,
 
    // the name of the callback parameter, as specified by the YQL service
    jsonp: "callback",
    
    // tell jQuery we're expecting JSONP
    dataType: "jsonp",
 
    // tell YQL what we want and that we want JSON
    data: {
       // q: "select title,abstract,url from search.news where query=\"cat\"",
        format: "jsonp"
    },
 
    // work with the response
    success: function( data ) {
			    	if (!NodeList.prototype.forEach) {
								NodeList.prototype.forEach = Array.prototype.forEach;
							};
				
       				 var videoBoard = document.querySelector("#videoBoard");
			 	
				 	videoBoard.innerHTML = "";
					for(var obj in data){
						var youtubeId = data[obj].youtubeid;
						renderfunction(youtubeId);
						
						}	
    },
    error: function(result) {
            alert("Error");
        }
	});
},

initFolders:function(url) {			
		
		
		$("#myFolders").append("<img src='pics/loader.gif' alt='Loading'/>");

$.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        format: "jsonp"
    },
 
    success: function( folderdata ) {
    				if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
					};
	
			
       				var folderDiv = document.querySelector("#myFolders");

			 		if(folderdata.length == 0 ){
			 		folderDiv.innerHTML += folderdata[obj].name;
			 		}
			 		
				 	folderDiv.innerHTML = "";
					for(var obj in folderdata){
											
						// -- FOLDERBUTTON --//
						var openFolderBtn = document.createElement('a');
						openFolderBtn.href = "#";
					    openFolderBtn.className = 'openFolderBtn';
					    
					    var folderTitle = document.createElement('p');
					    folderTitle.innerHTML = folderdata[obj].name;
					   
					    openFolderBtn.onclick = function (e) { 
					    e = e || window.event;
						e.preventDefault(); 
						//opens folder with a list of folderITEMS
						};	
						
						openFolderBtn.appendChild(folderTitle);
						folderDiv.appendChild(openFolderBtn);
					}
    },
    error: function(result) {
            alert("Error");
        }
	});
	}
};