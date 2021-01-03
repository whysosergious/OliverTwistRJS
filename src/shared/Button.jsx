/**
 * Image wrapper
 */
import React from 'react';
import './Button.css';

const Button = props => {
	const { text, type, imgSrc, imgDesc } = props;

	// adding background to menu buttons
	const image = type === 'menu' ? <img src={ imgSrc } alt={ imgDesc } /> : null ;

   return (
      <button className={ type }>
			{ image }
			<h2>{ text }</h2>
		</button>
   );
}

export default Button;