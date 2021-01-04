/**
 * Promotion and introductory content
 */
import React from 'react';
import ImageWrapper from 'shared/ImageWrapper';
import './Container.css';

// media
import PromoBackgroundImage from 'ass/img/promo/waob.jpg';
import DoormatBackgroundImage from 'ass/vector/files/fridge.svg';
import ArticleImage from 'ass/img/promo/waob-list-short.jpg';

// components
import Button from 'shared/Button';

const DoormatContainer = props => {
   return (
		<>
			<section className="Promo-Container accent">
				<div className="Promo-Group">
					<ImageWrapper imgSrc={ PromoBackgroundImage }
						imgDesc="World Atlas of Beer guide 2021 edition by Timm Webb and Stephen Beumont"
						altClass="background"
					/>
					<div className="Heading-Group">
						<h1>Topp i världen</h1>
						<h3>
							I den nya utgåvan av World Atlas of Beer för 2021 så smiter en sylta på Repslagargatan in på deras 10 i topp lista över världens bästa ställen att dricka öl på!
						</h3>
					</div>
				</div>
				<ImageWrapper imgSrc={ ArticleImage }
					imgDesc="List by Stephen Beumont containing Oliver Twist as one of the top 10 bars in the world to have a beer in"
					altClass="Article-Image"
				/>
			</section>
			<section className="Doormat-Container dark">
				<ImageWrapper imgSrc={ DoormatBackgroundImage }
					imgDesc="Shelves with beer cans in the bars fridge"
					altClass="background"

					// temp
					style={{ background: 'none' }}
				/>
				<div className="Heading-Group left">
					<h2>
						Sortiment vi är stolta över
					</h2>
					<h3>
						På fat har vi 23 olika öl som roterar med sorter från världens bästa bryggerier. Bland våra 180+ olika flasköl, även där med ett alternerande sortiment, hittar du precis det du letar efter. Vi har nåt för alla.
					</h3>
					<Button altClass="minimal"
						text="Se våran meny"
						style={{ marginTop: '2rem' }}
					/>
				</div>
			</section>
		</>
   );
}

export default DoormatContainer;