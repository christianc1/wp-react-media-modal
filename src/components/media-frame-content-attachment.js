const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );
const className = require( 'classnames' );

@inject( 'modal' ) @observer
class Media_Frame_Content_Attachment extends Component {
	constructor( props ) {
		super(props);
	}

	handleClick() {
		if ( ! this.props.item.selected ) {
			return this.props.modal.activeFrame.activeRoute.selectItem( this.props.item )
		}
		this.props.item.selected = false;
	}

	classNames() {
		return className( {
			'attachment' : true,
			'save-ready': true,
			'selected': this.props.item.selected,
			'details': this.props.item.selected
		} );
	}

	render() {
		return(
			<li tabIndex="0" role="checkbox" aria-label="Test" aria-checked="false" className={this.classNames()} onClick={this.handleClick.bind(this)}>
				<div className="attachment-preview js--select-attachment type-image subtype-jpeg landscape">
					<div className="thumbnail">
						<div className="centered">
							<img src={this.props.item.thumbnail} draggable="false" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
						</div>
						<div className="filename">
							{this.props.item.title}
						</div>
					</div>
				</div>
				<button type="button" className="button-link check" tabIndex="-1">
					<span className="media-modal-icon"></span>
					<span className="screen-reader-text">Deselect</span>
				</button>
			</li>
		);
	}
}

module.exports = Media_Frame_Content_Attachment;
