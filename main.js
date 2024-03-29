//Creating a variable
var xmlhttp = new XMLHttpRequest();

//Adding state change event handler to API request
xmlhttp.onreadystatechange = function() {

    // If state change successful
    if (this.readyState == 4 && this.status == 200) {

        // Storing API object inside of apiresult
        var apiResult = JSON.parse(this.responseText);

        //Print the city name at the end of the header text
        var cityName = document.createTextNode(apiResult.name);

        var addCity = document.querySelectorAll("header h1 p.brown");

        addCity[0].appendChild(cityName);

        //Print the weather description at the end of the main section text
        var weatherNow = document.createTextNode(apiResult.weather[0].description);

        var addWeather = document.querySelectorAll("main h2 p.brown");

        addWeather[0].appendChild(weatherNow);
    }
};

xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=99501,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
