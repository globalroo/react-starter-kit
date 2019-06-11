import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { listData } from "./list-data";

// TODO: Task - optimise components and add to their own files
// TODO: Task - Add hooks to their own files

function StaffList({ data = [] }) {
	const {
		values,
		pushValue,
		popValue,
		updateValueAt,
		removeValueAt
	} = useManagedListHook(data);

	const name = useInputHook("");
	const team = useInputHook("");
	const position = useInputHook("");

	const addPerson = e =>
		pushValue({ name: name.value, team: team.value, position: position.value });

	const removePerson = e => popValue();

	const removePositionFour = e => removeValueAt(4);

	// TODO: Task - This is a hard wired example - can you adjust to update inline?
	// NB: Zero based index
	const updatePositionFour = e =>
		updateValueAt(
			{
				name: name.value,
				team: team.value,
				position: position.value
			},
			4
		);

	// TODO: Task - Make it look nice
	return (
		<div>
			<ul>
				{values.map(item => {
					const { id, ...colleague } = item;
					return <li key={id}>{colleague.name}</li>;
				})}
			</ul>
			<hr />
			<input {...name} placeholder="name" />
			<br />
			<input {...team} placeholder="team" />
			<br />
			<input {...position} placeholder="position" />
			<br />
			<button onClick={addPerson}>Add new colleague</button>
			<button onClick={removePerson}>Fire last person hired</button>
			<button onClick={updatePositionFour}>Update position [4]</button>
			<button onClick={removePositionFour}>Remove position [4]</button>
		</div>
	);
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="GraphQL logo" />
					<p>
						Hooks - <code>Using Endpoints</code>
					</p>
					<StaffList data={listData} />
				</header>
			</div>
		);
	}
}

const useInputHook = initialValue => {
	const [value, setValue] = useState(initialValue);
	const onChange = e => setValue(e.target.value);
	return {
		value,
		onChange
	};
};

const useManagedListHook = (initialValue = []) => {
	const [values, setValues] = useState(initialValue);

	const insertValueAt = (item, location) => {
		const addItem = { ...item, id: new Date().getTime() };
		setValues([
			...values.slice(0, location),
			addItem,
			...values.slice(location)
		]);
	};

	const removeValueAt = location =>
		setValues([...values.slice(0, location), ...values.slice(location + 1)]);

	const popValue = () => removeValueAt(values.length - 1);
	const pushValue = item => insertValueAt(item, values.length);

	const updateValueAt = (item, location) => {
		const updatedValues = values.map((listItem, index) => {
			if (index !== location) {
				return listItem;
			}
			return {
				...listItem,
				...item
			};
		});
		setValues(updatedValues);
	};

	return {
		insertValueAt,
		popValue,
		pushValue,
		removeValueAt,
		updateValueAt,
		values
	};
};

export default App;
