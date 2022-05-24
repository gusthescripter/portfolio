import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export class ProjectItem extends Component {

	state = {
		imgURL: '',
		isLoaded: false
	}

	static propTypes = {
		project: PropTypes.object.isRequired
	}

	componentDidMount() {

		const { title } = this.props.project;
		const getACF = axios.get('http://gusspencer.tech/bk/wp-json/wp/v2/project');
		const { gallery_image_1, gallery_image_2, gallery_image_3, gallery_image_4, gallery_image_5, gallery_image_6, project_url } = this.props.project;
		const getImageURL = axios.get('http://gusspencer.tech/bk/wp-json/wp/v2/media/${featured_media}');

		Promise.all().then(res => { this.setState({
			imgURL: res[1],
			isLoaded: true
		}) })
	}

        render() {
		const { title, content, project_url } = this.props.project;
		
                return (
                        <div>
                        	<h2> { title.rendered } </h2>
                        
				<div dangerouslySetInnerHTML= {{ __html: content.rendered }} />

				//<p> { project_url } </p>
			</div>
                );
        }
}

export default ProjectItem;
