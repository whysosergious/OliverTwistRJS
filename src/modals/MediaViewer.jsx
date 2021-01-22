import React, { useEffect, useState } from 'react';
import "./MediaViewer.css";
import { useGlobalObj, globalObj } from 'logic/zergski-global-object';

// content JSON
import { mediaJSON } from 'logic/content-collections';

// components
import Anchor from 'shared/Anchor';

// DEV PATH TO LOCALHOST
const localhost = 'http://192.168.0.149/brokenOT/IP/local/';
mediaJSON.forEach((e) => e.src = localhost + e.src );
// console.log(mediaJSON)
// DEV





let current = 'can1';
let canvas = {
	can1: {
		pos: 'center',
		trans: true,
		source: mediaJSON[0].src,
	},
	can2: {
		pos: 'right',
		trans: true,
		source: mediaJSON[1].src,
	},
	can3: {
		pos: 'left',
		trans: false,
		source: mediaJSON[mediaJSON.length-1].src,
	}
}

// iterator
// TODO! add settings
const iterator = ( array, setState, initIndex ) => {
	let index = initIndex;
	let count = array.length - 1;	// content count
	let nextSource = index+2;		// next imagesource to load
	let nextCanvas = 0;	//	canvas position
	let nextImageSource = nextCanvas - 1;

	return {
		next() {
			index = index === count ? 0 : ++index;
			nextSource = index+1 > count ? 0 : index+1;

			Object.entries(canvas).forEach( c => {
				canvas[c[0]].pos = c[1].pos === 'center' ? 'left' : c[1].pos === 'right' ? 'center' : 'right';
				c[1].pos === 'center' && (current = c[0]);
				if ( c[1].pos === 'right' ) {
					canvas[c[0]].trans = false;
					canvas[c[0]].source = mediaJSON[nextSource].src;
				} else {
					canvas[c[0]].trans = true;
				}
			});

			setState({
				...canvas,
				counter: index+1,
			});
		},
		prev() {
			index = index === 0 ? count : --index;
			nextSource = index-1 < 0 ? count : index-1;

			Object.entries(canvas).forEach( c => {
				canvas[c[0]].pos = c[1].pos === 'center' ? 'right' : c[1].pos === 'left' ? 'center' : 'left';
				c[1].pos === 'center' && (current = c[0]);
				if ( c[1].pos === 'left' ) {
					canvas[c[0]].trans = false;
					canvas[c[0]].source = mediaJSON[nextSource].src;
				} else {
					canvas[c[0]].trans = true;
				}
			});

			setState({
				...canvas,
				counter: index+1,
			});
		}
	}
}



var lastTouch = 0;
var content = Object.create(null);

// component for viewing images, videos and documents
const MediaViewer = props => {
	const MediaViewer = {
		display: 'hidden',
		contentIndex: 0,
		initialState: { display: 'hidden' },
	}
	const [ viewerState, setViewerState ] = useGlobalObj({ MediaViewer });
	const [ state, setState ] = useState({
		...canvas,
		counter: 1,
	});
	const [ touchState, setTouchState ] = useState({
		touch: false,
		movement: 0,
	});




	if ( viewerState.display === 'show' ) {
		document.body.classList.add('scroll-lock');
		setTimeout(()=>{
			globalObj.mediaViewer.setState({ display: 'visible' });
		}, 50)
	}

	useEffect(() => {
		const { display, index } = viewerState;
		if ( display === 'show' ) {
			content = iterator( mediaJSON, setState, index );

			current = 'can1';
			canvas = {
				can1: {
					pos: 'center',
					trans: false,
					source: mediaJSON[index].src,
				},
				can2: {
					pos: 'right',
					trans: false,
					source: mediaJSON[index === mediaJSON.length-1 ? 0 : index+1].src,
				},
				can3: {
					pos: 'left',
					trans: false,
					source: mediaJSON[index === 0 ? mediaJSON.length-1 : index-1].src,
				}
			}

			setState({
				...canvas,
				counter: index+1,
			})
		}

	}, [viewerState]);

	const handleClose = () => {
		globalObj.mediaViewer.setState({ display: 'hide' });
		setTimeout(()=>{
			globalObj.mediaViewer.setState({ display: 'hidden' });
		}, 400)

		document.body.classList.remove('scroll-lock');
	}



	// input handlers
	const handleMovement = ( delta, touch=false ) => {
		let nextMovement = touchState.movement - delta;


		canvas[current].trans = false;
		canvas[current].movement = nextMovement;
		setTouchState({ movement: nextMovement });
	}
	// touch
	const handleTouchStart = (e) => {
		lastTouch = e.nativeEvent.touches[0].clientX;
	}
	const handleTouchMove = (e) => {
		const delta = lastTouch - e.nativeEvent.touches[0].clientX;
		lastTouch = e.nativeEvent.touches[0].clientX;

		handleMovement(Math.floor(delta), true);
	}
	const handleTouchEnd = (e) => {
		touchState.movement < -50 ? content.next() : touchState.movement > 50 && content.prev();
		lastTouch = 0;

		canvas[current].trans = true;
		setTouchState({ movement: 0 });
	}

	return (

		<div className={ `Media-Viewer ${ viewerState.display }` }
			onTouchStart={ handleTouchStart }
			onTouchMove={ handleTouchMove }
			onTouchEnd={ handleTouchEnd }
		>

			<img className={ `Media-Viewer-Content ${ state.can1.pos }` } alt={ '' }
				src={ state.can1.source }

				style={{
					transform: current === 'can1' ? `translateX(${ touchState.movement }px)` : '',
					transitionDuration: `${ canvas.can1.trans ? '' : '0s' }`,
				}}
			/>
			<img className={ `Media-Viewer-Content ${ state.can2.pos }` } alt={ '' }

				src={ state.can2.source }

				style={{
					transform: current === 'can2' ? `translateX(${ touchState.movement }px)` : '',
					transitionDuration: `${ canvas.can2.trans ? '' : '0s' }`,
				}}
			/>
			<img className={ `Media-Viewer-Content ${ state.can3.pos }` } alt={ '' }
				src={ state.can3.source }

				style={{
					transform: current === 'can3' ? `translateX(${ touchState.movement }px)` : '',
					transitionDuration: `${ canvas.can3.trans ? '' : '0s' }`,
				}}
			/>

			<div className="Modal-User-Interface-Wrapper">
				<div className="Information-Box">
					<h4>{ `${ state.counter }/${ mediaJSON.length }` }</h4>
				</div>
				<Anchor
					altClass="icon"
					fileName="cross.svg"
					style={{ position: 'absolute', top: '0', right: '0', opacity: '.5' }}
					clicked={ handleClose }
				/>
				<Anchor
					altClass="icon"
					fileName="arrow.svg"
					style={{ transform: 'rotate(180deg)' }}
					clicked={ ()=>content.prev() }
				/>
				<Anchor
					altClass="icon"
					fileName="arrow.svg"
					clicked={ ()=>content.next() }
				/>
			</div>
		</div>
	);
}

export default MediaViewer;