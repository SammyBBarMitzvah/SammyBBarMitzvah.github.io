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