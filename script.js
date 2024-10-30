const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

let numMemory = 0
let numInput = 0
let operator = ''

const operate = (n1, n2) => {
    switch(operator) {
        case '+':
            return add(n1, n2)
        case '-':
            return subtract(n1, n2)
        case 'X':
            return multiply(n1, n2)
        case '/':
            return divide(n1, n2)
    }
}

// DISPLAY CONTROL

const display = document.querySelector('.display')

const populate = (number) => {
    display.innerText = number.toString()
}

// NUMBER KEYS CONTROL

const btnNumers = document.querySelectorAll('.btn-number')
btnNumers.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(numInput == '0') {
            numInput = btn.innerText
        } else {
            numInput += btn.innerText
        }
       populate(numInput)
    })
})

const btnDecimal = document.querySelector('.btn-decimal')

btnDecimal.addEventListener('click', () => {
    while(numInput.includes('.') == false){
            numInput += '.'
    }
    populate(numInput)
})

// OPERATIONS CONTROL

const btnOperations = document.querySelectorAll('.btn-operator')

btnOperations.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(operator == btn.innerText) {
            numMemory = operate(parseFloat(numMemory), parseFloat(numInput))
            populate(numMemory)
        } else {
            operator = btn.innerText
            numMemory = display.innerText
            numInput = 0
            populate('')
        }
    })
})

const btnEquals = document.querySelector('.btn-equals')

btnEquals.addEventListener('click', () => {
    numMemory = operate(parseFloat(numMemory), parseFloat(numInput))
    populate(numMemory)
})

const btnClear = document.querySelector('.btn-clear')

btnClear.addEventListener('click', () => {
    numMemory = 0
    numInput = 0
    operator = ''
    populate('')
})