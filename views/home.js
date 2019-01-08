var movies = new Movies();

getMovies();
function getMovies() {
  movies.getMovies(10, 0).then(function () {
    displayMovies(movies.items);
    console.log(movies.items)
  });
}

var template = document.getElementById("template");
function displayMovies(response) {
  var moviesContainer = document.getElementById("movies");
  for (var i = 0; i < response.length; i++) {

    var movieClone = template.cloneNode(true);
    // set a unique id for each article

    movieClone.id = "movie_" + response[i].id;
    movieClone.classList.add('mov');
    // populate the cloned template

    var movieTitleElement = movieClone.querySelector(".movie-title");
    movieTitleElement.innerHTML = response[i].title;

    let movie = response[i];
    movieTitleElement.addEventListener("click", function (event) {

      getMovieDetails(event.target, movie);
      location.href = "/pages/movieDetails.html?id=" + movie.id;
    })
    var imageUrl = movieClone.querySelector(".myImage");
    if (response[i].poster == 'N/A' || response[i].poster == '') {
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


    var deleteButton = movieClone.querySelector(".movie-delete");
    deleteButton.addEventListener("click", function (event) {
      console.log("event", event);
      // // event.target = the button that we clicked
      // // the clicked button has a div as parent, and that has the article as parent
      var grandpa = event.target.parentNode.parentNode;
      var grandpaId = grandpa.id;
      var movieId = grandpaId.replace("movie_", ""); // 3
      movies.deleteMovie(movieId).then(function () {
        removeExistentMovies();
        movies.getMovies(10, 0).then(function () {
          displayMovies(movies.items);
        });
      });
    });

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

var addMovieBtn = document.getElementById('add-movie-button');
var addDialog = document.getElementById('add-dialog');
addMovieBtn.addEventListener('click', function () {
  addDialog.showModal();
  if (addDialog.open) {
    var cancelDialogBtn = document.getElementById('cancel-dialog');
    cancelDialogBtn.addEventListener('click', function (event) {
      event.preventDefault();
      addDialog.close();
      document.getElementById('add-movie-form').reset();
      titleNewMovie.style.border = '1px solid #ccc';
      genreNewMovie.style.border = '1px solid #ccc';
      yearNewMovie.style.border = '1px solid #ccc';
      runtimeNewMovie.style.border = '1px solid #ccc';
    })
  }
})

var addNewMovieBtn = document.getElementById("addNewMovieBtn");
addNewMovieBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addMovie();
  document.getElementById('add-movie-form').reset();
});

var titleNewMovie = document.getElementById("title");
var genreNewMovie = document.getElementById("genre");
var yearNewMovie = document.getElementById("year");
var runtimeNewMovie = document.getElementById("runtime");

function addMovie() {
  var posterNewMovie = document.getElementById("poster");
  var typeNewMovie = document.getElementById("type");
  var languageNewMovie = document.getElementById("language");
  var countryNewMovie = document.getElementById("country");
  var imdbRatingNewMovie = document.getElementById("imdb-rating");
  var imdbVotesNewMovie = document.getElementById("imdb-votes");
  var imdbIdNewMovie = document.getElementById("imdb-id");

  if (titleNewMovie.value && genreNewMovie.value && yearNewMovie.value && runtimeNewMovie.value) {
    movies.addMovieRequest(
      titleNewMovie,
      posterNewMovie,
      genreNewMovie,
      typeNewMovie,
      yearNewMovie,
      runtimeNewMovie,
      languageNewMovie,
      countryNewMovie,
      imdbRatingNewMovie,
      imdbVotesNewMovie,
      imdbIdNewMovie
    ).then(
      function (response) {
        addDialog.close();
        document.getElementById('succes-alert-add-movie').style.display = 'block';
        hideAlert('succes-alert-add-movie');
        removeExistentMovies();
        movies.getMovies(10, 0).then(function () {
          displayMovies(movies.items);
        });
      },
      function (error) {
        displayError(error);
      }
    );
  } else {
    if (titleNewMovie.value == '') {
      titleNewMovie.style.border = '2px solid red';
      titleNewMovie.addEventListener('keyup', function () {
        titleNewMovie.style.border = '1px solid #ccc';
      })
    }
    if (genreNewMovie.value == '') {
      genreNewMovie.style.border = '2px solid red';
      genreNewMovie.addEventListener('keyup', function () {
        genreNewMovie.style.border = '1px solid #ccc';
      })
    }
    if (yearNewMovie.value == '') {
      yearNewMovie.style.border = '2px solid red';
      yearNewMovie.addEventListener('keyup', function () {
        yearNewMovie.style.border = '1px solid #ccc';
      })
    }
    if (runtimeNewMovie.value == '') {
      runtimeNewMovie.style.border = '2px solid red';
      runtimeNewMovie.addEventListener('keyup', function () {
        runtimeNewMovie.style.border = '1px solid #ccc';
      })
    }
  }
}

function getMovieDetails(clickedButton, movieObject) {
  console.log(clickedButton);
  var grandpa = clickedButton.parentNode.parentNode;
  var grandpaId = grandpa.id;
  var movieId = grandpaId.replace("movie_", "");
  console.log(movieId)


  movieObject.getMovieDetails(movieId).then(
    function (response) {
      // displayGamesDetails(response);
      console.log(response)
    },
    function (error) {
      displayError(error);
    }
  );
}

function displayError(error) {
  console.log("ADD movie request was rejected with status ",
    error.status);
}

var loginBtn = document.getElementById('loginBtn');
var loginDialog = document.getElementById('login-dialog');
loginBtn.addEventListener('click', function () {
  loginDialog.showModal();
  if (loginDialog.open) {
    var cancelLoginDialogBtn = document.getElementById('cancel-login-dialog');
    cancelLoginDialogBtn.addEventListener('click', function (event) {
      event.preventDefault();
      loginDialog.close();
      document.getElementById('login-form').reset();
      document.getElementById('usernameLoginError').style.display = 'none';
      document.getElementById('usernameLoginWrong').style.display = 'none';
      document.getElementById('passwordLoginError').style.display = 'none';
      document.getElementById('passwordLoginWrong').style.display = 'none';
    })
  }
})

var registerBtn = document.getElementById('registerBtn');
var registerDialog = document.getElementById('register-dialog');
registerBtn.addEventListener('click', function () {
  registerDialog.showModal();
  if (registerDialog.open) {
    var cancelRegisterDialogBtn = document.getElementById('cancel-register-dialog');
    cancelRegisterDialogBtn.addEventListener('click', function (event) {
      event.preventDefault();
      registerDialog.close();
      document.getElementById('register-form').reset();
      document.getElementById('usernameRegisterError').style.display = 'none';
      document.getElementById('takenUsername').style.display = 'none';
      document.getElementById('emailError').style.display = 'none';
      document.getElementById('emailValidError').style.display = 'none';
      document.getElementById('passwordRegisterError').style.display = 'none';
      document.getElementById('rePasswordRegisterError').style.display = 'none';
      document.getElementById('passwordRegisterMatch').style.display = 'none';
    })
  }
})

displayButtonsAfterLogin();
function displayButtonsAfterLogin() {
  if (accesToken) {
    displayButtons();
  }
}

function displayButtons() {
  document.getElementById('logged-in').style.display = 'block';
  document.getElementById('logged-in').innerHTML = `<p>You are logged in as<strong>admin!</strong></p>`;
  document.getElementById('loginBtn').style.display = 'none';
  document.getElementById('registerBtn').style.display = 'none';
  document.getElementById('logoutBtn').style.display = 'block';
  document.getElementById('add-movie-button').style.display = 'block';

  Array.from(document.getElementsByClassName('movie-edit')).forEach(function (btn) {
    btn.style.display = 'block';
  });

  Array.from(document.getElementsByClassName('movie-delete')).forEach(function (btn) {
    btn.style.display = 'block';
  });
}

function hideButtonsAfterLogout() {
  document.getElementById('logged-in').style.display = 'none';
  document.getElementById('loginBtn').style.display = 'block';
  document.getElementById('registerBtn').style.display = 'block';
  document.getElementById('logoutBtn').style.display = 'none';
  document.getElementById('add-movie-button').style.display = 'none';
 
  Array.from(document.getElementsByClassName('movie-edit')).forEach(function (btn) {
    btn.style.display = 'none';
  });

  Array.from(document.getElementsByClassName('movie-delete')).forEach(function (btn) {
    btn.style.display = 'none';
  });
}

function hideAlert(alertId) {
  $(`#${alertId}`).fadeTo(2000, 500).slideUp(500, function () {
    $(`#${alertId}`).slideUp(500);
  });
}