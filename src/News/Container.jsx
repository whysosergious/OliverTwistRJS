/**
 * News from Instagram
 */
import React, { useContext, useEffect, useRef } from 'react';
import './Container.css';

// zergski logic
import { useGlobalAccess } from 'logic/zergski-global-access';

// contexts
import { kernel } from 'logic/kernel';		// import our singleton

// components
import PostGroup from './PostGroup';
import Button from 'shared/Button';



const NewsContainer = props => {
	const news = {
		ref: useRef(null),
		index: 2,
	}
	const linkedState = useGlobalAccess({ news });



	// const [ states, setStates ] = useState(0);	// standard hook

	// link component to context object
	const { _gl } = useContext(kernel);
	// _gl.init([ 'NewsContainer', { set: setStates, status: states }]);

	const loadPosts = () => {
		_gl.PostGroup.set({ new: _gl.PostGroup.count + 4 });
	}

	const newsRef = useRef(null);

	useEffect(() => {
	}, [])

   return (
      <section className="News-Container" ref={ news.ref }>
			<div className="Heading-Group"
				style={{ width: '80%', maxWidth: '30rem', marginBottom: '4rem' }}
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