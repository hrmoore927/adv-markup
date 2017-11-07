$('document').ready(function(){
	initializeImages();
	setInterval('rotateImages()', 4000);
});
 
 function initializeImages(){
	// hide all images on page load
	$('#photoShow img').css('opacity',0);
	
	// show only the first image on page load
	$('#photoShow img:first').css('opacity',1);
	
	// get the dimensions of the 1st image
	var firstImageWidth = $('#photoShow img:first').width();
	var firstImageHeight = $('#photoShow img:first').height();
	
	// set the DIV dimension to match the first image's
	$('#photoShow').width(firstImageWidth + 'px');
	$('#photoShow').height(firstImageHeight + 'px');
	
 } // end initializeImages
 
function rotateImages(){
	var currentPhoto = $('#photoShow img.current');
	var nextPhoto = currentPhoto.next();
	if(nextPhoto.length == 0){
		nextPhoto = $('#photoShow img:first');
	} // end if
	currentPhoto.removeClass('current').addClass('previous').animate({opacity:0});
	
	// get the dimensions of the new (next) image
	var newWidth = nextPhoto.width();
	var newHeight = nextPhoto.height();
	// animate the dimensions of the container
	$('#photoShow').animate({'width':newWidth, 'height':newHeight});
	
	nextPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0}, 2000, function(){
	currentPhoto.removeClass('previous');
	}); // end callback

} // end rotateImages
