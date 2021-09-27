   
const quizform = document.querySelector(".Quiz-form");
const submitBtn = document.querySelector("#sunmit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = [
  "90°",
  "right angled",
 
];

function calculateScore(e) {
    e.preventDefault();
  const formResults = new FormData(quizform);
  let score = 1;
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
    
  }
  outputEl.innerText = "The score is " + score;
 

}

submitBtn.addEventListener("click", calculateScore);