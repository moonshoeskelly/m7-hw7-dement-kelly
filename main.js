//Creating a variable
var xmlhttp = new XMLHttpRequest();

//Adding state change event handler to API request
xmlhttp.onreadystatechange = function() {

    // If state change successful
    if (this.readyState == 4 && this.status == 200) {

        // Storing API object inside of apiresult
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=99501,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
