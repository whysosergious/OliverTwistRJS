/**
 * Image wrapper
 */
import React from 'react';
import './Button.css';

const Button = props => {
	const { text, altClass, style } = props;

   return (
      <button className={ altClass }
			style={ style }
		>
			<h2>{ text }</h2>
		</button>
   );
}

export default Button;