const base =document.querySelectorAll('.input-area');
const areaBtn = document.querySelector('#area-btn');
const outputEl = document.querySelector('#output');

function calculate(base,height){
    const area = (base * height)/2;
    return area; 

}
function calcuateArea(){
  const area = calculate(Number(base[0].value),Number(base[1].value));
     outputEl.innerHTML="area of traiangle is  "+ area;
     
}
areaBtn.addEventListener("click",calcuateArea);