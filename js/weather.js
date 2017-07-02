var weatherIco, colors;

function bgColor() {
    var weather = weatherIco;
    var $body = $("#weatherSec");
    //    console.log(weather);
    switch (weather) {
        case "clear":
            $body.css("background-color", "#157FA1");
            break;
        case "clear-night":
            $body.css("background-color", "#432A60");
            colors = "#777";
            break;
        case "rain":
            $body.css("background-color", "#62757A");
            break;
        case "snow":
            $body.css("background-color", "#46467A");
            break;
        case "sleet":
            $body.css("background-color", "#6C777A");
            break;
        case "wind":
            $body.css("background-color", "#5977F2");
            break;
        case "fog":
            $body.css("background-color", "#617AA2");
            break;
        case "cloudy":
            $body.css("background-color", "#718DA2");
            break;
        case "partly-cloudy-day":
            $body.css("background-color", "#1C3D60");
            break;
        case "partly-cloudy-night":
            $body.css("background-color", "#051220");
            break;
    }

}


function getWeather() {
    var lat, long, toFahrenheit, toCelsius, weatherIcon;
    var apiKey = "06bdce0aad9e21d625f480b4e5441326";
    var $contents = $("#contents");
    var isCelsius = false;

    $.getJSON("https://crossorigin.me/https://freegeoip.net/json/", function (location) {
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
