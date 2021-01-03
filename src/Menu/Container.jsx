/**
 * Menues and specials
 */
import React from 'react';
import './Container.css';
import Button from 'shared/Button';

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
			/>
			<Button type="menu"
				text="Lunch"
			/>
			<Button type="menu"
				text="A la Carté"
			/>
			<Button type="menu"
				text="På Tapp"
			/>
			<Button type="menu"
				text="Öl & Dryck"
			/>
      </section>
   );
}

export default MenuContainer;