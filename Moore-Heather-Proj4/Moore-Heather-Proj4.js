var arrLinks = document.getElementById('mainNav').getElementsByTagName('a');
for (var i=0; i < arrLinks.length; i++) {
    var linkTitle = arrLinks[i].getAttribute('title');
    if(linkTitle == null) {
        var theURL = arrLinks[i].getAttribute('href');
        arrLinks[i].setAttribute('title', theURL);
    }
}

var arrSites = document.getElementsByTagName('a');
for (var i=0; i < arrSites.length; i++) {
    var link = arrSites[i].getAttribute('href');
    var external = new RegExp('http');
    if(link.match(external)) {
        arrSites[i].setAttribute('target', '_blank');  
    }
}