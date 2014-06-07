$( document ).ready(function() {  //http://cssmenumaker.com/builder/1939102
	
	$('#options').prepend('<div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>');
	    var activeElement = document.querySelector("#options ul li"); //$('#options>ul:first');  //:first
	    
	    $('#options>ul>li').each(function() {
	        if ($(this).hasClass('active')) {
	            activeElement = $(this);
	        }
	    });
	
		var element = $('#options pIndicator');
		
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
	    );

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