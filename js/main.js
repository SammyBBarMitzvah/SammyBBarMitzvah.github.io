var allergies = document.getElementById('allergiesCheckBox');
var allergiesText = document.getElementById('allergiesTextInput');
var child = document.getElementById('childCheckBox');

$(allergies).click(function() {
    $(allergiesText).toggle(this.checked);
});

function allergiesCheck() {}

function childCheck() {
    if (child.checked) {

    }
}