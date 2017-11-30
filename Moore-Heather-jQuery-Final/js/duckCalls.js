$('document').ready(function(){
    currentPage('pageHighlight');
    accordion('#faqs');
    tableStripe('row-odd', 'row-even');
    links();
    loadImages('#galleryThumbs a');
    displayFirst('#galleryThumbs a', '#galleryThumbs img:first', '#galleryThumbs');
    gallery('#galleryThumbs a');
});