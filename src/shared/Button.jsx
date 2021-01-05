/**
 * Button
 */
import React from 'react';
import './Button.css';

const Button = props => {
	const { text, altClass, style, textColor } = props;

	const handleClick = () => {
		props.action();
	}

   return (
      <button className={ altClass }
			style={ style }
			onClick={ handleClick }
		>
			<h2 style={{ color: textColor, borderColor: textColor }}>{ text }</h2>
		</button>
   );
}

export default Button;