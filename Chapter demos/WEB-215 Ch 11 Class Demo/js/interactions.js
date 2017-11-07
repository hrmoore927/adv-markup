$('document').ready(function(){
    makeDraggable('#timeline-singers figure');
    makeDroppable('#timeline div', '#timeline-singers figure');
    makeSortable('#singers-sorted');
});

function makeDraggable(draggableItems){
    $(draggableItems).draggable({
        cursor: 'move',
        zIndex: 100,
        opacity: .75,
        cancel: 'figcaption'
    }); // end draggable options
} // end function

function makeDroppable(dropZones, acceptThese){
    $(dropZones).droppable({
        activeClass: 'dropZone',
        hoverClass: 'dropHover',
        tolerance: 'fit',
        accept: acceptThese,
        drop: function(event, ui){
            // $(this) = the droppable element
            // ui.helper = the item you dragged and just dropped
            var dropClass = $(this).attr('class');
            var dragId = ui.helper.attr('id');
            // find if the dragId exists in the dropClass
            var areWeCorrect = dropClass.indexOf(dragId);
            // if areWeCorrect does exist
            if (areWeCorrect != -1) {
                $(this).css('background-color', '#0f0');
                $(this).droppable({disabled: true});
                ui.helper.draggable({disabled: true});
            } else {
                $(this).css('background-color', '#f00');
            } // end if-else
        } // end drop anon fcn
    }); // end droppable options
} // end function

function makeSortable(sortThese){
    $(sortThese).sortable({
        cursor: 'move',
        placeholder: 'singer-placeholder',
        start: function(event, ui){
            $('#result').text('Result: ...waiting...');
        }, //end start fcn
        stop: function(event, ui){
            var sortedSingers = $(sortThese).sortable('toArray');
            if (sortedSingers[0] == 'david' && sortedSingers[1] == 'sammy'){
                $('#result').text('Result: Correct!');
            } else {
                $('#result').text('Result: Wrong!');
            }
        } // end stop fcn
    }); // end sortable options
}