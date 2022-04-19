var taskIdCounter = 0;
let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#city");
let tempEl = document.querySelector("#temp");

let containerEl = document.querySelector("#container");
let cityNameEl = document.querySelector(".city-name");
let dateTodayEl = document.querySelector("date-today");
let fiveDayContainer = document.querySelector('#forecast');
let descriptionEl = document.querySelector(".description");
let iconEl = document.querySelector("#icon");

let humidityEl = document.querySelector("#humidity");
let windEl = document.querySelector("#wind");
let uviEl = document.querySelector("#uvi"); 

let cities = [];




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
  
        nameInputEl.value = "";

}

let saveCitySearch = function(city) {

    let btnbEl = document.createElement("a");
    btnbEl.className = "btnb";

    btnbEl.setAttribute("data-task-id", taskIdCounter);

    btnbEl.textContent = city;
    wrapperEl.appendChild(btnbEl);

    btnbEl.addEventListener("click", searchCityHandler);
    console.log(getCityWeather);

    
    taskIdCounter++;

    
}   

let MyCityList = {
    name: btnbEl.textContent
}


let searchCityHandler = function(event) {

    getCityWeather(event.currentTarget.textContent);

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

    //let dateEl = document.createElement('div')

    let lat = coord.lat;
    let lon = coord.lon;

    weather(lat, lon);


    cityNameEl.textContent = name

    document.getElementById('date-today').textContent = moment().format('MM/DD/YYYY');
    
    iconEl.src = "https://openweathermap.org/img/wn/" + icon + ".png"

    descriptionEl.textContent = description

    tempEl.textContent = 'Temp: ' + temp + ' F'

    humidityEl.textContent = 'Humidity: ' + humidity + ' %'

    windEl.textContent = 'Wind: ' + speed + 'MPH'
    
    

    
};

function uvIndex(uvi) {
    document.getElementById('uv').textContent = 'UV ' + 'Index: ' + uvi 

}

function clearContainer(elementId) {
    document.getElementById(elementId).innerHTML = "";
} 

function weather(lat, lon) {

    clearContainer("forecast");

    const apiKey = "e52b9ef91ee8442a5c05329478d22900"

    fetch("https://api.openweathermap.org/data/2.5/onecall?&lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

        const { uvi } = data.current;
        console.log(uvi);
        uvIndex(uvi);

                
            // uviEl.textContent = uvi 

            for (let i = 0; i < 5; i++) {
                let fiveDayArticle = document.createElement('article')
                fiveDayArticle.setAttribute('class', 'day' + i+1)
                fiveDayContainer.append(fiveDayArticle)

                let date = document.createElement('div')
                date.textContent = moment().add(i + 1, 'days').format('MM/DD/YYYY')
                fiveDayArticle.append(date)


                // pull weather from json and create image
                 
                let weatherEl = document.createElement('div')

                let cityWeather = data.daily[i].weather[0].icon;
                 console.log(cityWeather)
                      
                weatherEl.img = "https://openweathermap.org/img/wn/" + cityWeather + ".png";
                // let icon = "https://openweathermap.org/img/wn/" + cityWeather + ".png";
                               
                // weatherEl.classList = "card-text"
                // weatherEl.src = icon;
                fiveDayArticle.append(weatherEl.img)

                
                
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


let saveCities = function() {
    localStorage.setItem('MyCityList', JSON.stringify(cities));
}
userFormEl.addEventListener("submit", formSubmitHandler);










// var weatherIcon = "http://openweathermap.org/img/w/" + cityWeather + ".png";