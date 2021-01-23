import React, { useEffect } from 'react';
import './Window.css';
import { globalObj, useGlobalObj } from 'logic/zergski-global-object';

// components
import Anchor from 'shared/Anchor';
import BusinessHours from 'BusinessHours/Container';
import OnlineBooking from './OnlineBooking';

const ModalWindow = props => {
	const ModalWindow = {
		initialState: 'hidden',
	}
	const [ state, setState ] = useGlobalObj({ ModalWindow });
	const handleClose = () => {
		console.log('close')
		// globalObj.main.ref.classList.add('blur');

	}

	useEffect(() => {

	}, [])


	return(
		<div className={ `Modal-Container ${ state }` }>
			<div className="Blur-Overlay"></div>
			<div className={ `Modal-Window striped` }>
					<BusinessHours altClass={ state === 'Hours' ? 'shown' : 'hidden' } />
					<OnlineBooking altClass={ state === 'Book' ? 'shown' : 'hidden' } />

					<Anchor
						altClass="icon"
						fileName="cross.svg"
						style={{ position: 'absolute', top: '0', right: '0', opacity: '.5' }}
						clicked={ handleClose }
					/>
			</div>
		</div>
	);
}

export default ModalWindow;