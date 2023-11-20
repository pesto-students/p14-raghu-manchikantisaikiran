// **Protecting the Object** 

const person = {
    name: "Sai Kiran",
    _age: 24,
    email: 'sai.kiran3916@gmail.com',
    getAge() {
        return this._age;
    },
    setAge(age) {
        this._age = age;
    }
}

// Make the name and email properties read-only. 
Object.defineProperty(person, "name", {
    writable: false,
});

Object.defineProperty(person, "email", {
    writable: false,
});

// Make the age property write-only. 
Object.defineProperties(person, {
    age: {
        set: function (newValue) {
            this._age = newValue;
        },
    }
});

// **JavaScript Prototype** 

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// Adding a method using prototype
Vehicle.prototype.getDetails = function () {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

// Create a subclass called Car that extends Vehicle and adds a property numSeats. 
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }
}

// Extend the base object
Car.prototype = Object.create(Vehicle.prototype);

// Override the getDetails method in the subclass
Car.prototype.getDetails = function () {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Number of Doors: ${this.numDoors}`;
};

// Tests
const vehicleInstance = new Vehicle("Toyota", "Camry", 2022);
const carInstance = new Car("Honda", "Civic", 2021, 4);

console.log("Vehicle Details:", vehicleInstance.getDetails());
console.log("Car Details:", carInstance.getDetails());