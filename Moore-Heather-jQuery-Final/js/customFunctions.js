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
        collapsible: true, 
        heightStyle: 'content',
        active: false
    });
}

function tableStripe(oddRow, evenRow, rowHover){
    $('tr:odd').addClass(oddRow);
    $('tr:even').addClass(evenRow);
    $('tr').not(':first').hover(function(){
        $(this).addClass(rowHover);
    },
    function(){
        $(this).removeClass(rowHover);
    }); 
}

function links(){
    var arrSites = document.getElementsByTagName('a');
    for (var i=0; i < arrSites.length; i++) {
        var link = arrSites[i].getAttribute('href');
        var external = new RegExp('http');
        if(link.match(external)) {
            arrSites[i].setAttribute('target', '_blank');
            $('tr').click(function() {
                var clickLink = $(this).find('a').attr('href');
                window.open(clickLink);
            });
        }
    }
    $('td').css('cursor', 'pointer');
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
    var caption = $(galleryLinks).attr('title');
    var firstImage = $('<figure id="galleryBig"><img src="' + firstImagePath + '"><figcaption>' + caption + '</figcaption></figure>');
    $(galleryName).after(firstImage);
}

function gallery(galleryLinks){
	$(galleryLinks).click(function(evt){
		evt.preventDefault();
		oldImage = $('#galleryBig').children(':first');
		var imgPath = $(this).attr('href');
        var nextCaption = $(this).attr('title');
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

function autoClear(fieldToClear, defaultString, formName) {
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

function validateForm(formName, element, value){
    jQuery.validator.addMethod('notEqual', function(value, element, param) {
        return this.optional(element) || value != param;
    }, 'Please enter a valid name.');
    $(formName).validate({
        rules: {
            required: {
                required: true
            },
            fullname: {
                required: true,
                notEqual: 'First Last'
            },
            fname: {
                required: true,
                notEqual: 'First'
            },
            lname: {
                required: true,
                notEqual: 'Last'
            },
            emailaddy: {
                email: true
            },
            email: {
                email: true
            }
        }
    });
}

function calendar(date){
    $(date).datepicker({
        maxDate: 0,
        changeMonth: true,
        changeYear: true
    });
}

function makeDraggable(draggableItems){
    $(draggableItems).draggable({
        cursor: 'move',
        zIndex: 100,
        opacity: .90,
        revert: true
    }); 
} 

function makeDroppable(dropZones, correctDrag, correctDrop, formName, dropClass){
    $(dropZones).droppable({
        hoverClass: dropClass,
        tolerance: 'intersect',
        drop: function(event, ui){
            var dropId = $(this).attr('id');
            var dragId = ui.helper.attr('id');
            if ($(formName).valid() == true) {
                if (dropId == correctDrop && dragId == correctDrag) {
                    $(this).css('background-color', '#0f0');
                    $(this).droppable({disabled: true});
                    ui.helper.draggable({disabled: true});
                    $(formName).submit();
                } else {
                $(this).css('background-color', '#f00');
                } // end if-else
            } // end form valid
        } // end drop anon fcn
    }); // end droppable options
} // end function

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
        if (rating != 'Null' && rating != ''){
            detailString += '<br>Rating: ' + rating;
        }
        if (date != 'null' && date != '0000-00-00' && date != '' && date != 'Null'){
            detailString += '<br>Opening Date: ' + date;
        }
        if (summary != 'null' && summary != ''){
            detailString += '<br>' + summary;
        }
        detailString += '<br><a href="' + url + '" target="_blank">Full review</a>';
        var li = '<li>' + detailString + '</li>';
        $('#resultsList').append(li);
    });
};