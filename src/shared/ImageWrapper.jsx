/**
 * Image wrapper
 */
import React from 'react';

const ImageWrapper = props => {
	const { imgSrc, imgDesc, altClass, style } = props;

   return (
      <div className={ `Image-Wrapper ${ altClass }` }
			style= { style }
		>
			<img src={ imgSrc } alt={ imgDesc || "No decription available" } />
		</div>
   );
}

export default ImageWrapper;