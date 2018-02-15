var nameFormInput = document.getElementById('nameFormInput');
let rsvpResults = [];

function rsvpToArray() {
    let rsvp = {
        name: nameFormInput.value
    };


    rsvpResults.push(rsvp);
}