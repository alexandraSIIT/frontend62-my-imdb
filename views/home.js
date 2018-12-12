var movies = new Movies();

getMovies();
function getMovies() {
  movies.getMovies().then(function() {
    displayMovies(movies.items);
    });
    }
  var template = document.getElementById("template");
  function displayMovies(response) {
    var template = document.getElementById("template");
    for (var i = 0; i < 10; i++) {
    var moviesContainer = document.getElementById("movies");
    var movieClone = template.cloneNode(true);
    movieClone.id = "movie_" + response[i].id;
    var movieTitleElement = movieClone.querySelector(".movie-title");
    movieTitleElement.innerHTML = response[i].title;
    var imageUrl = movieClone.querySelector(".myImage");
    imageUrl.setAttribute("src", response[i].poster);
    var movieRatingElement = movieClone.querySelector(".rating");
    movieRatingElement.innerHTML = response[i].rating;
    var movieGenreElement = movieClone.querySelector(".genre");
    movieGenreElement.innerHTML = response[i].genre;
    var movieYearElement = movieClone.querySelector(".year");
    movieYearElement.innerHTML = response[i].year;


  //   var deleteButton = movieClone.querySelector(".movie-delete");
  //   deleteButton.addEventListener("click", function(event) {
  //     console.log("event", event);
  //     var grandpa = event.target.parentNode.parentNode; 
  //     var grandpaId = grandpa.id; 
  //     var movieId = grandpaId.replace("movie_", ""); 
  //     var movie = new Movie({ id: movieId });
  //     movie.deleteMovie().then(function() {
  //       removeMovieFromDOM(response, grandpa);
  //     });
  //   });

  //   var editButton = movieClone.querySelector(".movie-edit");
  //   editButton.addEventListener("click", updateMovieOnClick);

   moviesContainer.appendChild(movieClone);
  }
  //template.remove();
}