/**
 * Everything related to viewport
 */
import React, { useContext, useEffect } from 'react';

// contexts
import { kernel } from 'logic/kernel';		// import our singleton

var height, width = 0;
var display = 1;
var active = 0;
var tick = false;

const ViewportLogic = props => {

	// link component to context object
	const { _gl } = useContext(kernel);
	_gl.init([ 'Viewport', {
		height: height,
		width: width,
	}]);

	useEffect(() => {
		const handleResize = event => {
			display = (window.innerWidth > 500 && window.innerWidth < 950) ? 0 : 1 ;
			if (!tick && display !== active) {
				window.requestAnimationFrame(() => {
					console.log(display);
					// _gl.PostGroup.set({ width: display });
					tick = false;
					active = display;
				});
				tick = true;
			}

		}

		window.addEventListener( 'resize', handleResize );
	});


	return (
		<>
			{/* lets see if it works with an empty element */}
			{/* Will also try to return 'null' */}
		</>
	);
}

export { ViewportLogic }