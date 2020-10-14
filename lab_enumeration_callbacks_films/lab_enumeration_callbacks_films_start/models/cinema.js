const Cinema = function (films) {
	this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
	const filmTitles = this.films.map((film) => {
		return film.title;
	});

	return filmTitles;
};

Cinema.prototype.findByTitle = function (titleToFind) {
	const filmTitles = this.getFilmTitles();

	const findTitle = filmTitles.find((title) => {
		return title === titleToFind;
	});

	return findTitle;
};

Cinema.prototype.filterByGenre = function (genreToFilter) {
	const filterFilms = this.films.filter((film) => {
		return film.genre === genreToFilter;
	});
	return filterFilms;
};

module.exports = Cinema;
