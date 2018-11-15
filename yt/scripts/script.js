const youtube = new YouTube;
const ui = new UI;
const controls = new Controls;

ui.showSearch();
let input = document.querySelector(".searchbox__input");
let shift;

function search() {
  if (input.value) {
    nextpage = '';
    ui.clearSlides();
    youtube.getVideo(input.value)
    .then (data => {
      ui.showControls();
      ui.showSlides(data[0].items);
      nextpage = data[1];
      controls.activate(youtube);
    })
  }
}

const srch = document.querySelector(".searchbox__search");
const form = document.querySelector('.searchbox').onsubmit = function(e) {e.preventDefault()};
input.addEventListener('focus', ()=> input.select());
input.addEventListener('keyup', (e)=> { if (e.keyCode === 13) {search(); input.blur()}});
srch.addEventListener("click", search);

