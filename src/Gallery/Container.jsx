/**
 * Image Gallery
 */
import React from 'react';
import './Container.css';

//media
import tempImage1 from 'ass/img/gallery/gal-temp1.jpg';
import tempImage2 from 'ass/img/gallery/gal-temp2.jpg';
import tempImage3 from 'ass/img/gallery/gal-temp3.jpg';
import tempImage4 from 'ass/img/gallery/gal-temp4.jpg';
import tempImage5 from 'ass/img/gallery/gal-temp5.jpg';
import tempImage6 from 'ass/img/gallery/gal-temp6.jpg';
import tempImage7 from 'ass/img/gallery/gal-temp7.jpg';
import tempImage8 from 'ass/img/gallery/gal-temp8.jpg';
import tempImage9 from 'ass/img/gallery/gal-temp9.jpg';

// components
import ImageWrapper from 'shared/ImageWrapper';
import Button from 'shared/Button';

const GalleryContainer = props => {
   return (
      <section className="Gallery-Container dark">
			<h1>
				Bildgalleri
			</h1>

			<div className="Gallery-Grid">
				<ImageWrapper imgSrc={ tempImage1 }
					imgDesc="temp"
				/>
				<ImageWrapper imgSrc={ tempImage2 }
					imgDesc="temp"
				/>
				<ImageWrapper imgSrc={ tempImage3 }
					imgDesc="temp"
				/>
				<ImageWrapper imgSrc={ tempImage4 }
					imgDesc="temp"
				/>
				<ImageWrapper imgSrc={ tempImage5 }
					imgDesc="temp"
				/>
				<ImageWrapper imgSrc={ tempImage6 }
					imgDesc="temp"
				/>
				<ImageWrapper imgSrc={ tempImage7 }
					imgDesc="temp"
				/>
				<ImageWrapper imgSrc={ tempImage8 }
					imgDesc="temp"
				/>
				<ImageWrapper imgSrc={ tempImage9 }
					imgDesc="temp"
				/>
			</div>
			<Button text="Fler bilder"
				style={{ marginTop: '5rem' }}
			/>
      </section>
   );
}

export default GalleryContainer;