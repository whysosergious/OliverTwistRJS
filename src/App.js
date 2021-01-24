// import logo from './logo.svg';
import { useEffect, useRef } from 'react';
import './App.css';
import './AppGeneral.css';
import './animation.css';

// zergski logic
import { createObserver, queueFrame } from 'zergski-global';
import { globalObj } from 'zergski-global';


// logic
// import { ViewportLogic } from 'logic/viewport';

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

// Modals
import MediaViewer from 'modals/MediaViewer';
import ModalWindow from 'modals/Window';

// components
import Button from 'shared/Button';
import Anchor from 'shared/Anchor';



/**
 * Assigned handler with a properties object
 * TODO!: Document props passed to this function and
 * send all of them separately
 * @param {*} props
 */
const handleNavigation = ({ entry, observer }) => {
	if ( entry.target.zKey === 'Nav' && entry.isIntersecting ) {
		globalObj.Sections.Nav.setState({ sticky: 'stuck' });
	} else if ( entry.target.zKey === 'Nav' && !entry.isIntersecting ) {
		globalObj.Sections.Nav.setState({ sticky: '' });
	}
}

const handleViewportAnimated = ({ entry, observer, prevRatio }) => {
	// console.log(entry.target.zKey, entry.isIntersecting)
	if ( entry.isIntersecting ) {
		queueFrame(() => {
			entry.target.zEl.setState( '' );
		});
		observer.unobserve( entry.target );
	}
}

const App = () => {
	// const [ states, setStates ] = useState({ stuck: false });

	const main = {
		root: useRef(null),
		ref: useRef(null),
	}

	useEffect(() => {
		// for the global object to be accessible through import, it has to be initialized
		// after a 'componentDidMount' or 'useEffect' in that component
		const { Sections, ViewportAnimated } = globalObj;
		globalObj.Sections.Nav.current = 0;
		main.ref = main.ref.current;
		main.root = main.ref.parentElement;
		globalObj.main = main;
		// all you need to create an intersectionObserver
		// a reference of to the observer, in our case
		// the root element
		createObserver (
			'ViewportAnimation',
			main.root,	// observer
			Object.values(ViewportAnimated).map( e => { return e.ref }),
			handleViewportAnimated,	// callback function
			['-20% 0px -20% 0px'],
			1
		);
		createObserver (
			'Navigation',
			main.root,	// observer
			Sections.Nav.ref,
			handleNavigation,	// callback function
			['0px 0px -99% 0px'],
			1
		);

		console.log(globalObj)
	}, []);

	return (
		<main className="App" ref={ main.ref }>
			<LandingContainer />
			<Navigation />
			<header className="App-header">
				<Anchor altClass="icon"
					link="none"
					fileName="otlogo-white-simple.svg"
					style={{ marginRight: 'auto', height: '2.4rem' }}
				/>

				<Button altClass="minimal lang"
					text="Eng."
					clicked={ '' }
				/>
			</header>

			<DoormatContainer />
			<NewsContainer />
			<GalleryContainer />
			<MenuContainer />
			<AboutContainer />
			<ContactContainer />
			<FooterContainer />

			<MediaViewer />
			<ModalWindow />
		</main>
	);
}

export default App;
