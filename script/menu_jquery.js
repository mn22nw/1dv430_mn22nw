$( document ).ready(function() {  //http://cssmenumaker.com/builder/1939102
	
	$('#options').prepend('<div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>');
	    var activeElement = document.querySelector("#options ul li"); //$('#options>ul:first');  //:first
	    
	    console.log("boop");
	    $('#options>ul>li').each(function() {
	        if ($(this).hasClass('active')) {
	            activeElement = $(this);
	        }
	    });
	
		var posLeft = activeElement.position().left;
		var elementWidth = activeElement.width();
		posLeft = posLeft + elementWidth/2 -6;
		if (activeElement.hasClass('has-sub')) {
			posLeft -= 6;
		}
	
		$('#options #pIndicator').css('left', posLeft);
		var element, leftPos, indicator = $('#options pIndicator');
		
		$("#options>ul>li").hover(function() {
	        element = $(this);
	        var w = element.width();
	        if ($(this).hasClass('has-sub'))
	        {
	        	leftPos = element.position().left + w/2 - 12;
	        }
	        else {
	        	leftPos = element.position().left + w/2 - 6;
	        }
	
	        $('#options #pIndicator').css('left', leftPos);
	    }
	    , function() {
	    	$('#options #pIndicator').css('left', posLeft);
	    });
	
	
		$('#options>ul>.has-sub>ul').append('<div class="submenuArrow"></div>');
		$('#options>ul').children('.has-sub').each(function() {
			var posLeftArrow = $(this).width();
			posLeftArrow /= 2;
			posLeftArrow -= 12;
			$(this).find('.submenuArrow').css('left', posLeftArrow);
	
		});
	
		$('#options>ul').prepend('<li id="menu-button"><a>Menu</a></li>');
		$( "#menu-button" ).click(function(){
	    		if ($(this).parent().hasClass('open')) {
	    			$(this).parent().removeClass('open');
	    		}
	    		else {
	    			$(this).parent().addClass('open');
	    		}
	    	});
});