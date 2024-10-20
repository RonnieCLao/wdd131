document.addEventListener('DOMContentLoaded', () => {
    const temperatureF = 75;
    const windSpeedMph = 10;

    function calculateWindChill(tempF, speedMph) {
        return Math.round(35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16));
    }

    let windChill;
    if (temperatureF <= 50 && windSpeedMph > 3) {
        windChill = calculateWindChill(temperatureF, windSpeedMph) + " °F";
    } else {
        windChill = "N/A";
    }

    const weatherSection = document.querySelector('.weather');
    const windChillElement = document.createElement('p');
    windChillElement.innerHTML = `<span class="label">Wind Chill:</span> ${windChill}`;
    weatherSection.appendChild(windChillElement);
});
