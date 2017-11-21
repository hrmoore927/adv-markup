$('document').ready(function(){
    datepicker();
    sendData();
});

function datepicker(){
    $('#begin_date_display').datepicker({
        minDate: new Date(1851, 8, 18),
        maxDate: 0,
        changeMonth: true,
        changeYear: true,
        yearRange: "1851:2017",
        altField: '#begin_date',
        altFormat: 'yymmdd',
        changeMonth: true,
        changeYear: true
    });
    $('#end_date_display').datepicker({
        minDate: new Date(1851, 8, 18),
        maxDate: 0,
        changeMonth: true,
        changeYear: true,
        yearRange: "1851:2017",
        altField: '#end_date',
        altFormat: 'yymmdd',
        changeMonth: true,
        changeYear: true
    });
}

function sendData(){
    $('#articles').submit(function(e){
        e.preventDefault();
        var formData = $('#articles').serialize();
        formData = encodeURI(formData);
        var api = 'e10977d8e31b4ecd8643cb640554d548';
        var page = 0;
        searchURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        searchURL += '?api-key=' + api;
        searchURL += '&' + formData;
        $.getJSON(searchURL, displayResults);
    }); // end anon fcn
} // end send function

function displayResults(data){
    $('#resultsHeading').remove();
    $('#resultsList').remove();
    $('#articles').after('<h2 id="resultsHeading"></h2>');
    $('#resultsHeading').after('<div id="page"></div>');
    $('#page').after('<ol id="resultsList"></ol>');
    var searchTerms = $('#q').val();
    var beginDate = $('#begin_date_display').val();
    var endDate = $('#end_date_display').val();
    var docs = data.response.docs;
    var hits = data.response.meta.hits; // ask about this
    var searchHeading = 'Your results for ' + searchTerms + ' between ' + beginDate + ' and ' + endDate + ' returned ' + hits + ' articles.';
    $('#resultsHeading').append(searchHeading);
    $.each(docs, function(docsIndex, docsValue){
        var url = docsValue.web_url;
        var snippet = docsValue.snippet;
        var headline = docsValue.headline.main;
        var pubDate = docsValue.pub_date.slice(0,10);
        var date = new Date('"' + pubDate + '"');
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var publishDate = month + '/' + day + '/' + year;
        var articleDetails = '<h3>' + headline + ' ' + publishDate + '</h3>';
        articleDetails += snippet;
        articleDetails += '<br><a href="' + url + '" target="_blank">full article...</a>';
        li = '<li>' + articleDetails + '</li>';
        $('#resultsList').append(li);
    }); // end response anon fcn
    $('#page').bootpag({
        total: hits / 10,
        page: 1,
        maxVisible: 10
    }).on('page', function(event, num){
        searchURL += 'page=' + num;
        $('#resultsList').remove();
        $('#page').after('<ol id="resultsList"></ol>');
        $('#resultsList').append(li);
    });
} // end display function