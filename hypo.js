   
const height = document.querySelector(".side-input");
const base = document.querySelector('.side-input1');
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");



function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
  
    if( height.value < 0 || base.value < 0)
    { 
        output.innerText = "Please enter positive values!!!🙄";
    }else
    
    if( height.value === "" || base.value === "")
    {
        output.innerText = "Please enter both the values !!! 🙄 ";
    }else 
    if(Number(height.value) === 0 || Number(base.value) === 0){
        console.log("kya");
        output.innerText = "Height or Base can not be zero. Please enter positive values !!! 🙄 ";
    }
    else{
    const sumOfSquares = calculateSumOfSquares(Number(sideInput[0].value), Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
   
}
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);