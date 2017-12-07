$('document').ready(function(){
    currentPage('pageHighlight');
    accordion('#faqs');
    tableStripe('row-odd', 'row-even', 'row-hover');
    links();
    loadImages('#galleryThumbs a');
    displayFirst('#galleryThumbs a', '#galleryThumbs img:first', '#galleryThumbs');
    gallery('#galleryThumbs a');
    autoClear('#fullname', 'First Last');
    autoClear('#comments', 'Comments, questions, or interesting story about rubber ducks');
    validateForm('form', 'input', 'value');
    calendar('#sightingdate');
    makeDraggable('.drag');
    makeDroppable('.drop', 'formDuck', 'formPond', 'form', 'dropHighlight');
    sendData('duck');
    displayResults(searchURL, '.media', '12');
});