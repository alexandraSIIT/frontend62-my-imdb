var movie = new Movie();
movie.id = getUrlParameter('id');

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

movie.getMovieDetails(movie.id).then(function (response) {
  displayMovieDetails(response);
})

function displayMovieDetails(response) {

  var title = document.querySelector(".title");
  title.innerHTML = response.title;

  var year = document.querySelector(".year");
  if (response.year !== 'N/A') {
    year.innerHTML = "Release date: " + response.year
  } else {
    year.style.display = 'none'
  }

  var rated = document.querySelector(".ratedD");
  if (response.rated == 'N/A' || response.rated == 'UNRATED' || response.rated == 'NOT RATED') {
    rated.style.display = 'none'
  } else {
    rated.innerHTML = "Rated: " + response.rated
  }

  var runtime = document.querySelector(".runtime");
  if (response.runtime !== 'N/A') {
    runtime.innerHTML = "Runtime: " + response.runtime
  } else {
    runtime.style.display = 'none'
  }

  var genre = document.querySelector(".genre");
  if (response.genre !== 'N/A') {
    genre.innerHTML = "Genre: " + response.genre
  } else {
    genre.style.display = 'none'
  }

  var director = document.querySelector(".director");
  if (response.director !== 'N/A') {
    director.innerHTML = "Directed by: " + response.director
  } else {
    director.style.display = 'none'
  }

  var writer = document.querySelector(".writer");
  if (response.writer !== 'N/A') {
    writer.innerHTML = "Written by: " + response.writer
  } else {
    writer.style.display = 'none'
  }

  var actors = document.querySelector(".actors");
  if (response.actors !== 'N/A') {
    actors.innerHTML = "Actor List: " + response.actors;
  } else {
    actors.style.display = "none"
  }

  var plot = document.querySelector(".plot")
  if (response.plot !== 'N/A') {
    plot.innerHTML = "Plot: " + response.plot
  } else {
    plot.style.display = 'none'
  }

  var language = document.querySelector(".language");
  if (response.dvd !== 'N/A') {
    language.innerHTML = "Language: " + response.language
  } else {
    language.style.display = 'none'
  }

  var country = document.querySelector(".country");
  if (response.country !== 'N/A') {
    country.innerHTML = "Country: " + response.country
  } else {
    country.style.display = 'none'
  }

  var awards = document.querySelector(".awards");
  if (response.awards !== 'N/A') {
    awards.innerHTML = "Awards Received: " + response.awards
  } else {
    awards.style.display = 'none'
  }

  var poster = document.querySelector(".poster");
  if (response.poster == 'N/A' || response.poster == '') {
    poster.innerHTML = "<img src='../movie-default-image.jpg'>"
  } else {
    poster.innerHTML = "<img src='" + response.poster + "' alt = 'movie poster'/>"
  }

  var metascore = document.querySelector(".metascore");
  if (response.metascore !== 'N/A') {
    metascore.innerHTML = "Metascore: " + response.metascore;
  } else {
    metascore.style.display = 'none'
  }

  var rating = document.querySelector(".ratingDetails");
  if (response.rating !== 'N/A') {
    rating.innerHTML = "IMDB Score: " + response.rating
  } else {
    rating.style.display = 'none'
  }

  var type = document.querySelector(".type");
  type.innerHTML = "Type: " + response.type;

  var dvd = document.querySelector(".dvd");
  if (response.dvd !== 'N/A') {
    dvd.innerHTML = "DVD: " + response.dvd
  } else {
    dvd.style.display = 'none'
  }

  var boxOffice = document.querySelector(".box-office");
  if (response.boxOffice !== 'N/A') {
    boxOffice.innerHTML = "Box Office: " + response.boxOffice;
  } else {
    boxOffice.style.display = 'none'
  }

  var production = document.querySelector(".production");
  if (response.production !== 'N/A') {
    production.innerHTML = "Produced by: " + response.production
  } else {
    production.style.display = 'none'
  }

}