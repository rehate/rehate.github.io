const setBackground = () => {
  const fetchBG = fetch('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=2b41b908b8a26b21fb463e74d90981606ad3283389b6b8ad9082c0e2326ac146');
  fetchBG
    .then((resp) => resp.json())
    .then((data) => {
      const img = new Image();
      img.src = data.urls.regular;
      img.onload = () => {
        document.querySelector('body').style.backgroundImage = `linear-gradient( rgba(94, 100, 117, 0.5) 100%, rgba(94, 100, 117, 0.5)100%), url(${img.src})`;
      };
    })
    .catch((err) => {
      document.querySelector('body').style.backgroundImage = `linear-gradient( rgba(94, 100, 117, 0.5) 100%, rgba(94, 100, 117, 0.5)100%), url("https://images.unsplash.com/photo-1548288973-797009d1e14d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk4MDk5fQ")`;
    });
};

export default setBackground;
