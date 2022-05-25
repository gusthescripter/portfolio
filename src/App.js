import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
import './App.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>Portfolio</h1>
      				<Route exact path "/" component={Projects} />
    				<Route exact path "/project/id" component={ProjectPage} />
			</Fragment>
  		);
	}

}

export default App;
