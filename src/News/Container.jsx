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
			<div className="Heading-Group">
				<h1 className="dark">
					Senaste Nytt
				</h1>
				<h3 className="dark">
					Nyheter, evenemang, nysläpp och mycket mer uppdaterat dagligen.
				</h3>
			</div>

			<NewsPost />
			<NewsPost />
			<NewsPost />
      </section>
   );
}

export default NewsContainer;