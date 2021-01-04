/**
 * News from Instagram
 */
import React from 'react';
import './Container.css';

// components
import NewsPost from './Post';

const NewsContainer = props => {
   return (
      <section className="News-Container">
			<div className="Heading-Group"
				style={{ width: '80%', maxWidth: '30rem' }}
			>
				<h1 className="dark">
					Senaste Nytt
				</h1>
				<h3 className="dark">
					Nyheter, evenemang, nysläpp och mycket mer uppdaterat dagligen.
				</h3>
			</div>

			<div className="News-Post-Container">
				<NewsPost />
				<NewsPost />
				<NewsPost />
			</div>
      </section>
   );
}

export default NewsContainer;