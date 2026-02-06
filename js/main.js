(() => {
    
    // connect to api , pull a list of 10 characters
    // when user clicks pull up a specific movie, and include the title, poster image and opening crawl

    // route 1 get characters
    //https://swapi.info/api/people

    //route 2 get a particular  movie
     //https://swapi.info/api/films/2

     //variables
    const baseUrl = "https://swapi.info/api/";

    //set up variables for dom elements

    function getCharacters() {

        fetch(`${baseUrl}people`)
        .then((res) => res.json())
        .then((characters) => {
            characters.forEach(character => {
                console.log(character);
            });

        })
        .catch((error) => {
            console.error(error)
    })

    }

    //call the function to kick things off

    getCharacters();

})();
