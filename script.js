const body = document.querySelector("body");
const header = document.querySelector(".header");
const container = document.querySelector(".container")
const themeChanger = document.querySelector("[type='range']");


themeChanger.addEventListener("change", (e) => {
    if(e.target.value === "1") {
        body.classList.add("theme-one");
        header.classList.add("theme-one");
        container.classList.add("theme-one");
        body.classList.remove("theme-two");
        header.classList.remove("theme-two");
        container.classList.remove("theme-two");
        body.classList.remove("theme-three");
        header.classList.remove("theme-three");
        container.classList.remove("theme-three");
    }
    if(e.target.value === "2") {
        body.classList.remove("theme-one");
        header.classList.remove("theme-one");
        container.classList.remove("theme-one");
        body.classList.add("theme-two");
        header.classList.add("theme-two");
        container.classList.add("theme-two");
        body.classList.remove("theme-three");
        header.classList.remove("theme-three");
        container.classList.remove("theme-three");
    }if(e.target.value === "3") {
        body.classList.remove("theme-one");
        header.classList.remove("theme-one");
        container.classList.remove("theme-one");
        body.classList.remove("theme-two");
        header.classList.remove("theme-two");
        container.classList.remove("theme-two");
        body.classList.add("theme-three");
        header.classList.add("theme-three");
        container.classList.add("theme-three");
    }
});


// const screenResult = document.querySelector(".screen");
// const buttons = document.querySelectorAll(".buttons .button");



// Array.from(buttons).forEach(button => {
//     button.addEventListener("click", (e) => {
//         if(e.target.innerText === "RESET") {
//             screenResult.innerText = ""
//         }else {
//             screenResult.innerText += e.target.innerText;
//         }
//     });
// });

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const equalButton = document.querySelector('[data-equal]');
const previousOperandTextField = document.querySelector('.previous-operand');
const currentOperandTextField = document.querySelector('.current-operand');


class Calculator {
    constructor(previousOperandTextField, currentOperandTextField) {
        this.previousOperandTextField = previousOperandTextField;
        this.currentOperandTextField = currentOperandTextField;
        this.clearAll()
    }

    clearAll() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    //every single time a user on a number to add to the screen
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    selectOperation(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.calcutale()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    calcutale() {
        let calculation
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(previous) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                calculation = previous + current
                break
            case '-':
                calculation = previous - current
                break
            case '*':
                calculation = previous * current
                break
            case '/':
                calculation = previous / current
                break
            default:
                return
        }
        this.currentOperand = calculation
        this.previousOperand = ''
        this.operation = undefined 
    }

    //comma delimiter
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        //if there is just a decimal or nothing
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        }else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 1 })//it can never be any decimal places after this value when it gets converted to a string with a bunch of commas
        }

        if(decimalDigits !=  null) {
            return `${integerDisplay}.${decimalDigits}`
        }
        else {
            return integerDisplay
        }
    }

    update() {
        this.currentOperandTextField.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null) {
            this.previousOperandTextField.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else {
            this.previousOperandTextField.innerText = ''
        }
    }
}

const calculator = new Calculator(previousOperandTextField, currentOperandTextField);


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.update()
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectOperation(button.dataset.value)
        calculator.update()
    });
});


equalButton.addEventListener('click', () => {
    calculator.calcutale()
    calculator.update()
});

deleteButton.addEventListener("click", () => {
    calculator.delete()
    calculator.update()
});

resetButton.addEventListener("click", () => {
    console.log('yes')
    calculator.clearAll()
    calculator.update()
})