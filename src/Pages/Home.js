import React from 'react';

// nav
import Navigation from '../Navigation/Container';

// Page Sections
import LandingContainer from '../Landing/Container';
import DoormatContainer from '../Doormat/Container';
import NewsContainer from '../News/Container';
import GalleryContainer from '../Gallery/Container';
import MenuContainer from '../Menu/Container';
import AboutContainer from '../About/Container';
import ContactContainer from '../Contact/Container';
import FooterContainer from '../Footer/Container';

// Modals
import MediaViewer from 'modals/MediaViewer';
import ModalWindow from 'modals/Window';

// components
import Button from 'shared/Button';
import Anchor from 'shared/Anchor';


const Home = () => {


	return (
		<>
			<LandingContainer />
			<Navigation />

			<DoormatContainer />
			<NewsContainer />
			<GalleryContainer />
			<MenuContainer />
			<AboutContainer />
			<ContactContainer />
			<FooterContainer />

			<MediaViewer />
			<ModalWindow />
		</>
	);
}

export default Home;
