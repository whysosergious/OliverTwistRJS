/**
 * Business hours component to display in multiple places
 */
import React, { useContext, useState } from 'react';
import './Container.css';

// contexts
import { kernel } from 'logic/kernel';

// components
import Button from 'shared/Button';


const BusinessHours = props => {
	const [ states, setStates ] = useState(0);	// standard hook

	// link component to context object
	const { _gl } = useContext(kernel);
	_gl.init([ 'BusinessHours', { set: setStates }]);


   return (
		<div className="Business-Hours"
			onClick={() => {
				_gl.NewsContainer.set({
					'buttonText': 'Yeeeey!!!'
				});
			}}
		>
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
					text={ states.btnTextReg || 'Regulära' }
					textColor="white"
				/>
				<Button altClass="conditional minimal"
					text={ states.btnTextExc || 'Avvikande' }
					// textColor="white"
				/>
			</div>
		</div>
   );
}

export default BusinessHours;