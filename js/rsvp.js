var allergies = document.getElementById('allergiesCheckBox');
var allergiesText = document.getElementById('allergiesTextInput');
var child = document.getElementById('childCheckBox');
var meal = document.getElementById('mealOption');

// Adding Allergies box when allergies is checked
$(allergies).click(function() {
    $(allergiesText).slideToggle(300);
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




$('#modalOpen').click(function() {
    $('.modal').addClass('is-active');
});

$('#submitSlider').click(function() {
    $('.modal').removeClass('is-active');
});
