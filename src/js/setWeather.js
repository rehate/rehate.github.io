const setWeather = (data) => {
  console.log(data)
  const temp = Math.round(((data.currently.temperature - 32) * 5) / 9);
  const feels = Math.round(((data.currently.apparentTemperature - 32) * 5) / 9);
  const wind = Math.round(data.currently.windSpeed);
  const humidity = Math.round(data.currently.humidity * 100);
  const { icon } = data.currently;
  document.querySelector('.weather__icon').style.backgroundImage = `url(./images/${icon}.png)`;
  document.querySelectorAll('.weather__icon--mini').forEach((node, idx) => {
    const item = node;
    const miniIcon = data.daily.data[idx].icon;
    item.style.backgroundImage = `url(./images/${miniIcon}.png)`;
  });
  document.querySelector('.weater__text').innerHTML = temp;
  document.querySelector('.weather__feels').innerHTML = feels;
  document.querySelector('.weather__wind').innerHTML = wind;
  document.querySelector('.weather__humidity').innerHTML = humidity;
  document.querySelectorAll('.weather__temperature--mini').forEach((node, idx) => {
    const item = node;
    item.innerHTML = `${Math.round(((data.daily.data[idx].temperatureHigh - 32) * 5) / 9)}&deg`;
  });
};

export default setWeather;
