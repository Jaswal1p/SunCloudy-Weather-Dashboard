let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#city");
let temperatureEl = document.querySelector("#temperature");
let containerEl = document.querySelector("#container");
let apiKey = "61d80f3cab144660935d5755dd2fb631";



let formSubmitHandler = function(event) {
    //prevents page from refresh
    event.preventDefault();

    // get value from input element
    let city = nameInputEl.value.trim();

    if (city) {
        cityWeather(city); {
        containerEl.textContent = '';
        nameInputEl.value = "";
      }
    }
    else {
        alert("please enter correct city name");
    };

}

let cityWeather = function(city) {
    //format the openweather API for city 
    
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=61d80f3cab144660935d5755dd2fb631"

    // making a request to the url

    fetch(apiUrl).then(function(response) {
          if (response.ok) {
             (response.json().then(function(data) {
             console.log(data)  
            }))
          }
          else {
        alert("Error: This place not found")
          }
        
    })
          .catch(function(error) {
              //.catch is getting chained onto the end of the '.then()' method
              alert("unable to find this city");
          });
}   
  



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


userFormEl.addEventListener("submit", formSubmitHandler);