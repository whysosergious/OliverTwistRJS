/**
 * Business hours component to display in multiple places
 */
import React from 'react';
import './Container.css';

// components
import Button from 'shared/Button';

const BusinessHours = props => {

   return (
		<div className="Business-Hours">
			<h2 className="headline" >Våra Öppettider</h2>
			<div className="Day">
				<h3 className="accent">Måndag</h3>
				<h3>13 - 20</h3>
			</div>
			<div className="Day">
				<h3 className="accent">Tisdag</h3>
				<h3>13 - 20</h3>
			</div>
			<div className="Day">
				<h3 className="accent">Onsdag</h3>
				<h3>13 - 20</h3>
			</div>
			<div className="Day">
				<h3 className="accent">Torsdag</h3>
				<h3>13 - 20</h3>
			</div>
			<div className="Day">
				<h3 className="accent">Fredag</h3>
				<h3>13 - 20</h3>
			</div>
			<div className="Day">
				<h3 className="accent">Lördag</h3>
				<h3>13 - 20</h3>
			</div>
			<div className="Day">
				<h3 className="accent">Söndag</h3>
				<h3>13 - 20</h3>
			</div>
			<div className="Button-Group">
				<Button altClass="conditional minimal"
					text="Regulära"
					textColor="white"
				/>
				<Button altClass="conditional minimal"
					text="Avvikande"
					// textColor="white"
				/>
			</div>
		</div>
   );
}

export default BusinessHours;