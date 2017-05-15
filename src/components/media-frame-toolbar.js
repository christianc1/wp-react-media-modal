const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );

@inject( 'modal' ) @observer
class Media_Frame_Toolbar extends Component {

	handleClick() {
		const frame = this.props.modal.activeFrame;
		const route = frame.activeRoute;
		const active = route.selectedItem || void 0;
		this.props.modal.insert( active );
	}
	render() {
		return(
			<div className="media-frame-toolbar">
				<div className="media-toolbar">
					<div className="media-toolbar-primary search-from">
						<button type="button" className="button media-button button-primary button-large media-button-insert" onClick={this.handleClick.bind(this)}>
							Insert Into Post
						</button>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Media_Frame_Toolbar;
