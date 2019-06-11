import React from "react";

import { shallow, render, mount } from "src/enzyme";
import {
	BasicClass,
	BasicClassWithProps,
	BasicClassWithState
} from "src/stateful";

// Using Enzyme (AirBnB) general ethos is to test in isolation using 'shallow'

describe("Stateful tests", () => {
	it("Renders a basic component and verifies Basic Class is displayed", () => {
		const wrapper = shallow(<BasicClass />);
		expect(wrapper.contains("Basic Class")).toBeTruthy();
	});

	it("Clicks a button and calls back to a method", () => {
		const wrapper = shallow(<BasicClassWithProps message="Basic Class" />);
		expect(wrapper.contains("Basic Class")).toBeTruthy();
	});

	it("Clicks a button and calls back to a method", () => {
		const wrapper = shallow(<BasicClassWithState message="Basic Class" />);
		expect(wrapper).toMatchSnapshot();
	});
});
