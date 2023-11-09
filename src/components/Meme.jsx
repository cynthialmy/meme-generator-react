import memesData from "../memesData.js";
import React from "react";

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		url: "",
	});
	const allMemeImages = memesData.data.memes;
	function getRandomMeme() {
		const randomMeme =
			allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
		setMeme(() => ({
			...meme,
			// topText: inputTopText.value,
			// bottomText: inputBottomText.value,
			url: randomMeme.url,
		}));
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Top text"
					className="form--input"
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form--input"
				/>
				<button className="form--button" onClick={getRandomMeme}>
					Get a new meme image 🖼
				</button>
			</div>
			{meme.url && (
				<div className="meme">
					<img src={meme.url} alt="meme" className="meme--image" />
					<h2 className="meme--text top">One does not simply</h2>
					<h2 className="meme--text bottom">Walk into Mordor</h2>
				</div>
			)}
		</main>
	);
}
