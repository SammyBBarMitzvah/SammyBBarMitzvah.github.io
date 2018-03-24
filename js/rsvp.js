var allergies = document.getElementById('allergiesCheckBox');
var allergiesText = document.getElementById('allergiesTextInput');
var child = document.getElementById('childCheckBox');
var meal = document.getElementById('mealOption');
var attending = document.getElementById('attendingCheck');
var attendingReason = document.getElementById('reasonAttendingText');


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

$(attending).click(function() {
    if (!($(this).is(':checked'))) {
        $('.formClass').fadeOut(400);
        $('.attendingReason').fadeIn(300);

        toggleRequired(attendingReason);
    } else {
        $('.formClass').fadeIn(300);
        $('#allergiesTextInput').hide();
        if ($(allergies).is(':checked') && $(allergiesText).is(':hidden')) {
            $(allergiesText).show();
        }
        $('.attendingReason').fadeOut(400);
    }
});


$('#modalOpen').click(function() {
    $('.modal').addClass('is-active');
});

$('#submitSlider').click(function() {
    $('.modal').removeClass('is-active');
});