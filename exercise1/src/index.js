import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// TODO: Style components
// TODO: Add Components to own file
import { listData } from "./list-data";

const ListItem = ({ item }) => {
	const { id, ...useful } = item;
	return <li>{JSON.stringify(useful)}</li>;
};

const List = ({ list }) => (
	<ul id={"the-list"}>
		{list.map(item => {
			return <ListItem key={item.id} item={item} />;
		})}
	</ul>
);
export class ListControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: "",
			filteredData: [...this.props.listData]
		};
	}

	//TODO - Add a method to filter for each of the squads and add buttons to call them
	teamLeads = () => {
		const teamLeads = this.props.listData.filter(item => item.position);
		this.setState({ filteredData: teamLeads });
	};

	reset = () => this.setState({ filteredData: [...this.props.listData] });

	getSearchTerm = event => event.currentTarget.value;

	getFilteredData(searchTerm = "") {
		return this.props.listData.filter(item =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	unControlledChange = event => {
		const searchTerm = this.getSearchTerm(event);
		const filteredData = this.getFilteredData(searchTerm);
		this.setState(() => ({ filteredData }));
	};

	controlledChange = event => {
		const searchTerm = this.getSearchTerm(event);
		const filteredData = this.getFilteredData(searchTerm);
		this.setState(() => ({ searchTerm, filteredData }));
	};

	domNodeValueAcquisition = () => {
		const searchTerm = this.domNode.value;
		const filteredData = this.getFilteredData(searchTerm);
		this.setState(() => ({ filteredData }));
	};

	handleFormSubmit = event => {
		event.preventDefault();
		const { elements } = event.currentTarget;
		const { name, surname } = elements;
		alert(
			`The value of the forms textfields are ${name.value} and ${surname.value}`
		);
		const filteredData = this.getFilteredData(name.value);
		this.setState(() => ({ filteredData }));
	};

	render() {
		// TODO: Add a button to filter for each of the groups
		// TODO: Can you see patterns in the components? Can you optimise them?
		// Bonus points:
		// TODO: Add a 'FIRED!' Button to remove someone from the list
		// TODO: Add a 'HIRED! Form to add a new record
		return (
			<div>
				<h3>Filter list using state</h3>
				<button onClick={this.teamLeads}> Team Leads </button>
				<button onClick={this.reset}> Reset List </button>
				<hr />
				<h3>Searching with inputs</h3>
				{/* Uncontrolled component acts on event - we just use the value in the component - transient state*/}
				<input
					name="byEvent"
					onChange={this.unControlledChange}
					placeholder="Search using event"
				/>
				<br />
				{/* Controlled component - we're going to send this value elsewhere, into another component or as part of a form - persistent state*/}
				<input
					name="byState"
					onChange={this.controlledChange}
					placeholder="Search using state"
					value={this.state.searchTerm}
				/>
				<br />
				{/* 
					DOM Reference - Get handle on DOM node and manipulate directly. 
					Not particularly React-y but useful for passing nodes to third party libraries 
					It's rare you need to operate on the DOM directly.
				*/}
				<input
					name="byRef"
					placeholder="Search using DOM ->"
					ref={ref => (this.domNode = ref)}
				/>
				<button onClick={this.domNodeValueAcquisition}>Search</button>
				<hr />
				{/* 
					Form Example - by handling onSubmit you can capture all of the values at once if you prefer.
				*/}
				<h3>Working with form data</h3>
				<form onSubmit={this.handleFormSubmit}>
					<input name="name" placeholder="name" />
					<input name="surname" placeholder="surname" />
					<button type="submit">Submit</button>
				</form>
				<hr />
				<List list={this.state.filteredData} />
			</div>
		);
	}
}

function App() {
	return (
		<div className="App">
			<ListControl listData={listData} />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
