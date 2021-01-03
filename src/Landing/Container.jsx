/**
 * Above the fold content
 */
import React from 'react';
import './Container.css';

const LandingContainer = props => {
	return (
		<section className="Landing-Container">
			<h3>välkommen hem till</h3>
			<h1 style={{ margin: 0 }}>Oliver Twist</h1>
			<h2 style={{ marginLeft: '1rem', fontSize: '1.7rem', letterSpacing: '1rem' }}>-Stockholm-</h2>
		</section>
	);
}

export default LandingContainer;