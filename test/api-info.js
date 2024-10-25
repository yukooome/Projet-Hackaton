

document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const weatherApiKey = '13a8212552579d1e8ec8126ba3817805'; // Remplacez par votre clé API OpenWeatherMap

    if (city) {
        // Appel à l'API météo
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
        const weatherData = await weatherResponse.json();

        if (weatherData.cod === 200) {
            const weatherInfo = `
                <h2>Météo actuelle à ${weatherData.name}</h2>
                <p>Température : ${weatherData.main.temp} °C</p>
                <p>Conditions : ${weatherData.weather[0].description}</p>
            `;
            document.getElementById('weatherResult').innerHTML = weatherInfo;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>Erreur : ${weatherData.message}</p>`;
        }
    } else {
        alert('Veuillez entrer une ville.');
    }
});
