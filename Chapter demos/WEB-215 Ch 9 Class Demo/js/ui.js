$('document').ready(function(){
    accordion();
});

function accordion(){
    // hide all siblings of trigger, h2 is trigger
    $('h2').next().hide();
    var arrow = '<span class="arrow-up"></span>';
    $('h2').append(arrow);
    $('h2').hover(function(){
        $(this).css('cursor', 'pointer');
    }); // end hover anon fcn
    
    // bind click to trigger
    $('h2').click(function(){
        // variable for this item's next sibling
        var panel = $(this).next();
        // toggle hide and show for panel
        panel.slideToggle();
        // toggle class to apply new css when open
        $(this).toggleClass('open');
        var arrow = $(this).find('span');
        if($(arrow).hasClass('arrow-up')){
            $(arrow).removeClass('arrow-up').addClass('arrow-down');
           } else {
               $(arrow).removeClass('arrow-down').addClass('arrow-up');
           }
    }); // end click anon fcn
}