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
                                projects.map(projects => (
                                        <ProjectItem key={projects.id} projects={projects} />
                                        ))
                                }
                        </div>
                );
        }
    }

}

export default Projects;
