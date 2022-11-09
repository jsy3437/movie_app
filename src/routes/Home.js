import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
import bannerImg from '../images/banner.webp';

class Home extends React.Component {
	state = {
		isLoding: true,
		movies: [],
	};

	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get(
			'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
		);
		this.setState({ movies: movies.concat(movies), isLoding: false });
	};

	componentDidMount() {
		this.getMovies();
	}

	render() {
		const { isLoding, movies } = this.state;
		return (
			<section className="container">
				{isLoding ? (
					<div className="loader">
						<div className="loader__dot"></div>
					</div>
				) : (
					<div className="movie__warp">
						<div className="bnn__box">
							<img className="bnn__img" src={bannerImg} />
						</div>
						<div className="movies">
							{movies.map((movie, idx) => {
								return (
									<Movie
										key={idx}
										id={movie.id}
										year={movie.year}
										title={movie.title}
										summary={movie.summary}
										poster={movie.medium_cover_image}
										genres={movie.genres}
										rating={movie.rating}
									/>
								);
							})}
						</div>
					</div>
				)}
			</section>
		);
	}
}

export default Home;
