import React from "react";

export const Videos = ({ videos = [] }) => (
	// TODO: Task - Output the movies as a list of poster images with title below
	<ul>
		{videos.map(({ key, ...videoMeta }) => (
			<li key={key}>{JSON.stringify(videoMeta)}</li>
		))}
	</ul>
);
