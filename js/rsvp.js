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

//Extras
var adultCount = document.getElementById('adultCountInput');
var childCount = document.getElementById('childCountInput');
var formNext = document.getElementById('form1Button');

//Name Inputs and Meals
var mealClasses = document.getElementsByClassName('mealClasses');
var nameInput1 = document.getElementById('nameInput1');
var nameInput2 = document.getElementById('nameInput2');
var nameInput3 = document.getElementById('nameInput3');
var nameInput4 = document.getElementById('nameInput4');
var nameInput5 = document.getElementById('nameInput5');
var nameInput6 = document.getElementById('nameInput6');
var nameInput7 = document.getElementById('nameInput7');

var mealOption1 = document.getElementById('mealOption1');
var mealOption2 = document.getElementById('mealOption2');
var mealOption3 = document.getElementById('mealOption3');
var mealOption4 = document.getElementById('mealOption4');
var mealOption5 = document.getElementById('mealOption5');
var mealOption6 = document.getElementById('mealOption6');
var mealOption7 = document.getElementById('mealOption7');

var childInput = document.getElementsByClassName('childInput');
var childInput1 = document.getElementById('childNameInput1');
var childInput2 = document.getElementById('childNameInput2');
var childInput3 = document.getElementById('childNameInput3');
var childInput4 = document.getElementById('childNameInput4');
var childInput5 = document.getElementById('childNameInput5');
var childInput6 = document.getElementById('childNameInput6');
var childInput7 = document.getElementById('childNameInput7');





// Toggle the required modifer on forms
function toggleRequired(e) {
    $(e).prop('required', !$(e).prop('required'));
}

// Sets a value to empty
function emptyValue(e) {
    e.value = '';
}

// Resets the food value (Default: Steak)
function setValueSteak(e) {
    e.selectedIndex = '0'
}

// Checks if an element is Visible
function checkVisible(e) {
    if ($(e).is(':hidden')) {
        return false;
    }
    return true;
}


// Checks if an element is not filled out *Only works if YES is clicked, otherwise the browsers default will check*
function checkValidation() {
    var adults = adultCount.value;
    var children = childCount.value;

    if (firstName.value === "" || lastName.value === "" || emailInput.value === "" || adults === "0" && children === "0") {
        return false;
    }
    return true;
}

// Gets how many adult meals to show based on number of adults attending
function getMealCount() {
    var adults = parseInt(adultCount.value);
    var children = parseInt(childCount.value);
    if (children > 7 || adults > 7) {
        alert('Sorry, we do not support this many adults/children at one time. Please try a lower number.');
        return false;
    } else {
    for (let i = 1; i < adults + 1; i++) {
        console.log(`nameInput${i}`);
        $(`#nameInput${i}`).show();
        toggleRequired(`#namesInput${i}`);
        toggleRequired(`#mealOption${i}`);
    }
    for (let i = 1; i < children + 1; i++) {
        console.log(`childNameInput${i}`);
        $(`#childNameInput${i}`).show();
        toggleRequired(`#childNameInput${i}Name`);
    }
        return true;
    }
}


// Hiding elements when the webpage loads
$(document).ready(function() {
    $(formClass).hide();
    $(formAction2).hide();
    while (checkVisible(formAction2) && checkVisible(formAction1)) {
        $(formAction2).hide();
    }
});


// Adding Allergies box when allergies is checked and requiring it
$(allergies).click(function() {
    $(allergiesText).slideToggle(300);
    toggleRequired(allergiesText);
});

// Allows for submit when 'No' is checked
$(submitButton).click(function() {
    if ($(attendingNo).is(':checked')) {
        return true;
    }


});

// Checks for if all the elements are clicked when 'Yes' and 'Next' are clicked
$(formNext).click(function() {
    if (!checkValidation()) {
        $(formAction1).show();
        alert('Oops! It seems you have forgotten something!');
    } else {
        if (getMealCount()) {
        $(formAction1).fadeOut(400);
        $(formAction2).fadeIn(500);
        $(mealClasses).hide();
        $(childInput).hide();
        $(allergiesText).hide();
        }
    }
});


$(attendingYes).click(function() {
    $(formAction2).hide();
    attendingYes.value = 'True'

    $(formClass).fadeIn(400);

    $('#allergiesTextInput').hide();
    if ($(allergies).is(':checked') && $(allergiesText).is(':hidden')) {
        $(allergiesText).show();
    }
});

$(attendingYesLabel).click(function() {
    $(formAction2).hide();

});

//Setting values for readability in Spreadsheet
$(attendingNo).click(function() {
    attendingNo.value = 'False';

    // Emptying the values for all the items
    emptyValue(adultCount);
    emptyValue(childCount);
    emptyValue(mealOption1);
    emptyValue(mealOption2);
    emptyValue(mealOption3);
    emptyValue(mealOption4);
    emptyValue(mealOption5);
    emptyValue(mealOption6);
    emptyValue(mealOption7);



    // Making submit able to be clicked by toggling the required function

    toggleRequired(adultCount);
    toggleRequired(childCount);

    // Hiding elements and showing the submit button
    $(formClass).fadeOut(400);
    $(submitButton).fadeIn(300);
    $('#allergiesTextInput').hide();
});
