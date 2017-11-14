$('document').ready(function(){
    $('a').click(function(e){
        // prevent loading the page
        e.preventDefault();
        // select the link's href
        var page = $(this).attr('href');
        // select the ajaxContent container and load the selected page into that
        $('#ajaxContent').load(page + ' #main');
    })
})