// Usually only used for dynamic variables i.e. things that change from code

export const InlineStyle = ({ someColor }) => (
	// e.g. <div style={{ backgroundColor: "red" }}>{children}</div>
	<div style={{ backgroundColor: someColor }}>
		<p>My Container is dynamically styled from props</p>
	</div>
);

// inline styles via a styles object
// Co-locating styles with your component can be done via a styles object
// This pattern is prevalent with React Native projects.
const getThemeColor = key => {
	const theme = {
		bg: "red",
		fg: "white"
	};
	return theme[key];
};

const styles = {
	backgroundColor: getThemeColor("bg"),
	color: getThemeColor("fg"),
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
};

export const InlineStyleObject = () => (
	// e.g. <div style={{ backgroundColor: "red" }}>{children}</div>
	<div style={styles}>
		<p>My Container is styled from an inline object</p>
	</div>
);

import "./styling.css";

export const StyledByCss = () => (
	// e.g. <div style={{ backgroundColor: "red" }}>{children}</div>
	<div className="container-style">
		<p>My Container is styled by css</p>
	</div>
);

export const StyledByManyCss = () => (
	// e.g. <div style={{ backgroundColor: "red" }}>{children}</div>
	<div className="container-style monochrome">
		<p>My Container is styled using cascading styles</p>
	</div>
);
