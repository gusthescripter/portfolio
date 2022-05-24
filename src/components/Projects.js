import React, { Component } from 'react';
import axios from 'axios';
import ProjectItem from './ProjectItem';

export class Projects extends Component {
    state = {
        projects: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://gusspencer.tech/bk/wp-json/wp/v2/project')
        .then(res => this.setState({
            projects: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }

    render() {
        const { projects, isLoaded } = this.state;

        if(isLoaded) {
                return (
                        <div>
                                {
                                projects.map(project => (
                                        <ProjectItem key={project.id} project={project} />
                                        ))
                                }
                        </div>
                );
		
        }
	return <h3>Loading...</h3>
    }

}

export default Projects;
