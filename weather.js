function getData() {
    const city = document.getElementById('search').value;
    const apiKey = 'e21185b8366e02bde08d707ae561bcba';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const options = {
        method: 'GET',
    };

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(response => {
            console.log(response);
            
            // Update HTML elements with fetched data
            document.getElementById('temp').innerHTML = `${response.main.temp}<sup>°</sup>`;
            document.getElementById('ws').innerHTML = `${response.wind.speed} m/s`;
            document.getElementById('hmdty').innerHTML = `${response.main.humidity}%`;
        })
        .catch(err => {
            console.error('Error:', err);
            alert('Could not retrieve data for the specified city.');
        });
}
