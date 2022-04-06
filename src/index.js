import './style.css';
import addScores from '../modules/add.js';
import  {addGame} from '../modules/api.js';

document.addEventListener('DOMContentLoaded', () => {
  addScores();
  console.log(addGame());
});



