import { getScores } from './api.js';

const lists = document.querySelector('.left-section .bottom');

const populateScores = async () => {
  const newScore = await getScores();
  newScore.result.forEach((score) => {
    const list = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = score.score;
    list.className = 'list-item';
    list.textContent = `${score.user}:`;
    list.appendChild(span);
    lists.appendChild(list);
  });
};

export default populateScores;
