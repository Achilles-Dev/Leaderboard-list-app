import './style.css';
import  {addScore, getScores} from '../modules/api.js';
import populateScores from '../modules/store.js';

const form = document.querySelector('.add-score');

const addScoreToApi = () => {
  let name = form.elements.name.value;
  let score = form.elements.score.value;
  if (score !== '' && name !== '') {
    addScore(name, score);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateScores();
});

document.addEventListener('click', (e) => {
  if (e.target.className === 'submit') {
    e.preventDefault();
    addScoreToApi();
  } else if(e.target.className === 'refresh') {
    let lists = document.querySelector('.left-section .bottom');
    while(lists.firstChild) {
      lists.removeChild(lists.firstChild);
    }
    populateScores()
  }
})






