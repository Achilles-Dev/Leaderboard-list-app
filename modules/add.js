const scores = [
  {
    name: "Solomon A",
    score: 50
  },
  {
    name: "Sanson K",
    score: 70
  },
  {
    name: "Franca B",
    score: 60
  },
  {
    name: "Edina G",
    score: 50
  }
];

const lists = document.querySelector('.left-section .bottom');

export const addScores = () => {
  scores.forEach((score) => {
    let list = document.createElement('li');
    list.className = 'list-item';
    list.textContent = `${score.name}: ${score.score}`;
    lists.appendChild(list);
  });  
}

