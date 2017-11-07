// get single element using it's ID
var masthead = document.getElementById('masthead');

var mainNav = document.getElementById('mainNav');

var test = document.getElementById('nosuchid');
if(test != null) {
    alert(test.nodeName);
}

// get multiple elements based on the tag name
var arrLinks = document.getElementsByTagName('a');
var arrAllTags = document.getElementsByTagName('*');
for(var i=0; i < arrAllTags.length; i++) {
   // alert(arrAllTags[i].nodeName);
}

// getting attributes
var masthead = document.getElementById('masthead');
var theClass = masthead.getAttribute('class');

// get titles of all anchors
var arrLinks = document.getElementsByTagName('a');
for(var i=0; i < arrLinks.length; i++) {
    var linkTitle = arrLinks[i].getAttribute('title');
    //alert(linkTitle);
}

// change the value of an attribute
var masthead = document.getElementById('masthead');
masthead.setAttribute('class','altcontainer');

// something useful - add TITLES for all links
var arrLinks = document.getElementsByTagName('a');
for(var i=0; i < arrLinks.length; i++) {
    var linkTitle = arrLinks[i].getAttribute('title')
    if(linkTitle == null) {
        var theURL = arrLinks[i].getAttribute('href');
        arrLinks[i].setAttribute('title', theURL);
    }
}

// useful #2 - format all main navigation links
var mainNavLinks = document.getElementById('mainNav').getElementsByTagName('a');

// sanity check - how many links are there?
//alert(mainNavLinks.length);

// set the class of those links
for (var i=0; i < mainNavLinks.length; i++) {
    mainNavLinks[i].setAttribute('class', 'navLinks');
}