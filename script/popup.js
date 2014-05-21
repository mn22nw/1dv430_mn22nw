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

			var title = document.createElement("p");
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
						// CHANCE HEADERCONTENT OF POPUP HERE //
						AjaxCon.PopupHeaderAddFolder(url);
						
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
			
			var timer= setInterval(function(){
			contentfunction();}
			,300);
			
			clearInterval(timer);
			
			// CHANCE HEADERCONTENT OF POPUP HERE //
			AjaxCon.PopupHeaderAddFolder(url);
	}};



/*
//PopUpImages ärver från PopUpFoundation
PopUpImages.prototype = new PopUpFoundation();

//lägg till nya funktioner på PopUp prototype
PopUpImages.prototype.ajaxCall = function(){
		AjaxTester.init();
}; */

//Med denna kan jag skapa flera fönster ju (som en mall)och den ärver från popup foundation //
PopUpFolders.prototype = new PopUpFoundation();

function PopUpFolders () {   
	PopUpFoundation.call();
};


//lägg till nya funktioner på PopUp prototype
PopUpFolders.prototype.somethingsomething = function(){
			//någon mer egenskap kanske om det behövs?
};