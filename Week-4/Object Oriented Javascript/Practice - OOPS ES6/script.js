// **Section 1 - Inheritance:** 

// Create a class called Vehicle with properties make, model, year, color, and a method drive(). 
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    // The drive() method should log "Driving {make} {model}." to the console. 
    drive() {
        console.log(`Driving ${make} ${model}.`);
    }
}

// Create a subclass called Car that extends Vehicle and adds a property numSeats. 
class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

// Create a subclass called RideShareCar that extends Car and adds a property isAvailable. 
class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
        super(make, model, year, color, numSeats, isAvailable)
        this.isAvailable = isAvailable;
    }
}

// **Section 2 - Polymorphism:** 

// Create a class called Shape with a method calculateArea(). Then, create three subclasses called Rectangle, Triangle, and Circle, each of which extends Shape. 
class Shape {
    calculateArea() {
        console.log("This method will be overridden by subclasses.");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Create instances of each subclass
const rectangleInstance = new Rectangle(5, 10);
const triangleInstance = new Triangle(8, 6);
const circleInstance = new Circle(4);

// Call calculateArea() on each instance and log the result to the console
console.log("Rectangle Area:", rectangleInstance.calculateArea());
console.log("Triangle Area:", triangleInstance.calculateArea());
console.log("Circle Area:", circleInstance.calculateArea());

// **Section 3 – Abstraction and encpasulation:** 

// Create a class called BankAccount with properties accountNumber, balance, and accountHolderName. 
// Then, create two subclasses called CheckingAccount and SavingsAccount, each of which extends BankAccount. 

class BankAccount {

    #accountNumber;
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.balance = balance;
        this.#accountHolderName = accountHolderName;
    }

    getBalance() {
        return this.balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.getBalance()}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.getBalance()}`);
        } else {
            console.log("Insufficient funds. Withdrawal failed.");
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.getBalance()}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.getBalance()}`);
        } else {
            console.log("Withdrawal failed. Insufficient funds.");
        }
    }
}

// Example usage
const checkingAccount = new CheckingAccount("C12345", 1000, "John Doe");
checkingAccount.deposit(500);
checkingAccount.withdraw(200);
checkingAccount.withdraw(1000); // This should fail due to insufficient funds
console.log("Checking Account Balance:", checkingAccount.getBalance());

const savingsAccount = new SavingsAccount("S67890", 1500, "Jane Smith");
savingsAccount.deposit(700);
savingsAccount.withdraw(300);
savingsAccount.withdraw(2000); // This should fail due to insufficient funds
console.log("Savings Account Balance:", savingsAccount.getBalance());
