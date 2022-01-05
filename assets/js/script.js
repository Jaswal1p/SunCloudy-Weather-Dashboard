let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#city");
let tempEl = document.querySelector("#temp");

let containerEl = document.querySelector("#container");
let cityNameEl = document.querySelector(".city-name");
let fiveDayContainer = document.querySelector('#forecast')


let humidityEl = document.querySelector("#humidity");
let windEl = document.querySelector("#wind");



let apiKey = "61d80f3cab144660935d5755dd2fb631";

let formSubmitHandler = function (event) {
    //prevents page from refresh
    event.preventDefault();

    // get value from input element
    let city = nameInputEl.value.trim();

    if (city) {
        getCityWeather(city); {

            // containerEl.textContent = '';
            // nameInputEl.value = "";
        }
    }
    else {
        alert("please enter correct city name");
    };

}

let getCityWeather = function (city) {
    //format the openweather API for city 

    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=61d80f3cab144660935d5755dd2fb631"

    // making a request to the url

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            (response.json().then(function (data) {
                console.log(data);
                displayCityWeather(data);

            }));
        }
        else {
            alert("Error: This place not found");
        }
    })
        .catch(function (error) {
            //.catch is getting chained onto the end of the '.then()' method
            alert("unable to connect to openweather");
        });
}


function displayCityWeather(data) {

    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { coord } = data;
    console.log(name, icon, description, temp, humidity, speed);
    console.log(coord);

    let lat = coord.lat;
    let lon = coord.lon;

    weather(lat, lon);

    // containerEl.textContent = '';


    // containerEl.textContent = name + description + temp;
    cityNameEl.textContent = name
    tempEl.textContent = 'Temp: ' + temp + ' F'
    humidityEl.textContent = humidity + ' %'
    windEl.textcontent = speed + 'MPH'

}

function weather(lat, lon) {
    const apiKey = "e52b9ef91ee8442a5c05329478d22900"

    fetch("https://api.openweathermap.org/data/2.5/onecall?&lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (let i = 0; i < 5; i++) {
                let fiveDayArticle = document.createElement('article')
                fiveDayArticle.setAttribute('class', 'day'+ i+1)
                fiveDayContainer.append(fiveDayArticle)

                let date = document.createElement('div')
                date.textContent = moment().add(i + 1, 'days').format('dddd')
                fiveDayArticle.append(date)

                let fiveTemp = document.createElement('h5')
                // fiveTemp.setAttribute('class', 'temp')
                fiveTemp.textContent = data.daily[i].temp.day
                fiveDayArticle.append(fiveTemp)

                let fiveHumidity = document.createElement('h5')
                // fiveTemp.setAttribute('class', 'humidity')
                fiveHumidity.textContent = data.daily[i].humidity
                fiveDayArticle.append(fiveHumidity)

                let fiveWind = document.createElement('h5')
                // fiveWind.setAttribute('class', 'wind')
                fiveWind.textContent = data.daily[i].wind_speed
                fiveDayArticle.append(fiveWind)

        };
})
}



userFormEl.addEventListener("submit", formSubmitHandler);