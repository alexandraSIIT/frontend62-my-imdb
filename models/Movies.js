function Movies() {
    this.items = [];
}

var movieUrl = "https://ancient-caverns-16784.herokuapp.com/movies";
Movies.prototype.getMovies = function() {
    var me = this;
    return $.get(movieUrl).then(function(response) {
        console.log("Movies", response.results);

	for (var i = 0; i < response.results.length; i++) {
      var movie = new Movie(response.results[i]);
      me.items.push(movie);
      console.log(movie);
    }

    });
};