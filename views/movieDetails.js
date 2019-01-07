var movie = new Movie ();
movie.id = getUrlParameter('id');

movie.getMovieDetails(movie.id).then(function(response){
    // displayMovieTitle(response)
    displayMovieDetails(response);
})


function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

function displayMovieTitle (response){
var title = document.querySelector(".movie-title")
title.innerHTML = response.title
}

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
    if (response.poster == 'N/A' || response.poster == '') {
        poster.innerHTML = "<img src='../movie-default-image.jpg'>"
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

var modal = document.getElementById('editMovieModal');
var editButton = document.querySelector (".edit")[0];
editButton.onclick = function() {
    modal.style.display = "block";
    var inputTitle = document.getElementById("editTitle");
    inputTitle.value = movie.title;

    var inputYear = document.getElementById("editYear");
    inputYear.value = movie.year;
        
    var inputRated = document.getElementById("editRated");
    inputRated.value = movie.rated;
        
    var inputRuntime = document.getElementById("editRuntime");
    inputRuntime.value = movie.runtime;
      
    var inputGenre = document.getElementById("editGenre");
    inputGenre.value = movie.genre;

    var inputDirector = document.getElementById("editDirector");
    inputDirector.value = movie.director;

    var inputWriter = document.getElementById("editWriter");
    inputWriter.value = movie.writer;
        
    var inputActors = document.getElementById("editActors");
    inputActors.value = movie.actors;
        
    var inputPlot = document.getElementById("editPlot");
    inputPlot.value = movie.plot;
        
    var inputLanguage = document.getElementById("editLanguage");
    inputLanguage.value = movie.language;
        
    var inputCountry = document.getElementById("editCountry");
    inputCountry.value = movie.country;
        
    var inputAwards = document.getElementById("editAwards");
    inputAwards.value = movie.awards;
        
    var inputPoster = document.getElementById("editPoster");
    inputPoster.value = movie.poster;
        
    var inputMetascore = document.getElementById("editMetascore");
    inputMetascore.value = movie.metascore;
        
    var inputRating = document.getElementById("editRating");
    inputRating.value = movie.rating;

    var inputType = document.getElementById("editType");
    inputType.value = movie.type;
        
    var inputDvd = document.getElementById("editDvd");
    inputDvd.value = movie.dvd;
        
    var inputBoxOffice = document.getElementById("editBoxoffice");
    inputBoxOffice.value = movie.boxOffice;
        
    var inputProduction = document.getElementById("editProduction");
    inputProduction.value = movie.production;

    var updateButton = document.querySelector(".submit-updates")
      updateButton.onclick = function (event){
          event.preventDefault();
          var inputNewTitle = document.getElementById("editTitle");
          inputNewTitle.value = document.getElementById("editTitle").innerText;
                    var movie = new Movie({
                       title: inputNewTitle.value,
                       year: inputYear.value,
                       rated: inputRated,
                       runtime: inputRuntime,
                       genre: inputGenre,
                       director: inputDirector,
                       writer: inputWriter,
                       actors: inputActors,
                       plot: inputPlot,
                       language: inputLanguage,
                       country: inputCountry,
                       awards: inputAwards,
                       poster: inputPoster,
                       metascore: inputMetascore,
                       rating: inputRating,
                       type: inputType,
                       dvd: inputDvd,
                       boxOffice: inputBoxOffice,
                       production: inputProduction
                   });
                  movie.updateMovieDetails(movie.id)
               }

}

var closeButton = document.querySelector(".close");
    closeButton.onclick = function() {
        modal.style.display = "none";
      }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }


      