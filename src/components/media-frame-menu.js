const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );
const classNames = require( 'classnames' );

@inject( 'modal' ) @observer
class Media_Frame_Menu extends Component {
	render() {
		const items = this.props.modal.frames.map(frame => {
			return(
				<a href={void 0}
					key={frame.id}
					className={classNames({
						'media-menu-item': true,
						'active': ( frame.id === this.props.modal.activeFrame )
					})}
				>{frame.title}</a>
			);
		});

		return(
			<div className="media-frame-menu">
				<div className="media-menu">
					{items}
				</div>
			</div>
		);
	}
}

module.exports = Media_Frame_Menu;
