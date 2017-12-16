const request = require('request');

var getWeather = () => {
    request ({
        url: 'https://api.darksky.net/forecast/6116532b9310a3c3bea05f1df71a78b5/-27.8537264,153.3610228?units=ca', 
        json: true 
        }, (error, response, body) => {
            if ( !error && response.statusCode === 200) {
                console.log(`Current Temp: ${body.currently.temperature}`);
            } else
                console.log('Couldn\'t get weather');
            }); 
}

module.exports.getWeather = getWeather;

