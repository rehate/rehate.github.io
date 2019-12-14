const dateData = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septembe', 'October', 'November', 'December'],
};

const setDate = () => {
  const today = new Date();
  const date = `${dateData.days[today.getDay()].slice(0, 3)} ${today.getDate()} ${dateData.months[today.getMonth()]} `;
  const time = `${today.getHours()}:${today.getMinutes()}`;
  setInterval(() => {
    const crntDate = new Date();
    const crntTime = `${crntDate.getHours()}:${crntDate.getMinutes()}`;
    document.querySelector('.weather__time').innerHTML = crntTime;
  }, 1000);
  document.querySelector('.weather__date').innerHTML = date;
  document.querySelector('.weather__time').innerHTML = time;
  document.querySelectorAll('.weather__date--mini').forEach((el, ind) => {
    const node = el;
    const day = (today.getDay() + (ind + 1)) > 6
      ? (today.getDay() + (ind + 1) - 7) : (today.getDay() + (ind + 1));
    node.innerHTML = dateData.days[day];
  });
};

export default setDate;
