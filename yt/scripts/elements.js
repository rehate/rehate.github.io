class UI {
  
  showSearch() {
    let form = document.createElement("form");
    form.setAttribute("class", "searchbox");
    form.innerHTML = `
      <input class="searchbox__input" type="text" placeholder="Type here to search..." required>
      <button class="searchbox__search" type="button">SEARCH</button>
    `
    document.querySelector('body').appendChild(form);
  }

  showControls() {
    const slider = document.createElement('div');
    slider.setAttribute('class', 'slider');
    slider.innerHTML = `
      <div class="slider__line">
      </div>
      `;
    document.querySelector('body').appendChild(slider);
    const controls = document.createElement('div');
    controls.setAttribute('class', 'controls');
    controls.innerHTML = `
      <button class="controls__btn controls__btn--prev">Prev</button>
        <div class="controls__list">
          <button class="controls__num"> </button>
          <button class="controls__num">1</button>
          <button class="controls__num">2</button>
        </div>
      <button class="controls__btn controls__btn--next">Next</button>
      `;
      document.querySelector('body').appendChild(controls);
  }

  showSlides(videos) {
    videos.forEach((item) => {
      let slide = document.createElement("div");
      slide.setAttribute('class', 'slider__slide');
      slide.innerHTML = `
      <img class="slider__image" src="${item.snippet.thumbnails.high.url}" alt="">
        <div class="slider__header">
          <div class="slider__wrapper">
            <a class="slider__link" href="https://www.youtube.com/watch?v=${item.id}" target="_blank">${item.snippet.title}</a>
          </div>
        </div>
        <div class="slider__text">
          <img src="./images/user.svg" alt="user" height="15px">
          <p>${item.snippet.channelTitle.substring(0, 20)}</p>
        </div>
        <div class="slider__text">
          <img src="./images/calendar.svg" alt="date" height="15px">
          <p>${item.snippet.publishedAt.substring(0, 10)}</p>
        </div>
        <div class="slider__text">
          <img src="./images/eye.svg" alt="watchers" height="15px">
          <p>${item.statistics.viewCount}</p>
        </div>
        <p class="slider__description">${item.snippet.description.substring(0, 120)}</p>
      `
      document.querySelector(".slider__line").appendChild(slide);
    });

  }

  clearSlides() {
    let slides = document.querySelectorAll(".slider__slide");
    let slider = document.querySelector(".slider");
    let controls = document.querySelector(".controls")
    if (slides.length) {
      slider.parentNode.removeChild(slider);
      controls.parentNode.removeChild(controls);
    };
  }

}