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