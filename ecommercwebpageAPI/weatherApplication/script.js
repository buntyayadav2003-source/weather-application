

async function fetchData(city) {
     await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=&units=metric`)
     .then(res=>res.json())
     .then(data=> renderInfo(data))
     .catch(error=>console.log(error))
}


function renderInfo(data){
    document.querySelector("#infoWeather").innerHTML=`
    <p><b>${data.name}</b> <i>${data.sys.country}</i></p>
                <p>Temp : ${data.main.temp} <sup>0</sup>C</p>
                <p><span>${data.weather[0].main}</span>
                :
                <span>${data.weather[0].description}</span></p>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="img" />
    `
}


function displayInfo(){
    const city = document.querySelector("#cityName").value
      fetchData(city)
}

document.querySelector("#btnDisplay").addEventListener("click",displayInfo)