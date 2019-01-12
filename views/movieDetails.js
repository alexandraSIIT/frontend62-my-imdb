var movie = new Movie();

function displayMovieDetails(response, dialog) {
  console.log('Movie details:', response)

  var title = dialog.querySelector(".title");
  title.innerHTML = response.title;

  var year = dialog.querySelector(".year");
  if (response.year !== 'N/A') {
    year.innerHTML = "Release date: " + response.year
  } else {
    year.style.display = 'none'
  }

  var rated = dialog.querySelector(".rated");
  if (response.rated == 'N/A' || response.rated == 'UNRATED' || response.rated == 'NOT RATED') {
    rated.style.display = 'none'
  } else {
    rated.innerHTML = "Rated: " + response.rated
  }

  var runtime = dialog.querySelector(".runtime");
  if (response.runtime !== 'N/A') {
    runtime.innerHTML = "Runtime: " + response.runtime
  } else {
    runtime.style.display = 'none'
  }

  var genre = dialog.querySelector(".genre");
  if (response.genre !== 'N/A') {
    genre.innerHTML = "Genre: " + response.genre
  } else {
    genre.style.display = 'none'
  }

  var director = dialog.querySelector(".director");
  if (response.director !== 'N/A') {
    director.innerHTML = "Directed by: " + response.director
  } else {
    director.style.display = 'none'
  }

  var writer = dialog.querySelector(".writer");
  if (response.writer !== 'N/A') {
    writer.innerHTML = "Written by: " + response.writer
  } else {
    writer.style.display = 'none'
  }

  var actors = dialog.querySelector(".actors");
  if (response.actors !== 'N/A') {
    actors.innerHTML = "Actor List: " + response.actors;
  } else {
    actors.style.display = "none"
  }

  var plot = dialog.querySelector(".plot")
  if (response.plot !== 'N/A') {
    plot.innerHTML = "Plot: " + response.plot
  } else {
    plot.style.display = 'none'
  }

  var language = dialog.querySelector(".language");
  if (response.dvd !== 'N/A') {
    language.innerHTML = "Language: " + response.language
  } else {
    language.style.display = 'none'
  }

  var country = dialog.querySelector(".country");
  if (response.country !== 'N/A') {
    country.innerHTML = "Country: " + response.country
  } else {
    country.style.display = 'none'
  }

  var awards = dialog.querySelector(".awards");
  if (response.awards !== 'N/A') {
    awards.innerHTML = "Awards Received: " + response.awards
  } else {
    awards.style.display = 'none'
  }

  var poster = dialog.querySelector(".poster");
  if (response.poster == 'N/A' || response.poster == '') {
    poster.innerHTML = "<img src='../movie-default-image.jpg'>"
  } else {
    poster.innerHTML = "<img src='" + response.poster + "' alt = 'movie poster'/>"
  }

  var metascore = dialog.querySelector(".metascore");
  if (response.metascore !== 'N/A') {
    metascore.innerHTML = "Metascore: " + response.metascore;
  } else {
    metascore.style.display = 'none'
  }

  var rating = dialog.querySelector(".rating");
  if (response.rating !== 'N/A') {
    rating.innerHTML = "IMDB Score: " + response.rating
  } else {
    rating.style.display = 'none'
  }

  var type = dialog.querySelector(".type");
  type.innerHTML = "Type: " + response.type;

  var dvd = dialog.querySelector(".dvd");
  if (response.dvd !== 'N/A') {
    dvd.innerHTML = "DVD: " + response.dvd
  } else {
    dvd.style.display = 'none'
  }

  var boxOffice = dialog.querySelector(".box-office");
  if (response.boxOffice !== 'N/A') {
    boxOffice.innerHTML = "Box Office: " + response.boxOffice;
  } else {
    boxOffice.style.display = 'none'
  }

  var production = dialog.querySelector(".production");
  if (response.production !== 'N/A') {
    production.innerHTML = "Produced by: " + response.production
  } else {
    production.style.display = 'none'
  }

}