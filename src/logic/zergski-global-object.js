/**
 * references and global hooks need to be implemented
 * smarlty as to not limit component reusability
 */
import { useEffect, useState } from 'react';
// import { Test } from 'App';



// global data, references, functions and hooks
export const globalObj = {};
// blueprint of method object that's copied and merged with the reference object
const globalObjMethods = {
	getPos() {	// ref offset getter
		this.offsetY = this.ref.offsetTop;
	},
	init( group, key, state, dispatch ) {		// initial method with hook assignment
		if ( this.ref ) {
			this.ref = this.ref.current; 	// element reference
			this.ref.zKey = key[0];
			this.ref.zEl = this;		// for easy pairing and execution of dispatch with observer ***check memory usage***
			this.getPos();
		}
		this.state = state;		// component 'state'
		this.setState = dispatch;		// component hook 'setState'
	},
}

/**
 * Global assignment of custom hooks for individual elements
 * @param {React.ElementRef<HTMLElement>} objectEntry
 */
export const useGlobalObj = ( objectEntry, group = null) => {
	let key = Object.keys( objectEntry );
	const [ state, setState ] = useState(objectEntry[key].initialState || null);	// custom hook
	// when components mounts, we create their object entry
	// and initialize the object

	useEffect(() => {
		// we check if the group property is defined and if that group already exist in the global object
		globalObj[group || key] = globalObj[group] || {};


		Object.assign( objectEntry[key], globalObjMethods );
		objectEntry[key].init( group, key, state, setState );
		Object.assign( globalObj[group || key], group ? objectEntry : objectEntry[key]  );

	}, []);

	return [ state, setState ];
}

export default useGlobalObj;