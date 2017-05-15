const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );
const className = require( 'classnames' );

@inject('modal') @observer
class Media_Frame_Router extends Component {

	handleClick( routeId ) {
		this.props.modal.activeFrame.setActiveRoute( routeId )
	}

	render() {
		const routes = this.props.modal.activeFrame.routes.map(route => {
			return (
				<a key={route.id}
					href={void 0}
					onClick={this.handleClick.bind(this, route.id)}
					className={className({
						'media-menu-item': true,
						'active': this.props.modal.activeFrame.activeRoute.id === route.id
					})}
					>{route.title}</a>
			);
		})
		return(
			<div className="media-frame-router">
				<div className="media-router">
					{routes}
				</div>
			</div>
		);
	}
}

module.exports = Media_Frame_Router;
