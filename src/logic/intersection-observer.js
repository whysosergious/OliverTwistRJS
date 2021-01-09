/**
 * Intersection Observer for animation module
 * with global hooks
 */


var rafTick = false;
/**
 * Execute a function or method (or set a state)
 * TODO!: Creating a queue array that removes duplicate or unneded action and executes
 * the rest in order
 * @param {Function} action
 */
export const queueFrame = ( action ) => {
	action = typeof action !== 'function' ? (() => action) : action;	// we need a function
	if (!rafTick) {
		window.requestAnimationFrame(() => {
			action();
			rafTick = false;
			return 'done';
		})
		rafTick = true;
	}
}

// Object for separation of target values
const ObserverTargets = {};
class TargetClass {
	constructor( target, handler ) {
		this.prevRatio = 1.0;
		this.target = target;
		this.handler = handler;
	}
}

/**
 * handly little function for defining different levels of thresholds
 * returns a interger array
 * @param {BigInt} steps
 */
const buildThresholdList = ( steps ) => {
	let thresholds = [];
	let numSteps = steps;

	for (let i=1.0; i<=numSteps; i++) {
		let ratio = i/numSteps;
		thresholds.push(ratio);
	}

	thresholds.push(0);
	return thresholds;
}

// intersection observer
const createObserver = ( root, target, handler, options, thresholdSteps=20, originalHanler=false ) => {
	let observer;

	let ModulOptions = {
		delay: 0,
		root: root,
		rootMargin: ['-10px 0px 10px 0px'],
		threshold: buildThresholdList(thresholdSteps),
	};

	/**
	 * Shortening syntax and adding values
	 * has a callback pointing toward the assigned hangler
	 * @param {*} entries
	 * @param {*} observer
	 */
	const ModulHandleIntersect = ( entries, observer ) => {
		entries.forEach( entry => {
			let { colKey } = entry.target;
			let prevRatio = ObserverTargets[colKey].prevRatio;

			ObserverTargets[colKey].prevRatio = entry.intersectionRatio;
			return ObserverTargets[colKey].handler({ entry, observer, colKey, prevRatio, entries });
		});
	}

	observer = new IntersectionObserver( originalHanler ? handler : ModulHandleIntersect , options || ModulOptions );

	// creating separate object for each target
	var targetArray = Array.isArray( target ) ? target : [ target ];
	targetArray.forEach( tgt => {
		observer.observe( tgt );
		ObserverTargets[tgt.colKey] = new TargetClass( target, handler );
	});
}

export { createObserver };




/**
 * NOTES **
 *
 * target.classList.add('stuck');
 * isInViewCol[colKey].set(true);	// hooks were less performant by almost half(53ms in just scripting)
 * of course refs should be used sparingly. But mixing css & js animation is freaking great!!
 * plus! intersectionObserver completely eliminates the nedd to handle event listeners..
 * Not that event listeneres don't have their use anymore.
 */






 /**
  * queueFrame() is a very useful function!
  */