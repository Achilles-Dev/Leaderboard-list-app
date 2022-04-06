const scores = [
  {
    name: 'Solomon A',
    score: 50,
  },
  {
    name: 'Sanson K',
    score: 70,
  },
  {
    name: 'Franca B',
    score: 60,
  },
  {
    name: 'Edina G',
    score: 50,
  },
];

import {getScores} from "./api.js";

const lists = document.querySelector('.left-section .bottom');

const addScores = async () => {
  let newScore = await getScores();
  newScore.result.forEach((score) => {
    const list = document.createElement('li');
    list.className = 'list-item';
    list.textContent = `${score.user}: ${score.score}`;
    lists.appendChild(list);
  });
  
  console.log(newScore.result);
};

export default addScores;
