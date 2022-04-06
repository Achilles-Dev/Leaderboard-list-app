import {getScores} from "./api.js";

const lists = document.querySelector('.left-section .bottom');

const populateScores = async () => {
  let newScore = await getScores();
  newScore.result.forEach((score) => {
    const list = document.createElement('li');
    list.className = 'list-item';
    list.textContent = `${score.user}: ${score.score}`;
    lists.appendChild(list);
  });
};

export default populateScores;
