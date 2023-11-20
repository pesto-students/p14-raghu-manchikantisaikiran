function calcWordFrequencies() {
    const wordStr = prompt("Please enter list of words separated by spaces");

    const wordsArr = wordStr.split(' ');

    const map = new Map();

    wordsArr.forEach((word) => {
        const value = map.get(word);
        if (value) {
            map.set(word, value + 1);
        } else {
            map.set(word, 1);
        }
    });

    map.forEach((value, key)=>{
        console.log(key, value);
    })

}