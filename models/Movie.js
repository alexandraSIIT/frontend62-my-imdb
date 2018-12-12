function Movie(options = {}) {
  this.id = options._id;
  this.title = options.Title;
  this.year = options.Year;
  this.rated = options.Rated;
  this.runtime = options.Runtime;
  this.genre = options.Genre;
  this.director = options.Director;
  this.writer = options.Writer;
  this.actors = options.Actors;
  this.plot = options.Plot;
  this.language = options.Language;
  this.country = options.Country;
  this.awards = options.Awards;
  this.poster = options.Poster;
  this.metascore = options.Metascore;
  this.rating = options.imdbRating;
  this.type = options.Type;
  this.dvd = options.DVD;
  this.boxOffice = options.boxOffice;
  this.production = options.production;
}




