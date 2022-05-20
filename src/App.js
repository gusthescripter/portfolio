import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Portfolio</h1>
      				<Projects />
    			</div>
  		);
	}
        render() {
                return (
                        <div className="App">
                                <h1>Portfolio</h1>
                                <Projects />
                        </div>
                );
        }

}

export default App;
