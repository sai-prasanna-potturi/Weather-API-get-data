// fetch API "GET" data display UI
async function weatherUpload(){
    document.getElementById("refresh-url").classList.add("open");
    document.getElementById("weather-url").textContent = "Refresh";
    let weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
    let weather = await fetch(weatherUrl);
      let weatherData = await weather.json();
      sessionStorage.setItem("weatherData", JSON.stringify(weatherData));
      let respone = document.getElementById("Weather_details_display");
      console.log("response", weatherData);
      respone.innerHTML += ` <div>
      <p><ion-icon class="icons-img" name="time"></ion-icon>${ "Time : "+weatherData.current_weather.time}</p>
      <p><ion-icon class="icons-img" name="thermometer"></ion-icon>${ "temperature : "+weatherData.current_weather.temperature}</p>
      <p><ion-icon class="icons-img"  name="partly-sunny"></ion-icon>${ "hourly units :"+ "Time : "+ weatherData.hourly_units.time}</p>
      </div>`;
      weatherUpload = function(){};
      return weatherData;
 }
//  function pageReload() {
//   const weatherData = sessionStorage.getItem("weatherData");
//   return weatherData;
//  }


// fetch API "GET" data using callbacks
// const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
// function weatherDetails(checkWeather){
//     checkWeather();
// }
// async function checkWeather(){
//     let weatherGetData =await fetch(weatherUrl);
//     console.log(await weatherGetData.json());
// }
// weatherDetails(checkWeather);


// fetch API "GET" data using Promises 

// let  newWeatheUrl  = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
// let checkPromiseWeather = fetch(newWeatheUrl);
//  checkPromiseWeather.then(async(response)=>{
//     console.log(await response.json());
// }).catch(()=>{
//     console.log("error");
// });



//fetch API "GET" data using Async/await

// async function url(){
//  let weatherUrl = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
//  const response = await weatherUrl.json();
// console.log(response);
// }
// url();