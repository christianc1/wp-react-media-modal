const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );

@inject( 'modal' ) @observer
class Media_Frame_Content_Sidebar extends Component {
	componentWillMount() {

	}

	render() {
		const item = this.props.modal.activeFrame.activeRoute.selectedItem;
		if ( ! item ) {
			return null;
		}
		const details = item.sidebarMappings.map(mapping => {
			return(
				<div className={mapping.id} id={mapping.id} key={mapping.id}>
					<strong>{mapping.label}: </strong> {mapping.prop}
				</div>
			)
		})
		return(
			<div className="media-sidebar visible">
				<div className="attachment-details save-ready">
					<h2>Attachment Details
						<span className="settings-save-status">
							<span className="spinner"/>
							<span className="saved">Saved.</span>
						</span>
					</h2>
					<div className="attachment-info">
						<div className="thumbnail thumbnail-image">
							<img src={item.thumbnail} draggable="false" alt=""/>
						</div>
						<div className="details">
							{details}
						</div>
					</div>
					<label className="setting">
						<span className="name">Setting</span>
						<input type="text" />
					</label>
				</div>
			</div>
		)
	}
}

module.exports = Media_Frame_Content_Sidebar;
