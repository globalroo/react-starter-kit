import React, { useState, useEffect } from "react";
import { getQueryFromServer } from "./graphql-service";
import { Videos } from "./videos";
import logo from "./logo.svg";
import "./App.css";

const getVideosQuery = "{ videos { key, title }}";

const Loading = () => <p>Loading...</p>;
const Errors = ({ errors }) => <p>{JSON.stringify(errors)}</p>;

export default function App() {
	const [response, setResponse] = useState({});

	useEffect(() => {
		getQueryFromServer(getVideosQuery).then(response => {
			setResponse({ ...response });
		});
	}, []);

	const { errors = [], videos = [] } = response;
	const hasErrors = errors.length > 0;
	const hasVideos = videos.length > 0 && !hasErrors;
	const isLoading = !hasErrors && !hasVideos;

	return (
		<div className="App">
			<div className="App-body">
				<img src={logo} className="App-logo" alt="GraphQL logo" />
				<p>
					Hooks - <code>Using Endpoints</code>
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
