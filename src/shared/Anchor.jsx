/**
 * Anchor element
 */
import React, { useState, useEffect } from 'react';
import './Anchor.css';

const Anchor = (props) => {
	const { text, altClass, style, link, fileName } = props;

	// dynamically import media :)
	const [icon, setIcon ] = useState(null);

	useEffect(() => {
		import(`ass/vector/icons/files/${ fileName }`).then(ico => {
			setIcon(ico.default);
		});
	});

	const iconSrc = altClass === 'icon' ? <img src={ icon } alt={ `${ fileName } icon` } /> : null ;

	console.log(icon)

   return (
      <a className={ `Anchor ${ altClass }` }
			style={ style }
			href={ link }
		>
			{ iconSrc }
			<h4>{ text }</h4>
		</a>
   );
}

export default Anchor;