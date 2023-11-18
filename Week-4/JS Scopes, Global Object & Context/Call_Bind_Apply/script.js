class Calculator {

    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        return this.num1 / this.num2;
    }
}

class ScientificCalculator extends Calculator {
    constructor(num1, num2 = null) {
        super(num1, num2);
        this.num1 = num1;
        this.num2 = num2;
    }

    square() {
        return this.num1 * this.num1;
    }

    cube() {
        return this.num1 * this.num1 * this.num1;
    }

    power() {
        if (this.num2) {
            return Math.pow(this.num1, this.num2);
        }
    }
}

const scientificCalculator = new ScientificCalculator(10, 5);
const calculator = new Calculator();

// **Using the "call" method,** invoke the "add" method of the Calculator class with arguments 10 and 5. 
calculator.add.call(scientificCalculator);
// **Using the "apply" method**, invoke the "subtract" method of the Calculator class with arguments 10 and 5.
calculator.subtract.apply(scientificCalculator);

// **Using the "bind" method,** create a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result. Bind the "multiplyByTwo" method to the instance of the ScientificCalculator class. 
function multiplyByTwo() {
    return this.num1 * 2;
}
const scientificCalculator1 = new ScientificCalculator(5);
// Call the "multiplyByTwo" method on the instance of the ScientificCalculator class with argument 5 and print the returned result to the console. 
multiplyByTwo.bind(scientificCalculator1)();

// **Using the "bind" method,** create a new method named "powerOfThree" that raises a number to the power of 3 and returns the result. Bind the "powerOfThree" method to the instance of the ScientificCalculator class. 
function powerOfThree() {
    return Math.pow(this.num1, 3);
}
const scientificCalculator2 = new ScientificCalculator(2);
// Call the "powerOfThree" method on the instance of the ScientificCalculator class with argument 2 and print the returned result to the console. 
powerOfThree.bind(scientificCalculator)();

