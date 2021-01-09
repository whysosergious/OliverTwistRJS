/**
 * Promotion and introductory content
 */
import React, { useRef, createRef, useEffect, useState } from 'react';
import './Container.css';

// zergski logic
import { useGlobalAccess } from 'logic/zergski-global-access';

// media
import promoBackgroundImage from 'ass/img/promo/waob.jpg';
import doormatBackgroundImage from 'ass/vector/files/fridge.svg';
// import articleImage from 'ass/img/promo/waob-list-short.jpg';

// components
import Button from 'shared/Button';
import ImageWrapper from 'shared/ImageWrapper';

const DoormatContainer = props => {
	const promo = {
		ref: useRef(null),
		index: 2,
	}
	const doormat = {
		ref: useRef(null),
		index: 3,
	}
	const linkedPromo = useGlobalAccess({ promo });
	const linkedDoormat = useGlobalAccess({ doormat });


   return (
		<>
			<section className={ `${ linkedPromo ? '' : '' } Promo-Container accent` } ref={ promo.ref }>
				<ImageWrapper imgSrc={ promoBackgroundImage }
					imgDesc="World Atlas of Beer guide 2021 edition by Timm Webb and Stephen Beumont"
					altClass="background"
				/>


				<div className="Heading-Group">
					<h1><span>Bland de</span>bästa i världen</h1>
					<h3>
						I den nya utgåvan av World Atlas of Beer för 2021 så smiter en sylta på Repslagargatan in på deras 10 i topp lista över världens bästa ställen att dricka öl på!
					</h3>
					<Button altClass="minimal"
						text="Läs mer"
						style={{ marginTop: '3rem' }}
					/>
				</div>


				{/* <ImageWrapper imgSrc={ articleImage }
					imgDesc="List by Stephen Beumont containing Oliver Twist as one of the top 10 bars in the world to have a beer in"
					altClass="Article-Image"
				/> */}
			</section>
			<section className={ `${ linkedDoormat ? '' : '' } Doormat-Container dark` } ref={ doormat.ref }>
				<ImageWrapper imgSrc={ doormatBackgroundImage }
					imgDesc="Shelves with beer cans in the bars fridge"
					altClass="background"

					// temp
					style={{ background: 'none' }}
				/>
				<div className="Heading-Group left">
					<h2>
						Ett sortiment vi är stolta över
					</h2>
					<h3 className="small">
						På fat har vi 23 olika öl som roterar med sorter från världens bästa bryggerier. Bland våra 180+ olika flasköl, även där med ett alternerande sortiment, hittar du precis det du letar efter. Vi har nåt för alla.
					</h3>
					<Button altClass="minimal small"
						text="Läs våran meny"
						style={{ marginTop: '2rem' }}
					/>
				</div>
			</section>
		</>
   );
}

export default DoormatContainer;