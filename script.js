let numbersContainer = document.querySelector('.numberButtons');
let numberButtons = [...numbersContainer.children];
let display = document.querySelector('.display')
let operatorContainer = document.querySelector('.operatorButtons');
let operatorButtons = [...operatorContainer.children];
let clearButton = document.querySelector('#clear');
let backspace = document.querySelector('#backspace')

let operator = '';
let firstNumber = '';
let secondNumber = '';
let result = '';

function displayNumber(num){
    if (operator === ''){
      if ((num == '.' && firstNumber.contains('.') == false) 
          || (num !== '.')){ 
         firstNumber = firstNumber + num;
         display.textContent = firstNumber;
    }
}
    else {
        if ((num === '.' && firstNumber.contains('.'))
            || (num !== '.') ){
           secondNumber = secondNumber + num;
           display.textContent = secondNumber;
            }
    }
}

function giveResult(){
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  if (secondNumber === 0 && operator === "/"){
    display.textContent = 'UNDEFINED'
}
  else {
    switch(operator){
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }
    result = +result.toFixed(5)
    display.textContent = result;
}
  firstNumber = '';
  secondNumber ='';
  operator = '';
}

numberButtons.forEach((item)=>{
    item.addEventListener("click", ()=>{
        let number = item.textContent.toString();
        displayNumber(number);
    })
    /* Add function to prevent more than 1 decimal */
})

operatorButtons.forEach((item)=>{
    item.addEventListener("click", () =>{
        if (item.textContent === '='){
            if (operator !== '' && firstNumber !== '' && secondNumber !== ''){
            giveResult()
            }
        }
        else{
            if (operator === ''){
                operator = item.textContent
            }
            else{
                giveResult();
                firstNumber = result;
                operator = item.textContent;
            }
        }
    })
})

/* Add functionality for backspace buttons */
clearButton.addEventListener('click', () => {
    result = '';
    firstNumber = '';
    secondNumber = '';
    operator = ''
    display.textContent = '';
})