/**
 * News post component
 */
import React, { useContext, useState, useEffect } from 'react';

import { kernel } from 'logic/kernel';

// components
import NewsPost from './Post';






var count = 4;

const PostGroup = props => {
	const [ states, setStates ] = useState(4);
	count = states.int || 4;

	const { _gl } = useContext(kernel);

	const postArray = [];
	const updateArray = ( count ) => {

		for ( let i=1; i<=count; i++ ) {
			let post = <NewsPost key={ i } />
			postArray.push( post );
			console.log(i)
		}
	}
	updateArray( count );
	_gl.init([ 'PostGroup', {
		set: setStates,
		status: states,
		count: count,
		updateArray,
	}]);

	useEffect(() => {

	});

   return (
		<>
			{ postArray }
		</>
	);
}

export default PostGroup;