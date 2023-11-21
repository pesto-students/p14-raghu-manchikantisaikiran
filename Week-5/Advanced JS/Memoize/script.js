const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};

const getTemperatureForCity = (() => {
    const cache = {}

    return (cityName) => {
        // Check if the temperature is already in the cache
        if (cache[cityName]) {
            console.log(`Temperature for ${cityName} (retrieved from cache): ${cache[cityName]}`);
            return cache[cityName];
        }

        // If not in the cache, fetch the temperature from the data
        if (temperatureData[cityName]) {
            // Store the result in the cache
            cache[cityName] = temperatureData[cityName];
            console.log(`Temperature for ${cityName}: ${cache[cityName]}`);
            return cache[cityName];
        }

        // If the city is not in the data, handle it accordingly (e.g., return an error)
        console.log(`Temperature data not available for ${cityName}`);
        return null;
    }
})();

getTemperatureForCity('New York');
getTemperatureForCity('New York');
getTemperatureForCity('London');
getTemperatureForCity('London');