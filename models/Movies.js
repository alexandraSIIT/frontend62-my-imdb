function Movies() {
    this.items = [];
    this.moviesFiltered = [];
}

var movieUrl = "https://ancient-caverns-16784.herokuapp.com/movies";
Movies.prototype.getMovies = function () {
    var me = this;
    return $.get(movieUrl).then(function (response) {
        for (var i = 0; i < response.results.length; i++) {
            var movie = new Movie(response.results[i]);
            me.items.push(movie);
        }

    },
        function (error) {
            console.log(
                "GET movies request was rejected with status ",
                error.status
            );
        })
};

Movies.prototype.getMoviesFilter = function (category, searchParam) {
    var movieParamsUrl = movieUrl + '?' + category + '=' + searchParam;
    var me = this;
    return $.get(movieParamsUrl).then(function (response) {
        for (var i = 0; i < response.results.length; i++) {
            var mov = new Movie(response.results[i]);
            me.moviesFiltered.push(mov);
            console.log(mov);
        }
    },
        function (error) {
            console.log(
                "GET movies request was rejected with status ",
                error.status
            );
        });
}