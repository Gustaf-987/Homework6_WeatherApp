var cities =[];
var currentTime = moment()._d.getDate();

$("#search-button").on("click", function(event){
  event.preventDefault();
  var city = $("#search-city").val().trim();
  // var savedCities = $("#cityList").val();
  // savedCities.push(city);
  // localStorage.setItem("#cityList", JSON.stringify(savedCities));

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
  + city +"&appid=19eb70296734629e1adb73f7e235752b";
  
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
      
      
      var currentCity = $("#name");
      currentCity.text(response.name)
      $("#name").append(currentCity)
      
      var Kalvin = response.main.temp
      var temp = (Kalvin -273.15) *1.80 +32
      tempF = Math.floor(temp)
      $("#temp").text(tempF + " F")
      
      var currentHumidity = $("#humidity")
      currentHumidity.text(response.main.humidity + " %")
      $("#humidity").append(currentHumidity)
  
      var currentWindSpeed = $("#wind")
      currentWindSpeed.text(response.wind.speed)
      $("#wind").append(currentWindSpeed)

      cities.push(response.name)
      localStorage.setItem("Cities", JSON.stringify(cities));
      updateHistory();
  
    })

    var queryURL =  "http://api.openweathermap.org/data/2.5/forecast?q=" + city 
    + "&appid=19eb70296734629e1adb73f7e235752b";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response){
      console.log(response);

      var day1Date = $("#day1date")
      day1Date.text(response.list[2].dt_txt);
      var day2Date = $("#day2date")
      day2Date.text(response.list[10].dt_txt);
      var day3Date = $("#day3date")
      day3Date.text(response.list[18].dt_txt);
      var day4Date = $("#day4date")
      day4Date.text(response.list[26].dt_txt);
      var day5Date = $("#day5date")
      day5Date.text(response.list[34].dt_txt);

      var Kalvin = response.list[2].main.temp
      var temperature = (Kalvin - 273.15) *1.80 + 32
      tempF = Math.floor(temperature);
      $("#temperature-day1").text(tempF + "F")

      var Kalvin = response.list[10].main.temp
      var temperature = (Kalvin - 273.15) *1.80 + 32
      tempF = Math.floor(temperature);
      $("#temperature-day2").text(tempF + "F")

      var Kalvin = response.list[18].main.temp
      var temperature = (Kalvin - 273.15) *1.80 + 32
      tempF = Math.floor(temperature);
      $("#temperature-day3").text(tempF + "F")

      var Kalvin = response.list[26].main.temp
      var temperature = (Kalvin - 273.15) *1.80 + 32
      tempF = Math.floor(temperature);
      $("#temperature-day4").text(tempF + "F")

      var Kalvin = response.list[34].main.temp
      var temperature = (Kalvin - 273.15) *1.80 + 32
      tempF = Math.floor(temperature);
      $("#temperature-day5").text(tempF + "F")

      var day1Image = $("#image-day1")
      var newLink1 = "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png"
      day1Image.attr("src", newLink1)

      var day2Image = $("#image-day2")
      var newLink1 = "http://openweathermap.org/img/wn/" + response.list[10].weather[0].icon + "@2x.png"
      day2Image.attr("src", newLink1)

      var day3Image = $("#image-day3")
      var newLink1 = "http://openweathermap.org/img/wn/" + response.list[18].weather[0].icon + "@2x.png"
      day3Image.attr("src", newLink1)

      var day4Image = $("#image-day4")
      var newLink1 = "http://openweathermap.org/img/wn/" + response.list[26].weather[0].icon + "@2x.png"
      day4Image.attr("src", newLink1)

      var day5Image = $("#image-day5")
      var newLink1 = "http://openweathermap.org/img/wn/" + response.list[34].weather[0].icon + "@2x.png"
      day5Image.attr("src", newLink1)

      var day1Humidity = $("#humidity-day1")
      day1Humidity.text(response.list[2].main.humidity + "%")
      $("#humidity-day1").append(day1Humidity)

      var day2Humidity = $("#humidity-day2")
      day2Humidity.text(response.list[10].main.humidity + "%")
      $("#humidity-day2").append(day2Humidity)

      var day3Humidity = $("#humidity-day3")
      day3Humidity.text(response.list[18].main.humidity + "%")
      $("#humidity-day3").append(day3Humidity)

      var day4Humidity = $("#humidity-day4")
      day4Humidity.text(response.list[26].main.humidity + "%")
      $("#humidity-day4").append(day4Humidity)

      var day5Humidity = $("#humidity-day5")
      day5Humidity.text(response.list[34].main.humidity + "%")
      $("#humidity-day5").append(day5Humidity)


    })




    function updateHistory() {
      cities = JSON.parse((localStorage.getItem("Cities"))) || []
      for (let i = 1; i < 6; i++) {
        var result =cities[cities.length-i];
        if (result) {
          $("#history" + i).text(result)
        }
        
      }
    }
  
  })

// updateHistory()