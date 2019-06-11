import React from "react";

export const Videos = ({ videos = [] }) => (
	<ul>
		{videos.map(({ key, ...videoMeta }) => (
			<li key={key}>{JSON.stringify(videoMeta)}</li>
		))}
	</ul>
);
