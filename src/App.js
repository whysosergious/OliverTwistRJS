// import logo from './logo.svg';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import './AppGeneral.css';

// zergski logic
import { createObserver, queueFrame } from 'logic/zergski-intersection-observer';
import { globalAccess } from 'logic/zergski-global-access';


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
	// console.log(entry.boundingClientRect.y)
	if ( entry.isIntersecting && entry.boundingClientRect.y < 100 ) {
		console.log(entry.target.zKey);
	}
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


const App = () => {
	// const [ states, setStates ] = useState({ stuck: false });

	const main = {
		ref: useRef(null),
	}
	var rootRef = useRef(null);

	useEffect(() => {
		// for the global object to be accessible through import, it has to be initialized
		// after a 'componentDidMount' or 'useEffect' in that componenet
		const { nav, promo, doormat, news, gallery, about, contact } = globalAccess;
		main.ref = main.ref.current;

		// all you need to create an intersectionObserver
		// a reference of to the observer, in our care
		// the root element
		var root = {
			ref: rootRef,
		}
		root.ref = main.parentElement;

		createObserver (
				root.ref,	// observer
			[
				//	target references can be passed into an array
				nav.ref,
				promo.ref,
				doormat.ref,
				news.ref,
				gallery.ref,
				about.ref,
				contact.ref,
			],
				handleNavIntersect	// callback function
		);
	}, []);

	return (
		<main className="App" ref={ main.ref }>
			<ViewportLogic />
			<LandingContainer />
			<Navigation />
			<header className="App-header">
			</header>

			<DoormatContainer />
			<NewsContainer />
			<GalleryContainer />
			<MenuContainer />
			<AboutContainer />
			<ContactContainer />
			<FooterContainer />
		</main>
	);
}

export default App;
