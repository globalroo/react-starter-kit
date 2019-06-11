import React, { Component } from "react";

// See the full docs here: https://reactjs.org/docs/react-component.html
// LifeCycle methods allow you to grab data / update state /
// inject business logic at various key stages of a components 'life'
// From being created through updates / displaying on the screen and removal

// The lifecycle methods are visualised here
// https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d

export class LifeCycle extends Component {
	constructor(props) {
		super(props);
		console.log(
			"The constructor for a React component is called before it is mounted. "
		);
		// Assign state directly in the constructor
		this.state = {
			message: "Just define an object here"
		};

		// Bind methods here for event handling
		// this.myEventHandler = this.myEventHandler.bind(this)
	}

	componentDidMount() {
		// Add data fetching and state updates here (i.e. this.setState({ message: "New Message"}))
		// Called once when the Component first renders
		console.log("componentDidMount");
	}

	static getDerivedStateFromProps(props, state) {
		// Called before render initially and on any updates
		// Unlikely to be needed for most scenarios.
		// Read more here: https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
		console.log("getDerivedStateFromProps");
		return null;
	}

	shouldComponentUpdate(nextProps, nextState) {
		// Check incoming props / state to determine if a re-render is necessary
		// In general trying to handle this breaks everything - avoid if possible.
		return true;
	}

	componentDidUpdate(prevProps, nextProps) {
		// Called when the component gets new Props from it's parent
		// You can compare the current and new Props here
		console.log("componentDidUpdate");
	}

	componentWillUnmount() {
		// Remove event handlers here to prevent memory leaks
		console.log("componentWillUnmount");
	}

	render() {
		return <div />;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		// Render has been done but updates to the DOM have yet to be applied
		// This is unlikely to be needed for common use cases, the react docs highlight
		// one that most of us may have hit in our interviews! Ensuring the chat text scroll position
		// is correctly positioned https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
		console.log("getSnapshotBeforeUpdate");
		return null;
	}

	componentDidUpdate(prevProps) {
		// compare current props to prevProps to see if any values you're interested in have changed
		// and decide whether to act upon the change
		// Not called on first render of component, called on all subsequent re-renders
		console.log("componentDidUpdate");
	}
}
