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
							    	var insidePopup= document.querySelector("#insidePopup");
							    	var folderTitle= document.querySelector(".folderTitle");						    	
							    	insidePopup.innerHTML ="";
							    	folderTitle.innerHTML =folderN;
							    	
							    	var obj = JSON.parse(insidefolder);
							    	if (obj[0] === undefined )
									 {	var backBtn = document.querySelector(".backBtn");
										backBtn.style.visibility ="visible";
							    		console.log("tom");
							    		insidePopup.innerHTML ="You have no videos yet!";
							    	}
							    	
							    	else {
							    	console.log("inne i"+ folderN +" ligger ju " + obj[0].youtubeId);
							    	
							    	
								    	if (insidePopup === null) {
								    		console.log("starta en popup");
								    	}
								    	else{
								    	
								    	var backBtn = document.querySelector(".backBtn");
										backBtn.style.visibility ="visible";	
								    	
								    	for(var i in obj){
											var youtubeId = obj[i].youtubeId;
											console.log("videoruta av denna" + youtubeId);
											var img = document.createElement('img');
											img.className = "thumbNail";
											var imgUrl = "//img.youtube.com/vi/"+ youtubeId + "/0.jpg"; //http://img.youtube.com/vi/MwpMEbgC7DA/0.jpg
											img.setAttribute("src", imgUrl);
											insidePopup.appendChild(img);
											
											//CHANCE HEADERCONTENT OF POPUP HERE //
											
											
											}
							    	//fyll med youtubedatan
							    	}

										
										}
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
    	console.log(result);
            console.log("There was an error with collecting the data from the database");
        }
	});
},
PopupHeader:function(url) {
		var header = document.querySelector(".headerPopup");
		
		var add = document.createElement("p");
			add.className ="addTitle";
			add.innerHTML="Add Folder";
			
		var i = document.createElement("input"); //input element, text
			i.setAttribute('type',"text");
			i.setAttribute('maxlength',"30");
			i.className = "inputPopup";
			
		var p = document.createElement("p");
			p.innerHTML = "Name:";
			p.className = "titleheaderPopup";
				
		var addButton = document.createElement("a"); //input element, Submit button
			addButton.href ="#";
			addButton.className = "addFolderBtn";
			addButton.innerHTML = "Add folder";
			
		var errormheader = document.createElement("p");

			addButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			
				if (i.value ===""|| i.value === null){  //om formfält är tomt
					errormheader.innerHTML = "";
					errormheader.innerHTML = "*This field can't be left empty.";
					}
				else{ //window.scrollTo(0,300);
						errormheader.innerHTML = "";
						console.log (i.value);
						 $.ajax({
				            type: 'post',                    
				            url: url,            
				            data:{"foldername" : i.value},
				            dataType:'text',                
				            success: function(rs)
				            {
				              // Don't need anything here! It's just successfull :D
				              console.log("den borde lagt till!" + rs);
				              
				              
				            },
				            error: function(result) {
		           			 alert("Error adding folder!");
		     			   }
		    		    });  
					}
			};
			
			header.appendChild(add);
			header.appendChild(p);
			header.appendChild(i);
			header.appendChild(addButton);
			header.appendChild (errormheader);
	
}

};