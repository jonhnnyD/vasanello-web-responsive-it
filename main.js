const lastPart = '04e688e628e46';
const parteMedia = ['a','6','0','5','d','7','5','a','a'];
const medio = parteMedia.join('')
const api = {
  key:'6268a03464'+medio+lastPart,
  url:'https://api.openweathermap.org/data/2.5/weather'
}
const city = document.getElementById('city');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');


async function search(query){
  try{
    const response = await fetch (`${api.url}?q=${query}&appid=${api.key}&lang=it`);
    const datos = await response.json();

    date.innerHTML = (new Date()).toLocaleDateString();
    temp.innerHTML = toCelcius(datos.main.temp);
    weather.innerHTML = datos.weather[0].description;
    console.log(datos);
  }catch(err){
    console.log(err)
    alert('Hubo un error')
  }
}
function toCelcius(kelvin){
  return Math.round( kelvin - 273.15)
}
search('vasanello');
