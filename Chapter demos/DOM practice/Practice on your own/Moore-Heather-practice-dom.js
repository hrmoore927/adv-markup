var masthead = document.getElementById('masthead');
var mainNav = document.getElementById('mainNav');
var msg1 = masthead + " has an id of 'masthead' and " + mainNav + " has an id of 'mainNav'";
//alert(msg1);

var allTags = document.getElementsByTagName('*');
var links = document.getElementsByTagName('a');
var msg2 = "There are " + allTags.length + " tags in the document. " + links.length + " are anchors.";
//alert(msg2);

var pageHead = document.getElementById('pageHead');
var pageHeadClass = pageHead.getAttribute('class');
var msg3 = "The pageHead class is '" + pageHeadClass + "'.";
//alert(msg3);

var br = '\n';
var msg4 = msg1 + br + msg2 + br + msg3;
//alert(msg4);

var arrLinks = document.getElementsByTagName('a');
for(var i=0; i < arrLinks.length; i++) {
    var site = arrLinks[i].getAttribute('href');
    arrLinks[i].setAttribute('href', 'http://www.google.com');
    arrLinks[i].setAttribute('target', '_blank');
}

var arrSidebar = document.getElementById('sidebar').getElementsByTagName('a');
for(var i=0; i < arrSidebar.length; i++) {
    var site = arrSidebar[i].getAttribute('href');
    arrSidebar[i].setAttribute('href', 'http://www.abtech.edu');
    arrSidebar[i].setAttribute('target', '_blank');
}