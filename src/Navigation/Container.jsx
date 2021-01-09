/**
 *	Navigation menu
 */
import React, { useRef } from 'react';
import './Container.css';

// zergski logic
import { useGlobalAccess } from 'logic/zergski-global-access';

// media
// import menuImage from 'ass/img/menu.jpg';

// components
import Button from 'shared/Button';
// import ImageWrapper from 'shared/ImageWrapper';

const Navigation = props => {
	const nav = {
		ref: useRef(null),
		index: 1,
	}
	// we save our reference to global and get a callback with an individual hook state
	// that we can set from all components that import 'global-access' collection
	const linkedState = useGlobalAccess({ nav });
	console.log(linkedState)

   return (
      <nav className={ linkedState ? 'stuck' : '' } ref={ nav.ref }>

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