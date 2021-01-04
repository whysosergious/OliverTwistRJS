// import logo from './logo.svg';
import './App.css';
import './AppGeneral.css';

// nav
// import Navigation from './Navigation/Container';

// Page Sections
import LandingContainer from './Landing/Container';
import DoormatContainer from './Doormat/Container';
import NewsContainer from './News/Container';
import GalleryContainer from './Gallery/Container';
import MenuContainer from './Menu/Container';
import AboutContainer from './About/Container';
import ContactContainer from './Contact/Container';
import FooterContainer from './Footer/Container';


function App() {
  return (
    <main className="App">
      <LandingContainer />
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
