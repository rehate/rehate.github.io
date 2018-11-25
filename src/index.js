import './style.css';
import YouTube from './yt';
import UI from './ui';
import activate from './conrols';

const ui = new UI();
let nextpage = '';

ui.showSearch();
const youtube = new YouTube();
const input = document.querySelector('.searchbox__input');
input.addEventListener('focus', () => input.select());

function search() {
  if (input.value) {
    ui.clearSlides();
    youtube.getVideo(input.value)
      .then((data) => {
        let nodes;
        [nodes, nextpage] = data;
        ui.showControls();
        ui.showSlides(nodes.items);
        activate(youtube, input.value, ui, nextpage);
      });
  }
}
input.addEventListener('keyup', (e) => { if (e.keyCode === 13) { search(); input.blur(); } });
const srch = document.querySelector('.searchbox__search');
srch.addEventListener('click', search);
const form = document.querySelector('.searchbox');
form.onsubmit = function subm(e) { e.preventDefault(); };
