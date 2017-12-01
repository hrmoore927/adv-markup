$('document').ready(function(){
    currentPage('currentLink');
    accordion('#fishfaq');
    tableStripe('rowA', 'rowB', 'rowOver');
    links();
    loadImages('#survivors a');
    displayFirst('#survivors a', '#survivors img:first', '#survivors');
    gallery('#survivors a'); // padding?
//    autoFocus('#fullname');
    autoClear('#fname', 'First');
    autoClear('#lname', 'Last');
    autoClear('#comments', 'Comments, questions, or interesting story about rubber ducks');
//    validateForm('form');
//    submitForm('form');
    calendar('#date');
    makeDraggable('.drag');
    makeDroppable('.drop', 'fish', 'aquarium', 'form', 'highlightFishTargets');
    sendData('fish');
    displayResults(searchURL, '#movies', '20');
});