$('document').ready(function(){
// initialize document or que functions
// display first image
    displayFirstImage();
// pre-load remaining images (this prevents lag when images are changing)
    preLoadImages();
// load the gallery
    gallery();
});
 
function displayFirstImage(){
    // get href for first image
    var firstPath = $('#thumbs a:first').attr('href');
    // variable to insert image into html
    var firstImage = '<img src="'+firstPath+'">';
    // insert image after the thumbnail gallery
    $('#thumbs').after(firstImage);
}

function preLoadImages(){
    // create array var to store all images
    var allImages = [];
    // create var to store image links
    var galleryImageLinks = $('#thumbs a');
    // loop through gallery
    for(var i=0; i < galleryImageLinks.length; i++){
        // create new image object
        allImages[i] = new Image();
        // set src from current image to the allImages array
        allImages[i].src = galleryImageLinks[i];
    }
}

function gallery(){
    $('#gallery a').click(function(theClick){
        theClick.preventDefault();
        // get next sibling after #thumbs
        var oldImage = $('#thumbs').next();
        // get clicked href
        var imgPath = $(this).attr('href');
        // set current image in html
        var newImage = $('<img src="'+imgPath+'">');
        // hide clicked image
        newImage.hide();
        // display newImage after #thumbs
        $('#thumbs').after(newImage);
        // fade in newImage
        newImage.fadeIn();
        // remove oldImage
        oldImage.remove();
    }); // end anonymous function
}

// function library
/*
1. Attach a function to the clicked thumbnail
2. Stop default link behavior
3. Get the path to the big image for the clicked thumbnail
4. Create a new image object for the clicked image
5. Hide the new image so we can place it invisibly
6. Insert the new invisible image after the thumbnails
7a. Fade in the new image
7b. At the same time, remove the old image
	Oh! That means that at some point, we have to figure out what the old image was
	We should probably do that early - before we start working with a new image...
	...so maybe do that between steps 1 and 2
*/
