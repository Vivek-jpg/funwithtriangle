const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const OutputEl = document.querySelector('#output');

function CalculateSumOfAngles(angle1,angle2,angle3){
   const SumOFAngles = angle1+angle2+angle3;
    return SumOFAngles;

}


function IsTriangle(){
    const SumOFAngles = CalculateSumOfAngles(Number(inputs[0].value ),Number( inputs[1].value),Number( inputs[2].value));
    if(SumOFAngles===180){
          if(inputs[0].value == 0 || inputs[1].value == 0 || inputs[2].value == 0)
        {
            console.log("yes traiangle");
            outputElement.innerText = "The angles can not be zero hence it does not form a triangle 🙂";
        }
        else 
        {
      
        OutputEl.innerText="angles form a triangle 🙂";
        }

    }else if(inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === ""){
        OutputEl.innerText = "Please enter all the values 🙄";

    }else if(inputs[0].value <= 0 || inputs[1].value <= 0 || inputs[2].value <= 0){
        OutputEl.innerText = "Please enter positive values 🙄";
    }

    
    else { 
     
        OutputEl.innerHTML=" ohh angle entered by you does not form a triangle";
    }
   

}
isTriangleBtn.addEventListener("click",IsTriangle)