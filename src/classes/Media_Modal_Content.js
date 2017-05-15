const { action, computed, observable } = require( 'mobx' );

const Media_Modal_Content_Item = require( './Media_Modal_Content_Item' );

module.exports = class Media_Modal_Content {
	id;
	@observable title = 'Media Library';
	@observable items = [];
	@observable allowMultiple = false;
	@observable moreCallback;
	@observable active = false;
	@observable dismissable = true;

	constructor( route ) {
		this.title = route.title ? route.title : this.title;
		this.id = route.id ? route.id : this.title.toLowerCase.replace( ' ', '_');
		this.items = route.items.length ? this.addItems( route.items ) : [];
		this.moreCallback = route.moreCallback || ( () => false );
		this.active = route.active ? true : false || false;
	}

	@computed get selectedItems() {
		return this.items.filter( item => item.selected );
	}

	@computed get selectedItem() {
		return this.selectedItems[0];
	}

	addItems( items ) {
		this.items = [];
		return items.map(this.addItem.bind(this));
	}

	addItem( item ) {
		const _item = new Media_Modal_Content_Item( item );
		if ( _item instanceof Media_Modal_Content_Item  && ! this.items.filter( (item) => item.id === _item.id ).length ) {
			this.items.push( _item );
		}
		return _item;
	}

	@action selectItem( itemToSelect ) {
		if ( ! this.allowMultiple ) {
			this.selectedItems.map( item => item.selected = false );
		}
		const _item = this.items.filter( item => item === itemToSelect )[0];
		if ( _item ) {
			_item.selected = true;
		}
	}
}
