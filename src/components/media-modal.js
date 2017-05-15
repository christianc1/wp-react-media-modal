const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );
const React_Modal = require( 'react-modal' );

const Media_Frame_Title = require( './media-frame-title' );
const Media_Frame_Menu = require( './media-frame-menu' );
const Media_Frame_Router = require( './media-frame-router' );
const Media_Frame_Content = require( './media-frame-content' );
const Media_Frame_Toolbar = require( './media-frame-toolbar' );


//const { Media_Frame_Title, Media_Frame_Menu, Media_Frame_Router, Media_Frame_Content, Media_Frame_Toolbar } = require( '../index.js' );

// CSS.
require( './css/media-modal.css' );

@inject( 'modal' ) @observer
class Media_Modal extends Component {
	constructor( props ) {
		super( props );
	}

	componentWillMount() {
		React_Modal.setAppElement( '#qello-admin' );
		React_Modal.defaultStyles = {};
	}

	handleOpenModal() {
		this.props.modal.visible = true;
	}

	handleCloseModal() {
		this.props.modal.visible = false;
	}

	render() {
		return(
			<div>
				<React_Modal
					isOpen={this.props.modal.visible}
					contentLabel="Qello Media Modal"
					className="media-modal"
				>
					<button onClick={this.handleCloseModal.bind(this)} className="button-link media-modal-close">
						<span className="media-modal-icon">
							<span className="screen-reader-text">Close Media Modal</span>
						</span>
					</button>
					<div className="media-modal-content">
						<div className="media-frame mode-select wp-core-ui">
							<Media_Frame_Title />
							<Media_Frame_Menu />
							<Media_Frame_Router />
							<Media_Frame_Content />
							<Media_Frame_Toolbar />
						</div>
					</div>
				</React_Modal>
			</div>
		)
	}
}

module.exports = Media_Modal;
