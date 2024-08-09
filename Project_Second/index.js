// A script for Bmi calculator

const Form = document.getElementById('form');

Form.addEventListener('submit' , function(evt){
  evt.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const ShowOnConsole = document.getElementById('result')
    if(height === ' ' || height < 0 || isNaN(height)){
     ShowOnConsole.innerHTML = '<span>The Height value given is invalid !!</span>'
    }
    else if(weight === ' ' || weight < 0 || isNaN(weight)){
      ShowOnConsole.innerHTML = '<span>The Weight value given is invalid !!</span>'
    }
    else{
      const BmiCalculate = ( (weight / ((height * height)/10000)) ).toFixed(2);
      ShowOnConsole.innerHTML = `<span>${BmiCalculate}</span>`;

      if(BmiCalculate < 18.6){
        document.getElementById('firstConditions').style.backgroundColor = 'yellow';
        document.getElementById('firstConditions').style.color = 'black';
      }
      else if(BmiCalculate > 18.6 && BmiCalculate < 24.9){
        document.getElementById('SecondConditions').style.backgroundColor = 'yellow';
        document.getElementById('SecondConditions').style.color = 'black';
      }
      else{
        document.getElementById('ThirdConditions').style.backgroundColor = 'yellow';
        document.getElementById('ThirdConditions').style.color = 'black';
      }
    }
})