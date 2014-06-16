import runloop from 'global/runloop';

export default function teardown () {
	if ( !this.keypath ) {
		// this was on the 'unresolved' list, we need to remove it
		runloop.removeUnresolved( this );
	} else {
		// this was registered as a dependant
		this.root.viewmodel.unregister( this );
	}
}