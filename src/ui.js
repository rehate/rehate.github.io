export default class UI {
  showSearch() {
    this.form = document.createElement('form');
    this.form.setAttribute('class', 'searchbox');
    this.form.innerHTML = `
      <input class="searchbox__input" type="text" placeholder="Type here to search..." required>
      <button class="searchbox__search" type="button">SEARCH</button>
    `;
    document.querySelector('body').appendChild(this.form);
  }

  showControls() {
    this.slider = document.createElement('div');
    this.slider.setAttribute('class', 'slider');
    this.slider.innerHTML = `
      <div class="slider__line">
      </div>
      `;
    document.querySelector('body').appendChild(this.slider);
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
      this.slide = document.createElement('div');
      this.slide.setAttribute('class', 'slider__slide');
      this.slide.innerHTML = `
        <div class="slider__header" style="background: url(${item.snippet.thumbnails.medium.url})">
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
        <p class="slider__description">${(function descr() { if (item.snippet.description.length > 150) { return `${item.snippet.description.substring(0, 150)}...`; } return item.snippet.description; }())}</p>
      `;
      document.querySelector('.slider__line').appendChild(this.slide);
    });
  }

  clearSlides() {
    this.slides = document.querySelectorAll('.slider__slide');
    this.slider = document.querySelector('.slider');
    this.controls = document.querySelector('.controls');
    if (this.slides.length) {
      this.slider.parentNode.removeChild(this.slider);
      this.controls.parentNode.removeChild(this.controls);
    }
  }
}
