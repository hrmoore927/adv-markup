$('document').ready(function(){
    /*
    $('#coloredBox').bind('mouseover', highlight);
    $('#coloredBox').bind('mouseout', highlight);
    $('#coloredBox').bind('click', function(){
        $(this).unbind('mouseover', highlight); 
        $(this).unbind('mouseout', highlight); 
        $(this).html('<strong>Turned off highlighting</strong>'); 
    });
    */
    
    $('#coloredBox').hover(highlight, highlight);
    
    $('#coloredBox a').click(function(theEvent){
        theEvent.preventDefault();
        alert('The link is now defunt');
    });
});

function highlight(){
    $(this).toggleClass('highlighted');
}