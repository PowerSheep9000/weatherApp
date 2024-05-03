const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", () => getCity(document.getElementById("locationEntry").value));

const displayField = document.querySelector(".resultContainer");
const tempDisplay = document.querySelector(".tempContainer");

function getData(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=3aeb36816a5a41b3bc365200240205&q=${city}`, {mode: "cors"})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            displayCondition(city, response.current.condition.text);
        });
}

function displayCondition(city, condition) {
    displayField.textContent = `Current weather condition in ${city}: ` + condition;
}

function getCity(city) {
    getData(city);
    getTemp(city);
    document.getElementById("locationEntry").value = "";
}

function getTemp(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=3aeb36816a5a41b3bc365200240205&q=${city}`, {mode: "cors"})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            displayTemp(response.current.temp_c);
        });
}

function displayTemp(temp) {
    tempDisplay.textContent = `Current temperature is ` + temp + "C";
}