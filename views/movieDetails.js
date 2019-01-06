var movie = new Movie();

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
$(".edit").remove();

var inputTitle = document.createElement("input");
base.appendChild(inputTitle);
inputTitle.value = movie.title;

var inputYear = document.createElement("input");
base.appendChild(inputYear);
inputYear.value = movie.year;

var inputRated = document.createElement("input");
base.appendChild(inputRated);
inputRated.value = movie.rated;

var inputRuntime = document.createElement("input");
inputRuntime.value = movie.runtime;
base.appendChild(inputRuntime);

var inputGenre = document.createElement("input");
inputGenre.value = movie.genre;
base.appendChild(inputGenre);

var inputDirector = document.createElement("input");
inputDirector.value = movie.director;
base.appendChild(inputDirector);

var inputWriter = document.createElement("input");
inputWriter.value = movie.writer;
base.appendChild(inputWriter);

var inputActors = document.createElement("input");
inputActors.value = movie.actors;
base.appendChild(inputActors);

var inputPlot = document.createElement("input");
inputPlot.value = movie.plot;
base.appendChild(inputPlot);

var inputLanguage = document.createElement("input");
inputLanguage.value = movie.language;
base.appendChild(inputLanguage);

var inputCountry = document.createElement("input");
inputCountry.value = movie.country;
base.appendChild(inputCountry);

var inputAwards = document.createElement("input");
inputAwards.value = movie.awards;
base.appendChild(inputAwards);

var inputPoster = document.createElement("input");
inputPoster.value = movie.poster;
base.appendChild(inputPoster);

var inputMetascore = document.createElement("input");
inputMetascore.value = movie.metascore;
base.appendChild(inputMetascore);

var inputRating = document.createElement("input");
inputRating.value = movie.rating;
base.appendChild(inputRating);

var inputType = document.createElement("input");
inputType.value = movie.type;
base.appendChild(inputType);

var inputDvd = document.createElement("input");
inputDvd.value = movie.dvd;
base.appendChild(inputDvd);

var inputBoxOffice = document.createElement("input");
inputBoxOffice.value = movie.boxOffice;
base.appendChild(inputBoxOffice);

var inputProduction = document.createElement("input");
inputProduction.value = movie.production;
base.appendChild(inputProduction);

var updateButton = document.createElement("button");
  updateButton.innerText = "Update";
 base.appendChild(updateButton);

 updateButton.addEventListener("click", function (){
     var movie = new Movie({
         title: inputTitle
     });
     movie.updateMovieDetails().then(getMovieDetails())
 })
}