// Needed for JSX support
import React from "react";

// File uses function expressions
// Can just as easily use: export function Basic() { return <div>Basic Component</div> }

// Usage: <Basic />
export const Basic = () => <div>Basic Component</div>;

// Usage: <BasicWithProps message="Hello World!" /> - destructure properties to make life easier
export const BasicWithProps = ({ message }) => <div>{message}</div>;

// Usage: <BasicWithDOMAttrs /> Some attributes require camelCase
// https://reactjs.org/docs/dom-elements.html
export const BasicWithDOMAttrs = () => (
	<div>
		<input
			className="my-class"
			data-qa="qa-hook"
			readOnly={true}
			tabIndex="1"
		/>
	</div>
);

// Usage: <BasicWithEventHandler /> note the events are camelCase onClick, onChange, onKeyDown
// https://reactjs.org/docs/handling-events.html
export const BasicWithEventHandler = () => (
	<div>
		<button onClick={() => alert("Clicked")}>Click Me</button>
	</div>
);

// Usage: <BasicWithEventSentToParent handleClick={(e) => alert("Child component clicked")} />
export const BasicWithEventSentToParent = ({ handleClick }) => (
	<div>
		<button onClick={handleClick}>Click Me</button>
	</div>
);

// Usage: <BasicWithValuePassedToParent handleClick={(message) => alert(message)} />
export const BasicWithValuePassedToParent = ({ handleClick }) => (
	<div>
		<button onClick={e => handleClick("Clicked")}>Click Me</button>
	</div>
);

// A containing component
// Usage:
//	<BasicWithChildren>
//		<p>I'm a child of the Component</p>
//	</BasicWithChildren>
export const BasicWithChildren = ({ children }) => <div>{children}</div>;
