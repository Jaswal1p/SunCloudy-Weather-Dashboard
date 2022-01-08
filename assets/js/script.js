let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#city");
let tempEl = document.querySelector("#temp");

let containerEl = document.querySelector("#container");
let cityNameEl = document.querySelector(".city-name");
let fiveDayContainer = document.querySelector('#forecast');
let descriptionEl = document.querySelector("#description");
let iconEl = document.querySelector("#icon");

let humidityEl = document.querySelector("#humidity");
let windEl = document.querySelector("#wind");




let wrapperEl = document.querySelector("#wrapper");
console.log(wrapperEl);

let btnbEl = document.createElement("button");
console.log(btnbEl);

// buttonEl.addEventListener("click", function() {
   // let btnbEl = document.createElement("li");
    //btnbEl.className = "btnb";
    //btnbEl.texteContent = "This is a new city";
    //saveCityEl.appendChild(btnbEl);
//});




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
        saveCitySearch(city);
    }
    else {
        alert("please enter correct city name");
    };

}

let saveCitySearch = function(city) {
    
    let btnbEl = document.createElement("button");
    btnbEl.className = "btnb";
    btnbEl.textContent = city;
    wrapperEl.appendChild(btnbEl);
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

    let dateEl = document.createElement('div')

    let lat = coord.lat;
    let lon = coord.lon;

    weather(lat, lon);

    // containerEl.textContent = '';


    // containerEl.textContent = name + description + temp;
    cityNameEl.textContent = name
    dateEl.textContent = moment().format('MM/DD/YYYY')
    // iconEl.src = "https://openweathermap.org/img/wn/" + icon + ".png"
    // descriptionEl.textContent = description
    tempEl.textContent = 'Temp: ' + temp + ' F'
    humidityEl.textContent = humidity + ' %'
    windEl.textContent = speed + 'MPH'

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
                date.textContent = moment().add(i + 1, 'days').format('MM/DD/YYYY')
                fiveDayArticle.append(date)

                let fiveTemp = document.createElement('h5')
                // fiveTemp.setAttribute('class', 'temp')
                fiveTemp.textContent = 'Temp: ' + data.daily[i].temp.day + ' F'
                fiveDayArticle.append(fiveTemp)

                let fiveWind = document.createElement('h5')
                // fiveWind.setAttribute('class', 'wind')
                fiveWind.textContent = 'Wind: ' + data.daily[i].wind_speed + ' MPH'
                fiveDayArticle.append(fiveWind)

                let fiveHumidity = document.createElement('h5')
                // fiveTemp.setAttribute('class', 'humidity')
                fiveHumidity.textContent = 'Humidity: ' + data.daily[i].humidity + ' %'
                fiveDayArticle.append(fiveHumidity)

                
        };
})
}



userFormEl.addEventListener("submit", formSubmitHandler);