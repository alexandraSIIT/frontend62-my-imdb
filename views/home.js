var movies = new Movies();

getMovies();
function getMovies() {
  movies.getMovies(10, 0).then(function () {
    displayMovies(movies.items);
  });
}

var template = document.getElementById("template");
function displayMovies(response) {
  var moviesContainer = document.getElementById("movies");
  // traverse the array (parcurgerea sirului)
  for (var i = 0; i < response.length; i++) {

    // clone the template; copy template's children as well (deep parameter = true)
    var movieClone = template.cloneNode(true);
    // set a unique id for each article

    movieClone.id = "movie_" + response[i].id;
    movieClone.classList.add('mov');
    // populate the cloned template

    var movieTitleElement = movieClone.querySelector(".movie-title");
    movieTitleElement.innerHTML = response[i].title;

    let movie = response[i];
    movieTitleElement.addEventListener("click", function (event) {
       console.log(event.target)

       getMovieDetails(event.target, movie);
      location.href = "/pages/movieDetails.html/" + movie.id;
    })
    var imageUrl = movieClone.querySelector(".myImage");
    if (response[i].poster == 'N/A') {
      imageUrl.setAttribute("src", '../movie-default-image.jpg');
    } else {
      imageUrl.setAttribute("src", response[i].poster);
    }
    var movieRatingElement = movieClone.querySelector(".rating");
    movieRatingElement.innerHTML = response[i].rating;
    // var movieGenreElement = movieClone.querySelector(".genre");
    // movieGenreElement.innerHTML = response[i].genre;
    // var movieYearElement = movieClone.querySelector(".year");
    // movieYearElement.innerHTML = response[i].year;


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

  if (movies.numberOfPages > 1) {
    if (categoryDropDown.value && searchInput.value) {
      addPagination(categoryDropDown.value, searchInput.value);
    } else {
      addPagination();
    }
  }

  // remove the template from DOM
  template.remove();
}

var categoryDropDown = document.getElementById('search-category');
var searchInput = document.getElementById('movie-search');
var searchBtn = document.getElementById('search-button');
searchBtn.addEventListener("click", searchMovie);

function searchMovie() {
  var selectedCategory = categoryDropDown.value;
  var searchInputValue = searchInput.value;
  if (searchInputValue) {
    removeExistentMovies();
    movies.getMovies(10, 0, selectedCategory, searchInputValue).then(function () {
      displayMovies(movies.items);
    });
  } else {
    searchInput.style.border = '2px solid red';
  }
}

function removeExistentMovies() {
  var movieDiv = document.getElementsByClassName('mov');
  while (movieDiv[0]) {
    movieDiv[0].parentNode.removeChild(movieDiv[0]);
  }
  var anchorPageNb = document.getElementsByClassName('anchor-page-nb');
  console.log(anchorPageNb)
  while (anchorPageNb[0]) {
    anchorPageNb[0].parentNode.removeChild(anchorPageNb[0]);
  }
}

categoryDropDown.addEventListener('change', function () {
  searchInput.style.border = 'none';
  searchInput.value = '';
  removeExistentMovies();
  displayMovies(movies.items);
})

searchInput.addEventListener('keyup', function () {
  removeExistentMovies();
  displayMovies(movies.items);
})


function addPagination(category, searchValue) {
  var pagination = document.getElementById('pagination');
  let anchor;
  var firstPageBtn = document.createElement('a');
  firstPageBtn.innerHTML = '&laquo';
  firstPageBtn.className = 'anchor-page-nb';
  firstPageBtn.addEventListener('click', function () {
    removeExistentMovies();
    movies.getMovies(10, 0, category, searchValue).then(function () {
      displayMovies(movies.items);
    });
  });
  pagination.appendChild(firstPageBtn);
  
  for (var i = 1; i <= movies.numberOfPages; i++) {
    anchor = document.createElement('a');
    anchor.innerHTML = i;
    anchor.className = 'anchor-page-nb';
    pagination.appendChild(anchor);
  }

  Array.from(document.getElementsByClassName('anchor-page-nb')).forEach(function (anchor, index) {
    anchor.addEventListener('click', function () {
      removeExistentMovies();
      movies.getMovies(10, (index - 1) * 10, category, searchValue).then(function () {
        displayMovies(movies.items);
      });
      anchor.className = 'active';
    });
  });

  var lastPageBtn = document.createElement('a');
  lastPageBtn.innerHTML = '&raquo;';
  lastPageBtn.className = 'anchor-page-nb';
  lastPageBtn.addEventListener('click', function () {
    removeExistentMovies();
    movies.getMovies(10, (movies.numberOfPages - 1) * 10, category, searchValue).then(function () {
      displayMovies(movies.items);
    });
  });
  pagination.appendChild(lastPageBtn);
}

function getMovieDetails(clickedButton, movieObject) {
  console.log(clickedButton);
  var grandpa = clickedButton.parentNode.parentNode;
  var grandpaId = grandpa.id;
  var movieId = grandpaId.replace("movie_", "");
  console.log(movieId)


  movieObject.getMovieDetails(movieId).then(
    function(response) {
      // displayGamesDetails(response);
      console.log(response)
    },
    function(error) {
      // displayError(error);
    }
  );
}