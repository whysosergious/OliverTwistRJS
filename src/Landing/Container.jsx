/**
 * Above the fold content
 */
import React from 'react';
import './Container.css';
import Button from 'shared/Button';
import { globalObj } from 'zergski-global';

// media
import Video from 'ass/vid/fourseconds.mp4';
import VideoOverlay from 'ass/img/overlay.png';

// logic
import { ZCM } from 'logic/zcm';

const LandingContainer = () => {

	const handleClick = target => {
		globalObj.ModalWindow.setState(target);
	}

	return (
		<section className="Landing-Container">

      <div className="Video-Container">
      
        <video autoPlay="true" muted="true" src={ Video } playsInline="true" loop="true">
        </video>
        <div className="Video-Overlay"></div>
      </div>

			<div className="Greeting-Group">

				<h1><span>{ ZCM.landing.heading_span }</span>{ ZCM.landing.heading }</h1>
				<h2>{ `-${ ZCM.landing.subheading }-` }</h2>
			</div>

			<div className="Button-Group">
				<Button altClass="underline small"
					text={ ZCM.landing.button_hours }
					clicked={ ()=>handleClick('Hours') }
				/>
				<Button altClass="cta"
					text={ ZCM.shared.buttons.book }
					clicked={ ()=>handleClick('Book') }
				/>
			</div>
      <Button altClass="minimal lang"
					text="Eng."
					clicked={ '' }
				/>
		</section>
	);
}

export default LandingContainer;