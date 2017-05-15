const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );

const Media_Frame_Content_Attachment = require( './media-frame-content-attachment' );

@inject( 'modal' ) @observer
class Media_Frame_Content_Attachments extends Component {

	componentDidMount() {
		this.list.addEventListener( 'scroll', (e) => {
			if ( this.list.offsetHeight + this.list.scrollTop >= this.list.scrollHeight ) {
				this.props.modal.activeFrame.activeRoute.moreCallback();
			}
		});
	}

	render() {
		const modal = this.props.modal;
		const route = modal.activeFrame.activeRoute;
		const items = route.items.map( (item) => <Media_Frame_Content_Attachment key={item.id} item={item}/> );
		return(
			<ul className="attachments" tabIndex="-1" ref={(list) => { this.list = list }}>
				{items}
			</ul>
		);
	}
}

module.exports = Media_Frame_Content_Attachments;
