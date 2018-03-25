var allergies = document.getElementById('allergiesCheckBox');
var allergiesText = document.getElementById('allergiesTextInput');
var child = document.getElementById('childCheckBox');
var meal = document.getElementById('mealOption');
var attendingYes = document.getElementById('attendingRadioYes')
var attendingNo = document.getElementById('attendingRadioNo')


// Toggle the required modifer on forms
function toggleRequired(e) {
    $(e).prop('required', !$(e).prop('required'));
}


// Adding Allergies box when allergies is checked and requiring it
$(allergies).click(function() {
    $(allergiesText).slideToggle(300);
    toggleRequired(allergiesText);
});

//Removing meal option if child is checked
$(child).click(function() {
    if ($(this).is(':checked')) {
        $('.childSelect').fadeOut(300);
        meal.selectedIndex = 3;

    } else {
        $('.childSelect').show();
        meal.selectedIndex = 0;
    }
});

$(attendingYes).click(function() {
    if ($(this).is(':checked')) {
        $('.formClass').fadeIn(400);
        $('#allergiesTextInput').hide();
        if ($(allergies).is(':checked') && $(allergiesText).is(':hidden')) {
            $(allergiesText).show();
        }
        if ($(child).is(':checked') && $('.childSelect').is(':visible')) {
            $('.childSelect').hide();
        }
    } else {
        $('.formClass').fadeIn(300);

    }
});


$(attendingNo).click(function() {
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