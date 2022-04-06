const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

let id;

export const addGame = async () => {
  const data = {name: 'Achilles New Game1'};
  const result = await fetch(`${baseURL}/games/`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  let result2 = await result.json();
  id = JSON.stringify(result2.substring(15,46));
  
}

