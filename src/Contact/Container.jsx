/**
 * Contact, opening hours and Google maps
 */
import React, { useEffect, useState } from 'react';
import './Container.css';

// media
import cornerImage from 'ass/img/contact/corner.jpg';

// components
import BusinessHours from 'BusinessHours/Container';
import GoogleMap from 'Map/Container';
import ImageWrapper from 'shared/ImageWrapper';
import Button from 'shared/Button';
import Anchor from 'shared/Anchor';




const ContactContainer = props => {

	const [ map, setMap ] = useState(null);

	useEffect(() => {

	}, []);


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
						<h2>
							Kontakta oss
						</h2>
						<h3 className="Contact-Message small light">
							Har du frågor? Hesitera inte att höra av dig via telefon eller mejl! Boka bord gör du enkelt online för begränsad antal i sällskapet. För större sällskap ring eller mejla så ordnar vi det!
							<p>
								OBS! På grund av rådande begränsningar under pandemin kan vi inte ta emot sällskap med fler än fyra personer.
							</p>
						</h3>
						<Button altClass="minimal"
							text="Boka bord online"
							style={{ display: 'inline-block', margin: '4rem 0 2rem 0' }}
						/>
						<div className="Anchor-Group">
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
				</div>
				<div className="Business-Hours-Wrapper">
					<BusinessHours />
				</div>

			</section>

			{/* try doing this in a separate component, might minimize rerenders */}
			<section className="Map-Container"
				onClick={ e => setMap(<GoogleMap />) }
			>
				{ map }
			</section>

		</>
   );
}

export default ContactContainer;