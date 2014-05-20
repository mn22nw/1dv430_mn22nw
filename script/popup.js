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
			
			var title = document.createElement("p");
			title.className = "folderTitle";
			
			var insidePopup = document.createElement('div');
			insidePopup.id= 'insidePopup';			
			
			var backBtn = document.createElement("a");
			backBtn.className = "backBtn";
			
			header.appendChild(add);
			header.appendChild(p);
			header.appendChild(i);
			header.appendChild(addButton);
			header.appendChild (errormheader);
			
			
			
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
			document.body.appendChild(mask); 
			document.body.appendChild(popup);
			
			var timer= setInterval(function(){
			contentfunction();}
			,300);
			
			clearInterval(timer);
			//$(".headerPopup").load(headercontent); 
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