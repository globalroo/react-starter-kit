// Conditional rendering example, calling out to endpoint
// Basic GraphQL introduction with server, GraphiQL and adjustable client query

import React, { Component, Fragment } from "react";
import { getQueryFromServer } from "./graphql-service";

// import resources like this to use in your component
// Alternatively you can use a url on the component or <link> via index.html for css as per usual
import logo from "./logo.svg";
import "./App.css";

// Figure out the required data shape in GraphiQL (localhost:4000/graphql)
const getVideosQuery = "{ videos { key, title, synopsis }}";

// TODO: Task - Make this work too
// TODO - Task (bonus points) - Display a list of related Videos to the selected Video
//const getSpecificVideoQuery = "{ video(id:2) { key, title }}";

const myGraphQL = getVideosQuery;

// TODO: Task - Move these to their own files - make them components, add some style.
const Video = ({ video = {} }) => <li>{JSON.stringify(video)}</li>;

const Videos = ({ videos = [] }) => (
	// TODO: Task - Output the movies as a list of poster images with title below
	<ul>
		{videos.map(({ key, ...videoMeta }) => (
			<li key={key}>{JSON.stringify(videoMeta)}</li>
		))}
	</ul>
);

class App extends Component {
	constructor(props) {
		super(props);

		// Changing this initial state via setState triggers a re-render of the component
		this.state = {
			errors: [],
			loaded: false,
			video: null,
			videos: []
		};
	}

	async componentDidMount() {
		// This is the lifecycle method to use to get data from an external service
		// https://reactjs.org/docs/state-and-lifecycle.html
		const result = await getQueryFromServer(myGraphQL);
		// Update state and trigger re-render
		this.setState({ ...result });
	}

	render() {
		// Conditional Rendering example - Conditional return
		if (this.state.errors.length > 0) {
			// TODO: Task - Make Error handling component that looks nice
			return <h3>GraphQL Error: {JSON.stringify(this.state.errors)}</h3>;
		}

		// TODO: Task - Identify and create component optimisations below.
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="GraphQL logo" />
					<p>
						Exercise 2 - <code>Using Endpoints</code>
					</p>
				</header>
				<div className="App-main">
					{/* Conditional rendering inline contrived example - Ternary */}
					{this.state.loaded ? (
						<>
							{/* A Fragment allows adjacent / sibling components to be returned without a parent */}
							{/* Conditional rendering inline contrived example - && */}
							{this.state.video !== null && <Video video={this.state.video} />}
							{this.state.videos.length > 0 && (
								<Videos videos={this.state.videos} />
							)}
						</>
					) : (
						<div>Loading...</div>
					)}
				</div>
			</div>
		);
	}
}

export default App;
