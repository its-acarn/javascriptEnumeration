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

Cinema.prototype.filterByYear = function (yearToFilter) {
	const filterFilms = this.films.filter((film) => {
		return film.year === yearToFilter;
	});

	if (filterFilms.length === 0) {
		return `No films from this year`;
	} else {
		return filterFilms;
	}
};

Cinema.prototype.checkFilmLength = function (filmLengthCheck) {
	const filterFilms = this.films.filter((film) => {
		return film.length > filmLengthCheck;
	});
	return filterFilms;
};

Cinema.prototype.totalAllFilmLengths = function () {
	const filmLengths = this.films.map((film) => {
		return film.length;
	});

	const totalFilmsLength = filmLengths.reduce((runningTotal, length) => {
		return runningTotal + length;
	}, 0);

	return totalFilmsLength;
};

module.exports = Cinema;
