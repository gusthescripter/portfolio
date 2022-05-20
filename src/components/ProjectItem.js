import React, { Component } from 'react';

export class ProjectItem extends Component {

        render() {
		const { title } = this.props.projects
                return (
                        <div>
                        	<h2>{ title.rendered }</h2>
                        </div>
                );
        }
}

export default ProjectItem;
