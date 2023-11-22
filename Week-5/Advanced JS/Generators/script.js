// Write a function that takes an array of strings and returns an iterator that yields the symbols of the strings in the array. 
function* stringToSymbols(array) {
    for (let str of array) {
        if (typeof str == 'string') { //converting to symbol only if it is a string
            yield Symbol(str);
        } else {
            continue;
        }
    }
};

for (const symbol of stringToSymbols(['ab', 'bc', 1, 'cd'])) {
    console.log(symbol);
}

