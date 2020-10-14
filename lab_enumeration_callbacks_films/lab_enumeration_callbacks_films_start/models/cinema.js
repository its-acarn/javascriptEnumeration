const Cinema = function (films) {
	this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
	const filmTitles = this.films.map((film) => {
		return film.title;
	});

	return filmTitles;
};

module.exports = Cinema;
