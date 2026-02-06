(() => {
    
    // connect to api , pull a list of 10 characters
    // when user clicks pull up a specific movie, and include the title, poster image and opening crawl

    // route 1 get characters
    //https://swapi.info/api/people

    // route 2 get a particular  movie
    //https://swapi.info/api/films/2

     //variables
    const baseUrl = "https://swapi.info/api/";

    //set up variables for dom elements

    function getCharacters() {

        fetch(`${baseUrl}people`)
        .then((res) => res.json())
        .then((characters) => {
            characters.forEach(character => {
                console.log(character.name);
                // randomize the number that is picked
                //figure out the length of the array then pick a number within that range
                console.log(character.films[0]);

                //create a ul
                //create a li
                //create an a
                //add a data attribute to the anchor tag that contains one of these films
            });

        })
        .then(()=> {
            //attach an event listener to each link, calls a new function that makes the second ajax call
            //function name is getMovie()
        })

        .catch((error) => {
            console.error(error)
    })

    }

    function getMovie() {
        //need to extract data attributes either using event object or this
        fetch("https://swapi.info/api/films/1")
        .then((res) => res.json())
        .then((movie) => {

            console.log(`img.src="images/poster${movie.episode_id}.jpg"`);
            console.log(movie.title);
            console.log(movie.opening_crawl);
        })
        .catch((error) => {
            console.error(error)
    })
    }


    getMovie();

    //call the function to kick things off
    getCharacters();

})();
