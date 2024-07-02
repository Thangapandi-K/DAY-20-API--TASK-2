


const API_URL = 'https://official-joke-api.appspot.com/random_joke'

// getting datas from API url

const joke = fetch(API_URL)
.then((res) => res.json())
.then((data) => {

    const jokeCard = document.getElementById("joke");
    jokeCard.innerText = data.setup;

    const jokePunch = document.getElementById("puchline");
    jokePunch.innerText = data.punchline;
})
.catch(error => console.log(error.message));




