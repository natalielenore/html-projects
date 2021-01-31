var slider = document.getElementById("myRange");
var output = document.getElementById("pv-num");
var monies = document.getElementById("dollars");
// output.innerHTML = slider.value;

slider.oninput = function() {
	// do cases on value of this.value and then
	// determine waht dollars and pv number should ouput.
	// briallinat 

	var cur = this.value;

	switch (true) {

		//       <!-- 
  //     10K pageviews / $8 per month
  //     50K pageviews / $12 per month
  //     100K pageviews / $16 per month
  //     500k pageviews / $24 per month
  //     1M pageviews / $36 per month -->
		case cur == 0:
			output.innerHTML = "10K";
			monies.innerHTML = "$8.00";
			break;
		case cur == 1:
			output.innerHTML = "50K";
			monies.innerHTML = "$12.00";
			break;
		case cur == 2:
			output.innerHTML = "100K";
			monies.innerHTML = "$16.00";
			break;
		case cur == 3:
			output.innerHTML = "500K";
			monies.innerHTML = "$24.00";
			break;
		case cur == 4:
			output.innerHTML = "1M";
			monies.innerHTML = "$36.00";
			break;

	}
  // output.innerHTML = this.value;
}

