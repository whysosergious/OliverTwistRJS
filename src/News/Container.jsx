/**
 * News synced to Instagram
 */
import React, { useEffect, useRef } from 'react';
import './Container.css';

// zergski logic
import { globalObj, useGlobalObj } from 'logic/zergski-global-object';

// components
import PostGroup from './PostGroup';
import Button from 'shared/Button';


let count = 0;
let posts = [ <PostGroup key={ count } index={ count } /> ];

const NewsContainer = props => {
	const news = {
		ref: useRef(null),
		index: 2,
		initialState: { display: 'idle bottom' },
	}
	const [ state, setState ] = useGlobalObj({ news }, 'sections');

	const loadPosts = () => {
		posts[++count] = <PostGroup key={ count } index={ count } />;
		setState(count);
	}

	useEffect(() => {
		// loadPosts();
	}, [])

   return (
      <section className={ `News-Container` } ref={ news.ref }>
			<div className={ `Heading-Group ${ state.display || '' }` }
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
				{ posts }
			</div>

			<Button altClass="dark"
				style={{ marginTop: '7rem' }}
				text={ 'Ladda fler' }

				clicked={ loadPosts }
			/>
      </section>
   );
}

export default NewsContainer;