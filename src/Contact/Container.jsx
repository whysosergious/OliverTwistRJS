/**
 * Contact, opening hours and Google maps
 */
import React from 'react';
import './Container.css';

// media
import cornerImage from 'ass/img/contact/corner.jpg';

// components
import BusinessHours from 'BusinessHours/Container';
import MapContainer from 'Map/Container';
import ImageWrapper from 'shared/ImageWrapper';
import Button from 'shared/Button';
import Anchor from 'shared/Anchor';

const ContactContainer = props => {
   return (
		<>
			<section className="Contact-Container dark"
				style={{ padding: '0' }}
			>
				<div className="Contact-Group">
					<ImageWrapper imgSrc= { cornerImage }
						imgDesc="Väggar med retro öl etiketter"
						altClass="background overlay"
					/>
					<div className="Heading-Group">
						<h1>
							Kontakta oss
						</h1>
						<h3 className="Contact-Message">
							Har du frågor? Hesitera inte att höra av dig via telefon eller mejl! Boka bord gör du enkelt online för begränsad antal i sällskapet. För större sällskap ring eller mejla så ordnar vi det!
							<p>
								OBS! På grund av rådande begränsningar under pandemin kan vi inte ta emot sällskap med fler än fyra personer.
							</p>
						</h3>
						<Button altClass="minimal"
							text="Boka bord online"
							style={{ display: 'inline-block', margin: '3rem' }}
						/>
						<Anchor altClass="icon"
							link="tel:+468-640 05 66"
							text="08-640 05 66"
							fileName="phone.svg"
						/>
						<Anchor altClass="icon"
							link="mailto:restaurang@olivertwist.se"
							text="restaurang@olivertwist.se"
							fileName="email.svg"
						/>
						<Anchor altClass="icon"
							link="google.com"
							text="Repslagargatan 6, Södermalm"
							fileName="pin.svg"
						/>
					</div>
				</div>
				<div className="Business-Hours-Wrapper">
					<BusinessHours />
				</div>

			</section>
			<section className="Map-Container">
				<MapContainer />
			</section>

		</>
   );
}

export default ContactContainer;