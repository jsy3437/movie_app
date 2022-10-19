import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
	return (
		<div className="movie">
			<Link
				to={{
					pathname: '/movie-detail',
					state: { year, title, summary, poster, genres },
				}}
			>
				<img src={poster} alt={title} title={title}></img>
			</Link>
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
