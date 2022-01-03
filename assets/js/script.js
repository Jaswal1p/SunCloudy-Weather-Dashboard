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
        const { name, date } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { lon, lat} = data.coord;
        console.log(name, date, icon, description, temp, humidity, speed, lon, lat);
        document.querySelector(".city").innerText = "Weather in " + name;
    }
}


let fiveWeather = {
    apiKey: "e52b9ef91ee8442a5c05329478d22900",
    fetch: function() {
        fetchFive(
            "https://api.openweathermap.org/data/2.5/onecall?" + lat + "&" + lon + "&exclude=hourly,daily&appid=" + this.apiKey
        )    
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    
    displayWeather: function(data) {

    }
}



let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#city");
let temperature = document.querySelector("#temp");




let formSubmitHandler = function(event) {
    event.preventDefault();
    let city = nameInputEl.value.trim();
    console.log(city)

   
      
};


  


userFormEl.addEventListener("submit", formSubmitHandler);