const { action, computed, observable } = require( 'mobx' );

const Media_Modal_Frame = require( './Media_Modal_Frame' );

module.exports = class Media_Modal {
	@observable frames = [];

	@observable menu = [];

	@observable loading = false;

	@observable loaded = true;

	@observable visible = false;

	insertCallback;

	constructor( frames, callback ) {
		if ( ! Array.isArray( frames ) ) {
			throw Error( 'Media_Modal_Interface expects frames property to be an array of frames' );
		}
		this.frames = frames.map( frame => new Media_Modal_Frame( frame ) );
		this.menus = this.frames.map( frame => frame.title );
		this.insertCallback = callback || ( () => null );
	}

	@action setActiveFrame( frameId ) {
		this.frames.map( frame => frame.active = false );
		this.frames.filter( frame => frame.id === frameId)[0].active = true;
	}

	@computed get activeFrame() {
		return this.frames.filter( frame => frame.active )[0] || this.frames[0];
	}

	@action insert( data ) {
		this.insertCallback.call( this, ( data || {} ) );
		this.visible = false;
	}
}
