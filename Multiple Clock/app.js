	
function clock() {

	const fullDate = new Date();
	var hours = fullDate.getHours();
	var mins = fullDate.getMinutes();
	var secs = fullDate.getSeconds();

	if (hours < 10) {
		hours = "0"+hours;
	}
	if (mins < 10) {
		mins = "0"+mins;
	}
	if (secs < 10) {
		secs = "0"+secs;
	}


	document.getElementById('hour1').innerHTML = hours;
	document.getElementById('minute1').innerHTML = mins;
	document.getElementById('second1').innerHTML = secs;
	document.getElementById('hour2').innerHTML = hours;
	document.getElementById('minute2').innerHTML = mins;
	document.getElementById('second2').innerHTML = secs;
	document.getElementById('hour3').innerHTML = hours+':';
	document.getElementById('minute3').innerHTML = mins+':';
	document.getElementById('second3').innerHTML = secs;


}

setInterval(clock, 1000);