// clears screen or adds numbers to screen
function inputNo(btnValue) {
    let numStr = btnValue.toString();
    scrStr = scrStr.concat(numStr)
    screen.innerHTML = scrStr;
    console.log(equation);       
    return scrStr;
}
// clear the screen
function clearScreen(btnValue) {
    console.log(btnValue);
    screen.innerHTML = '0';
    scrStr = '';
    equation = [];
}
// prints operation to console
function inputOp(btnValue) {
    console.log(btnValue);
    let opVal = btnValue;
    equation.push(opVal);
    console.log(equation);
}
// screen variable
const screen = document.querySelector('#screen');
// default screen to 0
screen.innerHTML = '0';
// default value for string of numbers on screen
let scrStr = '';
// array of equation
let equation = [];


// select buttons on calc with numbers
const btnns = document.querySelectorAll('.btnn');
for (const btnn of btnns) {
    btnn.addEventListener('click', () => {
    let btnValue = btnn.value;
    if (scrStr.length < 7) {
        inputNo(btnValue);  
    }   
})
}
// select buttons of operations
const btnos = document.querySelectorAll('.btno');
for (const btno of btnos) {
    btno.addEventListener('click', () => {
    let btnValue = btno.value;
        if (btno.value === 'clear') {
            clearScreen('clear');
        }
        else if ( btno.value === '=') {
            equation.push(scrStr);
            let answer = eval(equation.join(' '));
            console.log(answer);
            screen.innerHTML = answer;
        }
        else {
            equation.push(scrStr);
            inputOp(btnValue);
            screen.innerHTML = '0';
            scrStr = ''
        }
    })
}   
