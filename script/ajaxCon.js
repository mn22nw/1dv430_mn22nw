var AjaxCon = {

initVideoboard: function getVideos(url, renderfunction) {
	
	var timer= setInterval(function(){
		
		$("#videoboardContainer").append("<img src='pics/loader.gif' class='loading' alt='Loading'/>");
		 },400);
		 
 		console.log("kommer hit iaf i ajaxCon!");

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
    				
    				clearInterval(timer);
    				$(".loading").remove();
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
getRightFoldername:function(n) {
								return n;
							}
,

initFolders:function(url, divId , classN) {			
		
	//	var timer;
		//$("#myFolders").append("<img src='pics/loader.gif' alt='Loading'/>");


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
       				
       				var folderDiv = document.querySelector("[id='" + divId + "']");  

			 		if(folderdata.length == 0 ){
			 		folderDiv.innerHTML += folderdata[obj].name;
			 		}
			 		
			 		
			 		
				 	folderDiv.innerHTML = "";
					for(var obj in folderdata){
											
						// -- FOLDERBUTTON --//
						var openFolderBtn = document.createElement('a');
						openFolderBtn.href = "#";
					    openFolderBtn.className = classN;
					    
					    var folderTitle = document.createElement('p');
					
					    var name = AjaxCon.getRightFoldername(folderdata[obj].name);
					    console.log(name);
					    folderTitle.innerHTML = name;
					   
					    openFolderBtn.addEventListener("click", function(e){
					    e = e || window.event;
						e.preventDefault(); 
						var folderN = this.firstChild.innerHTML;
						//opens folder with a list of folderITEMS
						$.ajax({
								type: 'post',
							    url: "/favotube/db/insideFolderOutput.php",
							    jsonp: "callback",
							    data:{"foldername" : folderN},
							    dataType: "text",
							 
							    success: function( insidefolder ) {
							    	var obj = JSON.parse(insidefolder);
							    	console.log("inne i"+ folderN +" ligger ju " + obj[0].youtubeId);
							    },
  						  error: function(result) {
  						  	console.log(result);
           				 console.log("There was an error with collecting the data from the database");
      					  }
						});
						});	
    	

						
						
						
						
						openFolderBtn.appendChild(folderTitle);
						folderDiv.appendChild(openFolderBtn);
					}
					
    },
    error: function(result) {
            console.log("There was an error with collecting the data from the database");
        }
	});
},
PopupHeader:function(url) {
	
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
       				
       				var folderDiv = document.querySelector("[id='" + divId + "']");  

			 		if(folderdata.length == 0 ){
			 		folderDiv.innerHTML += folderdata[obj].name;
			 		}
			 		
				 	folderDiv.innerHTML = "";
					for(var obj in folderdata){
											
						// -- FOLDERBUTTON --//
						var openFolderBtn = document.createElement('a');
						openFolderBtn.href = "#";
					    openFolderBtn.className = classN;
					    
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
            console.log("There was an error with collecting the data from the database");
        }
	});
	
	
}

};