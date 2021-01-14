// function getWeather(){

// var city = $("#form1").val();
// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="
// + city +"&appid=19eb70296734629e1adb73f7e235752b";

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response){
//     console.log(response);
    
//     var currentCity = $("#name");
//     currentCity.text(response.name)
//     $("#name").append(currentCity)
    
//     var Kalvin = response.main.temp
//     var temp = (Kalvin -273.15) *1.80 +32
//     tempF = Math.floor(temp)
//     $("#temp").text(tempF + " F")
    
//     var currentHumidity = $("#humidity")
//     currentHumidity.text(response.main.humidity)
//     $("#humidity").append(currentHumidity)

//     var currentWindSpeed = $("#wind")
//     currentWindSpeed.text(response.wind.speed)
//     $("#wind").append(currentWindSpeed)

//   })

// }

$("#search-button").on("click", function(event){
  event.preventDefault();
  var city = $("#search-city").val().trim();
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="
  + city +"&appid=19eb70296734629e1adb73f7e235752b";
  
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
      
      var currentCity = $("#name");
      currentCity.text(response.name)
      $("#name").append(currentCity)
      
      // var Kalvin = response.main.temp
      // var temp = (Kalvin -273.15) *1.80 +32
      // tempF = Math.floor(temp)
      // $("#temp").text(tempF + " F")
      
      // var currentHumidity = $("#humidity")
      // currentHumidity.text(response.main.humidity)
      // $("#humidity").append(currentHumidity)
  
      // var currentWindSpeed = $("#wind")
      // currentWindSpeed.text(response.wind.speed)
      // $("#wind").append(currentWindSpeed)
  
    })
  
  })

