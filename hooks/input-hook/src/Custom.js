import React, { useState } from "react";
import "./App.css";

export default function App() {
	const name = useInputHook("");
	const surname = useInputHook("");
	return (
		<div className="App">
			<header className="App-header">
				<p>Controlled input using hooks</p>
				<input {...name} placeholder="Enter a value" />
				<input {...surname} placeholder="Enter a value" />
				<p>
					{name.value} : {surname.value}
				</p>
			</header>
		</div>
	);
}

const useInputHook = initialValue => {
	const [value, setValue] = useState(initialValue);
	const onChange = e => setValue(e.target.value);
	return {
		value,
		onChange
	};
};
