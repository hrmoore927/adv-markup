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
    var link = $('a').attr('href');
    var external = new RegExp('http');
    if(link.match(external)) {
        $('a').attr('target', '_blank'); 
    }
}