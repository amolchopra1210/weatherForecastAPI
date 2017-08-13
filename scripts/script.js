document.getElementById("buttonClick").addEventListener("click", function(event){
    event.preventDefault();
    var state = ''
    var city = document.getElementById('city').value;
    city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
    if(city){
        var http = new XMLHttpRequest;
        http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var results = JSON.parse(this.responseText)
            temp = results.data[0].temp;
            weather = results.data[0].weather.description;
            wind = results.data[0].wind_spd;
            if(!wind){
                wind = "No wind";
            }
            document.getElementById('results_data').innerHTML  = "You searched for " + city;
            document.getElementById('temp').innerHTML  = "<strong><center>Current Temperature :</strong> " + temp + "&deg Celsius </center>";
            document.getElementById('weather').innerHTML  = "<strong><center>Weather :</strong> " + weather + "</center>";
            document.getElementById('wind').innerHTML  = "<strong><center>Wind Speed :</strong>" + wind + "</center";
            

        }else if (this.status == 204){
            document.getElementById('results_data').innerHTML  = "<strong><center>" + city +  "</strong> not found. Please enter correct city name</center>";
            document.getElementById('temp').innerHTML  = "";
            document.getElementById('weather').innerHTML  = "";
            document.getElementById('wind').innerHTML  = "";

        }
    }
    http.open("GET" ,"https://api.weatherbit.io/v1.0/current/geosearch?city=" + city + "&key=ba85fb88e447415d87174521556c7424", true);
    http.send();
    }
  
});