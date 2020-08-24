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



//it's not much of anything vic, I wasn't good with ai like you were, but i hope you still hear me

function theAccident(){
    var vic = document.getElementById("forVictor");
    if(vic.style.display == "none"){
        vic.style.display = "block"
}}

function vicSpeak(){
var userText = document.getElementById('vicAi').value;
document.getElementById("vicAi").value = "";
var numberHolder = Math.floor(Math.random() * 5);  
if(numberHolder == 0){
    singleResponce();
}else if(numberHolder == 1){
    threeResponce();
}else if(numberHolder == 2){
    fiveResponce();
}else if(numberHolder == 3){
    eightResponce();
}else if(numberHolder == 4){
    tenResponce();
}}
    

function singleResponce(){
    document.getElementById("vicsResponce").innerHTML = aiResponce[Math.floor(Math.random() * aiResponce.length)];
}



function threeResponce(){
    document.getElementById("vicsResponce").innerHTML = aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)];
}



function fiveResponce(){
    document.getElementById("vicsResponce").innerHTML = aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)];
}



function eightResponce(){
    document.getElementById("vicsResponce").innerHTML = aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)];
}



function tenResponce(){
    document.getElementById("vicsResponce").innerHTML = aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)] + " " + aiResponce[Math.floor(Math.random() * aiResponce.length)];
}

      
var aiResponce = ["yes", "no", "why", "I", "can", "do", "it", "my", "have", "a", "help", "will", "able", "to", "not", "speak", "user", "am", "the", "word", "you", "are", "go", "can't", "should", "thing", "with", "those", "they", "couldn't"];
    
    