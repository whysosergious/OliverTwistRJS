/**
 * Image Gallery
 */
import React, { useRef } from 'react';
import './Container.css';

// zergski logic
import { useGlobalObj, globalObj } from 'logic/zergski-global-object';

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
	// deconstructing
	const { MediaViewer } = globalObj;

	const Gallery = {
		ref: useRef(null),
		index: 3,
	}
	const [ state, setState ] = useGlobalObj({ Gallery }, 'Sections');
	const handleClick = index => {
		MediaViewer.setState({ display: 'show', index });
	}

   return (
      <section className="Gallery-Container dark" ref={ Gallery.ref }>
			<h1>
				Bildgalleri
			</h1>

			<div className="Gallery-Grid">
				<ImageWrapper imgSrc={ tempImage1 }
					imgDesc="temp"
					index={ 0 }
					clicked={ handleClick }
				/>
				<ImageWrapper imgSrc={ tempImage2 }
					imgDesc="temp"
					index={ 1 }
					clicked={ handleClick }
				/>
				<ImageWrapper imgSrc={ tempImage3 }
					imgDesc="temp"
					index={ 2 }
					clicked={ handleClick }
				/>
				<ImageWrapper imgSrc={ tempImage4 }
					imgDesc="temp"
					index={ 3 }
					clicked={ handleClick }
				/>
				<ImageWrapper imgSrc={ tempImage5 }
					imgDesc="temp"
					index={ 4 }
					clicked={ handleClick }
				/>
				<ImageWrapper imgSrc={ tempImage6 }
					imgDesc="temp"
					index={ 5 }
					clicked={ handleClick }
				/>
				<ImageWrapper imgSrc={ tempImage7 }
					imgDesc="temp"
					index={ 6 }
					clicked={ handleClick }
				/>
				<ImageWrapper imgSrc={ tempImage8 }
					imgDesc="temp"
					index={ 7 }
					clicked={ handleClick }
				/>
				<ImageWrapper imgSrc={ tempImage9 }
					imgDesc="temp"
					index={ 8 }
					clicked={ handleClick }
				/>
			</div>
			<Button text="Fler bilder"
				style={{ marginTop: '5rem' }}
			/>
      </section>
   );
}

export default GalleryContainer;