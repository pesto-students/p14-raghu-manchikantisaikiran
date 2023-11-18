async function getExchangeRate(currencyCode) {
    // Your code here 
    const API_URL = 'http://api.exchangerate.host/latest?access_key=6f91733d7f76b7685933e10bdb44cac0'
    try {
        const responseJSON = await fetch(API_URL);
        const response = await responseJSON.json();

        if (response.error) {
            throw new Error(response.error.info);
        }

        let exchangerate = null;
        if (response?.rates[currencyCode]) {
            exchangerate = parseFloat(response?.rates[currencyCode]).toFixed(4);
        }
        console.log(exchangerate);
    } catch (e) {
        console.log(e);
    }
}

// sample test cases
getExchangeRate("USD");
getExchangeRate("EUR");
getExchangeRate("JPY");
getExchangeRate("XYZ");