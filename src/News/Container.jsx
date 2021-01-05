/**
 * News from Instagram
 */
import React, { useContext, useState } from 'react';
import './Container.css';

// contexts
import { kernel } from 'logic/kernel';		// import our singleton

// components
import PostGroup from './PostGroup';
import Button from 'shared/Button';



const NewsContainer = props => {
	const [ states, setStates ] = useState(0);	// standard hook

	// link component to context object
	const { _gl } = useContext(kernel);
	_gl.init([ 'NewsContainer', { set: setStates, status: states }]);

	const loadPosts = () => {
		// console.log(_gl.PostGroup.count)
		_gl.PostGroup.count += 4;
		_gl.PostGroup.set({ int: _gl.PostGroup.count });
		console.log(_gl.PostGroup.count)
	}

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

			<div className="News-Post-Container">
				<PostGroup />
			</div>

			<Button altClass="dark"
				style={{ marginTop: '7rem' }}
				text={ 'Ladda fler' }	// conditional state

				action={ loadPosts }
			/>
      </section>
   );
}

export default NewsContainer;