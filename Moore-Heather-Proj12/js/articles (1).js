$('document').ready(function(){
	searchArticles();
	jquerydate('#begin_date, #end_date'); // call this as an external function as we need to reinitialize it after the AJAX call
});

function jquerydate(theDates){
	$(theDates).datepicker({
        minDate: new Date(1851, 8, 18), // Sept 18, 1851 is the earliest date supported by the API. Must specify month #8 though to accommodate for jQuery's datepicker date format
		maxDate: 0,
		changeMonth: true,
		changeYear: true,
		yearRange: "1851:2017",
		dateFormat: "yymmdd"
	});	
}

function searchArticles(){
	$('form').submit(function(e){
		e.preventDefault();
		$('blockquote').remove();
		// make the URL a global variable so we can use the parameters in other functions
		globalUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=';
		globalUrl += '035c9b1220884647bceb2bd17c9c8416&';
		var formData = $('form').serialize();
		globalUrl += formData;
		// tag on the page parameter for later pagination. Ensures it is the last parameter so we easily find it later with lastIndexOf('=')
		globalUrl += '&page=0';
		$('div').remove();
		//Display the URL at the top of the page for troubleshooting:
		//$('form').before('<blockquote>' + globalUrl + '</blockquote>');
		
		// Send the URL to the server
		$.getJSON(globalUrl, displayResults);
	});
}
	
function displayResults(data){
	// All these tasks could have been modularized into separate functions. I have kept them here all as a single function to more clearly demonstrate the linear sequencing of logic/events.
	
	
	// reinitialize the jQuery date picker so it works after the AJAX call
	jquerydate('#begin_date, #end_date');

	// clean up any old elements so they don't repeat when added later
	// remove any existing heading, pagination, and results under the form
	$('#resultsHeadingContainer').remove();
	$('#results').remove();
	
	// plan ahead and grab information from server results
	// grab the total results from JSON
	var numResults = data.response.meta.hits;
	// how many items are displayed per page. The API defines 10, but if we are on the last page we might not actually get 10, so we need to check the JSON data.
	var numThisPage = data.response.docs.length;
	// grab the array that contains the article info to use later
	var docs = data.response.docs;
	
	// get all the query string parameters from the URL we built in the other function (using the global variable)
	var urlParams = new URLSearchParams(globalUrl);
	var beginDate = urlParams.get('begin_date');
	var endDate = urlParams.get('end_date');
	var terms = urlParams.get('q');
	// gets the current page of the results
	// 0 = items 1-10, 1 = items 11-20, 2 = items 21-30, etc
	var page = urlParams.get('page');
	
	// call external function to format the dates to user-friendly
	var formattedBeginDate = formatDate(beginDate);
	var formattedEndDate = formatDate(endDate);

	// HEADING *********************************************************************************
	// build the text heading to use for our results
	var header = 'Your search for "';
	header += terms;
	header += '" from ';
	header += formattedBeginDate;
	header += ' to ';
	header += formattedEndDate;
	header += ' returned ';
	
	// we grabbed the total number of results earlier; include it in our header
	header += numResults;
	header += ' articles';

	// create new heading HTML
	var resultsHeadingContainer = '<div id="resultsHeadingContainer"></div>';
	var newHeading = '<h2 id="resultsHeading">' + header + '</h2>';
	
	// add the new heading after the form
	$('form').after(resultsHeadingContainer);
	$('#resultsHeadingContainer').append(newHeading);
	
	// If there were 0 results, end here!
	if(numResults==0){
		return false;
	}
	
	// PAGINATION *******************************************************************************
	// use this to get some information about the page I am on, how many results there are, and how many more results there are on subsequent pages. This helps figure out what math you need to do later.
	//alert('numResults: ' + numResults + '\n' + 'page: ' + page + '\n' + 'numThisPage: ' + numThisPage + '\n'));
	// get pagination information
	// 'page' is URL parameter. Do some math to get starting 'viewing' number
	var viewingFrom = (page*10)+1;
	// math to get ending 'viewing' number
	var viewingTo = viewingFrom+numThisPage-1;
	// build HTML for viewing information
	var viewing = '<h3 id="viewing">Viewing ' + viewingFrom + ' to ' + viewingTo + ' of ' + numResults + '</h3>';
	// add it to the page after the heading
	$('#resultsHeadingContainer').append(viewing);

	// create container for pagination "links"
	var nav = '<div id="nav"></div>';
	var prevLink = $('<span id="prev" class="fakelink">&laquo; Prev</span>');
	var nextLink = $('<span id="next" class="fakelink">Next &raquo;</span>');
	
	// determine the next and previous page numbers
	// simply increment (next) or decrement (prev) by 1
	var nextPageNumber = parseInt(page)+1;
	if(page>0){
		var prevPageNumber = parseInt(page)-1;
		} else {
		var prevPageNumber = 0;
	}	
	
	// add the nav container to the page, then add each pagination link
	// must add them to the page so we can access them as part of the DOM
	// note that they do not actually work yet. That comes later.
	$('#resultsHeadingContainer').append(nav);
	$('#nav').prepend(prevLink);
	$('#nav').append(nextLink);
	
	// make pagination links work
	// modify the globalUrl variable to replace the 'page' parameter's value with the next/previous page numbers
	// call this same function and pass it the new globalUrl to get the next/prev page of JSON data
	nextLink.click(function(){
		globalUrl = globalUrl.substr(0,globalUrl.lastIndexOf('=')+1) + nextPageNumber;
		$.getJSON(globalUrl, displayResults);	
	});
	
	prevLink.click(function(){
		globalUrl = globalUrl.substr(0,globalUrl.lastIndexOf('=')+1) + prevPageNumber;
		$.getJSON(globalUrl, displayResults);	
	});

	// this is the first page, so disable the Previous link
	if(page == 0){
		$('#prev').removeClass().addClass('fakelink fakelink-disabled');
		prevLink.unbind('click');
	}

	// this is the last page, so disable the Next link
	if(page*10 + numThisPage == numResults){
		$('#next').removeClass().addClass('fakelink fakelink-disabled');
		nextLink.unbind('click');
	}	
	
	// RESULTS *********************************************************************
	// Add OL to page to contain results
	// Remember we defined the viewingFrom variable earlier. We can use this again to display the correct OL numbers.
	var ol = '<ol id="results" start="' + viewingFrom + '"></ol>';
	$('#resultsHeadingContainer').after(ol);
	
	// We grabbed docs at the beginning of the function. Mow we finally get to loop through these results.
	$.each(docs, function(resultsIndex, resultsProperty){
		// get the publish date
		var pubdate = new Date(resultsProperty.pub_date);
		// Create a month name array for later
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		// Get the current month (numerical from JSON) and match it with a named month
		var month = monthNames[pubdate.getMonth()];
		// Extract the day
		var day = pubdate.getDate();
		// Extract the year
		var year = pubdate.getFullYear();
		// build the formatted date
		var formattedDate = month + ' ' + day + ', ' + year;
		// Get the article's headline, snippet, and URL
		var headline = resultsProperty.headline.main;
		var snippet = resultsProperty.snippet;
		var url = resultsProperty.web_url;
		// Create an LI to display all this information
		var li = '<li><strong>' + headline + ' (' + formattedDate + ')</strong><p>' + snippet + '<br><a href="' + url + '" target="_blank">full article...</a></p></li>';
		// Add the LI to the OL
		$('#results').append(li);
	});	
}

function formatDate(thePassedDate){
	// as passed date is not ISO format, extract just the digits for each part
	// get the first 4 characters - year
	var parsedYear = thePassedDate.substr(0,4);
	// get characters 5 and 6 - month, then subtract one to adjust for array numbering later
	var parsedMonth = thePassedDate.substr(4,2)-1;
	// get characters 7 and 8 - day
	var parsedDay = thePassedDate.substr(6,2);
	// create a date object using the extracted parts
	var formatThisDate = new Date(parsedYear, parsedMonth, parsedDay);
	// create new array with month names
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	// match the numbered month to a named month (this is why we needed to subtract 1 from the month number before)
	var month = monthNames[formatThisDate.getMonth()];
	// build human readable string
	var formattedDate = month + ' ' + parsedDay + ', ' + parsedYear;
	// return the string to the original function that called this
	return formattedDate;
}