function getQueryString() {
    let pairs = window.location.search.substr(1).split('&');
    let out = {};

    for (let i in pairs) {
        let pair = pairs[i].split('=')
        let key = pair[0];
        let value = pair.length > 1 ? (isNaN(pair[1]) ? decodeURIComponent(pair[1].replace(/\+/g, ' ')) : parseInt(pair[1])) : true;
        out[key] = value;
    }

    return out;
}


function submit() {
 var param = getQueryString();
 window.location.assign('https://sammybbarmitzvah.github.io/?peopleAttending=' + param);
}

