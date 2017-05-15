const React = require( 'react' );
const { Component } = React;
const { inject, observer } = require( 'mobx-react' );
const className = require( 'classnames' );

@inject( 'store' ) @inject( 'modal' ) @observer
class Media_Frame_Content_Toolbar extends Component {

	handleSearchChange( e ) {
		this.searchTerm = e.target.value;
	}

	handleSearchExecute(e) {
		if ( ! this.searchInput || ! this.searchTerm ) {
			return;
		}
		const term = this.searchTerm;
		this.searchInput.value = '';
		this.props.store.fetchSearchResults( term );
	}

	componentDidMount() {
		this.searchInput.addEventListener('keyup', (e) => {
			if ( e.keyCode == 13 ) {
				this.handleSearchExecute(e);
			}
		})
	}

	render() {
		return(
			<div className="media-toolbar">
				<div className="media-toolbar-secondary">
					<label htmlFor="media-attachment-filters" className="screen-reader-text">Filter by type</label>
					<select id="media-attachment-filters" className="attachment-filters">
						<option value="all">All media items</option>
						<option value="uploaded">Uploaded to this post</option>
						<option value="image">Images</option>
						<option value="audio">Audio</option>
						<option value="video">Video</option>
						<option value="unattached">Unattached</option>
					</select>
					<label htmlFor="media-attachment-date-filters" className="screen-reader-text">Filter by date</label>
					<select id="media-attachment-date-filters" className="attachment-filters">
						<option value="all">All dates</option>
						<option value="0">April 2017</option>
					</select>
					<span className="spinner"></span>
				</div>
				<div className="media-toolbar-primary search-form">
					<label htmlFor="media-search-input" className="screen-reader-text">Search Media</label>
					<input type="search"
						placeholder="Search media items..."
						id="media-search-input"
						className="search"
						onChange={this.handleSearchChange.bind(this)}
						ref={(input) => { this.searchInput = input}}
					/>
					<span className="dashicons dashicons-search" onClick={this.handleSearchExecute.bind(this)}></span>
				</div>
			</div>
		);
	}
}

module.exports = Media_Frame_Content_Toolbar;
