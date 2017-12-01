$('document').ready(function(){
    currentPage('pageHighlight');
    accordion('#faqs');
    tableStripe('row-odd', 'row-even', 'row-hover');
    links();
    loadImages('#galleryThumbs a');
    displayFirst('#galleryThumbs a', '#galleryThumbs img:first', '#galleryThumbs');
    gallery('#galleryThumbs a');
//    autoFocus('#fullname');
    autoClear('#fullname', 'First Last');
    autoClear('#comments', 'Comments, questions, or interesting story about rubber ducks');
//    validateForm('form');
//    submitForm('form');
    calendar('#sightingdate');
    makeDraggable('.drag');
    makeDroppable('.drop', 'formDuck', 'formPond', 'form', 'dropHighlight');
    sendData('duck');
    displayResults(searchURL, '#contentMedia', '12');
});