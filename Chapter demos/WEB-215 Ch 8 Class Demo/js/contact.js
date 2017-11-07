// need to use jQuery at least 1.6 for prop() method
$('document').ready(function(){
    hideEmail('heather', 'example.com', '.heatherEmail');
    autoFocus('#name');
    autoClear('#email', 'youremail@example.com');
    toggleDependents('#spam', 'input[name=frequency]');
});

function hideEmail(user, domain, replaceMe){
    var address = user + '@' + domain;
    var emailLink = '<a href ="mailto:' + address + '">' + address + '</a>';
    $(replaceMe).html(emailLink);
}

function autoFocus(fieldToFocus){
    $(fieldToFocus).focus();
}

function autoClear(fieldToClear, defaultString){
    // pre-fill a default value
    $(fieldToClear).val(defaultString);
    // when field is entered, empty it if it's the default string
    $(fieldToClear).focus(function(){
        if($(this).val() == defaultString){
           $(this).val('');
           }
    }); // end focus anon fcn
    
    // when field is exited, refill with default string if empty
    $(fieldToClear).blur(function(){
        if($(this).val() == ''){
            $(this).val(defaultString);
        }
    });
}

function toggleDependents(trigger, dependents){
    // disable radios and grey out their labels on page load
    $(dependents).each(function(){
        $(this).attr('disabled', true);
        $(this).prev().css('color', '#ccc');
    }); // end each anon fcn
    
    // bind click to the trigger/checkbox
    $(trigger).click(function(){
        // check the state of the box; if checked, reenable radios
        if($(this).is(':checked') == 1){
            $(dependents).attr('disabled', false);
            $(dependents).prev().css('color', '#000');
           } else {
                $(dependents).attr('disabled', true);
                $(dependents).prop('checked', false);
                $(dependents).prev().css('color', '#ccc');
           }
    }); // end click anon fcn
}