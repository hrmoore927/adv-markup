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

function tableStripe(oddRow, evenRow, rowHover){
    $('tr:odd').addClass(oddRow);
    $('tr:even').addClass(evenRow);
    $('tr').hover(function(){
        $(this).addClass(rowHover);
    },
    function(){
        $(this).removeClass(rowHover);
    }); // fix the first row
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
    var caption = $(firstCaption).attr('title'); // ask about title
    var firstImage = $('<figure id="galleryBig"><img src="' + firstImagePath + '"><figcaption>' + caption + '</figcaption></figure>');
    $(galleryName).after(firstImage);
}

function gallery(galleryLinks){
	$(galleryLinks).click(function(evt){
		evt.preventDefault();
		oldImage = $('#galleryBig').children(':first');
		var imgPath = $(this).attr('href');
        var nextCaption = $(this).children('img').attr('title');
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

function autoFocus(fieldToFocus) {
    $(fieldToFocus).focus();
}

function autoClear(fieldToClear, defaultString) {
    $(fieldToClear).val(defaultString);
    $(fieldToClear).focus(function () {
        if ($(this).val() == defaultString) {
            $(this).val('');
        }
    });
    $(fieldToClear).blur(function () {
        if ($(this).val() == '') {
            $(this).val(defaultString);
        }
    });
}

//function validateForm(formName) {
//    $(formName).validate({
//        rules: {
//            fullname: 'required',
//            emailaddy: {
//                required: true,
//                email: true
//            },
//            sightingdate: 'required'
//        }
//    });
//}

//function submitForm(formName) {
//    $(':submit').click(function (e) {
//        if ($(formName).valid() == false) {
//            e.preventDefault();
//        }
//    });
//}

function calendar(date){
    $(date).datepicker({
       maxDate: 0
    });
}

function makeDraggable(draggableItems){
    $(draggableItems).draggable({
        cursor: 'move',
        zIndex: 100,
        opacity: .75,
        revert: true
    }); // end draggable options
} // end function

function makeDroppable(dropZones, correctDrag, correctDrop, formName, dropClass){
    $(dropZones).droppable({
        hoverClass: dropClass,
        tolerance: 'intersect',
        drop: function(event, ui){
            // $(this) = the droppable element
            // ui.helper = the item you dragged and just dropped
            var dropId = $(this).attr('id');
            var dragId = ui.helper.attr('id');
            if (dropId == correctDrop && dragId == correctDrag) {
                $(this).css('background-color', '#0f0');
                $(this).droppable({disabled: true});
                ui.helper.draggable({disabled: true});
                
            } else {
                $(this).css('background-color', '#f00');
            } // end if-else
        } // end drop anon fcn
    }); // end droppable options
} // end function

// Come back to the submit

function sendData(searchTerm){
    var api = 'e10977d8e31b4ecd8643cb640554d548';
    searchURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
    searchURL += '?api-key=' + api;
    searchURL += '&query=' + searchTerm;
    $.getJSON(searchURL, displayResults);
}

function displayResults(data, divContainer, numResults){
    $(divContainer).append('<p>Number of Results: ' + numResults + ' reviews');
    $(divContainer).append('<ol id="resultsList"></ol>');
    var results = data.results;
    $.each(results, function(resultsIndex, resultsValue){
        var title = resultsValue.display_title;
        var rating = resultsValue.mpaa_rating;
        var summary = resultsValue.summary_short;
        var date = resultsValue.opening_date;
        var url = resultsValue.link.url;
        var detailString = title;
        detailString += '<br>Rating: ' + rating;
        detailString += '<br>Opening Date: ' + date;
        detailString += '<br>' + summary;
        detailString += '<br><a href="' + url + '" target="_blank">Full review</a>';
        var li = '<li>' + detailString + '</li>';
        $('#resultsList').append(li);
    });
};