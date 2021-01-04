/**
 * Menues and specials
 */
import React from 'react';
import './Container.css';
import Button from 'shared/Button';

// media
import menuImage from 'ass/img/menu.jpg';

// components
import ImageWrapper from 'shared/ImageWrapper';

const MenuContainer = props => {
   return (
      <section className="Menu-Container accent">

			<div className="Menu-Group">
				<ImageWrapper imgSrc= { menuImage }
					imgDesc="A la carté risotto rätt"
					altClass="background overlay"
				/>
				<div className="Heading-Group">
					<h1>
						Våran Meny
					</h1>
					<h3>
						Till ölen, och våra väl utvalda viner, hittar du en meny vi serverar med stolthet. All mat är gjord från grunden av bästa möjliga råvaror tillagad med kärlek.
					</h3>
				</div>
			</div>

			<div className="Button-Group">
				<Button altClass="menu"
					text="Lunch"
				/>
				<Button altClass="menu"
					text="A la Carté"
				/>
				<Button altClass="menu"
					text="Öl & Dryck"
				/>
			</div>
      </section>
   );
}

export default MenuContainer;