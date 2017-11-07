$('document').ready(function () {
    $('#date').datepicker({
        minDate: new Date(2018, 7, 14),
        maxDate: new Date(2018, 7, 22)
    });

    var shirtDesign = '<img src="images/blank-shirt.jpg" alt="selected shirt">';
    $('#shirtSelect').append(shirtDesign);
    
    $('#shirt').selectmenu({
        width: 200,
        icons: {button: 'ui-icon-circle-arrow-s'},
        change: function (event,ui){
            var shirtImage;
            if (ui.item.label === "The Cars"){
                shirtImage = "images/the-cars.jpg";
            } else if (ui.item.label === "Duran Duran"){
                shirtImage = "images/duran-duran.jpg";
            } else if (ui.item.label === "Flock of Seagulls"){
                shirtImage = "images/flock-of-seagulls.jpg";
            } else if (ui.item.label === "Missing Persons"){
                shirtImage = "images/missing-persons.jpg";
            } else if (ui.item.label === "Select one..."){
                shirtImage = "images/blank-shirt.jpg";
            }
            $('#shirtSelect img').attr('src', shirtImage);
        } // end change anon fcn
    }); // end selectmenu
    
    $('.radio').buttonset();

    var arrBands = [
        "Adam and the Ants",
        "A-ha",
        "Blondie",
        "Bow Wow Wow",
        "Culture Club",
        "Depeche Mode",
        "Devo",
        "Echo & the Bunnymen",
        "Madness",
        "Modern English",
        "Oingo Boingo",
        "Simple Minds",
        "Siouxsie and the Banshees",
        "Spandau Ballet",
        "Talk Talk",
        "Tears for Fears",
        "The Cure",
        "The Fixx",
        "The Human League",
        "The Jam",
        "The Psychedelic Furs",
        "The Smiths",
        "Thompson Twins",
        "Ultravox",
        "XTC"
    ];
    $('#addBand').autocomplete({
        source: arrBands
    });

    $('#checkbox').buttonset();

    $('#continue').button({
        icons: {
            primary: 'ui-icon-caret-1-e'
        },
        iconPosition: 'end'
    });
});
