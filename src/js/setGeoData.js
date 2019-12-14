const setGeoData = (data) => {
  document.querySelector('.weather__location').innerHTML = `${data.city}, ${data.country}`;
  const location = data.loc.split(',');
  const latitudeHours = Math.trunc(+location[0]);
  const latitudeMinutes = Math.trunc(Math.round((+location[0] - latitudeHours) * 60));
  const longitudeHours = Math.trunc(+location[1]);
  const longitudeMinutes = Math.trunc(Math.round((+location[1] - longitudeHours) * 60));
  document.querySelector('.location__text--lat').innerHTML = `Latitude: ${latitudeHours}&deg ${latitudeMinutes}'`;
  document.querySelector('.location__text--long').innerHTML = `Longitude: ${longitudeHours}&deg ${longitudeMinutes}'`;
};

export default setGeoData;
