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
if(userText.includes("do you") || userText.includes("will you")){
    document.getElementById("vicsResponce").innerHTML = posNeg[Math.floor(Math.random() * posNeg.length)];
    document.getElementById("vicAi").value = "";
}else if(userText.includes('hello') && userText.includes("how are you") || userText.includes("how is your day")){
    document.getElementById("vicsResponce").innerHTML = greetings[Math.floor(Math.random() * greetings.length)] + ", " + howAreYou[Math.floor(Math.random() * howAreYou.length)];
    document.getElementById("vicAi").value = "";
}else if(userText.includes('hi') && userText.includes("how are you") || userText.includes("how is your day")){
    document.getElementById("vicsResponce").innerHTML = greetings[Math.floor(Math.random() * greetings.length)] + ", " + howAreYou[Math.floor(Math.random() * howAreYou.length)];
    document.getElementById("vicAi").value = "";
}else if(userText.includes("hello") || userText.includes("hi")){
    document.getElementById("vicsResponce").innerHTML = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById("vicAi").value = "";
}else{
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
}



function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



var howAreYou = ["i am great", "i'm good", "im awesome", "great, how are you?", "today i'm having a great time", "i am doing amazing"]
var greetings = ["hello", "hi", "greetings user", "greetings", "hello, how are you?", "what's up?", "hi!"];
var posNeg = ["yes", "no", "absolutly", "i couldn't tell you", "no way!", "that's a good question", "i don't know", "sure"];   
var aiResponce = ["yes", "no", "why", "I", "can", "do", "it", "my", "have", "a", "help", "will", "able", "to", "not", "speak", "user", "am", "the", "word", "you", "are", "go", "can't", "should", "thing", "with", "those", "they", "couldn't"];
    
    
