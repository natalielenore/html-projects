var slider = document.getElementById("myRange");
var output = document.getElementById("pv-num");
var monies = document.getElementById("dollars");
var checkbox = document.getElementById("check");




function change_values(discount, cur) {


		switch (true) {
		case cur < 100:
			output.innerHTML = "10K";
			monies.innerHTML = "$8.00";
			dis = "$6.00";
			break;
		case cur < 200:
			output.innerHTML = "50K";
			monies.innerHTML = "$12.00";
			dis = "$9.00";
			break;
		case cur < 300:
			output.innerHTML = "100K";
			monies.innerHTML = "$16.00";
			dis = "$12.00";
			break;
		case cur < 400:
			output.innerHTML = "500K";
			monies.innerHTML = "$24.00";
			dis = "$18.00";
			break;
		case cur == 400:
			output.innerHTML = "1M";
			monies.innerHTML = "$36.00";
			dis = "$27.00";
			break;
		}
		
		
		if (discount) {
			
			monies.innerHTML = dis;
		}
}





function main() {

	checkbox.addEventListener('change', () => change_values(checkbox.checked, slider.value));
	slider.addEventListener("input", () => change_values(checkbox.checked, slider.value));
}


main();









