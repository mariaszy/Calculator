const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');


let result = '';




function displayNumbers () {
    console.log('dupa');
       if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return console.log('first ret');
      /*if (this.textContent === '.' && currentNumber.innerHTML === '') {console.log(currentNumber, 'cN') 
      return currentNumber.innerHTML = '.0'*/
    
    console.log('123123')

     if (this.textContent === '-' && currentNumber.innerHTML !== '-') {
        currentNumber.innerHTML = '-' + currentNumber.innerHTML;
     }
    console.log('leci dalej');
    /*jak tutaj ustawic wszystkie numbersButtons na liczby?? */

        currentNumber.innerHTML += this.textContent;

}

function operate() {
       if (currentNumber.innerHTML === '' && this.textContent === '-') {
            currentNumber.innerHTML = '-'; //to nie działa
            return;
        
        }
       
        else if (currentNumber.innerHTML === '') {
            return;    
        }
        
        if(mathSign !== '') {
            showResult();
        }
        previousNumber.innerHTML = currentNumber.innerHTML;
        mathSign.innerHTML = this.textContent;
        currentNumber.innerHTML ='';
    console.log("this is my previous number " + previousNumber);
    console.log("this is type of previousNum" +typeof(previousNumber));
}




function showResult () {
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;
    console.log(previousNumber.innerHTML.trim());
    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML.trim());
    let operator = mathSign.innerHTML;
    console.log(a, 'a');
    console.log(b, 'b');
    switch(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case 'x':
        result = a * b;
        break;
        case ':':
        result = b / a;
        break;
        case '2^':
        result = b ** a;
        break;

        default:
        result = 'dupaaaa';

        console.log("a is a:  " + a);
    }
    
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';



}


function clearScreen() {
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';

}




// nasłuchiwanie

operatorsButtons.forEach((button) => {
     
    return button.addEventListener('click', operate)});

equalButton.addEventListener('click', showResult);

numbersButtons.forEach(button => {
    button.addEventListener('click', displayNumbers)
});

clearButton.addEventListener('click', clearScreen);
