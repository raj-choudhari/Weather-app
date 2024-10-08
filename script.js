const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userWeather = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector(".form-container");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const currentTab = userTab;
 
const API_Key = "eb27f1a52ef4312eb4c2980a1833d852";

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position){
    const coordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }
    sessionStorage.setItem("user-cordinates", JSON.stringify(coordinates));
    fetchWeather(coordinates.lat, coordinates.lon);
}

const grantacessbtn = document.querySelector(".data-grantAccess");
grantacessbtn.addEventListener("click",getLocation);



async function fetchWeather(lat,lan){
  
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&appid=${API_Key}&units=metric`);
        const data = await response.json();
       console.log(data);
       window.location.href=`/currentwtr.html?city=${data.name}&temp=${data.main.temp}&wind=${data.wind.speed}&humidity=${data.main.humidity}&clouds=${data.clouds.all}`
    }
    catch(E){
        console.log(E);
        
    }
}