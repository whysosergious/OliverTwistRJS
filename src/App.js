// import logo from './logo.svg';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import './AppGeneral.css';

import { createObserver, queueFrame } from 'logic/intersection-observer';

// logic
import { ViewportLogic } from 'logic/viewport';

// nav
import Navigation from './Navigation/Container';

// Page Sections
import LandingContainer from './Landing/Container';
import DoormatContainer from './Doormat/Container';
import NewsContainer from './News/Container';
import GalleryContainer from './Gallery/Container';
import MenuContainer from './Menu/Container';
import AboutContainer from './About/Container';
import ContactContainer from './Contact/Container';
import FooterContainer from './Footer/Container';



/**
 * Assigned handler with a properties object
 * TODO!: Document props passed to this function and
 * send all of them separately
 * @param {*} props
 */
const handleNavIntersect = (props) => {
	let { entry, prevRatio } = props;
	let { boundingClientRect, intersectionRatio, target } = entry;

	// Dealers choice
	if (intersectionRatio > prevRatio) {
		boundingClientRect.y > 10 && queueFrame(() => {
			target.classList.remove('stuck');
		});
	} else {
		boundingClientRect.y < 10 && queueFrame(() => {
			target.classList.add('stuck');
		});
	}
}






var lastScrollPos = 0;
var scrollTick = false;


// elements and their offsets
var _sc = {
	array: [],
	col: {},
	init( node ) {
		this.col[node[0]] = node[1] || node[0];
	},
};

// main object collection
const isInViewCol = {};
// blueprint of method object that's copied and merged with the reference object
let isInViewMethods = {
	getPos() {	// get new ref offsets
		this.offsetY = this.ref.offsetTop;
	},
	init( key, state, dispatch ) {		// initial method with hook assignment
		this.ref = this.ref.current;
		this.ref.colKey = key[0];
		this.state = state;
		this.set = dispatch;
		this.getPos();
	},
}


/**
 * Global assignment of custom hooks for individual elements
 * Here we focus on viewport and element visibility
 * @param {React.ElementRef<HTMLElement>} ref
 */
export const useIsInView = (ref) => {
	const [ isInView, targetRef ] = useState(false);

	useEffect(() => {
		let key = Object.keys( ref );
		isInViewCol[key] = {};
		Object.assign( isInViewCol[key], ref[key], isInViewMethods );

		isInViewCol[key].init( key, isInView, targetRef );
	}, []);
	// console.log(isInViewCol)
	return isInView;
}




var target = 0;

const App = () => {
	const [ states, setStates ] = useState({ stuck: false });
	const { col, array } = _sc;

	const mainRef = useRef(null);




	useEffect(() => {
		const main = mainRef.current;
		createObserver( main, [ isInViewCol.navRef.ref, isInViewCol.promoRef.ref ], handleNavIntersect );


		const handleScrollTriggers = (scrollPos) => {
			isInViewCol.promoRef.set(true);
			// isInViewCol.navRef.set(true);
			// console.log(scrollPos)
			// console.log(target)
			// if ( scrollPos >= array[target+1][0] ) {
			// 	col[array[target+1][1]].set(true);
			// 	target++;
			// } else if ( scrollPos < array[target][0] ) {
			// 	col[array[target][1]].set();
			// 	target--;
			// }

		}
		const handleScroll = ( event ) => {

			lastScrollPos = event.currentTarget.scrollTop;
			if (!scrollTick) {
				window.requestAnimationFrame(() => {
					handleScrollTriggers(lastScrollPos);
					scrollTick = false;
				});
				scrollTick = true;
			}
		}

		const getColOffsets = () => {
			array.push([-444, null]);
			for ( let el in col ) {
				array.push([col[el].ref.offsetTop, el]);
				// console.log(array)
			}
			array.push([44444, null]);
		}
		getColOffsets();
		main.addEventListener( 'scroll', handleScroll, { passive: true });

		return () => {
			main.removeEventListener( 'scroll', handleScroll, { passive: true });
		}
	}, [col, array]);

	return (
		<main className="App" ref={ mainRef }>
		<ViewportLogic />
		<LandingContainer _sc={ _sc } />
		<Navigation _sc={ _sc } />
		<header className="App-header">
		</header>

		<DoormatContainer _sc={ _sc } />
		<NewsContainer _sc={ _sc } />
		<GalleryContainer _sc={ _sc } />
		<MenuContainer _sc={ _sc } />
		<AboutContainer _sc={ _sc } />
		<ContactContainer _sc={ _sc } />
		<FooterContainer _sc={ _sc } />

		</main>
	);
}

export default App;
