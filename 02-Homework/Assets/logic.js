function getWeather(){

var city = $("#form1").val();
var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q="
+ city +"&appid=19eb70296734629e1adb73f7e235752b";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
  })

}

$("#searchcity").on("click", function(){
    getWeather();
})
