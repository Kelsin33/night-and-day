$(document).ready(function() {
	// this code will run after the page loads
		$('#orb').click(function(){
			// once orb is clicked, runs if/else statement
			// which looks first to see if the orb has the .sun class    
        		if ($(this).hasClass('sun')) {
           	 $(this).removeClass('sun').addClass('moon');
		        }
		        else {
		            $(this).removeClass('moon').addClass('sun');
		        }
			
				if ($('#sky').hasClass('day')) {
				    $('#sky').removeClass('day').addClass('night');
				}
				else {
				    $('#sky').removeClass('night').addClass('day');
				}
									// Same for #sky div

				// instead of toggling between two classes
				// add or remove "visible" class to multiple objects
			if ($('#moonspot1').hasClass('visible')){
				$('#moonspot1').removeClass('visible');
				}
				else {
					$('#moonspot1').addClass('visible');
				}

			if ($('#moonspot2').hasClass('visible')){
				$('#moonspot2').removeClass('visible');
			}
				else{
					$('#moonspot2').addClass('visible')
				}

			if($('#moonspot3').hasClass('visible')){
				$('#moonspot3').removeClass('visible');
			}	
				else{
					$('#moonspot3').addClass('visible');
				}
		});  // end of #orb click handler
}); // end of document ready handler