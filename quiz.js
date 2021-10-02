   
const quizform = document.querySelector(".Quiz-form");
const submitBtn = document.querySelector("#sunmit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°","right angled", "Equilateral triangle", "Pythagoras", "360°"];

function calculateScore(e) {
    e.preventDefault();
    let score = 0;
    let  index = 0;
  const formResults = new FormData(quizform);
  for (const value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score+1;
    }
    index++;
    
  }
  outputEl.innerText = "your score is " + score;
 

}

submitBtn.addEventListener("click", calculateScore);