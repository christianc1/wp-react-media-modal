const { action, computed, observable } = require( 'mobx' );

const Media_Modal_Content = require( './Media_Modal_Content' );

module.exports = class Media_Modal_Frame {
	id;
	@observable title = 'Insert Media';
	@observable icon = '';
	@observable toolbars = [];
	@observable routes = [];
	@observable active = false;

	constructor( frame ) {
		this.title = frame.title ? frame.title : this.title;
		this.id = frame.id ? frame.id : this.title.toLowerCase().replace( ' ', '_' );
		this.icon = frame.icon ? frame.icon: this.icon;
		this.active = frame.active ? true : false || false;
		this.toolbars = Array.isArray( frame.toolbars ) ? frame.toolbars : [];
		this.routes = Array.isArray( frame.routes ) ? frame.routes.map( route => new Media_Modal_Content( route ) ) : [];
	}

	@computed get selectedItems() {
		return this.routes.reduce( (acc, curr) => { acc.push( ...current.selectedItems ); return acc }, [] );
	}

	getActiveRoute() {
		return this.activeRoute;
	}

	@action setActiveRoute( routeId ) {
		this.routes.map( route => route.active = false );
		const route = this.routes.filter( route => route.id === routeId )[0].active = true;
	}

	@computed get activeRoute() {
		return this.routes.filter( route => route.active )[0] || this.routes[0];
	}
}
