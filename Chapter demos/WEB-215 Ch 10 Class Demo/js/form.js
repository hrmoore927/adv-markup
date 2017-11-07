$('document').ready(function(){
    $('#date').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-5:+0',
        maxDate: 0
    });
    
    $('#who').selectmenu({
        width: 200,
        icons: {button: 'ui-icon-circle-arrow-s'},
        change: function(event,ui){
            var whoImage;
            if(ui.item.label === "Jimmy Hoffa"){
                whoImage = "images/hoffa.jpg";
            } else if(ui.item.label === "Jimi Hendrix"){
                whoImage = "images/hendrix.jpg";   
            } else if(ui.item.label === "D.B. Cooper"){
                whoImage = "images/cooper.jpg";   
            } else if(ui.item.label === "Bruce Lee"){
                whoImage = "images/lee.jpg";   
            } else if(ui.item.label === "Aliens"){
                whoImage = "images/aliens.jpg";   
            } else if(ui.item.label === "Other"){
                whoImage = "images/other.jpg";   
            } else if(ui.item.label === "No one"){
                whoImage = "images/none.jpg";   
            }
            $('#whopic').attr('src', whoImage);
        } // end change anon fcn
    }); // end selectmenu
    
    $('#radios').buttonset();
    
    $('#checks').buttonset();
    
    $('#send').button({
        icons: {primary: 'ui-icons-arrowthick-1-e'},
        text: false
    });
    
    var arrLocs = [
        'Mall',
        'Movie theater',
        'My house',
        'Restaurant'
    ];
    $('#location').autocomplete({
        source: arrLocs
    });
    
}); // end doc ready