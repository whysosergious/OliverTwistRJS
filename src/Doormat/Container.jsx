/**
 * Promotion and introductory content
 */
import React, { useRef } from 'react';
import './Container.css';
import styles from './Doormat.module.css';

// zergski logic
import { useGlobalObj } from 'logic/zergski-global-object';

// media
import promoBackgroundImage from 'ass/img/promo/waob.jpg';
import doormatBackgroundImage from 'ass/vector/files/fridge.svg';

// components
import Button from 'shared/Button';
import ImageWrapper from 'shared/ImageWrapper';

const DoormatContainer = props => {
	const Promo = {
		ref: useRef(null),
		index: 2,
		initialState: 'idle bottom',
	}
	const Doormat = {
		ref: useRef(null),
		index: 3,
		initialState: 'idle right',
	}
	const [ promoState ] = useGlobalObj({ Promo }, 'ViewportAnimated');
	const [ doormatState ] = useGlobalObj({ Doormat }, 'ViewportAnimated');

   return (
		<>
			<section className={ `Promo-Container accent` } ref={ Promo.ref }>
				<ImageWrapper imgSrc={ promoBackgroundImage }
					imgDesc="World Atlas of Beer guide 2021 edition by Timm Webb and Stephen Beumont"
					altClass={ styles.background_filter }
				/>


				<div className={ `${ styles.headingGroup } ${ promoState } va` }>
					<h1><span>Bland de</span>bästa i världen</h1>
					<h3>
						I den nya utgåvan av World Atlas of Beer för 2021 så smiter en sylta på Repslagargatan in på deras 10 i topp lista över världens bästa ställen att dricka öl på!
					</h3>
					<Button altClass="underline"
						text="Läs mer"
						style={{ marginTop: '3rem' }}
					/>
				</div>

			</section>
			<section className={ `Doormat-Container dark` } ref={ Doormat.ref }>
				<ImageWrapper imgSrc={ doormatBackgroundImage }
					imgDesc="Shelves with beer cans in the bars fridge"
					altClass="background"

					style={{ opacity: 0.07 }}
				/>
				<div className={ `${ styles.headingGroup_left } ${ doormatState } va` }>
					<h2>
						Ett sortiment vi är stolta över
					</h2>
					<h3 className="small">
						På fat har vi 23 olika öl som roterar med sorter från världens bästa bryggerier. Bland våra 180+ olika flasköl, även där med ett alternerande sortiment, hittar du precis det du letar efter. Vi har nåt för alla.
					</h3>
					<Button altClass="underline small"
						text="Läs våran meny"
						style={{ marginTop: '2rem' }}
					/>
				</div>
			</section>
		</>
   );
}

export default DoormatContainer;