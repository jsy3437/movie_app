import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
	return (
		<div>
			<img src={poster} alt={title} title={title}></img>
			<div class="movie__data">
				<h3 class="movie__title" style={{ backgroundColor: 'red' }}>
					{title}
				</h3>
				<h5 class="movie__year">{year}</h5>
				<p class="movie__summary">{summary}</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
