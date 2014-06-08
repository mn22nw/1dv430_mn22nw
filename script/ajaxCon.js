var AjaxCon = {

initVideoboard: function getVideos(url, renderfunction) {
	
	var timer= setInterval(function(){
		
		$("#videoboardContainer").append("<img src='pics/loader.gif' class='loading' alt='Loading'/>");
		 },400);	 

$.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        format: "jsonp"
    },
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
getRightName:function(n) {
								return n;
							}
,

initFolders:function(url, divId , classN, value) {			
		
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
    				
    				var maxLenght;
    				
    				if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
					};
       				
       				var folderDiv = document.querySelector("[id='" + divId + "']");  

			 		if(folderdata.length == 0 ){
			 		folderDiv.innerHTML += folderdata[obj].name;
			 		}
					
					if (value){
						maxLenght = 6;
					}
					else {maxLenght = folderdata.length;}
												
				 	folderDiv.innerHTML = "";
					for (var i = 0; i < maxLenght; i++ )	{					
						// -- FOLDERBUTTON --//
						var openFolderBtn = document.createElement('a');
						openFolderBtn.href = "#";
					    openFolderBtn.className = classN;
					    
					    var folderTitle = document.createElement('span');
					
					    var name = AjaxCon.getRightName(folderdata[i].name);
					   // console.log(name);
					    folderTitle.innerHTML = name;
					   
					    openFolderBtn.addEventListener("click", function(e){
					    e = e || window.event;
						e.preventDefault(); 
						var folderN = this.firstChild.innerHTML;
						//console.log(folderN + "yeah");
						AjaxCon.renderFolderContent(folderN);
						
						});	
    	
						openFolderBtn.appendChild(folderTitle);
						folderDiv.appendChild(openFolderBtn);
						AjaxCon.adjustHightElement(folderTitle);

					}
					
    },
    error: function(result) {
    	console.log(result.responseText);
            console.log("There was an error with collecting the folder-data from the database");
        }
	});
},
foldersFavouritePopup:function(url, divId , classN, youtubeID) {			
		
$.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        format: "jsonp"
    },
 
    success: function( folderdata ) {
    				
    				var maxLenght;
    				
    				if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
					};
       				
       				var folderDiv = document.querySelector("[id='" + divId + "']");  

			 		if(folderdata.length == 0 ){
			 		folderDiv.innerHTML += folderdata[obj].name;
			 		}
					
					maxLenght = folderdata.length;
					
				 	folderDiv.innerHTML = "";
					for (var i = 0; i < maxLenght; i++ )	{					
						// -- FOLDERBUTTON --//
						var openFolderBtn = document.createElement('a');
						openFolderBtn.href = "#";
					    openFolderBtn.className = classN;
					    
					    var folderTitle = document.createElement('span');
					
					    var name = AjaxCon.getRightName(folderdata[i].name);
					    folderTitle.innerHTML = name;
					   
					    openFolderBtn.addEventListener("click", function(e){
					    e = e || window.event;
						e.preventDefault(); 
						
						var folderN = this.firstChild.innerHTML;

						Video.getTitleAndAddTitleToDataBase(youtubeID, false , 
							// using callback to make sure getTitleAndAddTitleToDataBase is finished before running the ajax!
							function() {$.ajax({
				            type: 'post',                    
				            url: urlList.addVideoToFolder,            
				            data:{"youtubeid" : youtubeID, "foldername" : folderN},
				            dataType:'text',                
				            success: function(rs)
				            {
				              console.log("Added "+ youtubeID+" to folder!" + rs);
					          var content = rs+ folderN;    
				              var successPop = new PopUpFolders(); 
								successPop.okPopup(content);				             				            
				            },
				            error: function(result) {
		           			 console.log("Error adding video!");
		     			   }
		    		    });  } );
						
						});	
    	
						openFolderBtn.appendChild(folderTitle);
						folderDiv.appendChild(openFolderBtn);
						AjaxCon.adjustHightElement(folderTitle);

					}
					
    },
    error: function(result) {
    	console.log(result.responseText);
            console.log("There was an error with collecting the folder-data from the database");
        }
	});
},

PopupHeaderAddFolder:function(url) {
		var header = document.querySelector(".headerPopup");
			header.innerHTML = "";
		var add = document.createElement("p");
			add.className ="addTitle";
			add.innerHTML= "Add Folder";   
			
		var i = document.createElement("input"); //input element, text
			i.setAttribute('type',"text");
			i.setAttribute('maxlength', "30");
			i.className = "inputPopup";
			i.id ="inputId";
			
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
						
						 $.ajax({
				            type: 'post',                    
				            url: url,            
				            data:{"foldername" : i.value},
				            dataType:'text',                
				            success: function(rs)
				            {
				              console.log("den borde lagt till!" + rs);
				              	
				              AjaxCon.initFolders(urlList.folderOutput, "insidePopup", "openFolderBtn2", false);	
				              AjaxCon.initFolders(urlList.folderOutput, "myFolders", "openFolderBtn", true);	
				              if (rs !=="Success"){
				              var successAdding = new PopUpFolders(); 
								  successAdding.okAddingFolderPopup(rs);}
				              
				            },
				            error: function(result) {
		           			 console.log("Error adding folder!");
		     			   }
		    		    });  
		    		    i.value = "";
					}
			};
			
			header.appendChild(add);
			header.appendChild(p);
			header.appendChild(i);
			header.appendChild(addButton);
			header.appendChild (errormheader);
			i.focus();
			$('#inputId').on('keyup', function(e) {
			   e = e || window.event;
				e.preventDefault(); 
			  if (e.keyCode === 13) {
				if (i.value ===""|| i.value === null){  //om formfält är tomt
					errormheader.innerHTML = "";
					errormheader.innerHTML = "*This field can't be left empty.";
					}
				else{ //window.scrollTo(0,300);
						errormheader.innerHTML = "";
						
						 $.ajax({
				            type: 'post',                    
				            url: url,            
				            data:{"foldername" : i.value},
				            dataType:'text',                
				            success: function(rs)
				            {
				              console.log("den borde lagt till!" + rs);
				              AjaxCon.initFolders(urlList.folderOutput, "insidePopup", "openFolderBtn2", false);	
				              AjaxCon.initFolders(urlList.folderOutput, "myFolders", "openFolderBtn", true);	
				               if (rs !=="Success"){
				              var successAdding2 = new PopUpFolders(); 
								  successAdding2.okAddingFolderPopup(rs);}
				            },
				            error: function(result) {
		           			 console.log("Error adding folder!");
		     			   }
		    		    });  
		    		    i.value = "";
				} }
			});
	
},
PopupHeaderAddVideo:function(url, foldername) {
		var header = document.querySelector(".headerPopup");
			header.innerHTML = "";
		var add = document.createElement("p");
			add.className ="addTitle";
			add.innerHTML= "Add Video";   
			
		var i = document.createElement("input"); 
			i.setAttribute('type',"text");
			i.setAttribute('maxlength', "300");
			i.className = "inputPopup";
			i.id ="linkId";
			
		var p = document.createElement("p");
			p.innerHTML = "Link:";
			p.className = "titleheaderPopup";
				
		var addButton = document.createElement("a"); 
			addButton.href ="#";
			addButton.className = "addVideoBtn"; 
			addButton.innerHTML = "Add Video";
			
		var errormheader = document.createElement("p");

			addButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			
				if (i.value ===""|| i.value === null){  //om formfält är tomt
					errormheader.innerHTML = "";
					errormheader.innerHTML = "*This field can't be left empty.";
					}
				else{ 
						errormheader.innerHTML = "";
						console.log (i.value);
						
						var youtubeId = Video.YouTubeGetID(i.value);
				
						Video.getTitleAndAddTitleToDataBase(youtubeId, false , 
							// using callback to make sure getTitleAndAddTitleToDataBase is finished before running the ajax!
							function() {$.ajax({
				            type: 'post',                    
				            url: url,            
				            data:{"youtubeid" : youtubeId, "foldername" : foldername},
				            dataType:'text',                
				            success: function(rs)
				            {
				             //console.log("den borde lagt till "+ youtubeId+" i folder!" + rs);
				              
				              //need to reload page here!!! ...with videos.
				              AjaxCon.renderFolderContent(foldername);
				            },
				            error: function(result) {
		           			 console.log("Error adding video!");
		     			   }
		    		    });  } );
						
						i.value = "";
					}
			};
			
			var deleteButton = document.createElement("a"); 
			deleteButton.href ="#";
			deleteButton.className = "deleteFolderBtn"; 
			deleteButton.innerHTML = "Delete folder";
			var backBtn = document.querySelector(".backBtn");
			deleteButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
				var content = "Are you sure you want to delete this folder?";
				var confirmPop = new PopUpFolders(); 
				confirmPop.confirmPopup(content);
			};
			
			header.appendChild(add);
			header.appendChild(p);
			header.appendChild(i);
			header.appendChild(addButton);
			header.appendChild(errormheader);
			header.appendChild(deleteButton);
			i.focus();
			$('#linkId').on('keyup', function(e) {
			   e = e || window.event;
				e.preventDefault(); 
			  if (e.keyCode === 13) {
			  		if (i.value ===""|| i.value === null){  //om formfält är tomt
					errormheader.innerHTML = "";
					errormheader.innerHTML = "*This field can't be left empty.";
					}
				else{ 
						errormheader.innerHTML = "";
						console.log (i.value);
						var youtubeId = Video.YouTubeGetID(i.value);			
						Video.getTitleAndAddTitleToDataBase(youtubeId, false , 
							function() {$.ajax({
				            type: 'post',                    
				            url: url,            
				            data:{"youtubeid" : youtubeId, "foldername" : foldername},
				            dataType:'text',                
				            success: function(rs)
				            {
				              AjaxCon.renderFolderContent(foldername);
				            },
				            error: function(result) {
		           			 console.log("Error adding video!");
		     			   }
		    		    });  } );
						
						i.value = "";
					}
			};	
			  
			  });
}, 
renderFolderContent: function(folderN) {
						//opens folder with a list of folderITEMS
						$.ajax({
								type: 'post',
							    url: urlList.insideFolderOutput,
							    jsonp: "callback",
							    data:{"foldername" : folderN},
							    dataType: "text",
							 
							    success: function( insidefolder ) {
							    	var insidePopup= document.querySelector("#insidePopup");
							    	var folderTitle= document.querySelector(".folderTitle");						    	
							    	 	
							    	var obj = JSON.parse(insidefolder);
							    	if (obj[0] === undefined && insidePopup !== null)
									 {	var backBtn = document.querySelector(".backBtn");
										backBtn.style.visibility ="visible";
							    		console.log("tom");
							    		folderTitle.innerHTML =folderN;
							    		insidePopup.innerHTML =""; 
							    		insidePopup.innerHTML ="You have no videos yet!";
							    		
							    		// CHANCE HEADERCONTENT OF POPUP HERE //
								    	AjaxCon.PopupHeaderAddVideo(urlList.addVideoToFolder, folderN);
							    	}
							    	
							    	else {
						    		var insidePopup= document.querySelector("#insidePopup");
								    	if (insidePopup === null) {
								    		console.log("starta en popup");

											var folderPop = new PopUpFolders(); 
											folderPop.render.init("", urlList.addfolder);
								    		AjaxCon.PopupHeaderAddVideo(urlList.addVideoToFolder,folderN);
								    		var insidePopupNy= document.querySelector("#insidePopup");
							    			var folderTitle= document.querySelector(".folderTitle");
								    		insidePopupNy.innerHTML =""; 
											
											var backBtn = document.querySelector(".backBtn");
												backBtn.style.visibility ="visible";	
								    		
								    		folderTitle.innerHTML =folderN;
								    		
								    		AjaxCon.renderThumbNails(obj,insidePopupNy);
								    		
											
								    	}
								    	else{
								    		
								    		AjaxCon.callFunctionrenderThumbNails(obj,folderN, folderTitle);
							    	}
										}
							    },
  						  error: function(result) {
  						  	console.log(result);
           				 	console.log("There was an error with collecting the folderdata from the database");
      					  }
						});
},
adjustHightElement: function (elem) {  //http://www.metaltoad.com/blog/resizing-text-fit-container  (open source)
      var fontstep = 1;
      if ($(elem).height()>79 || $(elem).width()>79) {
        $(elem).css('font-size',(($(elem).css('font-size').substr(0,2)-fontstep)) + 'px').css('line-height',(($(elem).css('font-size').substr(0,2))) + 'px');
        AjaxCon.adjustHightElement(elem);
      }
   },
renderThumbNails: function(obj,insidePopup){
											var backBtn = document.querySelector(".backBtn");
											var numberOfVids = 0;
								    		for(var i in obj){
																	
												var youtubeId = obj[numberOfVids].youtubeId;
												var containerThumbNail = document.createElement("div");
													containerThumbNail.className ="containerThumbNail";
													
												var vidButton = document.createElement("a"); //input element, Submit button
													vidButton.href ="#";
													vidButton.className = "thumbNail"; 
													
												var correctYTBid = AjaxCon.getRightName(youtubeId);
												containerThumbNail.id=correctYTBid;
												var img = document.createElement('img');
												img.className = "thumbNailImg";
												var imgUrl = "//img.youtube.com/vi/"+ correctYTBid + "/0.jpg"; //http://img.youtube.com/vi/MwpMEbgC7DA/0.jpg
												img.setAttribute("src", imgUrl);
												 
												vidButton.appendChild(img);
												
												img.id =correctYTBid;
												
												vidButton.onclick = function (e) { 
													    e = e || window.event;
														e.preventDefault(); 
														console.log(this.firstChild.id);
														Video.getTitleAndAddTitleToDataBase(this.firstChild.id, true, function(){
															//Empty
															});   //makes a new video-div with title and adds it to videoboard
														var popup = document.querySelector("#popup");
														var mask = document.querySelector("#mask");
														popup.parentNode.removeChild(popup); 
														mask.parentNode.removeChild(mask);
														window.scrollTo(0,385);
														};
												
											var deleteVideoBtn = document.createElement("a"); 
												deleteVideoBtn.href ="#";
												deleteVideoBtn.className = "deleteVideoBtn"; 
												deleteVideoBtn.innerHTML = "Delete Video";
												
												deleteVideoBtn.onclick = function (e) { 
													    e = e || window.event;
														e.preventDefault(); 
														
														var title = document.querySelector(".folderTitle");
														var folderN =title.innerHTML;
														var content = "Are you sure you want to delete this video?";
														var confirmPopVid = new PopUpFolders(); 
														
														confirmPopVid.confirmPopupVideo(content,this.parentNode.id); 
														    
											};
											 numberOfVids++;	
												containerThumbNail.appendChild(vidButton);
												containerThumbNail.appendChild(deleteVideoBtn);
												insidePopup.appendChild(containerThumbNail);
												}
									
									if (numberOfVids === 0) {
												insidePopup.innerHTML = "You have no videos yet!";
											};
		
},
callFunctionrenderThumbNails: function(obj, folderN, folderTitle){
								    		var insidePopup= document.querySelector("#insidePopup");
									    	insidePopup.innerHTML =""; 
									    	folderTitle.innerHTML =folderN;
									    	var backBtn = document.querySelector(".backBtn");
											backBtn.style.visibility ="visible";	
									    	
									    	// CHANCE HEADERCONTENT OF POPUP HERE //
									    	AjaxCon.PopupHeaderAddVideo(urlList.addVideoToFolder, folderN);
									    	AjaxCon.renderThumbNails(obj, insidePopup);},
logout: function(url){
	$.ajax({
			type: 'post',
			url: urlList.logout,
			jsonp: "callback",
			data:"",
			dataType: "text",                
			success: function(rs)
			         {
			         document.location = urlList.index;
		         	   },
		    error: function(result) {
			           	console.log("Error logging out!" +  result.responseText);
			     			   }
		    		    }); 
	
}
};