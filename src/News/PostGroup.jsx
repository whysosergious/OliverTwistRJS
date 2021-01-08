/**
 * News post component
 */
import React, { useContext, useState, useEffect } from 'react';
// import React from 'react';

// context
import { kernel } from 'logic/kernel';

// components
import NewsPost from './Post';


var loaded = 0;		// loaded posts
var count = 3;		// max amount of post to display on initial load depending



const posts = {};

const displayPosts = () => {
	let array = [];

	for ( let p in posts) {
		let { index, altClass, style } = posts[p];

		array.push(
			<NewsPost key={ index }
				altClass={ altClass }
				style={ style }
			/>
		);
	}
	return array;
}

const loadPosts = ( count ) => {
	for ( let i=loaded; i<count; i++ ) {
		++loaded;
		let p = {
			index: loaded,
			altClass: '',
		};
		posts[loaded] = p;
	}
}

const PostGroup = props => {
	const [ states, setStates ] = useState(count);
	count = states.new || count;


	const { _gl } = useContext(kernel);
	const { Viewport } = _gl;	// shortcut to the viewport object in our global context

	loadPosts( count );

	_gl.init([ 'PostGroup', {
		set: setStates,
		status: states,
		count: count,
		loadPosts,
	}]);


	useEffect(() => {
		const displayPost = () => {
			// let display = Viewport.device === 'pad' ? '' : 'none' ;
			// for ( let i = count - (count%3); i < count; i++ ) {
			// 	posts[i+1].style = { display };
			// }

			setStates({vp: 'rerender'});
		}
		Viewport.link(displayPost);
	}, [Viewport]);


   return (
		<>
			{ displayPosts() }
		</>
	);
}

export default PostGroup;