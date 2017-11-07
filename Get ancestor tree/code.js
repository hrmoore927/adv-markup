$(document).ready(function(){
	markCurrent();
});


function markCurrent(){
	$('#mainNav a').click(function(){
		$('a').removeClass('current');
		$(this).addClass('current');
		getUpperLevelAnchor($(this));
	});
}

function getUpperLevelAnchor(currentLink){
	var ancestorLink = currentLink.parent('li').parent('ul').parent('li').children('a');

	if(ancestorLink.length > 0){
		ancestorLink.addClass('current');
		getUpperLevelAnchor(ancestorLink);
	}
}