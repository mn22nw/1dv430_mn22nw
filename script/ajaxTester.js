var AjaxTester = {
	init:function(url)
	{			if (!NodeList.prototype.forEach) {
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
	}
};



