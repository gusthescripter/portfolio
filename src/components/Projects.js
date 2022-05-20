import React, { Component } from 'react';
import axios from 'axios';

export class Projects extends Component {
    state = {
        projects: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://gusspencer.tech/bk/wp-json/wp/v2/posts')
        .then(res => this.setState({
            posts: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }

    render() {
        const { posts, isLoaded } = this.state;

        if(isLoaded) {
                return (
                        <div>
                                {
                                posts.map(posts => (
                                        <h4> { posts.title.rendered } </h4>
                                        ))
                                }
                        </div>
                );
        }
    }

}

export default Projects;
