const { action, computed, observable } = require( 'mobx' );

module.exports =  class Media_Modal_Content_Item {
	id;

	@observable selected = false;

	@observable title;

	@observable thumbnail;

	@observable sidebarMappings = [];

	constructor( item ) {
		if ( ! item.id ) return void 0;
		this.id = item.id;
		this.title = item.meta.name;
		this.thumbnail = item.images.image;
		this.sidebarMappings = [
			{
				id: 'id',
				prop: item.id,
				label: 'Asset Id'
			},
			{
				id: 'assetName',
				prop: item.meta.name,
				label: 'Asset Name'
			},
			{
				id: 'thumbnail',
				prop: item.thumbs,
				label: 'Thumbnail'
			}
		];
	}
}
