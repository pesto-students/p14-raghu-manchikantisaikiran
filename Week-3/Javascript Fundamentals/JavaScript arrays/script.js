// Put your solution here
function divideArray(numbers) {
    const evenNums = [];
    const oddNums = [];

    numbers.forEach(num => {
        if (num % 2 == 0) {
            evenNums.push(num);
        } else {
            oddNums.push(num);
        }
    })

    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);

    log(evenNums, 'Even');
    log(oddNums, 'Odd');
}

function log(numbers, type) {
    console.log(`${type} numbers:`)
    if (numbers.length) {
        numbers.forEach((n) => {
            console.log(n);
        })
    } else {
        console.log('None');
    }
}

// sample test cases
divideArray([4, 2, 9, 1, 8]);
divideArray([4, 2, 8]);