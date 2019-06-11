import React from "react";
import renderer from "react-test-renderer";

import { render, fireEvent } from "react-testing-library";
import App from "src/App";
import {
	Basic,
	BasicWithProps,
	BasicWithDOMAttrs,
	BasicWithEventHandler,
	BasicWithEventSentToParent,
	BasicWithValuePassedToParent,
	BasicWithChildren
} from "src/stateless";

// Using Kent C Dodds testing library
it("Finds some text in the page", () => {
	const { getByText } = render(<App />);
	expect(getByText("Learn React")).toBeInTheDocument();
});

it("Clicks a button and calls back to a method", () => {
	const spy = jest.fn();
	const { getByText } = render(
		<BasicWithEventSentToParent handleClick={spy} />
	);
	fireEvent.click(getByText("Click Me"));
	expect(spy).toHaveBeenCalledTimes(1);
});

it("Clicks a button and receives a 'Called' payload", () => {
	const spy = jest.fn();
	const { getByText } = render(
		<BasicWithValuePassedToParent handleClick={spy} />
	);
	fireEvent.click(getByText("Click Me"));
	expect(spy).toHaveBeenCalledWith("Clicked");
});

it("Clicks a button and receives a 'Called' payload", () => {
	const { getByText } = render(
		<BasicWithChildren>
			<p>Hello World</p>
		</BasicWithChildren>
	);
	expect(getByText("Hello World")).toBeInTheDocument();
});

// Standard React patterns, React-test-renderer - different stuff
// Wide ranging catch all pattern to just flag any changes to your components
describe("Simple snapshot tests for simple components using basic react-renderer", () => {
	test("I can render a <Basic /> component", () => {
		const component = renderer.create(<Basic />).toJSON();
		expect(component).toMatchSnapshot();
	});
	test("I can render a <BasicWithProps /> component", () => {
		const component = renderer
			.create(<BasicWithProps message={"Test"} />)
			.toJSON();
		expect(component).toMatchSnapshot();
	});
	test("I can render a <BasicWithDOMAttrs /> component", () => {
		const component = renderer.create(<BasicWithDOMAttrs />).toJSON();
		expect(component).toMatchSnapshot();
	});
	test("I can render a <BasicWithEventHandler /> component", () => {
		const component = renderer.create(<BasicWithEventHandler />).toJSON();
		expect(component).toMatchSnapshot();
	});
});
