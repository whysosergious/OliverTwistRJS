/**
 * News from Instagram
 */
import React, { useContext, useState } from 'react';
import './Container.css';

// contexts
import { kernel } from 'logic/kernel';

// components
import NewsPost from './Post';
import Button from 'shared/Button';



const NewsContainer = props => {
	const [ states, setStates ] = useState(0);	// standard hook

	// link component to context object
	const { _gl } = useContext(kernel);
	_gl.init([ 'NewsContainer', { set: setStates }]);


   return (
      <section className="News-Container">
			<div className="Heading-Group"
				style={{ width: '80%', maxWidth: '30rem' }}
			>
				<h1 className="dark">
					<span>Senaste</span>Nyheter
				</h1>
				<h3 className="dark">
					Evenemang, nysläpp och mycket mer uppdaterat dagligen.
				</h3>
			</div>

			<div className="News-Post-Container"

				onClick={() => {
					_gl.BusinessHours.set({
						'btnTextReg': 'This is',
						'btnTextExc': 'SO much better'
					});
				}}
			>

				<NewsPost />
				<NewsPost />
				<NewsPost />
			</div>
			<Button altClass="dark"
				style={{ marginTop: '7rem' }}

				text={ states.buttonText || 'Ladda fler' }	// conditional state

			/>
      </section>
   );
}

export default NewsContainer;