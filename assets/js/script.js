let weather = {
    apiKey: "e52b9ef91ee8442a5c05329478d22900",
    fetch: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/onecall?" + lat + "&" + lon + "&exclude=hourly,daily&appid=" + this.apiKey
        )    
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    
    displayWeather: function(data) {

    }
}

let cityWeather = {
    apiKey: "61d80f3cab144660935d5755dd2fb631",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    
    displayWeather: function(data) {

    }
}

let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#city");
let temperature = document.querySelector("#temperature");




let formSubmitHandler = function(event) {
    event.preventDefault();
    let city = nameInputEl.value.trim();

    if (city) {
        getUserCities(city); {

        nameInputEl.value = "";
      }
      
};


  
}  

userFormEl.addEventListener("submit", formSubmitHandler);