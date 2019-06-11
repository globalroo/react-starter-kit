import React, { Component } from "react";
import { getQueryFromServer } from "./graphql-service";
import logo from "./logo.svg";
import "./App.css";
import { Videos } from "./videos";

const getVideosQuery = "{ videos { key, title }}";

const Loading = () => <p>Loading...</p>;
const Errors = ({ errors }) => <p>{JSON.stringify(errors)}</p>;
export default class App extends Component {
	state = {
		errors: [],
		videos: []
	};

	async componentDidMount() {
		const result = await getQueryFromServer(getVideosQuery);
		this.setState({ ...result });
	}

	render() {
		const { errors, videos } = this.state;
		const hasErrors = errors.length > 0;
		const hasVideos = videos.length > 0 && !hasErrors;
		const isLoading = !hasErrors && !hasVideos;

		return (
			<div className="App">
				<div className="App-body">
					<img src={logo} className="App-logo" alt="GraphQL logo" />
					<p>
						Class - <code>Using Endpoints</code>
					</p>
					<div className="App-main">
						{isLoading && <Loading />}
						{hasVideos && <Videos videos={videos} />}
						{hasErrors && <Errors errors={errors} />}
					</div>
				</div>
			</div>
		);
	}
}
