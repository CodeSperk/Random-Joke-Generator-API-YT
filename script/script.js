const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "1eEm1wAVLWAzHNkTYkXDvw==7E35XkadkIvwvx9y";

const options = {
  method: "GET",
  headers: {
    'X-Api-Key': '1eEm1wAVLWAzHNkTYkXDvw==7E35XkadkIvwvx9y',
  }
}

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
  const response =await fetch(apiUrl, options);
  const data =await response.json();
  jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke)