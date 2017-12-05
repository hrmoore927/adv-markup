$('document').ready(function(){
accordion('h2');
});

function accordion(trigger){
	// hide all siblings of trigger
	// (all the DIVs following the H2)
	$(trigger).next().hide();
	
	// add the arrow spans
	$(trigger).each(function(){
		var arrow = '<span class="arrow arrow-up"></span>'
		$(this).append(arrow);
	});
	
	// make the triggers look like links (show hand)
	$(trigger).hover(function(){
		$(this).css('cursor','pointer');
	});

	// bind click to trigger
	$(trigger).click(function(){	
		// toggle the trigger's class="open"
		$(this).toggleClass('open');
		
		// find the .arrow class child of the trigger and toggle it between arrow-down and arrow-up
		var arrow = $(this).find('.arrow');
			if($(arrow).hasClass('arrow-up')){
				$(arrow).removeClass('arrow-up').addClass('arrow-down');
			} else {
				$(arrow).removeClass('arrow-down').addClass('arrow-up');
			}
		
		// find the panel (the DIV after the trigger)
		var panel = $(this).next();
		// toggle the panel
		panel.slideToggle();
	});
}

