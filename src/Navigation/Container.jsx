/**
 *	Navigation menu
 */
import React, { useRef } from 'react';
import './Container.css';

// zergski logic
import { useGlobalObj } from 'logic/zergski-global-object';

// media
// import menuImage from 'ass/img/menu.jpg';

// components
import Button from 'shared/Button';
// import ImageWrapper from 'shared/ImageWrapper';

const Navigation = props => {
	const Nav = {
		ref: useRef(null),
		index: 1,
	}
	// we save our reference to global and get a callback with an individual hook state
	// that we can set from all components that import 'global-access' collection
	const [ linkedState, setLinkedState ] = useGlobalObj({ Nav }, 'Sections');

   return (
      <nav className={ linkedState ? 'stuck' : '' } ref={ Nav.ref }>

			<div className="Section-Links">
				<Button altClass="minimal"
					text="Nyheter"
				/>
				<Button altClass="minimal"
					text="Galleri"
				/>
				<Button altClass="minimal"
					text="Meny"
				/>
				<Button altClass="minimal"
					text="Om oss"
				/>
				<Button altClass="minimal"
					text="Kontakt"
				/>
			</div>

      </nav>
   );
}

export default Navigation;