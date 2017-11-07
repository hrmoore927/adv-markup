$('document').ready(function(){
	loadImages();
	displayFirst();
	gallery();
});
 
function loadImages(){
	var galleryImages = [];
	var loadThese = $('#thumbs a');
	for(i=0; i<loadThese.length; i++){
		galleryImages[i] = new Image();
		galleryImages[i].src = loadThese[i];
		}
} // end loadImages

function displayFirst(){
    var firstImagePath = $('#thumbs a').attr('href');
    var caption = $('#thumbs img:first').attr('alt');
    var firstImage = $('<figure id="galleryBig"><img src="' + firstImagePath + '"><figcaption>' + caption + '</figcaption></figure>');
    $('#thumbs').after(firstImage);
}

function gallery(){
	$('#gallery a').click(function(evt){
		evt.preventDefault();
		oldImage = $('#galleryBig').children(':first');
		var imgPath = $(this).attr('href');
        var nextCaption = $(this).children('img').attr('alt');
		var newImage = $('<img src="' + imgPath + '">');
        var figCap = $('figcaption').text(nextCaption);
		newImage.hide();
        figCap.hide();
		$('#galleryBig').prepend(newImage);
		newImage.fadeIn();
        figCap.fadeIn();
		oldImage.remove();
	}); //end anonymous fcn
	
} //end gallery