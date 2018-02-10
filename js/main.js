let input;
let output;
let sys;


function getQueryString() {
    let pairs = window.location.search.substr(1).split('&');
    let out = {};

    for (let i in pairs) {
        let pair = pairs[i].split('=');
        let key = pair[0];
        let vaule = pair.length > 1 ? (isNaN(pair[1]) ? decodeURIComponent(pair[1].replace(/\+/g, ' ')) : parseInt(pair[1])) : true;
        out[key] = value;
    }

    return out;
}

window.addEventListener('load', function() {

    sys = JSON.parse(localStorage.getItem('sys') || '{}');


    output = document.getElementById('nameOutput');
    input = document.getElementById('nameFormInput');
    input.focus();

});

window.addEventListener('unload', function() {

    localStorage.setItem('sys', JSON.stringify(sys));

});