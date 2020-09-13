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
}else{
        vic.style.display = "none"  
}}

var arrayText
var userText

function vicSpeak(){
userText = document.getElementById('vicAi').value;
arrayText = (string_to_array(userText))                                      
console.log(arrayText);


    
if(userText.includes("do you") || userText.includes("will you")){
    document.getElementById("vicsResponce").innerHTML = posNeg[Math.floor(Math.random() * posNeg.length)];
    document.getElementById("vicAi").value = "";
    console.log("do you");

}else if(arrayText[0].includes("say")){
    var fixedWords = userText.replace('say ','');
    document.getElementById("vicsResponce").innerHTML = fixedWords;
    document.getElementById("vicAi").value = "";
    console.log("say");

}else if(arrayText[0].includes("speak")){
    var fixedWords = userText.replace('speak ','');
    document.getElementById("vicsResponce").innerHTML = fixedWords;
    document.getElementById("vicAi").value = "";
    console.log("speak");

}else if(arrayText[0].includes("color")){
    document.getElementById("vicsResponce").innerHTML = "okay, changed color to " + arrayText[1];
    document.getElementById("bodyColor").setAttribute("bgcolor", arrayText[1]);
    document.getElementById("vicAi").value = "";
    console.log("color");

}else if(userText.includes("sorry") || userText.includes("apologize")){
    document.getElementById("vicsResponce").innerHTML = confirmations[Math.floor(Math.random() * confirmations.length)];
    document.getElementById("vicAi").value = "";
    console.log("sorry");

}else if(userText.includes('hello') && userText.includes("how are you") || userText.includes("how is your day")){
    document.getElementById("vicsResponce").innerHTML = greetings[Math.floor(Math.random() * greetings.length)] + ", " + howAreYou[Math.floor(Math.random() * howAreYou.length)];
    document.getElementById("vicAi").value = "";
    console.log("hello + how are you");

}else if(userText.includes("you") && userText.includes("bad") || userText.includes("terrible") || userText.includes(" shit") || userText.includes("the worst")){
    document.getElementById("vicsResponce").innerHTML = apologies[Math.floor(Math.random() * apologies.length)];
    document.getElementById("vicAi").value = "";
    console.log("you");

}else if(userText.includes("thank")){
    document.getElementById("vicsResponce").innerHTML = welcome[Math.floor(Math.random() * welcome.length)];
    document.getElementById("vicAi").value = "";
    console.log("thank");

}else if(userText.includes("i ") && userText.includes("miss") || userText.includes("am sad") || userText.includes("had a bad day") || userText.includes("want love") || userText.includes("loved") || userText.includes("depressed") || userText.includes("sad") || userText.includes("lost") || userText.includes(" bad") || userText.includes(" shit") || userText.includes(" die")){
    document.getElementById("vicsResponce").innerHTML = apologies2[Math.floor(Math.random() * apologies2.length)];
    document.getElementById("vicAi").value = "";
    console.log("i: bad");

}else if(userText.includes("i ") && userText.includes("happy") || userText.includes("excited") || userText.includes(" good") || userText.includes("in love") || userText.includes("raise") || userText.includes(" awesome") || userText.includes(" great")){
    document.getElementById("vicsResponce").innerHTML = excitedForYou[Math.floor(Math.random() * excitedForYou.length)];
    document.getElementById("vicAi").value = "";
    console.log("i: good");

}else if(userText.includes("i'm") && userText.includes("miss") || userText.includes("am sad") || userText.includes("had a bad day") || userText.includes("want love") || userText.includes("loved") || userText.includes("depressed") || userText.includes("sad") || userText.includes("lost") || userText.includes("bad") || userText.includes(" shit")){
    document.getElementById("vicsResponce").innerHTML = apologies2[Math.floor(Math.random() * apologies2.length)];
    document.getElementById("vicAi").value = "";
    console.log("i'm: bad");

}else if(userText.includes("can") && userText.includes("talk") || userText.includes("vent") || userText.includes("bad day") || userText.includes("tell") || userText.includes("speak") || userText.includes("anything") || userText.includes("show") || userText.includes("explain")){
    document.getElementById("vicsResponce").innerHTML = pos[Math.floor(Math.random() * pos.length)];
    document.getElementById("vicAi").value = "";
    console.log("can: talk etc.");

}else if(userText.includes("can") && userText.includes("give") || userText.includes("fuck") || userText.includes("hand") || userText.includes("deliver") || userText.includes("try") || userText.includes(" die") || userText.includes("kill") || userText.includes("sex")){
    document.getElementById("vicsResponce").innerHTML = inAble[Math.floor(Math.random() * inAble.length)];
    document.getElementById("vicAi").value = "";
    console.log("can: bad");

}else if(userText.includes("that") && userText.includes("great") || userText.includes("awesome") || userText.includes("very good") || userText.includes("nice") || userText.includes("good") || userText.includes("amazing") || userText.includes("for you") || userText.includes("lost") || userText.includes("cool") || userText.includes("dope")){
    document.getElementById("vicsResponce").innerHTML = pos[Math.floor(Math.random() * pos.length)];
    document.getElementById("vicAi").value = "";
    console.log("that");

}else if(userText.includes("she") && userText.includes("miss") || userText.includes("love") || userText.includes("sad") || userText.includes("left") || userText.includes("broke") || userText.includes("heart") || userText.includes("lost") || userText.includes("hate")){
    document.getElementById("vicsResponce").innerHTML = apologies2[Math.floor(Math.random() * apologies2.length)];
    document.getElementById("vicAi").value = "";
    console.log("she: bad");

}else if(userText.includes("she") && userText.includes("hot") || userText.includes("beautiful") || userText.includes("the best") || userText.includes("girlfriend") || userText.includes("stunning") || userText.includes("smart") || userText.includes("talked") || userText.includes("me")){
    document.getElementById("vicsResponce").innerHTML = neutral[Math.floor(Math.random() * neutral.length)];
    document.getElementById("vicAi").value = "";
    console.log("she: good");

}else if(userText.includes("him") && userText.includes("miss") || userText.includes("love") || userText.includes("sad") || userText.includes("left") || userText.includes("broke") || userText.includes("heart") || userText.includes("lost") || userText.includes("hate")){
    document.getElementById("vicsResponce").innerHTML = apologies2[Math.floor(Math.random() * apologies2.length)];
    document.getElementById("vicAi").value = "";
    console.log("him: bad");

}else if(arrayText[0].includes('hi') && userText.includes("how are you") || userText.includes("how is your day")){
    document.getElementById("vicsResponce").innerHTML = greetings[Math.floor(Math.random() * greetings.length)] + ", " + howAreYou[Math.floor(Math.random() * howAreYou.length)];
    document.getElementById("vicAi").value = "";
    console.log("hi + how are you");

}else if(userText.includes("how are you") || userText.includes("how is your day") || userText.includes("how was your day")){
    document.getElementById("vicsResponce").innerHTML = howAreYou[Math.floor(Math.random() * howAreYou.length)];
    document.getElementById("vicAi").value = "";
    console.log("how are you");

}else if(userText.includes("hello") || userText.includes("hey") || userText.includes("hi") || userText.includes("whats up") || userText.includes("greetings") || userText.includes("heyo") || userText.includes("hewwo") || userText.includes("goodmorning")){
    document.getElementById("vicsResponce").innerHTML = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById("vicAi").value = "";
    console.log("hello");

}else if(userText.includes("yes") || userText.includes("yeah") || userText.includes("yep") || userText.includes("sure")){
    document.getElementById("vicsResponce").innerHTML = neutral2[Math.floor(Math.random() * neutral2.length)];
    document.getElementById("vicAi").value = "";
    console.log("yes");

}else if(userText.includes("okay")){
    document.getElementById("vicsResponce").innerHTML = pos[Math.floor(Math.random() * pos.length)];
    document.getElementById("vicAi").value = "";
    console.log("okay");

}else if(userText.includes("im") && userText.includes("miss") || userText.includes("am sad") || userText.includes("had a bad day") || userText.includes("want love") || userText.includes("loved") || userText.includes("depressed") || userText.includes("sad") || userText.includes("lost") || userText.includes("bad") || userText.includes(" shit")){
    document.getElementById("vicsResponce").innerHTML = apologies2[Math.floor(Math.random() * apologies2.length)];
    document.getElementById("vicAi").value = "";
    console.log("im: bad");

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


var excitedForYou = ["that's awesome!", "that's so cool! i am happy for you", "awesome! tell me more!", "tell me more!", "that's great! tell me more about it", "awesome!", "great!", "wow! tell me more!", "sweet!", "cool!"]
var neutral2 = ["okay...", "tell me more if you need to", "interesting...", "go ahead", "got it", "sure"]
var welcome = ["no problem", "anytime", "for sure!", "yeah!", "i'll always be here", "you got it", "you're welcome!"]
var neg = ["no", "no!", "no, sorry", "no way!", "no no no", "not at all", "nooooooo"]
var pos = ["yes", "yes!", "for sure", "absolutly", "yes please!", "you got that right!", "yes! yes! yes!"]
var neutral = ["interesting, tell me more...", "how do you feel about this?", "that's super interesting, what's your view on it?", "that's a good thing right?", "thank you for telling me that story!", "tell me more..."]
var apologies2 = ["i'm sorry", "i'm sorry to hear that. do you want to talk about it?", "i'm really sorry, i hate hearing that", "everything will be okay, i promise", "is there anything i can do to help?", "are you going to be okay?", "im sorry about all that, want to talk?"]
var inAble = ["no", "i can't do that", "i will not do that", "i was not made to do that", "why would you want that?", "sorry, no", "there is no way i will do that, sorry"]
var apologies = ["i'm sorry", "what did i do wrong?", "i'm sorry i made you feel that way", "oh :(", "have i failed you?", "what can i do to make up for it?", "do you hate me?"]
var confirmations = ["it's okay", "don't be sorry", "don't worry about it", "don't sweat it", "no worries!"]
var howAreYou = ["i am great", "i'm good", "i'm awesome", "great, how are you?", "today i'm having a great time", "i am doing amazing"]
var greetings = ["hello", "hi", "greetings user", "greetings", "hello, how are you?", "what's up?", "hi!"];
var posNeg = ["yes", "no", "absolutly", "i couldn't tell you", "no way!", "that's a good question", "i don't know", "sure"];   
var aiResponce = ["yes", "no", "why", "I", "can", "do", "it", "my", "have", "a", "help", "will", "able", "to", "not", "speak", "user", "am", "the", "word", "you", "are", "go", "can't", "should", "thing", "with", "those", "they", "couldn't"];
    


string_to_array = function (str) {
     return str.trim().split(' ');
};
