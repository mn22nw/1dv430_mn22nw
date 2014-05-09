
var AjaxTester = {
	initFolders:function(url) {			
		
				if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
				};
	
				new AjaxCon(url, function(data){
					
					var folderdata= JSON.parse(data);
									
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
					
					});
	},
	initVideoboard:function(url, renderfunction){				
		
					if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
					};
					
					getVideos (url, renderfunction);
					
					}		
	
};



