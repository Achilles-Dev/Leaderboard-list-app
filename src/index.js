import './style.css';
import addScores from '../modules/add.js';
import  {addScore, getScores} from '../modules/api.js';


document.addEventListener('DOMContentLoaded', () => {
  getScores
  addScores();
});

const form = document.querySelector('.add-score');

const addScoreToApi = () => {
  let name = form.elements.name.value;
  let score = form.elements.score.value;
  if (score !== '' && name !== '') {
    addScore(name, score);
  }
}

form.addEventListener('click', (e) => {
  if (e.target.className === 'submit') {
    e.preventDefault();
    addScoreToApi();
  }
})




