import React, { Component } from "react";

// Usage: <BasicClass />
// If you see this pattern you should probably be using a stateless component
export class BasicClass extends Component {
	render() {
		return <div>Basic Class</div>;
	}
}

// Usage: <BasicClassWithProps message="Basic Class"/>
// If you see this pattern you should probably be using a stateless component
export class BasicClassWithProps extends Component {
	render() {
		return <div>{this.props.message}</div>;
	}
}

// Usage: <BasicClassWithState />
// State should be things that effect the rendering of the component or it's children
// Changing state will trigger a re-render of the component
export class BasicClassWithState extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Basic Class"
		};
	}
	render() {
		return <div>{this.state.message}</div>;
	}
}

// Usage: <BasicClassWithStateUpdate />
export class BasicClassWithStateUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Basic Class"
		};
	}
	render() {
		return (
			<button
				onClick={() =>
					this.setState({
						message: "State Changed, Component Re-Rendered."
					})
				}
			>
				{this.state.message}
			</button>
		);
	}
}

// A containing component with classes
// Usage:
//	<BasicWithChildren>
//		<p>I'm a child of the Component</p>
//	</BasicWithChildren>
export class BasicWithChildren extends Component {
	render() {
		return <div>{this.props.children}</div>;
	}
}
