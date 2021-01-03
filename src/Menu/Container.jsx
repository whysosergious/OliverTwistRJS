/**
 * Menues and specials
 */
import React from 'react';
import './Container.css';
import Button from 'shared/Button';

// section media
import tipsImage from 'ass/img/ess/menu/tips.jpg';
import lunchImage from 'ass/img/ess/menu/lunch.jpg';
import foodImage from 'ass/img/ess/menu/food.jpg';
import tapImage from 'ass/img/ess/menu/tap.jpg';
import drinksImage from 'ass/img/ess/menu/drinks.jpg';

const MenuContainer = props => {
   return (
      <section className="Menu-Container accent">
			<div className="Heading-Group">
				<h1>
					Våran Meny
				</h1>
				<h3>
					Till ölen, och våra väl utvalda viner, hittar du en meny vi serverar med stolthet. All mat är gjord från grunden av bästa möjliga råvaror tillagad med kärlek.
				</h3>
			</div>


			<Button type="menu"
				text="Dagens Tips"
				imgSrc={ tipsImage }
				imgDesc="Kvällens alternativt veckans special rätter"
			/>
			<Button type="menu"
				text="Lunch"
				imgSrc={ lunchImage }
				imgDesc="Risotto som lunchrätt"
			/>
			<Button type="menu"
				text="A la Carté"
				imgSrc={ foodImage }
				imgDesc="A la Carté rätt"
			/>
			<Button type="menu"
				text="På Tapp"
				imgSrc={ tapImage }
				imgDesc="Barens tapptorn med öl pump-klipps"
			/>
			<Button type="menu"
				text="Öl & Dryck"
				imgSrc={ drinksImage }
				imgDesc="Blandade flaskor och burkar"
			/>
      </section>
   );
}

export default MenuContainer;