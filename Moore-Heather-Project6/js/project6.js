$('document').ready(function(){
    loadImages();
	setInterval('rotateImages()', 4000);
});
 
function loadImages(){
    $('#photoShow img').css('opacity', 0);
    $('#photoShow img:first').css('opacity', 1);
    var firstWidth = $('#photoShow img:first').width();
    var firstHeight = $('#photoShow img:first').height();
    $('#photoShow').width(firstWidth + 'px');
    $('#photoShow').height(firstHeight + 'px');
}

function rotateImages(){
	var currentPhoto = $('#photoShow img.current');
	var nextPhoto = currentPhoto.next();
	if(nextPhoto.length == 0){
		nextPhoto = $('#photoShow img:first');
	} // end if
	currentPhoto.removeClass('current').addClass('previous').animate({opacity: 0});
    var nextWidth = nextPhoto.width();
    var nextHeight = nextPhoto.height();
    $('#photoShow').animate({
        width: nextWidth,
        height: nextHeight
    });
	nextPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0}, 2000, function(){
	currentPhoto.removeClass('previous');
	}); // end callback
} // end rotateImages
