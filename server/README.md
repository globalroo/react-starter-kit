# Ancient and Basic GraphQL Server

## Local server

```sh
cd server
npm i && npm start
```

## Basic usage

Browse to [GraphQL Endpoint - http://localhost:4000](http://localhost:4000) and enter some GraphQL queries:

```graphql
{
	aspect(aspect: "16x9") {
		title
		posterPath
	}
	video(id: 2) {
		title
		id
		title
		ratio
		relatedVideos {
			title
			posterPath
		}
	}
	videos(aspect: "2x3") {
		title
		ratio
	}
}
```

## Turtles all the way down usage

```graphql
{
	video(id: 1) {
		title
		synopsis
		posterPath
		releaseDate
		relatedVideos {
			title
			relatedVideos {
				title
				relatedVideos {
					title
				}
			}
		}
	}
}
```
