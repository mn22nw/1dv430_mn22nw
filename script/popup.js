"use strict";

NodeList.prototype.map = function(fn) { 
		var a=[]; for ( var i=0; i<this.length; i++ ){ 
		a.push(fn(this[i], i, this)); } return a; }; 


function PopUpFoundation() {};

PopUpFoundation.prototype.render = {

	init: function (contentfunction, url){ 
					
			var popup = document.createElement('div');
			popup.id = 'popup';
			var mask = document.createElement('div');
			mask.id = 'mask';
			
			var folderTag = document.createElement('div');
			folderTag.className= 'folderTag';
			
			// HEADER - WITH INPUT + ADD!! //
			var header = document.createElement('div');
			header.className= 'headerPopup';

			var title = document.createElement("span");
			title.className = "folderTitle";
			
			var insidePopup = document.createElement('div');
			insidePopup.id= 'insidePopup';			
			
			
			var backBtn = document.createElement("a");
			backBtn.className = "backBtn";
			backBtn.addEventListener('click', function(e) { 
						e = e || window.event;
						e.preventDefault(); 
						title.innerHTML="";
						insidePopup.innerHTML="";
						
						AjaxCon.initFolders(urlList.folderOutput, "insidePopup", "openFolderBtn2");
						var folderN =title.innerHTML;
						
						// CHANCE HEADERCONTENT OF POPUP HERE //
						AjaxCon.PopupHeaderAddFolder(url, folderN);
	
						backBtn.style.visibility ="hidden";	
				});	
			backBtn.style.visibility ="hidden";	 

			
			// -- EXITBUTTON --//
			var exitButton = document.createElement('a');
			exitButton.href = "#";
		    exitButton.className = 'exitButton';
		    exitButton.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			popup.parentNode.removeChild(popup); 
			mask.parentNode.removeChild(mask);
			};

			mask.onclick = function (e) { 
				popup.parentNode.removeChild(popup); 
				mask.parentNode.removeChild(mask);
				};
			//popup.appendChild(exitButton);  
			popup.appendChild(exitButton);
			popup.appendChild(header);
			popup.appendChild(folderTag);
			popup.appendChild(title);
			popup.appendChild(insidePopup);
			popup.appendChild(backBtn);
			document.body.appendChild(mask); 
			document.body.appendChild(popup);
			
			if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //http://stackoverflow.com/questions/19999388/jquery-check-if-user-is-using-ie
			var timer= setInterval(function(){
			contentfunction();}
			,300);
			
			clearInterval(timer);
			};
			
	}};




//Med denna kan jag skapa flera fönster ju (som en mall)och den ärver från popup foundation //
PopUpFolders.prototype = new PopUpFoundation();

function PopUpFolders () {   
	PopUpFoundation.call();
};


//lägg till nya funktioner på PopUp prototype
PopUpFolders.prototype.confirmPopup = function(content){
	
	var confirmPopup = document.createElement('div');
		confirmPopup.id = "confirmPopup";
	var message = document.createElement('p');
		message.innerHTML = content;
	var yesBtn = document.createElement('a');
		yesBtn.href = "#";
		yesBtn.innerHTML = "Yes";
		yesBtn.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			var title = document.querySelector(".folderTitle");
			var folderN =title.innerHTML;
						
						$.ajax({
								type: 'post',
							    url: urlList.deleteFolder,
							    jsonp: "callback",
							    data:{"foldername" : folderN},
							    dataType: "text",                
					            success: function(rs)
					            {
					              console.log("den borde deletat folder!" + rs);
					              title.innerHTML = "";
					              AjaxCon.initFolders(urlList.folderOutput, "insidePopup", "openFolderBtn2", false);
					              AjaxCon.initFolders(urlList.folderOutput, "myFolders", "openFolderBtn", true);
					              
					              // CHANCE HEADERCONTENT OF POPUP HERE //
								    	AjaxCon.PopupHeaderAddFolder(urlList.addfolder, folderN);
								    	var backBtn = document.querySelector(".backBtn");
								    	backBtn.style.visibility ="hidden";

					            },
					            error: function(result) {
			           			 console.log("Error deleting folder!");
			     			   }
		    		    });  		
			confirmPopup.parentNode.removeChild(confirmPopup); 
			};
		
	var noBtn = document.createElement('a');
		noBtn.href = "#";
		noBtn.innerHTML = "No";
		noBtn.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			confirmPopup.parentNode.removeChild(confirmPopup); 
			};
		
	var popUp = document.querySelector('#popup');
	confirmPopup.appendChild(message);
	confirmPopup.appendChild(yesBtn);
	confirmPopup.appendChild(noBtn);
	popUp.appendChild(confirmPopup);
};

PopUpFolders.prototype.confirmPopupVideo = function(content, youtubeId){
	
	var confirmPopup = document.createElement('div');
		confirmPopup.id = "confirmPopup";
	var message = document.createElement('p');
		message.innerHTML = content;
	var yesBtn = document.createElement('a');
		yesBtn.href = "#";
		yesBtn.innerHTML = "Yes";
		yesBtn.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			var title = document.querySelector(".folderTitle");
			var folderN =title.innerHTML;
						
						$.ajax({
								type: 'post',
								url: urlList.deleteVideoinFolder,
								jsonp: "callback",
								data:{"youtubeid" : this.parentNode.id, "foldername" : folderN},
								dataType: "text",                
								success: function(rs)
								{
									 console.log("den borde deletat video!" + rs);
									 AjaxCon.renderFolderContent(folderN);
									},
									error: function(result) {
									console.log("Error deleting video!");
											     			   }
										    		    }); 	   	    		
			confirmPopup.parentNode.removeChild(confirmPopup); 
			};
		
	var noBtn = document.createElement('a');
		noBtn.href = "#";
		noBtn.innerHTML = "No";
		noBtn.onclick = function (e) { 
		    e = e || window.event;
			e.preventDefault(); 
			confirmPopup.parentNode.removeChild(confirmPopup); 
			};
		
	var popUp = document.querySelector('#popup');
	confirmPopup.appendChild(message);
	confirmPopup.appendChild(yesBtn);
	confirmPopup.appendChild(noBtn);
	popUp.appendChild(confirmPopup);
};

PopUpFolders.prototype.okPopup = function(content){
	
			var popUp = document.querySelector("#popup");
			var mask = document.querySelector("#mask");
			
			var okPop = document.createElement('div');
				okPop.setAttribute("id", "okPopup");
			var message = document.createElement('p');
				message.innerHTML = content;
			var okBtnPopup = document.createElement('a');
				okBtnPopup.href = "#";
				okBtnPopup.innerHTML = "Ok";
				okBtnPopup.onclick = function (e) { 
				    e = e || window.event;
					e.preventDefault(); 
					popup.parentNode.removeChild(popup); 
					mask.parentNode.removeChild(mask);
					window.scrollTo(0,385);
					};
				
			okPop.appendChild(message);
			okPop.appendChild(okBtnPopup);
			popUp.appendChild(okPop); 
			
	
};