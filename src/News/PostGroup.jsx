/**
 * News post group component
 */
import React from 'react';

// components
import NewsPost from './Post';

const PostGroup = ({ index: groupNr }) => {
	const displayPosts = () => {
		let array = [];
		// 3 posts per group
		for ( let i=groupNr*3; i<groupNr*3+3; i++ ) {
			array.push(
				<NewsPost key={ i }
					index={ i }
				/>
			);
		}
		return array;
	}

   return (
		<div className="Post-Group">
			{ displayPosts() }
		</div>
	);
}

export default PostGroup;