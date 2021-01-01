const celciusInput = document.querySelector('#cel > input');
const fahrenheitInput = document.querySelector('#fahr > input');
const kelvinInput = document.querySelector('#kel > input');



function celtoFandK() {
	const cTemp = parceFloat(celciusInput.value);
	const fTemp = (cTemp * (9/5)) + 32;
	const kTemp = cTemp + 273.15;
	fahrenheitInput.value = fTemp;
	kelvinInput.value = kTemp;
	}
function fahrtoCandK() {
	const fTemp = parseFloat(fahrenheitInput.value);
	const cTemp = (fTemp - 32)*(5/9);
	const kTemp = (fTemp + 459.67)*(5/9);
	celciusInput.value = cTemp;
	kelvinInput.value = kTemp;

}

function keltoCandF() {
	const kTemp = parseFloat(kelvinInput.value);
	const cTemp = kTemp - 273.15;
	const fTemp = 9/5 * (kTemp - 273) + 32;
	celciusInput.value = cTemp;
	fahrenheitInput.value = fTemp;
}

celciusInput.addEventListener('input', celtoFandK);
fahrenheitInput.addEventListener('input', fahrtoCandK);
kelvinInput.addEventListener('input', keltoCandF);
