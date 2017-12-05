$('document').ready(function(){
    currentPage('currentLink');
    accordion('#fishfaq');
    tableStripe('rowA', 'rowB', 'rowOver');
    links();
    loadImages('#survivors a');
    displayFirst('#survivors a', '#survivors img:first', '#survivors');
    gallery('#survivors a');
    autoClear('#fname', 'First', 'form');
    autoClear('#lname', 'Last');
    autoClear('#comments', 'Comments, questions, or interesting story about rubber ducks');
    validateForm('form', 'input', 'value', 'First');
    validateForm('form', 'input', 'value', 'Last');
    calendar('#date');
    makeDraggable('.drag');
    makeDroppable('.drop', 'fish', 'aquarium', 'form', 'highlightFishTargets');
    sendData('fish');
    displayResults(searchURL, '#movies', '20');
});