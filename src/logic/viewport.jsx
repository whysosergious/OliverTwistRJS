/**
 * Everything related to viewport
 */
import React, { useContext, useEffect } from 'react';

// contexts
import { kernel } from 'logic/kernel';		// import our singleton




const _local = {
	height: window.innerHeight,
	width: window.innerWidth,
	device: 'mobile',
	orientation: 'portrait',
	linked: [],
	link( f ) {
		this.linked.push( f );
	},
	calc() {
		this.height = window.innerHeight;
		this.width = window.innerWidth;
		this.device = this.width < 500 ? 'mobile' : this.width > 950 ? 'desctop' : 'pad' ;
		this.orientation = this.height < this.width ? 'landscape' : 'portrait' ;
	},
	setVh() {
		let vh = `${this.height / 100}px`;
		document.documentElement.style.setProperty('--vh', vh);
	},
	trigger() {
		this.linked.forEach(f => f());
	},
}
_local.calc();
var currentDevice = _local.device;
// var currentOrientation = '';
var tick = false;

const ViewportLogic = props => {
	// link component to context object
	const { _gl } = useContext(kernel);
	_gl.init([ 'Viewport', _local ]);

	_local.setVh();

	useEffect(() => {

		const handleResize = event => {

			_local.calc();

			// conditionallly trigger rerenders and functions in our componenets
			if (!tick && _local.device !== currentDevice) {

				// the frame request and tick are not required here but I want to throttle updates
				window.requestAnimationFrame(() => {

					_local.trigger();

					tick = false;
					currentDevice = _local.device;
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