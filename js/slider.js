var getQueryString = function ( field, url ) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
};


function submit() {
 var param = getQueryString('peopleAttending');
 window.location.assign('https://sammybbarmitzvah.github.io/?peopleAttending=' + param);
}

