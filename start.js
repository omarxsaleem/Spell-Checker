var numCorrect = 0; var words = [];
var answers = [];
var totalPoints = 100; var maxTime;
var spellings = ["Metamorphosis", "Consensus", "Longitude", "Pronunciation", "Unconscious"];
var answerOne; var answerTwo; var answerThree; var answerFour; var answerFive;
var audioOne = new Audio('metamorphosis.mp3'); words.push(audioOne);
var audioTwo = new Audio('consensus.mp3'); words.push(audioTwo);
var audioThree = new Audio('longitude.mp3'); words.push(audioThree);
var audioFour = new Audio('pronunciation.mp3'); words.push(audioFour);
var audioFive = new Audio('unconscious.mp3'); words.push(audioFive);
function maximumTime(){
var difficulty = prompt("Type a difficulty (Easy, Medium, Hard)"); if(difficulty == "Easy"){
maxTime = 60;
}else if(difficulty == "Medium"){
maxTime = 40;
}else{
maxTime = 30; }
}
//Author name: GSPTeck
//Date: Dec 14, 2020
//Title of program/source code: Create a Stopwatch in JavaScript
//Type: Source Code
//Web address or publisher: https://dev.to/gspteck/create-a-stopwatch-in-javascript- 2mak#:~:text=the%20time%20%F0%9F%98%82.- ,const%20timer%20%3D%20document.,their%20initial%20value%20is%200.
const timer = document.getElementById('stopwatch');
var min = 0;
var sec = 0;
var stoptime = true;
function startGame() { if (stoptime == true) {
stoptime = false;
timerCycle(); }
}
function timerCycle() { if (stoptime == false) { sec = parseInt(sec); min = parseInt(min);
sec = sec + 1;
if (sec == 60) { min = min + 1;
sec = 0; }
if (sec < 10 || sec == 0) {
sec = '0' + sec; }
if (min < 10 || min == 0) { min = '0' + min;
}
timer.innerHTML = min + ':' + sec;

setTimeout("timerCycle()", 1000); }
}
//End of citation
function wordOne(){
words[0].play(); }
function wordTwo(){
words[1].play(); }
function wordThree(){ words[2].play();
}
function wordFour(){
words[3].play(); }
function wordFive(){
words[4].play(); }
function checkOne(){
answerOne = document.getElementById("answerOne").value; if(answerOne == spellings[0]){
alert("Correct!"); }else{
alert("Wrong!");
totalPoints = totalPoints - 10; }
answers.push(answerOne); }
function removeOne() {
var inpOne = document.getElementById('answerOne'); inpOne.parentNode.removeChild(inpOne);
return false; }
function checkTwo(){
answerTwo = document.getElementById("answerTwo").value; if(answerTwo == spellings[1]){
alert("Correct!");

}else{ alert("Wrong!");
totalPoints = totalPoints - 10; }
answers.push(answerTwo); }
function removeTwo() {
var inpTwo = document.getElementById('answerTwo'); inpTwo.parentNode.removeChild(inpTwo);
return false; }
function checkThree(){
answerThree = document.getElementById("answerThree").value; if(answerThree == spellings[2]){
alert("Correct!"); }else{
alert("Wrong!");
totalPoints = totalPoints - 10; }
answers.push(answerThree); }
function removeThree() {
var inpThree = document.getElementById('answerThree'); inpThree.parentNode.removeChild(inpThree);
return false; }
function checkFour(){
answerFour = document.getElementById("answerFour").value; if(answerFour == spellings[3]){
alert("Correct!"); }else{
alert("Wrong!");
totalPoints = totalPoints - 10; }
answers.push(answerFour); }
function removeFour() {
var inpFour = document.getElementById('answerFour'); inpFour.parentNode.removeChild(inpFour);

return false; }
function checkFive(){
answerFive = document.getElementById("answerFive").value; if(answerFive == spellings[4]){
alert("Correct!"); }else{
alert("Wrong!");
totalPoints = totalPoints - 10; }
answers.push(answerFive); }
function removeFive() {
var inpFive = document.getElementById('answerFive'); inpFive.parentNode.removeChild(inpFive);
return false; }
function displayInfo(){
display(maxTime); }
function display(maxTime){ sec = parseInt(sec);
if (stoptime == false) { stoptime = true;
}
for(var i = 0; i < spellings.length; i++){ if(spellings[i] == answers[i]){
numCorrect++; }
}
if(sec > maxTime && numCorrect < 5){
alert("You Lose! It took you longer than the allocated time - " + maxTime + " seconds - to answer all five questions and you only got " + numCorrect + "/5 correct");
}else if(numCorrect < 5){
alert("You Lose! You only got " + numCorrect + "/5 correct");
}else if(sec > maxTime){
alert("You Lose! It took you longer than the allocated time - " + maxTime + " seconds -
to answer all five questions. "); }else{
alert("You win, you got all 5 correct and completed it within " + maxTime + " seconds!"); }

for(var i = 0; i < answers.length; i++){ document.getElementById("table").innerHTML += "<tr><td>" + answers[i] +
"</td><td>" + spellings[i] + "</tr></td>";
} }
