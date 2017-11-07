$('document').ready(function(){
    setInterval('rotateImages()', 3000);
});

function rotateImages(){
    var currentImage = $('img.current');
    var nextImage = currentImage.next();
    if(nextImage.length == 0){
        nextImage = $('#photoShow img:first');
    }
    
    currentImage.removeClass('current').addClass('previous');
    nextImage.css('opacity', 0).addClass('current').animate({'opacity': 1}, 1000, function(){
        currentImage.removeClass('previous');
    });
    
}