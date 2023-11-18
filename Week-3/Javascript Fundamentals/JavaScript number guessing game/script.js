// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
    let userGuess = prompt("Enter a number between 1 and 100.");
    let numberOfGuesses = 1;

    while (numberOfGuesses < totalGuesses) {

        if (userGuess === null) {
            return 0; // User pressed Cancel
        }

        userGuess = parseInt(userGuess);

        if (isNaN(userGuess)) {
            userGuess = prompt("Please enter a number.");
            continue;
        }

        if (userGuess === numToGuess) {
            return numberOfGuesses;
        } else {
            userGuess = prompt(`${userGuess} is too ${userGuess < numToGuess ? "small" : "large"}. Guess a ${userGuess < numToGuess ? "larger" : "smaller"} number.`);
        }
        numberOfGuesses++;
    }

    return 0; // User ran out of guesses
}

// Sample Test Case:
const result = playGuessingGame(5);
console.log(result);
