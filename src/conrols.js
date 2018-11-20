export default function activate(youtube, inp, ui, nextpage) {
  let shift = 0;
  let currentPos = 0;
  const sliderLine = document.querySelector('.slider__line');
  const nums = document.querySelectorAll('.controls__num');
  function calcShift() {
    if (document.body.getBoundingClientRect().width <= 740) {
      shift = 360;
    } else if (document.body.getBoundingClientRect().width <= 1080) {
      shift = 720;
    } else if (document.body.getBoundingClientRect().width <= 1450) {
      shift = 1080;
    } else {
      shift = 1440;
    }
    currentPos = Math.round(currentPos / shift) * shift;
    sliderLine.style.transition = '0s';
    sliderLine.style.left = `${currentPos}px`;
    nums[0].innerHTML = `${-currentPos / shift}`;
    nums[1].innerHTML = `${-currentPos / shift + 1}`;
    nums[2].innerHTML = `${-currentPos / shift + 2}`;
  }
  calcShift();

  window.addEventListener('resize', calcShift);

  function sliderNext() {
    sliderLine.style.transition = '0.5s';
    sliderLine.style.left = `${currentPos -= shift}px`;
    nums[0].innerHTML = `${-currentPos / shift}`;
    nums[1].innerHTML = `${-currentPos / shift + 1}`;
    nums[2].innerHTML = `${-currentPos / shift + 2}`;
    if (document.querySelectorAll('.slider__slide').length < (nums[1].innerHTML * 4 + 4)) {
      youtube.getVideo(inp, nextpage)
        .then((data) => {
          ui.showSlides(data[0].items);
          nextpage = data[1]; // eslint-disable-line
        });
    }
  }

  function sliderPrev() {
    if (currentPos < 0) {
      sliderLine.style.transition = '0.5s';
      sliderLine.style.left = `${currentPos += shift}px`;
    }
    if (currentPos >= 0) {
      nums[0].innerHTML = ' ';
    } else {
      nums[0].innerHTML = `${-currentPos / shift}`;
    }
    nums[1].innerHTML = `${-currentPos / shift + 1}`;
    nums[2].innerHTML = `${-currentPos / shift + 2}`;
  }
  let startX = 0;

  function swipe(e) {
    if (e.clientX) e.preventDefault();
    sliderLine.style.transition = '0s';
    sliderLine.style.left = `${currentPos + ((e.clientX || e.changedTouches[0].pageX) - startX)}px`;
  }

  function newPos(e) {
    document.removeEventListener('mousemove', swipe);
    document.removeEventListener('mouseup', newPos);
    document.removeEventListener('touchmove', swipe);
    document.removeEventListener('touchend', newPos);
    sliderLine.style.transition = '0.5s';
    if ((e.clientX || e.changedTouches[0].pageX) - startX > 0) {
      currentPos += shift;
      if (currentPos === 0) {
        nums[0].innerHTML = ' ';
      } else {
        nums[0].innerHTML = `${-currentPos / shift}`;
      }
      nums[1].innerHTML = `${-currentPos / shift + 1}`;
      nums[2].innerHTML = `${-currentPos / shift + 2}`;
    } else if ((e.clientX || e.changedTouches[0].pageX) - startX < 0) {
      currentPos -= shift;
      nums[0].innerHTML = `${-currentPos / shift}`;
      nums[1].innerHTML = `${-currentPos / shift + 1}`;
      nums[2].innerHTML = `${-currentPos / shift + 2}`;
      if (document.querySelectorAll('.slider__slide').length < (nums[1].innerHTML * 4 + 4)) {
        youtube.getVideo(inp, nextpage)
          .then((data) => {
            ui.showSlides(data[0].items);
            nextpage = data[1]; // eslint-disable-line
          });
      }
    }

    if (currentPos > 0) {
      currentPos = 0;
      if (currentPos === 0) {
        nums[0].innerHTML = ' ';
      } else {
        nums[0].innerHTML = `${-currentPos / shift}`;
      }
      nums[1].innerHTML = `${-currentPos / shift + 1}`;
      nums[2].innerHTML = `${-currentPos / shift + 2}`;
    }
    sliderLine.style.left = `${currentPos}px`;
  }

  function swiper(e) {
    if (e.clientX) e.preventDefault();
    startX = e.clientX || e.changedTouches[0].pageX;
    document.addEventListener('mousemove', swipe);
    document.addEventListener('mouseup', newPos);
    document.addEventListener('touchmove', swipe);
    document.addEventListener('touchend', newPos);
  }

  document.querySelector('.controls__btn--next').addEventListener('click', sliderNext);
  document.querySelector('.controls__btn--prev').addEventListener('click', sliderPrev);
  document.querySelector('.slider').addEventListener('mousedown', swiper);
  document.querySelector('.slider').addEventListener('touchstart', swiper);
}
