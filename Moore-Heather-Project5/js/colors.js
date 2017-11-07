$('document').ready(function(){
    $('p:not(:first)').hide();
    $('#choices a').click(function(event){
        event.preventDefault();
        var linkID = $(this).attr('href');
        var color = $(this).text();
        $('p').hide();
        $(linkID).show();
        $('img').attr('src', 'images/'+color+'.jpg').attr('title', 'sample of '+color);
        $('body').removeClass().addClass(color);
        $(this).addClass('selectedColor');
        $('a').not(this).removeClass('selectedColor');
    });
});