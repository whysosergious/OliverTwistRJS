/**
 *	Navigation menu
 */
import React, { useRef, useState } from 'react';
import './Container.css';

// zergski logic
import { useGlobalObj, globalObj } from 'logic/zergski-global-object';

// media
// import menuImage from 'ass/img/menu.jpg';

// components
import Button from 'shared/Button';
import Anchor from 'shared/Anchor';
// import ImageWrapper from 'shared/ImageWrapper';

const Navigation = props => {
	const Nav = {
		ref: useRef(null),
		index: 1,
		initialState: { sticky: '' }
	}
	// we save our reference to global and get a callback with an individual hook state
	// that we can set from all components that import 'global-access' collection
	const [ state ] = useGlobalObj({ Nav }, 'Sections');
	const [ swipe, setSwipe ] = useState(null);

	const handleClick = target => {
		const { main: { root }, Sections } = globalObj;
		if ( root.scrollTop - Sections[target].offsetY > 2000 ) {
			setSwipe('up');
			root.scrollTop -= 500;
			setTimeout(()=>{
				root.style.scrollBehavior = 'unset';
				root.scrollTop = Sections[target].offsetY + 500;

				setTimeout(()=>{
					root.style.scrollBehavior = '';
					root.scrollTop -= 500;
				}, 10);
				setTimeout(()=>{
					setSwipe('');
				}, 500);
			}, 550)
		} else if ( root.scrollTop - Sections[target].offsetY < -2000 ) {
			root.scrollTop += 500;
			setSwipe('down');
			setTimeout(()=>{
				root.style.scrollBehavior = 'unset';
				root.scrollTop = Sections[target].offsetY - 500;
				setTimeout(()=>{
					root.style.scrollBehavior = '';
					root.scrollTop += 500;
				}, 10);
				setTimeout(()=>{
					setSwipe('');
				}, 500);
			}, 550)
		} else {
			root.scrollTop = Sections[target].offsetY;
		}
		// console.log(root.scrollTop, Sections[target].offsetY)
	}

   return (
      <nav className={ `${ state.sticky } ${ swipe }` } ref={ Nav.ref }>
			<div className={ `Quick-Bar va` }>
				<Anchor altClass="icon"
					link="none"
					fileName="otlogo-minimal.svg"
					style={{ marginRight: 'auto', padding: '.15rem' }}
				/>

				<Button altClass="minimal lang"
					text="Eng."
					clicked={ '' }
				/>
			</div>
			<div className="Section-Links">
				<Button altClass="minimal"
					text="Nyheter"
					clicked={ ()=>handleClick('News') }
				/>
				<Button altClass="minimal"
					text="Galleri"
					clicked={ ()=>handleClick('Gallery') }
				/>
				<Button altClass="minimal"
					text="Meny"
					clicked={ ()=>handleClick('Menu') }
				/>
				<Button altClass="minimal"
					text="Om oss"
					clicked={ ()=>handleClick('About') }
				/>
				<Button altClass="minimal"
					text="Kontakt"
					clicked={ ()=>handleClick('Contact') }
				/>
				<Button altClass="minimal book"
					text="Boka Bord"
					clicked={ '' }
					// style={{ marginLeft: '10%' }}
				/>
			</div>

      </nav>
   );
}

export default Navigation;