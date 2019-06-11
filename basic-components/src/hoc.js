import React from "react";

const withStyle = WrappedComponent => {
	return ({ color = "red", ...props }) => (
		<div style={{ backgroundColor: color }}>
			<WrappedComponent {...props} />
		</div>
	);
};

function Button({ label = "default" }) {
	return <button> {label} </button>;
}

export const StylishButton = withStyle(Button);

//Usage
// <StylishButton /> //default
// <StylishButton color="blue" /> // add some color
// <StylishButton label="myButton" /> // add a label
// <StylishButton label="myButton" color="purple"/> //props on styling component and child component */
