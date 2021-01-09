/**
 * While this is made me despise react somewhat less
 * references and global hooks need to be implemented
 * smarlty as to not limit component reusability
 */
import { useEffect, useState } from 'react';
// import { Test } from 'App';








 // global data, references, functions and hooks
export const globalAccess = {};
// blueprint of method object that's copied and merged with the reference object
const globalAccessMethods = {
	getPos() {	// ref offset getter
		this.offsetY = this.ref.offsetTop;
	},
	init( key, state, dispatch ) {		// initial method with hook assignment
		this.ref = this.ref.current; 	// element reference
		this.ref.zKey = key[0];		// for easy pairing, assign collection key directly to dom ref object
		this.state = state;		// component 'state'
		this.set = dispatch;		// component hook 'setState'
		this.getPos();
	},
}

/**
 * Global assignment of custom hooks for individual elements
 * Here we focus on viewport and element visibility
 * @param {React.ElementRef<HTMLElement>} ref
 */
export const useGlobalAccess = (ref) => {
	const [ linkedState, setLinkedState ] = useState(false);	// custom hook
	// when components mount, we create their value object
	// and initialize the object

	useEffect(() => {
		let key = Object.keys( ref );
		globalAccess[key] = {  };

		Object.assign( globalAccess[key], ref[key], globalAccessMethods  );
		globalAccess[key].init( key, linkedState, setLinkedState );
		// Test(globalAccess);

	}, []);

	return linkedState;
}