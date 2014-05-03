var AjaxTester = {
	initFolders:function(url) {			
		
				if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
				};
	
				new AjaxCon(url, function(data){
					
					var folderdata= JSON.parse(data);
									
					var videoBoard = document.querySelector("#videoBoard");
			 	
				 	videoBoard.innerHTML = "";
					for(var obj in folderdata){
						videoBoard.innerHTML += folderdata[obj].name +"<hr />";
						console.log("heey");
						console.log(folderdata);}
				
					});
	},
	initVideoboard:function(url, renderfunction){				
		
					if (!NodeList.prototype.forEach) {
					NodeList.prototype.forEach = Array.prototype.forEach;
					};
					
					new AjaxCon(url, function(data){
					
					var videoBoardData= JSON.parse(data);
									
					var videoBoard = document.querySelector("#videoBoard");
			 	
				 	videoBoard.innerHTML = "";
					for(var obj in videoBoardData){
						var youtubeId = videoBoardData[obj].youtubeid;
						
						//$.getScript("script/script.js");
						renderfunction(youtubeId);
						console.log("videoo");				
					}});		
	}
	
};



