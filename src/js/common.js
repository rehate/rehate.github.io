import setGeoData from './setGeoData';
import setWeather from './setWeather';
import setDate from './setDate';
import setBackground from './setBackground';

setBackground();

const proxyUrl = '';
const targetUrl = 'https://api.darksky.net/forecast/e25a5a5c7e54a11fa122296b791abfbf/53.5359,27.3400?lang=ru';
const fetchWeather = fetch(proxyUrl + targetUrl);
fetchWeather
  .then((resp) => resp.json())
  .then((data) => {
    setDate();
    setWeather(data);
  });

const fetchGeoData = fetch('https://ipinfo.io/json?token=526aab9fffec80');
fetchGeoData
  .then((resp) => resp.json())
  .then((data) => {
    setGeoData(data);
  });
