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
// --------------------R SLIDER--------------------
var rsliderval;
function rsliderChange() {
  dcsliderval = document.getElementById("r-slider").value;
  document.getElementById("r-value").value = dcsliderval;
  fbias();
}

var td;
function txtchng1() {
    td = document.getElementById("r-value").value;
    document.getElementById("r-slider").value = td;
}

// --------------------POWER ON--------------------
function poweron(){
    if(document.getElementById("power-switch").checked==true){
        document.getElementById("r-value").readOnly=false;
        document.getElementById("l-value").readOnly=false;
        document.getElementById("c-value").readOnly=false;
        document.getElementById("dc-slider").disabled=false;
        document.getElementById("dc-value").value="0";
        document.getElementById("am-value").value="0";
        document.getElementById("am-value1").value="0";

    }
    if(document.getElementById("power-switch").checked==false){
        document.getElementById("r-value").readOnly=true;
        document.getElementById("l-value").readOnly=true;
        document.getElementById("c-value").readOnly=true;
        document.getElementById("dc-slider").disabled=true;
        document.getElementById("dc-value").value="";
        document.getElementById("am-value").value="";
        document.getElementById("am-value1").value="";
    }
}