/* XML simple & XML through Promice */

/* let input = document.querySelector('input'),
    cnt = document.querySelector('.container'),
    button = document.querySelector('section header p');

function getApi(api){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function ga(){
        if(this.status===200 && this.readyState===4){
           return JSON.parse(this.responseText).results;
        }
        let stuff =  JSON.parse(this.responseText).results;
        button.addEventListener('click',function(){
                let i ;
                for(i=0;i<stuff.length;i++){
                    let dv = document.createElement('div'),
                        dvQ = document.createElement('div'),
                        dvA = document.createElement('div'),
                        txtQ = document.createTextNode(stuff[i].question),
                        txtA = document.createTextNode(stuff[i].correct_answer);

                    dv.setAttribute('class','insideDv')
                    dvQ.appendChild(txtQ)
                    dvA.appendChild(txtA)
                    dv.appendChild(dvQ)
                    dv.appendChild(dvA)
                    cnt.appendChild(dv) 
                }
    })
       
    }
    xhr.open('GET',api,true)
    xhr.send()
}
getApi(`https://opentdb.com/api.php?amount=10&category=17&difficulty=easy`)



let myPr = new Promise((t,f)=>{
    let myXhr = new XMLHttpRequest();
    myXhr.onreadystatechange = function a(){
        t(JSON.parse(this.responseText).results);
        f(false)
    }
    myXhr.open('GET',`https://opentdb.com/api.php?amount=10&category=17&difficulty=easy`,true)
    myXhr.send()
})

myPr.then(
    t=> {       let i;
                for(i=0;i<t.length;i++){
                    let dv = document.createElement('div'),
                        dvQ = document.createElement('div'),
                        dvA = document.createElement('div'),
                        txtQ = document.createTextNode(t[i].question),
                        txtA = document.createTextNode(t[i].correct_answer);

                    dv.setAttribute('class','insideDv')
                    dvQ.appendChild(txtQ)
                    dvA.appendChild(txtA)
                    dv.appendChild(dvQ)
                    dv.appendChild(dvA)
                    cnt.appendChild(dv)}}

) */

/* Promise Practice */

/* let myPromise = new Promise((res,rej)=>{
    if(10>12){
        res('resolve')
    }else{
        rej('rejected')
    }
})

myPromise.then(
    (res)=>(console.log(res))
)
.catch(
    (rej)=>(console.log(rej))
)
 */

/* let myPromiseOne = new Promise((res,rej)=>{
    if(10<12){
        res('one')
    }else{
        rej('noOne')
    }
})
let myPromiseTwo = new Promise((res,rej)=>{
    if(10<12){
        res('two')
    }else{
        rej('noTwo')
    }
})
let myPromiseThree = new Promise((res,rej)=>{
    if(10<12){
        res('three')
    }else{
        rej('noThree')
    }
})

Promise.all([myPromiseOne,myPromiseTwo,myPromiseThree]).then(
    (trueOne)=>(console.log(trueOne))
) */
/* 
let myPromiseOne = new Promise((res,rej)=>{
    setTimeout(function(){
        if(10<12){
            res('one')
        }else{
            rej('noOne')
        }
    },500)
})
let myPromiseTwo = new Promise((res,rej)=>{
    setTimeout(function(){
        if(10<12){
            res('two')
        }else{
            rej('noTwo')
        }
    },1000)
})
Promise.race([myPromiseOne,myPromiseTwo]).then(
    (a)=>console.log(a)
) */

/* fetch TITLES */
/* 
let bd = document.querySelector('body');
let hd = document.querySelector('header');

function getTitles(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json() )
      .then(json =>{
        console.log(json)
        let section = document.createElement('section');
        bd.appendChild(section)
        let i ;
        for(i=0;i<json.length;i++){
            let dv = document.createElement('div'),
                spn = document.createElement('span');
                dv.className = ('rec')
                idText = document.createTextNode(`${json[i].id} -  `)
                titleText = document.createTextNode(json[i].title)
            spn.appendChild(idText)
            dv.appendChild(spn)
            dv.appendChild(titleText)
            section.appendChild(dv)
        }
      })
}
 */
 /////////////////////////////////////////////////////////////

/* Weather App */

let bd = document.querySelector('body'),
    weatherContainer = document.querySelector('.weather-container'),
    searchIcone = document.querySelector('.search i'),
    input = document.querySelector('input'),
    p = document.querySelector('.search p'),
    weatherData = document.querySelector('.weather-data'),
    cityName = document.querySelector('.city-name'),
    weatherIcone = document.querySelector('.weather-icone'),
    temperature = document.querySelector('.temperature'),
    moreData = document.querySelector('.more-data'),
    humidity = document.querySelector('.humidity .span '),
    wind = document.querySelector('.wind .span'),
    pressure = document.querySelector('.pressure .span'),
    visibility = document.querySelector('.visibility .span'),
    time = new Date(),
    timeHours = time.getHours();

    function disNone(){
        weatherContainer.style.padding ='0'
        weatherData.style.display = 'none'
        moreData.style.display = 'none'
    }
     window.onload = disNone()

async function fetching(c){
    x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=211716aa5ce4d312cb069a43e3f4c3f5`),
    z = await x.json() ;
        
        if(x.status === 200){
            cityName.innerHTML = z.name
            temperature.innerHTML = Math.round(z.main.temp) + ' C°'
            humidity.innerHTML = z.main.humidity + ' %'
            wind.innerHTML = z.wind.speed +' km/h'
            pressure.innerHTML = z.main.pressure
            visibility.innerHTML = z.visibility
            weatherContainer.style.padding ='30px 0'
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
                            weatherIcone.innerHTML = '<img src="weather-icons/cloudy_1163661.png">'
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
                      p.innerHTML = 'Search Now'
                      p.style.color = 'black'
        }else {
            disNone()
            p.innerHTML = 'Please Enter the Correct City Name'
            p.style.color = 'red'
            p.style.fontSize = '12px'
        }
} 

searchIcone.addEventListener('click',function(){
    fetching(input.value)
}) 

