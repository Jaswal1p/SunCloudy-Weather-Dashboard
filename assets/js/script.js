let key = "e52b9ef91ee8442a5c05329478d22900";
let geoLocation = "lat=33.44&lon=-94.04"
let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#city");

let formSubmitHandler = function(event) {
    event.preventDefault();
    let city = nameInputEl.value.trim();

    if (city) {
        getUserCities(city); {

        nameInputEl.value = "";
      }
      
};

let getUserCities = function() {
    
    let apiUrl = "https://api.openweathermap.org/data/2.5/onecall?" + geoLocation + "&exclude=minutely,hourly&appid=e52b9ef91ee8442a5c05329478d22900";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            });
        }
    });
    
    console.log("response");
  };
  
}

userFormEl.addEventListener("submit", formSubmitHandler);