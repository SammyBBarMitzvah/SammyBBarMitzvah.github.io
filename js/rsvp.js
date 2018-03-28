var allergies = document.getElementById('allergiesCheckBox');
var allergiesText = document.getElementById('allergiesTextInput');
var meal = document.getElementById('mealOption');
var attendingYes = document.getElementById('attendingRadioYes')
var attendingNo = document.getElementById('attendingRadioNo');
var adultCount = document.getElementById('adultCountInput');
var childCount = document.getElementById('childCountInput')


// Toggle the required modifer on forms
function toggleRequired(e) {
    $(e).prop('required', !$(e).prop('required'));
}


$(document).ready(function() {
    $('.formClass').hide();
});


// Adding Allergies box when allergies is checked and requiring it
$(allergies).click(function() {
    $(allergiesText).slideToggle(300);
    toggleRequired(allergiesText);
});




$(attendingYes).click(function() {
    if ($(this).is(':checked')) {
        attendingYes.value = 'True'
        $('.formClass').fadeIn(400);
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
    $('.formClass').fadeOut(400);
    $('#allergiesTextInput').hide();
    if ($(allergies).is(':checked') && $(allergiesText).is(':hidden')) {
        $(allergiesText).show();
    }
});


$('#modalOpen').click(function() {
    $('.modal').addClass('is-active');
});

$('#submitSlider').click(function() {
    $('.modal').removeClass('is-active');
});