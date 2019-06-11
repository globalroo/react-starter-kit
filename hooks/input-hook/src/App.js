import React, { useState } from "react";
import "./App.css";

export default function App() {
	const [name, setName] = useState("");
	const updateName = e => setName(e.target.value);
	return (
		<div className="App">
			<header className="App-header">
				<p>Controlled input using hooks</p>
				<input value={name} onChange={updateName} placeholder="Enter a value" />
				<p>{name}</p>
			</header>
		</div>
	);
}
