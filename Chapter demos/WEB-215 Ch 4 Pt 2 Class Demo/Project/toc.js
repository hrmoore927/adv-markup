$('document').ready(function () {
    //    call function that will be created next
    buildBookmarks();
});

function buildBookmarks() {
    //    set ul as ul with id
    var ul = $('<ul id="bookmarkList">');
    //    set count
    var anchorCount = 0;
    //    select h3 with loop
    $('#content h3').each(function () {
        //        select current h3 add attribute id=bookmark with count number
        $(this).attr('id', 'bookmark' + anchorCount);
        //        set li as li with anchor href = h3's id with text of current h3
        var li = $('<li><a href="#bookmark' + anchorCount + '">' + $(this).text() + '</a></li>')
        //        append the li to the ul
        ul.append(li);
        //        increment count
        anchorCount++;
    });
    //    select the header id and append the ul to it
    $('#header').append(ul);
}
