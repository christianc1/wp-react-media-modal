const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );

const Media_Frame_Content_Toolbar = require( './media-frame-content-toolbar' );
const Media_Frame_Content_Attachments = require( './media-frame-content-attachments' );
const Media_Frame_Content_Sidebar = require( './media-frame-content-sidebar' );

@observer
class Media_Frame_Content extends Component {
	render() {
		return(
			<div className="media-frame-content">
				<div className="attachments-browser">
					<Media_Frame_Content_Toolbar />
					<Media_Frame_Content_Attachments />
					<Media_Frame_Content_Sidebar />
				</div>
			</div>
		);
	}
}

module.exports = Media_Frame_Content;
