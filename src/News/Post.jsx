/**
 * News post component
 */
import React, { useRef } from 'react';
import { useGlobalObj } from 'logic/zergski-global-object';

// components
import ImageWrapper from 'shared/ImageWrapper';

// collect and map hashtags before render
const hashTagsArray = ['#beer', '#food', '#etc'];

const hashTags = hashTagsArray.map((tag, index) => {
	return <h5 className="Hash-Tag" key={ index }>{ tag }</h5>;
});



const NewsPost = ({ index }) => {
	const post = {
		ref: useRef(null),
		index: index,
		initialState: 'idle bottom',
	}
	const [ state ] = useGlobalObj({ [`post${index}`]: post }, 'observerAnimated');

   return (
      <div className={ `News-Post` } ref={ post.ref }>
			<ImageWrapper />

			<div className="News-Post-Content">
				<h5>
					5e Januari 10:47
				</h5>
				<h4>
					Dagen uppställning 💪 Och glöm inte våran fantastiska julpåse som finns att beställa från den 30/11 🤤
				</h4>
				<div className="Tags-Container">
					{ hashTags }
				</div>
			</div>
		</div>
   );
}

export default NewsPost;