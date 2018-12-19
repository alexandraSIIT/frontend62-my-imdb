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
    if (response.poster == 'N/A') {
        poster.innerHTML = "img src = '../movie-default-image.jpg"
      } else {
        poster.innerHTML = "<img src='" + response.poster + "' alt = 'movie poster'/>"
      }
    
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

var editButton = document.querySelector (".edit");
editButton.addEventListener("click", editMovieDetails)

function editMovieDetails (event){
var base = event.target.parentNode;

var inputTitle = document.createElement("input");
base.appendChild(inputTitle);
inputTitle.value = movie.title;

var inputYear = document.createElement("input");
base.appendChild(inputYear);
inputYear.value = document.querySelector(".year").innerText;

var inputRated = document.createElement("input");
base.appendChild(inputRated);
inputRated.value = document.querySelector(".rated").innerText;

var inputRuntime = document.createElement("input");
inputRuntime.value = document.querySelector(".runtime").innerText;

var inputGenre = document.createElement("input");
inputGenre.value = document.querySelector(".genre").innerText;

var inputDirector = document.createElement("input");
inputDirector.value = document.querySelector(".director").innerText;

var inputWriter = document.createElement("input");
inputWriter.value = document.querySelector(".writer").innerText;

var inputActors = document.createElement("input");
inputActors.value = document.querySelector(".actors").innerText;

var inputPlot = document.createElement("input");
inputPlot.value = document.querySelector(".plot").innerText;

var inputLanguage = document.createElement("input");
inputLanguage.value = document.querySelector(".language").innerText;

var inputCountry = document.createElement("input");
inputCountry.value = document.querySelector(".country").innerText;

var inputAwards = document.createElement("input");
inputAwards.value = document.querySelector(".awards").innerText;

var updateButton = document.createElement("button");
  updateButton.innerText = "Update";
 base.appendChild(updateButton);

 updateButton.addEventListener("click", function (){
     updateMovieDetails()
 })
}