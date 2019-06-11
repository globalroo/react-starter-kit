import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
		this.updateName = this.updateName.bind(this);
	}

	updateName(event) {
		this.setState({
			name: event.target.value
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>Controlled input using class / state</p>
					<input
						value={this.state.name}
						onChange={this.updateName}
						placeholder="Enter a value"
					/>
					<p>{this.state.name}</p>
				</header>
			</div>
		);
	}
}

export default App;
