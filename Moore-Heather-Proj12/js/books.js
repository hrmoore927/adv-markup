$('document').ready(function(){
    sendData();
})

function sendData(){
    $('#bestsellers').submit(function(e){
        e.preventDefault();
        var formData = $('#bestsellers').serialize();
        formData = encodeURI(formData);
        var api = 'e10977d8e31b4ecd8643cb640554d548';
        var searchURL = 'https://api.nytimes.com/svc/books/v3/lists.json';
        searchURL += '?api-key=' + api;
        searchURL += '&' + formData;
        $.getJSON(searchURL, displayResults);
    }); // end anon fcn
} // end send function

function displayResults(data){
    // remove previous heading
    $('#resultsHeading').remove();
    // remove previous list
    $('#resultsList').remove();
    // add heading after bestsellers form
    $('#bestsellers').after('<h2 id="resultsHeading"></h2>');
    // add list after heading
    $('#resultsHeading').after('<ol id="resultsList"></ol>');
    // variable to refer to results array collected from data
    var results = data.results;
    // loop through results, extract index and value
    $.each(results, function(resultsIndex, resultsValue){
        // variable for name of book list
        var bookList = resultsValue.display_name;
        // variable for heading
        var heading = 'Bestselling ' + bookList + ' books';
        // add book list heading text to resultsHeading
        $('#resultsHeading').text(heading);
        // variable for book details
        var details = resultsValue.book_details;
        // loop through details, extract index and value
        $.each(details, function(detailsIndex, detailsValue){
            var title = detailsValue.title;
            var author = detailsValue.author;
            var description = detailsValue.description;
            var detailString = title + ' by ' + author;
            detailString += '<br>' + description;
            detailString += '<br><a href="' + resultsValue.amazon_product_url + '" target="_blank">' + resultsValue.amazon_product_url + '</a>';
            var li = '<li>' + detailString + '</li>';
            // append li to resultsList
            $('#resultsList').append(li);
        }); // end INNER anon fcn
    }); // end anon fcn
} // end display function