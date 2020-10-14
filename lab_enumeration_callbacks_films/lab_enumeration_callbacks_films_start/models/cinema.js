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
	const findTitle = this.films.find((film) => {
		return film.title === titleToFind;
	});

	return findTitle;
};

Cinema.prototype.filterByGenre = function (genreToFilter) {
	const filterFilms = this.films.filter((film) => {
		return film.genre === genreToFilter;
	});

	return filterFilms;
};

Cinema.prototype.filmFromYear = function (yearToFind) {
	const filmYears = this.films.find((film) => {
		return film.year === yearToFind;
	});

	if (filmYears) {
		return true;
	} else {
		return false;
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

Cinema.prototype.filterByYear = function (yearToFilter) {
	const filterFilms = this.films.filter((film) => {
		return film.year === yearToFilter;
	});

	return filterFilms;
};

Cinema.prototype.filmsByProperty = function (filterProperty, filterValue) {
	const filteredList = this.films.filter((film) => {
		return film[filterProperty] === filterValue;
	});

	return filteredList;
};

module.exports = Cinema;
