var movies = new Movies();

getMovies();
function getMovies() {
  movies.getMovies().then(function() {
    console.log("List movies", movies.items);
    displayMovies(movies.items);
  });
}

  var template = document.getElementById("template");
  
function displayMovies(response) {
    
var template = document.getElementById("template");
  // traverse the array (parcurgerea sirului)
  for (var i = 0; i < 10; i++) {
    console.log(response[i])
    var moviesContainer = document.getElementById("movies");
    // clone the template; copy template's children as well (deep parameter = true)
    var movieClone = template.cloneNode(true);
    // set a unique id for each article
    
    movieClone.id = "movie_" + response[i].id;
    // populate the cloned template
    
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


  //   var deleteButton = gameClone.querySelector(".game-delete");
  //   deleteButton.addEventListener("click", function(event) {
  //     console.log("event", event);
  //     // event.target = the button that we clicked
  //     // the clicked button has a div as parent, and that has the article as parent
  //     var grandpa = event.target.parentNode.parentNode; // the article
  //     var grandpaId = grandpa.id; // article_3
  //     var gameId = grandpaId.replace("game_", ""); // 3
  //     // call delete article request from model
  //     var game = new Game({ id: gameId });
  //     game.deleteGame().then(function() {
  //       removeGameFromDOM(response, grandpa);
  //     });
  //   });

  //   var editButton = gameClone.querySelector(".game-edit");
  //   editButton.addEventListener("click", updateGameOnClick);

   moviesContainer.appendChild(movieClone);
  }

  // remove the template from DOM
  //template.remove();
}