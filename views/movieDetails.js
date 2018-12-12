var movie = new Movie ();

movie.getMovieDetails().then(function(response){
    displayMovieDetails(response);
})

function displayMovieDetails (response){

    var title = document.querySelector(".title");
    title.innerHTML = response.title;

    var year = document.querySelector(".year");
    year.innerHTML = "Release date: " + response.year;

    var rated = document.querySelector(".rated");
    rated.innerHTML = "Rated: " + response.rated;

    var runtime = document.querySelector(".runtime");
    runtime.innerHTML = "Runtime: " + response.runtime;

    var genre = document.querySelector(".genre");
    genre.innerHTML = "Genre: " + response.genre;

    var director = document.querySelector(".director");
    director.innerHTML = "Directed by: " + response.director;

    var writer = document.querySelector(".writer");
    writer.innerHTML = "Written by: " + response.writer;

    var actors = document.querySelector(".actors");
    actors.innerHTML = "Actor List: " + response.actors;

    var plot = document.querySelector(".plot");
    plot.innerHTML = "Plot: " + response.plot;

    var language = document.querySelector(".language");
    language.innerHTML = "Language: " + response.language;

    var country = document.querySelector(".country");
    country.innerHTML = "Country: " + response.country;

    var awards = document.querySelector(".awards");
    awards.innerHTML = "Awards Received: " + response.awards;

    var poster = document.querySelector(".poster");
    poster.innerHTML = "<img src='" + response.poster + "' alt = 'movie poster'/>"

    var metascore = document.querySelector(".metascore");
    metascore.innerHTML = "Metascore: " + response.metascore;

    var rating = document.querySelector(".rating");
    rating.innerHTML = "IMDB Score: " + response.rating;

    var type = document.querySelector(".type");
    type.innerHTML = "Type: " + response.type;

    var dvd = document.querySelector(".dvd");
    dvd.innerHTML = "DVD: " + response.dvd;

    var boxOffice = document.querySelector(".box-office");
    boxOffice.innerHTML = "Box Office: " + response.boxOffice;

    var production = document.querySelector(".production");
    production.innerHTML = "Produced by: " + response.production;
    
}