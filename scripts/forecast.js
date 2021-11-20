const key = 'd77208c0f3744282b72124640211611';

// get weather information
const getWeather = async (id) => {

    const base = 'http://api.weatherapi.com/v1/current.json';
    const query = `?q=${city}`;
    
    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data)
};

// get city information
const getCity = async (city) => {

    const base = 'http://api.weatherapi.com/v1/search.json';
    const query = `?key=${key}&?q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    //console.log(data[0]);
    return data[0];
};

getCity('london').then(data => {
    return getWeather(data.Key);
}).then(data => {
    console.log(data);
}).catch(err => console.log(err));

// getCity('manchester')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// getWeather(); 
// // london id 2801268

// api call http://api.weatherapi.com/v1/search.json?key=d77208c0f3744282b72124640211611&q=london
