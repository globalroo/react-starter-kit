const graphQLEndpoint = "http://localhost:4000/graphql";

export const constructRequest = query => ({
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify({
		query
	}),
	method: "POST",
	mode: "cors"
});

const getQueryData = ({ data = {} }) => {
	const { videos = [] } = data;
	return { videos };
};

const defaultResponseObject = {
	errors: [],
	videos: []
};

const handleServerResponse = result => {
	if (result.errors) {
		return {
			...defaultResponseObject,
			errors: result.errors
		};
	} else {
		return {
			...defaultResponseObject,
			...getQueryData(result)
		};
	}
};

export const getQueryFromServer = async query => {
	try {
		const response = await fetch(graphQLEndpoint, constructRequest(query));
		const result = await response.json();
		return handleServerResponse(result);
	} catch (e) {
		return {
			loaded: true,
			errors: [{ message: "Can't reach server" }]
		};
	}
};
