/**
 * Above the fold content
 */
import React from 'react';
import './Container.css';
import Button from 'shared/Button';

// media
import logoSimple from 'ass/vector/files/otlogo-white-simple.svg';

// components

const LandingContainer = props => {
	return (
		<section className="Landing-Container">


			<div className="Greeting-Group">
				<img className="Landing-Logo" src={ logoSimple } alt="Simplified bar logo" />
				<h1><span>Välkommen hem till</span>Oliver Twist</h1>
				<h2>-Stockholm-</h2>
			</div>

			<div className="Button-Group">
				<Button altClass="minimal"
					text="Våra Öppettider"
				/>
				<Button altClass="cta"
					text="Boka bord"
				/>
			</div>
		</section>
	);
}

export default LandingContainer;