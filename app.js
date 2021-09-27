const input = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const OutputEl = document.querySelector('#output');

function CalculateSumOfAngles(angle1,angle2,angle3){
   const SumOFAngles = angle1+angle2+angle3;
    return SumOFAngles;

}


function IsTriangle(){
    const SumOFAngles = CalculateSumOfAngles(Number(input[0].value ),Number( input[1].value),Number( input[2].value));
    if(SumOFAngles===180){
      
        OutputEl.innerHTML="angles form a triangle";
    }
    else {
     
        OutputEl.innerHTML=" ohh angle entered by you does not form a triangle";
    }
   

}
isTriangleBtn.addEventListener("click",IsTriangle)