const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );

@inject('modal') @observer
class Media_Frame_Title extends Component {
	render() {
		return(
			<div className="media-frame-title">
				<h1>{this.props.modal.activeFrame.title}</h1>
			</div>
		);
	}
}

module.exports = class _exported extends Media_Frame_Title{};
