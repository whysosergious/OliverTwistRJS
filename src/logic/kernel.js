import React, { createContext } from 'react';

const kernel = createContext({});
const { Provider } = kernel;

/**
 * our context object with a method that appends references and values
 * TODO: check if key already exists beforewriting otherwise data gets overwritten
 * and set writable and enumerable to false for the method
 *
 * '_gl' for global
 */
const _gl = {
	init( entry ) {
		this[entry[0]] = entry[1] || entry[0];
	}
};

// standard react provider
const StateProvider = ({ children }) => {
	return <Provider value={{ _gl }}>{ children }</Provider>;
};

export { kernel, StateProvider };