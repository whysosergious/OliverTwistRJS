/**
 * Intersection Observer for animation module
 * with global hooks
 */
import { globalObj } from 'logic/zergski-global-object';


let rafTick = false;
const rafQueue = [];
/**
 * Execute a function or method (or set a state)
 * TODO!: Creating a queue array that removes duplicate or unneded action and executes
 * the rest in order
 * @param {Function} action
 */
export const queueFrame = action => {
	action = typeof action !== 'function' ? (() => action) : action;	// we need a function
	rafQueue.push(action);	// add to queue

	const nextRequest = () => {
		let count = rafQueue.length;
		return new Promise(( res, rej ) => {
			window.requestAnimationFrame(() => {
				for ( let i=0; i<count; i++ ) {
					rafQueue[i]();
				}
				rafQueue.splice(0, count);
				res('done');
			});
		});
	}
	const raf = async () => {
		await nextRequest().then(v => {
			rafQueue.length > 0 ? raf() : rafTick = false;;
		});
	};

	if (!rafTick) {
		raf();
		rafTick = true;
	}
}

// Object for separation of target values
globalObj.Observers = {};
class TargetClass {
	constructor( target, handler ) {
		this.prevRatio = 1.0;
		this.elRef = target;
		this.handler = handler;
	}
}

/**
 * handy little function for defining different levels of thresholds
 * returns an int array
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

function observeElement( targets ) {
	// creating separate object for each target
	let targetsArray = Array.isArray( targets ) ? targets : [ targets ];
	targetsArray.forEach( tgt => {
		this.observe( tgt );
		this.ObserverTargets[tgt.zKey] = new TargetClass( tgt, this.handler );
	});
}

// intersection observer
const createObserver = ( name, root, targets, handler, rootMargin=['0px 0px 0px 0px'], thresholdSteps=20, delay=0, originalHandler=false ) => {
	let observer;

	let ModuleOptions = {
		delay: delay,
		root: root,
		rootMargin: rootMargin,
		threshold: buildThresholdList(thresholdSteps),
	};

	/**
	 * Shortening syntax and adding values
	 * has a callback pointing toward the assigned handler
	 * @param {*} entries
	 * @param {*} observer
	 */
	const ModuleHandleIntersect = ( entries, observer ) => {
		entries.forEach( entry => {
			let { zKey } = entry.target;
			let prevRatio = observer.ObserverTargets[zKey].prevRatio;

			observer.ObserverTargets[zKey].prevRatio = entry.intersectionRatio;
			return observer.ObserverTargets[zKey].handler({ entry, observer, zKey, prevRatio, entries });
		});
	}

	observer = new IntersectionObserver( originalHandler ? handler : ModuleHandleIntersect , ModuleOptions );

	observer.handler = handler;
	observer.ObserverTargets = {};
	observer.observeElement = observeElement;
	observer.observeElement( targets );

	globalObj.Observers[name] = observer;
}

export { createObserver };




/**
 * NOTES **
 *
 * target.classList.add('stuck');
 * isInViewCol[zKey].set(true);	// hooks were less performant by almost half(53ms in just scripting)
 * of course refs should be used sparingly. But mixing css & js animation is freaking great!!
 * plus! intersectionObserver completely eliminates the need to handle event listeners..
 * Not that event listeners don't have their use anymore.
 */






 /**
  * queueFrame() is a very useful function!
  */