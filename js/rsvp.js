//Form
var firstName = document.getElementById('firstNameFormInput');
var lastName = document.getElementById('lastNameFormInput');
var emailInput = document.getElementById('emailInput');
var submitButton = document.getElementById('nameFormSubmit');
var namesInput = document.getElementById('namesInput');

//Allergies
var allergies = document.getElementById('allergiesCheckBox');
var allergiesText = document.getElementById('allergiesTextInput');

//Attending
var attendingYes = document.getElementById('attendingRadioYes');
var attendingNo = document.getElementById('attendingRadioNo');
var attendingYesLabel = document.getElementById('attendingRadioYesLabel');
var attendingNoLabel = document.getElementById('attendingRadioNoLabel');

//Form Classes
var formClass = document.getElementsByClassName('formClass');
var formAction1 = document.getElementsByClassName('formAction1');
var formAction2 = document.getElementsByClassName('formAction2')

//Meals
var steak = document.getElementById('mealOptionSteak');
var fish = document.getElementById('mealOptionFish');
var vegetarian = document.getElementById('mealOptionVegetarian');

//Extras
var adultCount = document.getElementById('adultCountInput');
var childCount = document.getElementById('childCountInput');
var formNext = document.getElementById('form1Button');



// Toggle the required modifer on forms
function toggleRequired(e) {
    $(e).prop('required', !$(e).prop('required'));
}

// Compare meals to those attending
function getTotals() {
    var a = parseInt(steak.value);
    var b = parseInt(fish.value);
    var c = parseInt(vegetarian.value);
    var d = a + b + c;
    if (d !== parseInt(adultCount.value)) {
        return false;
    }
    return true;
}

function checkValidation() {
    var adults = adultCount.value;
    var children = childCount.value;

    if (firstName.value === "" || lastName.value === "" || emailInput.value === "" || adults === "0" && children === "0") {
        return false;
    }
    return true;
}

function checkVisible(e) {
    if ($(e).is(':hidden')) {
        return false;
    }
    return true;
}

function hideMeals() {
    var adults = adultCount.value;
    var children = childCount.value;

    if (adults === "0" && children > "0") {
        $('.mealOption').hide();
    }
}


$(document).ready(function() {
    $(formClass).hide();
    $(formAction2).hide();
    while (checkVisible(formAction1)) {
        $(formAction2).hide();
    }
});


// Adding Allergies box when allergies is checked and requiring it
$(allergies).click(function() {
    $(allergiesText).slideToggle(300);
    toggleRequired(allergiesText);
});


$(submitButton).click(function() {
    if ($(attendingNo).is(':checked')) {
        return true;
    }
    if (getTotals()) {
        console.log('Right amount');
        return true;
    } else {
        console.log('Not the right amount');
        return false;
    }

});


$(formNext).click(function() {
    if (!checkValidation()) {
        $(formAction1).show();
        alert('Oops! It seems you have forgotten something!');
    } else {
        $(formAction1).fadeOut(400);
        hideMeals();
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

$(attendingYesLabel).click(function(){
    $(attendingYes).prop('checked', true);
    $(formAction2).hide();
});


$(attendingNo).click(function() {
    //Setting values for readability in Spreadsheet
    attendingNo.value = 'False';
    adultCount.value = '';
    steak.value = '';
    fish.value = '';
    vegetarian.value = '';
    childCount.value = '';

    toggleRequired(adultCount);
    toggleRequired(childCount);
    toggleRequired(namesInput);
    $(formClass).fadeOut(400);
    $(submitButton).fadeIn(300);
    $('#allergiesTextInput').hide();
});
