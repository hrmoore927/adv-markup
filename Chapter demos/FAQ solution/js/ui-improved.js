/*
Improved version:
1] Anonymous functions are externalized into discrete functions
2] Tweaks trigger CSS so that:
	trigger color change and arrow swap happens immediately on panel open,
	but is delayed on panel close until panel is actually finished closing
*/

$(document).ready(function(){
	accordion('h2');
});

function accordion(trigger){
	$(trigger).next().hide();
	$(trigger).each(defaultArrows);
	$(trigger).hover(formatPanels);
	$(trigger).click(slidePanels);
}

function defaultArrows(){
	var arrow = '<span class="arrow arrow-up"></span>';
	$(this).append(arrow);
}

function formatPanels(){
	$(this).css('cursor','pointer');
}

function slidePanels(){
	var panel = $(this).next();
	
	if($(this).hasClass('open')){
		panel.slideToggle(function(){
			$(this).prev().removeClass('open');
			var arrow = $(this).prev().find('.arrow');
			$(arrow).removeClass('arrow-down').addClass('arrow-up');
			});
	} else {
		$(this).addClass('open');
		panel.slideToggle();
		var arrow = $(this).find('.arrow');
		$(arrow).removeClass('arrow-up').addClass('arrow-down');
	}
}