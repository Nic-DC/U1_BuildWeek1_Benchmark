/* ------ 
        The Data:
                 -----*/
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
// we select the elements we ll need
const container = document.querySelector(".container");
const answers = document.querySelector(".answers");
const questionText = document.querySelector(".questionText");
const footer = document.getElementById("footer");
const constantString = document.getElementById("constantString");
const ramainingQuestions = document.getElementById("ramainingQuestions");
const totalQuestions = document.getElementById("totalQuestions");
const nextButton = document.querySelector(".nextButton");
const scoreboardButton = document.querySelector(".scoreboardButton");
scoreboardButton.hidden = true;
const canvas = document.getElementById("circle");
const score = document.getElementById("score");
// global variables
let userScore = 0;
let questionsLeft = 0;
let chosenAnswers = [];
let totalQs = questions.length;
let totalQuestionsArray = [];
// footer
// array of total number of questions:
const getCurrentQuestionArr = function () {
  for (let i = 1; i <= questions.length; i++) {
    totalQuestionsArray.push(i);
  }
  console.log({ totalQuestionsArray });
  return totalQuestionsArray;
};
getCurrentQuestionArr();
const showRemainingQuestions = function () {
  totalQuestions.innerText = `/  ${totalQs}`;
};
showRemainingQuestions();
// we create an array of arrays with the question and the answers [correct and incorrect]
let allQsAndAnswers = [];
const getAllAnswers = function (arr) {
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i].question;
    let correctAnswer = questions[i].correct_answer;
    let incorrectAnswersArr = questions[i].incorrect_answers;
    let answers = [];
    answers.push(question, correctAnswer);
    for (let incorrectAnswer of incorrectAnswersArr) {
      answers.push(incorrectAnswer);
    }
    allQsAndAnswers.push(answers);
    // If we want to create an array of arrays with correct answer ans the incorrect answers
    // let correctAnswerArr = [];
    // let answers = [];
    // correctAnswerArr.push(questions[i].correct_answer);
    // answers.push(correctAnswerArr, questions[i].incorrect_answers);
    // allAnswers.push(answers);
  }
  console.log(allQsAndAnswers.length);
  console.log({ allQsAndAnswers });
  return allQsAndAnswers;
};
console.log(getAllAnswers(questions));
// we create a function that will act as random index generator for rendering the questions
const newRandomQuestion = function () {
  let random = Math.floor(Math.random() * (allQsAndAnswers.length - 1)); // we need indexes from 0 to 9
  return random;
};
console.log(newRandomQuestion());
let arrayWithRandomValues = [];
// we create the function that, when the button is clicked, the question with the possible answers [including the correct one] appears
// and, when an answer is clicked, the useScore global variable increases by 1 [only after the click for the moment]
const showQuestion = function () {
  // we clear the content every time a question is asked
  answers.innerHTML = "";
  // total nr of questions array
  let totalNrOfQuestions = getCurrentQuestionArr();
  // we make sure the questions are not displayed twice
  let random = newRandomQuestion();
  if (arrayWithRandomValues.length === 0) {
    arrayWithRandomValues.push(random);
  } else if (
    arrayWithRandomValues.length > 0 &&
    !arrayWithRandomValues.includes(random)
  ) {
    arrayWithRandomValues.push(random);
  } else {
    random = newRandomQuestion();
    arrayWithRandomValues.push(random);
  }
  const randomArrayOfQsAndAs = allQsAndAnswers[random];
  let questionShow = randomArrayOfQsAndAs[0];
  let correctAnswer = randomArrayOfQsAndAs[1];
  let incorrectAnswers = randomArrayOfQsAndAs.slice(2);
  questionText.innerText = questionShow;
  for (let i = 1; i < randomArrayOfQsAndAs.length; i++) {
    const answer = document.createElement("h3");
    answer.classList.add("answer");
    answer.innerText = randomArrayOfQsAndAs[i];
    answer.addEventListener("click", () => {
      if (randomArrayOfQsAndAs[i] === correctAnswer) {
        userScore++;
      }
    });
    answers.appendChild(answer);
  }
  console.log({ userScore });
};
// showQuestion();
// dynamically change the question number
const changeQuestionNumber = function () {
  let result = "";
  let array = totalQuestionsArray;
  console.log({ array });
  let questionNr = "";
  console.log({ questionNr });
  let nr = parseInt(ramainingQuestions.innerText);
  console.log({ nr });
  if (nr === 10) {
    nextButton.hidden = true;
    scoreboardButton.hidden = false;
    result = userScore;
    score.innerText = `Your total score is ${result}`;
  } else {
    nr++;
    questionNr = nr;
    ramainingQuestions.innerText = questionNr;
  }
};
// changeQuestionNumber()
const timeH = document.querySelector("#secNum");
let timeSecond = 10;
//this function returns the initial value of time second
const resetTimer = function () {
  timeSecond = 10;
  endTime();
  //countDownTimer();
};
function displayTime(second) {
  const sec = Math.floor(second % 60);
  console.log({ sec });
  timeH.innerText = `${sec < 10 ? "0" : " "}${sec}`;
}
function endTime() {
  timeH.innerText = timeSecond;
}
const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    endTime();
    clearInterval(countDown);
  }
}, 1000);
//this function starts the countdown
const timeStart = function () {
  countDown();
};
//CLOCK CODE
const semicircles = document.querySelectorAll(".semiCircle");
console.log(semicircles);
const hr = 0;
const min = 0;
const sec = timeSecond;
const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
let setTime = hours + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime + setTime;
const timerLoop = setInterval(countDownTimer);
//countDownTimer();
function countDownTimer() {
  const currentTime = Date.now();
  const remainingTime = futureTime - currentTime;
  const angle = (remainingTime / setTime) * 360;
  if (angle > 180) {
    semicircles[2].style.display = "none";
    // semicircles[0].style.display = "block";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  } else {
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  }
  if (remainingTime < 0) {
    clearInterval(timerLoop);
  }
}
nextButton.addEventListener("click", showQuestion);
nextButton.addEventListener("click", changeQuestionNumber);
nextButton.addEventListener("click", resetTimer);
nextButton.addEventListener("click", timeStart);
