function loadText() {
window.open('file2.html');
}

var alphHigh = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
var alphLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
var hiluxUno
var hiluxDos
hiluxUno = alphHigh[0] + alphLow[3] + alphLow[12] + alphLow[8] + alphLow[13];
hiluxDos = alphHigh[2] + alphLow[7] + alphLow[0] + alphLow[17] + alphHigh[15] + alphLow[0] + alphLow[18] + alphLow[18];


function hiluxNo(){
document.getElementById("no").innerHTML = "no";
document.getElementById("yes").innerHTML = "";
        }
  
function hiluxYes(){ 
document.getElementById("yes").innerHTML = "correct"; 
document.getElementById("no").innerHTML = "";
document.getElementById("pass1").value = "";
document.getElementById("pass2").value = "";
document.getElementById("finalNo").innerHTML = "";
}    
  
function hiluxEnter(){
var hilux = document.getElementById('pass1').value;
var hilux2 = document.getElementById('pass2').value;
   

    
    if(hilux == hiluxUno && hilux2 == hiluxDos){  
    hiluxYes();
    
    
    
    }else{
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
      hiluxNo();
    
}//else bracket
}//function bracket
    
    
       
    
//hiluxtime   
function hiluxTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(hiluxTime, 500);
}//function bracket
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}//function bracket    
    


function boxPop(){
var boxDiv = document.getElementById("boxContainer");  

    if(boxDiv.style.display == "none"){
        boxDiv.style.display = "block"
    }//boxDiv if statement bracket
}
    
function hiluxFinalEntry(){
    var hilux3 = document.getElementById('pass3').value;
    var hilux4 = document.getElementById('pass4').value;  
    
    if(hilux3 == buttonDiv.style.display + alphHigh[17] + alphLow[4] + alphHigh[11] + alphLow[14] + alphLow[6] && hilux4 == alphHigh[20] + alphLow[18] + alphLow[4] + alphLow[17] + alphHigh[11] + alphLow[14] + alphLow[6] + alphLow[8] + alphLow[13] + "!"){
    var top = document.getElementById("firstHalf");
    if(top.style.display = "block"){
    top.style.display = "none";
    accessGranted();
}
}
    if(hilux3 != buttonDiv.style.display + alphHigh[17] + alphLow[4] + alphHigh[11] + alphLow[14] + alphLow[6] && hilux4 != alphHigh[20] + alphLow[18] + alphLow[4] + alphLow[17] + alphHigh[11] + alphLow[14] + alphLow[6] + alphLow[8] + alphLow[13] + "!"){
    hiluxFinalNo();
    }
}
    
function hiluxFinalNo(){
    document.getElementById('pass3').value = "";
    document.getElementById('pass4').value = "";
    document.getElementById("finalNo").innerHTML = "no";
    document.getElementById("yes").innerHTML = "";
    boxUnPop();
        } 
    
function boxUnPop(){
var boxDiv = document.getElementById("boxContainer");  

    if(boxDiv.style.display == "block"){
        boxDiv.style.display = "none"
    }//boxDiv if statement bracket
    
    hiluxUno = hiluxUno + "1"
    hiluxDos = hiluxDos + "2"
}
    
var hilux3Two;
hilux3Two = alphHigh[17] + alphLow[4] + alphHigh[11] + alphLow[14] + alphLow[6];
var hilux4Two;
hilux4Two = alphHigh[20] + alphLow[18] +alphLow[4] + alphLow[17] + alphHigh[11] + alphLow[14] + alphLow[6] + alphLow[8] + alphLow[13];


