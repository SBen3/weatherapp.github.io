export {fetching} 

async function fetching(c){
    x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=211716aa5ce4d312cb069a43e3f4c3f5`),
    z = await x.json() ;
    console.log(z)
        cityName.innerHTML = z.name
        temperature.innerHTML = Math.round(z.main.temp) + ' C°'
        humidity.innerHTML = z.main.humidity + ' %'
        wind.innerHTML = z.wind.speed +' km/h'
        pressure.innerHTML = z.main.pressure
        visibility.innerHTML = z.visibility
        weatherData.style.display = 'flex'
        moreData.style.display = 'flex'
        
        if(timeHours >= 6 && timeHours <= 18  ){
            if(z.weather[0].description == 'clear sky'){
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/01d@2x.png">'
            }else if (z.weather[0].description == 'few clouds') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/02d@2x.png">'
            }else if (z.weather[0].description == 'scattered cloud') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/03d@2x.png">'
            }else if (z.weather[0].description == 'broken clouds') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/04d@2x.png">'
            }else if (z.weather[0].description == 'shower rain') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/10d@2x.png">'
            }else if (z.weather[0].description == 'rain') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/11d@2x.png">'
            }else if (z.weather[0].description == 'thunderstorm') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/12d@2x.png">'
            }else if (z.weather[0].description == 'snow') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/13d@2x.png">'
            }else if (z.weather[0].description == 'mist') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/50d@2x.png">'
            }else if (z.weather[0].description == 'sand') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/50d@2x.png">'
            }}
             else if (timeHours >= 18 && timeHours <= 23 || timeHours >= 0 && timeHours <= 6){
            if(z.weather[0].description == 'clear sky'){
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/01n@2x.png">'
            }else if (z.weather[0].description == 'few clouds') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/02n@2x.png">'
            }else if (z.weather[0].description == 'scattered cloud') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/03n@2x.png">'
            }else if (z.weather[0].description == 'broken clouds') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/04n@2x.png">'
            }else if (z.weather[0].description == 'shower rain') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/10n@2x.png">'
            }else if (z.weather[0].description == 'rain') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/11n@2x.png">'
            }else if (z.weather[0].description == 'thunderstorm') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/12n@2x.png">'
            }else if (z.weather[0].description == 'snow') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/13n@2x.png">'
            }else if (z.weather[0].description == 'mist') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/50n@2x.png">'
            }else if (z.weather[0].description == 'sand') {
                weatherIcone.innerHTML = '<img src="https://openweathermap.org/img/wn/50d@2x.png">'
            }
          } 
}   