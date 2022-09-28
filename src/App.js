import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
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
		this.setState({ movies, isLoding: false });
		console.log(movies);
	};
	componentDidMount() {
		// 영화 데이터 로딩!1
		this.getMovies();
	}
	render() {
		const { isLoding, movies } = this.state;
		return (
			<section class="container">
				{isLoding ? (
					<div class="loader">
						<span class="loader__text">Loading...</span>
					</div>
				) : (
					<div class="movies">
						{movies.map((movie) => {
							console.log(movie);
							return (
								<Movie
									key={movie.id}
									id={movie.id}
									year={movie.year}
									title={movie.title}
									summary={movie.summary}
									poster={movie.medium_cover_image}
									genres={movie.genres}
								/>
							);
						})}
					</div>
				)}
			</section>
		);
	}
}

export default App;
