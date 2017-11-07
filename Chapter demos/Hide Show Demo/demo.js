$('document').ready(function(){
    $('#h').click(demoHide);
    $('#s').click(demoShow);    
    $('#t').click(demoToggle);
    $('h1').mouseover(demoFancy);
});

function demoHide(){
    $('h1').hide();
}

function demoShow(){
    $('h1').show();
}

function demoToggle(){
    $('h1').toggle();
}

function demoFancy(){
    $('p:not(:first)').toggle();
}