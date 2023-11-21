
const generateTransactionId = (() => {
    let count = 0;
    const uniqueStr = '!@#$%^&*()-_=+';
    return () => {
        const id = uniqueStr + count;
        const transactioId = Symbol(id)
        count++;
        return {transactioId};
    }
})();

const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);