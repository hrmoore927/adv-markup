$('document').ready(function(){
    $('#theList tr:odd').addClass('rowOdd');
    $('#theList tr:even').addClass('rowEven');
    $('#theList tr').hover(highlight, highlight);
    $('#theList tr').click(selected);
    $('#theList a').click(stopLink);
    $('#theList td:odd').prepend('$');
});

function highlight(){
    $(this).toggleClass('highlighted');
}

function selected(){
        $(this).toggleClass('disabled');
}

function stopLink(event){
        event.preventDefault();
        var x = $(this).text();
        alert('You clicked the ' + x + ' link');
}