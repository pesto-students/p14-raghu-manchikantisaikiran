// Create a function named "counter" that takes no arguments and returns a function. 
function Counter() {
    let count = 0;
    // The returned function should increase a count variable by 1 and return its value each time it is called. 
    return function () {
        count++;
        return count;
    }
}

// Create two instances of the counter function and assign them to variables named "firstCounter" and "secondCounter". 
const firstCounter = new Counter();
const secondCounter = new Counter();

const firstValues = [];
const secondValues = [];

// Call the firstCounter function five times and store the returned values in an array named "firstValues". 
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());

//  Call the secondCounter function three times and store the returned values in an array named "secondValues". 
secondValues.push(secondCounter());
secondValues.push(secondCounter());
secondValues.push(secondCounter());

// Print the arrays 
console.log('firstValues: ', firstValues);
console.log('secondValues: ', secondValues);
