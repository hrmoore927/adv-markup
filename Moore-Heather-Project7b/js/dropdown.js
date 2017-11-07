$(document).ready(function () {
    markCurrent();
});


function markCurrent() {
    var pathName = $(location).attr('pathname');
    var curPage = pathName.substring(pathName.lastIndexOf('/') + 1);
    $('a').each(function () {
        if ($(this).attr('href') == curPage) {
            $(this).addClass('current');
            if ($(this).closest('ul').siblings('a').length) {
                $(this).closest('ul').siblings('a').addClass('current');
            if ($(this).closest('ul').siblings('a').closest('ul').siblings('a').length) {
                $(this).closest('ul').siblings('a').closest('ul').siblings('a').addClass('current');
                }
            }
        } else if (curPage == '') {
            $('a:first').addClass('current');
        }
    });
}
