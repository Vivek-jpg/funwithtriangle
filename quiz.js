const QuizForm = document.querySelector('.Quiz-form')
const Submitbtn = document.querySelector('#sunmit-answer-btn')
const OutputEw = document.querySelector('#output');
const cirrectAnswer =["90","right angle",];
function calculateScore(){
  let score =0;
  let index = 0;
  const formResults=new FormData(QuizForm);
 for(let value of formResults.values()){
   if(value===cirrectAnswer[index]){
       score++;
   }
   index++
 }
  
  OutputEw.innerText("your scoe is"+score);
}
Submitbtn.addEventListener("click",calculateScore)