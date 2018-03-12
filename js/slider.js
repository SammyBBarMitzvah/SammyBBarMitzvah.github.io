function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


function submit() {
 let redirect = "https://sammybbarmitzvah.github.io/peopleAttending="
 let param = getUrlParameter('peopleAttending');
 window.location.assign('https://sammybbarmitzvah.github.io/?peopleAttending=' + param);
}

