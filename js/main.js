// Variables

const characterUrl = "https://swapi.info/api/people";
const characterList = document.querySelector("#character-list");
const movieSection = document.querySelector("#movie-details");
const loadingIcon = document.querySelector("#loader");
const myTemplate = document.querySelector("#char-template");

// Functions
function showLoading() {
    loadingIcon.classList.remove("hidden");
}

function hideLoading() {
    loadingIcon.classList.add("hidden");
}

// error message
function handleError(err) {
    console.log(" the fetch did not work");
    console.log(err);
    hideLoading();
}

//  movie data adds to movie section
function insertMovieData(movie) {
    //   movie info html
    movieSection.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="images/poster${movie.episode_id}.jpg" alt="movie poster">
        <p>${movie.opening_crawl}</p>
    `;
    gsap.from(movieSection, { duration: 1, opacity: 0 });
    hideLoading();
}

function insertMovie(event) {
    event.preventDefault();
    showLoading();
    const filmToFetch = event.currentTarget.dataset.url;

    fetch(filmToFetch)
        .then(function(response) {
            return response.json();
        })
        .then(insertMovieData)
        .catch(handleError);
}

//  loops through the people 
function showCharacters(data) {
    // for loop to keep it to 20 
    for (let i = 0; i < 20; i++) {
        const character = data[i];
        
        //  cloning template 
        const myClone = myTemplate.content.cloneNode(true);
        const nameLink = myClone.querySelector("a");
        
        nameLink.textContent = character.name;
        nameLink.dataset.url = character.films[0]; 
        nameLink.addEventListener("click", insertMovie);
        characterList.appendChild(myClone);
    }
    
    hideLoading();
}

// characters appear first
function insertCharacters() {
    showLoading();

    fetch(characterUrl)
        .then(function(res) {
            return res.json();
        })
        .then(showCharacters)
        .catch(handleError);
}

insertCharacters();