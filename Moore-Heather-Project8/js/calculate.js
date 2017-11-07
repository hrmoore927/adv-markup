$('document').ready(function () {
    $('#tipCalc').submit(calculate);
    hideEmail('bob', 'example.com', '.bobEmail');
    hideEmail('bobbie', 'example.com', '.bobbieEmail');
    autoFocus('#name');
    autoClear('#percent', '15');
    toggleDependents('#round', 'input[name=roundTo]');
//    validate the form
    validateForm('#tipCalc');
//    prevent form submission if form is invalid
    submitForm('#tipCalc');
});

function calculate(evt) {
    evt.preventDefault();
    var allHashes = [];
    var inputs = $('#tipCalc').find('input:not(:submit)');
    for (var i = 0; i < inputs.length; i++) {
        if ($(inputs[i]).is(':input[type=text]') && $(inputs[i]).val() != '') {
            allHashes[$(inputs[i]).attr('id')] = $(inputs[i]).val();
        }
        if ($(inputs[i]).prop('checked')) {
            allHashes[$(inputs[i]).attr('name')] = $(inputs[i]).val();
        }
    }
    $('#totalBill').text('Total bill: $' + allHashes['total']);
    var tip = allHashes['total'] * allHashes['percent'] / 100;

    if ($('#round').prop('checked')) {
        if (allHashes['roundTo'] == 'int') {
            //round to dollar
            tip = Math.round(tip);
        } else if (allHashes['roundTo'] == 'ten') {
            //round to dime
            tip = Math.round(tip * 10) / 10;
            tip = parseFloat(tip).toFixed(2);
        } else if (allHashes['roundTo'] == 'hun') {
            // round to cent
            tip = Math.round(tip * 100) / 100;
            tip = parseFloat(tip).toFixed(2);
        }
    }

    $('#totalTip').text('Total tip: ' + allHashes['percent'] + '% is $' + tip);
    var msg = '<h4>That\'s a very ' + allHashes['gender'] + ' tip, ' + allHashes['name'] + '!</h4>';
    $('#totalTip').next().remove();
    $('#totalTip').after(msg);
}

function hideEmail(user, domain, replaceMe) {
    var address = user + '@' + domain;
    var emailLink = '<a href ="mailto:' + address + '">' + address + '</a>';
    $(replaceMe).html(emailLink);
}

function autoFocus(fieldToFocus) {
    $(fieldToFocus).focus();
}

function autoClear(fieldToClear, defaultString) {
    $(fieldToClear).val(defaultString);
    $(fieldToClear).focus(function () {
        if ($(this).val() == defaultString) {
            $(this).val('');
        }
    });
    $(fieldToClear).blur(function () {
        if ($(this).val() == '') {
            $(this).val(defaultString);
        }
    });
}

function toggleDependents(trigger, dependents) {
    $(dependents).each(function () {
        $(this).attr('disabled', true);
        $(this).prev().css('color', '#ccc');
    });
    $(trigger).click(function () {
        if ($(this).is(':checked') == 1) {
            $(dependents).attr('disabled', false);
            $(dependents).prev().css('color', '#000');
        } else {
            $(dependents).attr('disabled', true);
            $(dependents).prop('checked', false);
            $(dependents).prev().css('color', '#ccc');
        }
    });
}

//create function to validate the form
function validateForm(formName) {
    $(formName).validate({
//        rules for validation
        rules: {
//            name, gender, total, and percent are required and total and percent will only accept numbers
            name: 'required',
            gender: 'required',
            total: {
                number: true,
                required: true
            },
            percent: {
                number: true,
                required: true
            }
        },
//        if statement to move the error the the right of female on gender radio button
        errorPlacement: function (error, element) {
            if (element.attr("name") == "gender") {
                error.insertAfter("#gender_f");
            } else {
                error.insertAfter(element);
            }
        }
    });
}

//create function to prevent form submission if form is invalid
function submitForm(formName) {
//    select the submit and bind a click function
    $(':submit').click(function (e) {
//        if the form is not valid, prevent the default
        if ($(formName).valid() == false) {
            e.preventDefault();
        }
    })
}
