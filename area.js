const base =document.querySelector('#base');
const height =document.querySelector('#height');
const areaBtn = document.querySelector('#area-btn');
const outputEl = document.querySelector('#output');

function calculate(base,height){
    const area = (base * height)/2;
    return area ; 

}
function calcuateArea(){
 
  
  if( height.value === '' || base.value === '')
  { 
      outputEl.innerText = "Please enter both the values!!!";
  }else

  if( height.value <= 0 || base.value <= 0)
  { 
      outputEl.innerText = "Please enter positive values!!!";
  }
  else{

  const  area  = calculate(Number(base.value) , Number(height.value));
     outputEl.innerText="area of traiangle is  "+ area +"square units";
     
}
}
areaBtn.addEventListener("click",calcuateArea);       