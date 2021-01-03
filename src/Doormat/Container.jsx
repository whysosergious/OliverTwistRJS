/**
 * Promotion and introductory content
 */
import React from 'react';
import ImageWrapper from 'shared/ImageWrapper';
import './Container.css';

const DoormatContainer = props => {
   return (
		<>
		<section className="Promo-Container accent"
			style={{ paddingBottom: 0 }}
		>
			<div className="Heading-Group">
				<h1>Topp i världen</h1>
				<h3>
					I den nya utgåvan av World Atlas of Beer för 2021 så smiter en sylta på Repslagargatan in på deras 10 i topp lista över världens bästa ställen att dricka öl på!
				</h3>
			</div>
			<ImageWrapper />
		</section>
      <section className="Doormat-Container dark">
			<div className="Heading-Group left">
				<h2>
					Sortiment vi är stolta över
				</h2>
				<h3>
					På fat har vi 23 olika öl som roterar med sorter från världens bästa bryggerier. Bland våra 180+ olika flasköl, även där med ett alternerande sortiment, hittar du precis det du letar efter. Vi har nåt för alla.
				</h3>
			</div>
      </section>
		</>
   );
}

export default DoormatContainer;