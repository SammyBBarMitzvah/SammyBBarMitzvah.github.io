//Form
var firstName = document.getElementById('firstNameFormInput');
var lastName = document.getElementById('lastNameFormInput');
var emailInput = document.getElementById('emailInput');
var submitButton = document.getElementById('nameFormSubmit');

//Allergies
var allergies = document.getElementById('allergiesCheckBox');
var allergiesText = document.getElementById('allergiesTextInput');

//Attending

var attendingYes = document.getElementById('attendingRadioYes');
var attendingNo = document.getElementById('attendingRadioNo');

//Form Classes
var formClass = document.getElementsByClassName('formClass');
var formAction1 = document.getElementsByClassName('formAction1');
var formAction2 = document.getElementsByClassName('formAction2')

//Meals
var steak

//Extras
var adultCount = document.getElementById('adultCountInput');
var childCount = document.getElementById('childCountInput');
var formNext = document.getElementById('form1Button');



// Toggle the required modifer on forms
function toggleRequired(e) {
    $(e).prop('required', !$(e).prop('required'));
}

//
function getTotals() {
    return;
}

function checkValidation() {
    var adults = adultCount.value;
    var children = childCount.value;
    if (firstName.value === "" || lastName.value === "" || emailInput.value === "" || adults === "0" && children === "0") {
        return false;
    }
    return true;
}

$(document).ready(function() {
    $(formClass).hide();
    $(formAction2).hide();
});


// Adding Allergies box when allergies is checked and requiring it
$(allergies).click(function() {
    $(allergiesText).slideToggle(300);
    toggleRequired(allergiesText);
});

$(formNext).click(function() {
    if (!checkValidation()) {
        $(formAction1).show();
    } else {
        $(formAction1).fadeOut(400);
        $(formAction2).fadeIn(500);
        $(allergiesText).hide();
    }

});


$(attendingYes).click(function() {
    if ($(this).is(':checked')) {
        attendingYes.value = 'True'
        $(formClass).fadeIn(400);
        $(formAction2).hide();
        $('#allergiesTextInput').hide();
        if ($(allergies).is(':checked') && $(allergiesText).is(':hidden')) {
            $(allergiesText).show();
        }
    }
});


$(attendingNo).click(function() {
    attendingNo.value = 'False'
    toggleRequired(adultCount);
    toggleRequired(childCount);
    $(formClass).fadeOut(400);
    $(submitButton).fadeIn(300);
    $('#allergiesTextInput').hide();
    if ($(allergies).is(':checked') && $(allergiesText).is(':hidden')) {
        $(allergiesText).show();
    }
});