/**
 *	Navigation menu
 */
import React, { useEffect, useState, useRef } from 'react';
import { useIsInView } from 'App';
import './Container.css';

// media
// import menuImage from 'ass/img/menu.jpg';

// components
import Button from 'shared/Button';
// import ImageWrapper from 'shared/ImageWrapper';

const Navigation = props => {

	const navRef = {
		ref: useRef(null),
		index: 1,
	}
	const isInView = useIsInView({ navRef });
	console.log(isInView)

   return (
      <nav ref={ navRef.ref }>

			<div className="Section-Links">
				<Button altClass="plain"
					text="Nyheter"
				/>
				<Button altClass="plain"
					text="Galleri"
				/>
				<Button altClass="plain"
					text="Meny"
				/>
				<Button altClass="plain"
					text="Om oss"
				/>
				<Button altClass="plain"
					text="Kontakt"
				/>
			</div>

      </nav>
   );
}

export default Navigation;