/**
 * News from Instagram
 */
import React from 'react';
import './Container.css';

// components
import NewsPost from './Post';
import Button from 'shared/Button';

const NewsContainer = props => {
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
				<NewsPost />
				<NewsPost />
				<NewsPost />
			</div>
			<Button altClass="dark"
				text="Ladda fler"
				style={{ marginTop: '7rem' }}
			/>
      </section>
   );
}

export default NewsContainer;