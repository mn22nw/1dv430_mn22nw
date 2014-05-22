 $(document).ready(function(){
 	
		$(function() {
			$("#load_folders")
			.find("span")
			.hide()
			.end()
			.hover(function() {
				$(this).find("span").stop(true, true).fadeIn();
			}, function() {
				$(this).find("span").stop(true, true).fadeOut();
			});
		});
		
		/*
		 $(function() {
		    var title = $('.folderTitle');
		    console.log(title);
		    var fontSize = parseInt(title.css('font-size'));
		    
		    do {
		        fontSize--;
		        title.css('font-size', fontSize.toString() + 'px');
		    } while (title.width() >= 90);
		});
		 */
});

