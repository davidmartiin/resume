var weatherIco;
var colors = "blue";

function bgColor() {
    var weather = weatherIco;
    var $body = $("#weatherSec");
    console.log(weather);
    switch (weather) {
        case "clear-day":
            $body.css("background-color", "#157FA1");
            colors = "#f1d146";
            break;
        case "clear-night":
            $body.css("background-color", "#432A60");
            colors = "#432A60";
            $("#icon1").css("filter", "hue-rotate(240deg)");
            break;
        case "rain":
            $body.css("background-color", "#335765");
            colors = "#335765";
            $("#icon1").css("filter", "hue-rotate(150deg)");
            break;
        case "snow":
            $body.css("background-color", "#4cccff");
            colors = "#46467A";
            $("#icon1").css("filter", "hue-rotate(30deg)");
            break;
        case "sleet":
            $body.css("background-color", "#4b6a95");
            colors = "#4b6a95";
            $("#icon1").css("filter", "hue-rotate(90deg)");
            break;
        case "wind":
            $body.css("background-color", "#4987ce");
            colors = "#e0e0e0";
            break;
        case "fog":
            $body.css("background-color", "#857b60");
            colors = "#857b60";
            $("#icon1").css("filter", "hue-rotate(270deg)");
            break;
        case "cloudy":
            $body.css("background-color", "#e5e5e5");
            colors = "#31319a";
            break;
        case "partly-cloudy-day":
            $body.css("background-color", "#1C3D60");
            colors = "#43e96f";
            break;
        case "partly-cloudy-night":
            $body.css("background-color", "#051220");
            colors = "#a8a8a8";
            break;
    }

}


function getWeather() {
    var lat, long, toFahrenheit, toCelsius, weatherIcon;
    var apiKey = "06bdce0aad9e21d625f480b4e5441326";
    var $contents = $("#contents");
    var isCelsius = false;


    $.getJSON("https://freegeoip.net/json/", function (location) {
        $contents.html(
            "You live in " + location.city + ", " + location.region_name
        );
        lat = location.latitude;
        long = location.longitude;

        $.ajax({
            url: "https://crossorigin.me/https://api.darksky.net/forecast/" +
                apiKey +
                "/" +
                lat +
                "," +
                long,
            dataType: "json",
            success: function (data) {
                weatherIcon = data.currently.icon;
                toFahrenheit = parseInt(Math.floor(data.currently.temperature));
                toCelsius = parseInt((toFahrenheit - 32) * (5 / 9));
                $("#currentWeather").html(
                    toFahrenheit + " &#176F"
                );
                $("#howIsIt").html(
                    "It is currently " + data.currently.summary.toLowerCase() + " outside."
                );
                $("#hourly").html("Next Hours Forecast: " + data.hourly.summary);
                $("#fahrenheit").click(function () {
                    $("#currentWeather").html(toFahrenheit + " &#176F");
                });
                $("#celsius").click(function () {
                    $("#currentWeather").html(toCelsius + " &#176C");
                });
                var skycons = new Skycons({
                    "color": "black"
                });
                skycons.add(icon1, weatherIcon);
                skycons.play();
                weatherIco = weatherIcon;
                bgColor();
                skycons.color = colors;
                console.log(skycons.color);

            },
            error: function (error) {
                alert("There is an error");
            }
        });
        //End of Click Function
    });
}

$(document).ready(function () {
    getWeather();
});
