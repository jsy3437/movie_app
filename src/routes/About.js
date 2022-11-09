import React from 'react';
import './About.css';
import doll from '../images/doll.jpg';
import githubIcon from '../images/ico_github.svg';
import emailIcon from '../images/ico_email.svg';

function About() {
	return (
		<div className="about__container">
			<div className="doll__box">
				<img src={doll} alt="doll image" />
			</div>
			<div className="text__box">
				<h2>Seoyoon</h2>
				<p>Web Front-end Developer</p>
				<h5>React, JavaScript, CSS, HTML</h5>
				<p>
					<img src={emailIcon} alt="email icon" />
					joseoyoon12@gmail.com
				</p>
				<p>
					<img src={githubIcon} alt="github icon" />
					jsy3437
				</p>
			</div>
		</div>
	);
}

export default About;
