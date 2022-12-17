import React from 'react';
import './Detail.css';

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push('/');
		}
	}

	render() {
		const { location } = this.props;
		const ratingToPercent = location.state.rating * 10;
		const ratingStarArr = ['★', '★', '★', '★', '★'];
		const ratingStarEl = ratingStarArr.map((star) => <span>{star}</span>);

		if (location.state) {
			return (
				<section className="container">
					<div className="detail__warp">
						<div className="detail__left">
							<img src={location.state.poster} />
						</div>
						<div className="detail__right">
							<h2>{location.state.title}</h2>
							<div className="ratings">
								<div className="rating__star">
									<div
										className="ratings__fill"
										style={{ width: ratingToPercent + '%' }}
									>
										{ratingStarEl}
									</div>
									<div className="ratings__base">{ratingStarEl}</div>
								</div>
								<p>({location.state.rating / 2})</p>
							</div>
							<p>{location.state.year}</p>
							<p>{location.state.genres.join(', ')}</p>
							<p>{location.state.summary}</p>
						</div>
					</div>
				</section>
			);
		} else {
			return null;
		}
	}
}

export default Detail;
