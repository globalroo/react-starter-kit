import React, {
	Component,
	createRef,
	useRef
	// useImperativeMethods,
	// forwardRef
} from "react";
import logo from "./logo.svg";
import "./App.css";

const BasicRefHook = () => {
	const inputRef = useRef(); //Initialise a ref hook to set on DOM
	const onButtonClick = () => alert(inputRef.current.value);
	return (
		<>
			<input ref={inputRef} type="text" />
			<button onClick={onButtonClick}>Pull value from DOM</button>
		</>
	);
};

//WiP
// let BindRefAndUseInParent = ({ myRef }) => {
// 	const inputRef = useRef(myRef);
// 	useImperativeMethods(myRef, () => ({
// 		focus: () => {
// 			inputRef.current.style.color = "red";
// 			inputRef.current.focus();
// 		}
// 	}));
// 	return <input ref={inputRef} placeholder="Press and check console" />;
// };
// BindRefAndUseInParent = forwardRef(BindRefAndUseInParent);

class App extends Component {
	myRef = createRef();
	test = () => {
		// console.log(this.myRef.current); // We have a handle on child DOMNode now.
		// this.myRef.current.focus();
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Input ref example</p>
					<BasicRefHook />
					<br />
					{/* I want to access a child dom node from this class, pass the ref to the child so it can send it back (and augment it the Node with extra magic!) */}
					{/* <BindRefAndUseInParent myRef={this.myRef} /> */}
					<button onClick={this.test}>Do some action</button>
				</header>
			</div>
		);
	}
}

export default App;
