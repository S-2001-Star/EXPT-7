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
// --------------------L SLIDER--------------------
var lsliderval;
function lsliderChange() {
  dcsliderval = document.getElementById("l-slider").value;
  document.getElementById("l-value").value = dcsliderval;
  fbias();
}

var te;
function txtchng2() {
    te = document.getElementById("l-value").value;
    document.getElementById("l-slider").value = te;
}

// --------------------C SLIDER--------------------
var rsliderval;
function csliderChange() {
  dcsliderval = document.getElementById("c-slider").value;
  document.getElementById("c-value").value = dcsliderval;
  fbias();
}

var tf;
function txtchng3() {
    tf = document.getElementById("c-value").value;
    document.getElementById("c-slider").value = tf;
}
// --------------------POWER ON--------------------
function poweron(){
    if(document.getElementById("power-switch").checked==true){
        document.getElementById("dc-slider").disabled=false;
        document.getElementById("r-slider").disabled=false;
        document.getElementById("l-slider").disabled=false;
        document.getElementById("c-slider").disabled=false;
        document.getElementById("dc-value").value="0";
        document.getElementById("am-value").value="0";
        document.getElementById("am-value1").value="0";
    }
    if(document.getElementById("power-switch").checked==false){
        document.getElementById("dc-slider").disabled=true;
        document.getElementById("r-slider").disabled=true;
        document.getElementById("l-slider").disabled=true;
        document.getElementById("c-slider").disabled=true;
        document.getElementById("dc-value").value="";
        document.getElementById("am-value").value="";
        document.getElementById("am-value1").value="";
    }
}

var vs, frq, vin, x, xl, w, xc, c;


function sim_calc(){

    //---------------------VOLTMETER--------------
    vs = 230;
    frq = 50;
    x= document.getElementById("dc-value").value;

    vin= parseFloat(x)*vs;
    document.getElementById("am-value1").value= vin.toPrecision(3);
    //---------------------INDUCTIVE REACTANCE--------------
    w = 314.16;
    l = document.getElementById("l-value").value;

    xl = parseFloat(w)*parseInt(l);
    document.getElementById("XL_out").value = xl.toPrecision(4);
    //---------------------INDUCTIVE CAPACITANCE--------------
    w = 314.16;
    c = document.getElementById("c-value").value;

    xc = (1/(parseFloat(w)*parseFloat(c)));
    document.getElementById("XC_out").value = xc.toPrecision(4);

}