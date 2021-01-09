/**
 * Scroll animations and handlers
 */







var lastScrollPos = 0;
var scrollTick = false;
var target = 0;

// elements and their offsets
var _sc = {
	array: [],
	col: {},
	init( node ) {
		this.col[node[0]] = node[1] || node[0];
	},
};


const handleScrollTriggers = (scrollPos) => {
	isInViewCol.promoRef.set(true);

}
const handleScroll = ( event ) => {

	lastScrollPos = event.currentTarget.scrollTop;
	if (!scrollTick) {
		window.requestAnimationFrame(() => {
			handleScrollTriggers(lastScrollPos);
			scrollTick = false;
		});
		scrollTick = true;
	}
}

const getColOffsets = () => {
	array.push([-444, null]);
	for ( let el in col ) {
		array.push([col[el].ref.offsetTop, el]);
		// console.log(array)
	}
	array.push([44444, null]);
}
getColOffsets();
main.addEventListener( 'scroll', handleScroll, { passive: true });

return () => {
	main.removeEventListener( 'scroll', handleScroll, { passive: true });
}