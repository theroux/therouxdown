$(document).ready(function() {
	var $window = $(window);
	
	function adjustSocial () {

	    var offset = $window.scrollTop();
	    var windowwidth = $window.width();

	    if ((offset >= 953) && ( windowwidth > 980)) {
	    	$('#socialbar').css({
	    		'position':'fixed',
	    		'top':'0'
	    	});
	    	$('#masthead').css({
	    		'position':'fixed',
	    		'top':'135px'
	    	});
	    } else {
			$('#socialbar').css({
				'position':'relative'
			});
			$('#masthead').css({
				'position':'relative',
				'top': '0'
			});
	    }
	    
	   
	}
	$window.bind('scroll', function(){ 
		adjustSocial();
	});
	$window.bind('resize', function(){ 
		adjustSocial();
	});

	
});