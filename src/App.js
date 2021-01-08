// import logo from './logo.svg';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import './AppGeneral.css';

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
	init( hook ) {		// initial method with hook assignment
		this.ref = this.ref.current;
		this.state = hook[0];
		this.set = hook[1];
		this.getPos();
	},
}


const numSteps = 20.0;

let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";
const handleIntersect = ( entries, observer ) => {
	// entries.forEach(e => console.log(e));
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.intersectionRatio > prevRatio) {
			console.log(entry.intersectionRatio);
		} else {
			console.log(entry.intersectionRatio);
		}

		prevRatio = entry.intersectionRatio;
	});
}

const buildThresholdList = () => {
	let thresholds = [];
	let numSteps = 20;

	for (let i=1.0; i<=numSteps; i++) {
	let ratio = i/numSteps;
	thresholds.push(ratio);
	}

	thresholds.push(0);
	return thresholds;
}

// intersection observer
const createObserver = ( root ) => {
	let observer;

	let options = {
		root: root,
		rootMargin: "-4px",
		threshold: buildThresholdList(),
	};

	observer = new IntersectionObserver(handleIntersect, options);
	// console.log()
	observer.observe(isInViewCol.navRef.ref);
	// observer.observe(isInViewCol.promoRef.ref);
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

		isInViewCol[key].init([ isInView, targetRef ]);
	}, []);
	console.log(isInViewCol)
	return isInView;
}

var target = 0;

const App = () => {
	const [ states, setStates ] = useState({ stuck: false });
	const { col, array } = _sc;

	const mainRef = useRef(null);




	useEffect(() => {

		const main = mainRef.current;
		createObserver( main );
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
