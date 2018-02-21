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

function makeApiCall() {
    var params = {
        spreadsheetId: '1OpsZ84MASlEOexzn6PGCynygfywM2Nk_lW2BVJSpC7Y',
        range: 'A1',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
    };

    var valueRangeBody = {

    };

    var request = gapi.client.sheets.spreadsheets.value.append(params, valueRangeBody);
    request.then(function(response) {
        console.log(response.result);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function initClient() {
    var API_KEY = 'AIzaSyByBvp1W85-6w3_U_35ayIqbqgCESJCw6s';
    var CLIENT_ID = '221800871473-uh5k0t8fdojanvsrqemg0tt1te0iott1.apps.googleusercontent.com';
    var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
    if (isSignedIn) {
        makeApiCall();
    }
}

function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance.signOut();
}

function getFormData() {
    var form = document.getElementById("gform");
    var elements = form.elements; // all form elements

    var fields = Object.keys(elements).map(function(k) {
        if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
        } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
        }
    }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
    });

    var data = {};
    fields.forEach(function(k) {
        data[k] = elements[k].value;
        var str = ""; // declare empty string outside of loop to allow
        // it to be appended to for each item in the loop
        if (elements[k].type === "checkbox") { // special case for Edge's html collection
            str = str + elements[k].checked + ", "; // take the string and append 
            // the current checked value to 
            // the end of it, along with 
            // a comma and a space
            data[k] = str.slice(0, -2); // remove the last comma and space 
            // from the  string to make the output 
            // prettier in the spreadsheet
        } else if (elements[k].length) {
            for (var i = 0; i < elements[k].length; i++) {
                if (elements[k].item(i).checked) {
                    str = str + elements[k].item(i).value + ", "; // same as above
                    data[k] = str.slice(0, -2);
                }
            }
        }
    });

    // add form-specific values into the data
    data.formDataNameOrder = JSON.stringify(fields);
    data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name

    console.log(data);
    return data;
}

function handleFormSubmit(event) { // handles form submit withtout any jquery
    event.preventDefault(); // we are submitting via xhr below
    var data = getFormData(); // get the values submitted in the form

    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log(xhr.status, xhr.statusText)
        console.log(xhr.responseText);
        document.getElementById('gform').style.display = 'none'; // hide form
        return;
    };

    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')

    xhr.send(encoded);
}

function loaded() {
    console.log('contact form submission handler loaded successfully');
    // bind to the submit event of our form
    var form = document.getElementById('gform');
    form.addEventListener("submit", handleFormSubmit, false);
};

document.addEventListener('DOMContentLoaded', loaded, false);
