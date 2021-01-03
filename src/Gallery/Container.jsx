/**
 * Image Gallery
 */
import React from 'react';
import './Container.css';

import ImageWrapper from 'shared/ImageWrapper';

const GalleryContainer = props => {
   return (
      <section className="Gallery-Container dark">
			<h1>
				Bildgalleri
			</h1>

			<div className="Gallery-Grid">
				<ImageWrapper />
				<ImageWrapper />
				<ImageWrapper />
				<ImageWrapper />
				<ImageWrapper />
				<ImageWrapper />
				<ImageWrapper />
				<ImageWrapper />
			</div>
      </section>
   );
}

export default GalleryContainer;