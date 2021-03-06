/**
 * Contact, opening hours and Google maps
 */
import React, { useRef } from 'react';
import './Container.css';

// zergski logic
import { useGlobalObj, globalObj } from 'zergski-global';
import { ZCM } from 'logic/zcm';

// media
import cornerImage from 'ass/img/contact/corner.jpg';

// components
import BusinessHours from 'BusinessHours/Container';
import GoogleMap from 'Map/Container';
import ImageWrapper from 'shared/ImageWrapper';
import Button from 'shared/Button';
import Anchor from 'shared/Anchor';




const ContactContainer = () => {
	const Contact = {
		ref: useRef(null),
		index: 6,
	}
	const ContactHeading = {
		ref: useRef(null),
		index: 6,
		initialState: 'idle bottom',
	}
	const HoursWrapper = {
		ref: useRef(null),
		index: 6,
		initialState: 'idle scale',
	}
	const [ state, setState ] = useGlobalObj({ Contact }, 'Sections');
	const [ headingState ] = useGlobalObj({ ContactHeading }, 'ViewportAnimated');
	const [ hoursState ] = useGlobalObj({ HoursWrapper }, 'ViewportAnimated');

	const handleClick = target => {
		globalObj.ModalWindow.setState(target);
	}

   return (
		<>
			<section className="Contact-Container dark" ref={ Contact.ref }
				style={{ padding: '0' }}
			>
				<div className="Contact-Group">
					<ImageWrapper imgSrc= { cornerImage }
						imgDesc="Väggar med retro öl etiketter"
						altClass="background overlay"
					/>
					<div className={ `Heading-Group ${ headingState } va` } ref={ ContactHeading.ref }>
						<h2>
							{ ZCM.contact.heading }
						</h2>
						<h3 className="Contact-Message small light">
							{ ZCM.contact.body }
						</h3>
						<Button altClass="underline"
							text={ ZCM.contact.button_book }
							style={{ display: 'inline-block', margin: '4rem 0 2rem 0' }}
							clicked={ ()=>handleClick('Book') }
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
								link="https://goo.gl/maps/TQrd58turU1F49sWA"
								text="Repslagargatan 6, Södermalm"
								fileName="pin.svg"
							/>
						</div>
					</div>
				</div>
				<div className={ `Business-Hours-Wrapper ${ hoursState } va` } ref={ HoursWrapper.ref }>
					<BusinessHours />
				</div>

			</section>

			{/* try doing this in a separate component, might minimize rerenders */}
			<section className="Map-Container"
				onClick={ e => setState(<GoogleMap />) }
			>
				{ state }
			</section>

		</>
   );
}

export default ContactContainer;