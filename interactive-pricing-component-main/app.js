var slider = document.getElementById("myRange");
var output = document.getElementById("pv-num");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = "1234";
}