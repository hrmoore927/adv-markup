function setCurrentLinks() {
    var mainnavLinks = document.getElementById('mainnav').getElementsByTagName('a');
    var currentPath = window.location.pathname;
    var currentPage = currentPath.substring(currentPath.lastIndexOf('/')+1);
    for(var i=0; i<mainnavLinks.length; i++) {
        var theFullHref = mainnavLinks[i].href;
        var thePageHref = theFullHref.substring(theFullHref.lastIndexOf('/')+1);
        if(thePageHref == currentPage) {
            mainnavLinks[i].setAttribute('id', 'currentlink');
        }
    }
}
window.onload = setCurrentLinks;