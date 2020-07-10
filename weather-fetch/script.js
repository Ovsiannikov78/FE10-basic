//const URL = 'http://api.openweathermap.org/data/2.5/weather';
//const APPID = /* '2ad17aaec16633bdb4e812b03aa26b18'; */ 'bed156d40174100c73406417523ddaf1';
let json = './config.json';
let jsonData = JSON.parse(json);

 //const weatherFieldConig = [
 
    /*   {name: 'Temperature', field: 'main.temp'//'main.temp-273,15' },
    {name: 'Wind deg', field: 'wind.deg'},
    {name: 'Wind speed', field: 'wind.speed'}*/
//]; 

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const country = event.target['country'].value;
    const city = event.target['city'].value;
  
    fetch(`${jsonData.URL}?country=${country}&q=${city}&APPID=${jsonData.APPID}`)
        .then(response => response.json())
        .then(json => showWeather(json, event.target));
    /* fetch(`${URL}?country=${country}&q=${city}&APPID=${APPID}`)
        .then(response => response.json())
        .then(json => showWeather(json, event.target)); */
})

function showWeather(json, target) {
    console.log(json);
    const titleElement$ = target.nextElementSibling.querySelector('h5.card-title');
    titleElement$.innerText = `Weather for ${json.name}`;
    
    let html = '';
    jsonData.weatherFieldConig.forEach((el => {
        html += '<div class="row">';
        html += `<div class="col-6">${jsonData.weatherFieldConig.name}</div><div class="col-6">${eval('json.' + jsonData.weatherFieldConig.field)}</div>`
        html += '</div>';
    }))    

    titleElement$.nextElementSibling.innerHTML = html;
}