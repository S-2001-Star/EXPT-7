// --------------------DC SLIDER--------------------
var dcsliderval;
function dcsliderChange() {
  dcsliderval = document.getElementById("dc-slider").value;
  document.getElementById("dc-value").value = dcsliderval;
  fbias();
}

var tc;
function txtchng() {
    tc = document.getElementById("dc-value").value;
    document.getElementById("dc-slider").value = tc;
}