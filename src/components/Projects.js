import React, { Component } from 'react';
import axios from 'axios';

export class extends Projects Component {
    state = {
        projects: [],
        is loaded: false
    }
    componentDidMount() {
        axios.get('http://box2499.temp.domains/~perillxc/gus/wp-json/wp/v2/posts')
        .then(res => this.setState({
            posts: res.data,
            is loaded: true
        }))
        .cache(err => console.log(err));
    }
    
    render() {
        return (
            <div>

            <\div>
        )
    }
    
}

export default Projects;
