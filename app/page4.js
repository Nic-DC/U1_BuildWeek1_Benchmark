let innertext = "0";

const resetcolor = function (event) {
    document.getElementById("one").style.color = "#561E6E";
    document.getElementById("two").style.color = "#561E6E";
    document.getElementById("three").style.color = "#561E6E";
    document.getElementById("four").style.color = "#561E6E";
    document.getElementById("five").style.color = "#561E6E";
    document.getElementById("six").style.color = "#561E6E";
    document.getElementById("seven").style.color = "#561E6E";
    document.getElementById("eight").style.color = "#561E6E";
    document.getElementById("nine").style.color = "#561E6E";
    document.getElementById("ten").style.color = "#561E6E";  
}


const changeColor1 = function (event) {
    resetcolor();
    document.getElementById("one").style.color = "#00FFFF";
}
const changeColor2 = function (event) {
    resetcolor();
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("one").style.color = "#00FFFF";
}
const changeColor3 = function (event) {
    resetcolor();
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
}
const changeColor4 = function (event) {
    resetcolor();
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
}
const changeColor5 = function (event) {
    resetcolor();
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
}
const changeColor6 = function (event) {
    resetcolor();
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
}
const changeColor7 = function (event) {
    resetcolor();
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
    document.getElementById("seven").style.color = "#00FFFF";
}
const changeColor8 = function (event) {
    resetcolor();
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
    document.getElementById("seven").style.color = "#00FFFF";
    document.getElementById("eight").style.color = "#00FFFF";
}
const changeColor9 = function (event) {
    resetcolor();
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
    document.getElementById("seven").style.color = "#00FFFF";
    document.getElementById("eight").style.color = "#00FFFF";
    document.getElementById("nine").style.color = "#00FFFF";
}
const changeColor10 = function (event) {
    resetcolor();
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
    document.getElementById("seven").style.color = "#00FFFF";
    document.getElementById("eight").style.color = "#00FFFF";
    document.getElementById("nine").style.color = "#00FFFF";
    document.getElementById("ten").style.color = "#00FFFF";  
}


const questions = ["From 0 to 10, how likely would you recommend EPICODE to a friend or a collegue?", "How do you rate the teacher?", "How do you rate the teacher assistant?"];

const changequestion = function () {
   
    const innertext = document.getElementById("feedbackQuestion").innerText
    console.log(innertext);
if (innertext === questions[0]) {
    return document.getElementById("feedbackQuestion").innerText = questions[1]
    } 
    if (innertext === questions[1]) {
    return document.getElementById("feedbackQuestion").innerText = questions[2]   
    } else {
    return document.getElementById("feedbackQuestion").innerText = "Thank you for your answers!"
    }
  };

  const resetplaceholder = function () {
  const input = document.getElementById('input');
input.value = "";
}

  nextQuestion.addEventListener("click", resetcolor);
  nextQuestion.addEventListener("click", changequestion);
  nextQuestion.addEventListener("click", resetplaceholder);
