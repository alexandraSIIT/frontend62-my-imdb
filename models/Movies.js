function Movies() {
    this.items = [];
    this.numberOfPages = 0;
    this.currentPage = 0;
}

var movieUrl = "https://ancient-caverns-16784.herokuapp.com/movies";
Movies.prototype.getMovies = function (take, skip, category, searchParam) {
    var me = this;
    var urlMoviesPaginated;
    if (!category || !searchParam) {
        urlMoviesPaginated = movieUrl + `?take=${take}&skip=${skip}`;
    } else {
        urlMoviesPaginated = movieUrl + `?${category}=${searchParam}&take=${take}&skip=${skip}`;
    }
    return $.get(urlMoviesPaginated).then(function (response) {
        me.items = [];
        for (var i = 0; i < response.results.length; i++) {
            var movie = new Movie(response.results[i]);
            me.items.push(movie);
        }
        me.numberOfPages = response.pagination.numberOfPages;
        me.currentPage = response.pagination.currentPage;
    },
        function (error) {
            console.log(
                "GET movies request was rejected with status ",
                error.status
            );
        })
};