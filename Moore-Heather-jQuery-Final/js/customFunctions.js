function currentPage(highlightClass){
    var pathName = $(location).attr('href');
    var curPage = pathName.substring(pathName.lastIndexOf('/') + 1);
    $('#navbar a').each(function () {
        if ($(this).attr('href') == curPage) {
            $(this).addClass(highlightClass);
        } else if (curPage == '') {
            $('a:first').addClass(highlightClass);
        }
    });
}

function accordion(accordionFAQ){
    $(accordionFAQ).accordion({
        collapsable: true,
        active: false, // ask about this
        heightStyle: 'content'
    });
}

function tableStripe(oddRow, evenRow){
    $('tr:odd').addClass(oddRow);
    $('tr:even').addClass(evenRow);
//    $('tr').hover(highlight, highlight);
}

function links(){
    var arrSites = document.getElementsByTagName('a');
    for (var i=0; i < arrSites.length; i++) {
        var link = arrSites[i].getAttribute('href');
        var external = new RegExp('http');
        if(link.match(external)) {
        arrSites[i].setAttribute('target', '_blank'); 
        }
    }
    $('td').css('cursor', 'pointer');
    var clickLink = $('td a').attr('href');
    var year = $('td:first-of-type').text(); // come back to this
    $('td:first-of-type').append('<a href="' + clickLink + '"></a>');
}

function loadImages(galleryLinks){
	var galleryImages = [];
	var loadThese = $(galleryLinks);
	for(i=0; i<loadThese.length; i++){
		galleryImages[i] = new Image();
		galleryImages[i].src = loadThese[i];
		}
}

function displayFirst(galleryLinks, firstCaption, galleryName){
    var firstImagePath = $(galleryLinks).attr('href');
    var caption = $(firstCaption).attr('alt');
    var firstImage = $('<figure id="galleryBig"><img src="' + firstImagePath + '"><figcaption>' + caption + '</figcaption></figure>');
    $(galleryName).after(firstImage);
}

function gallery(galleryLinks){
	$(galleryLinks).click(function(evt){
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

