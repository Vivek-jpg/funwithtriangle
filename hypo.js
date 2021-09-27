const input = document.querySelectorAll('.side-input');
const calculateBtn =document.querySelector('#hypotenuse-btn');
const outputEl =document.querySelector('#ouput');

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    
  console.log( sumOfSquares);
}
function calculateHypotenuse(){
    calculateSumOfSquares (3,5);
}
calculateBtn.addEventListener("click",calculateSumOfSquares)