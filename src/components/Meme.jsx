import memesData from "../memesData.js";
import React from "react";

export default function Meme() {
	const [memeImage, setMemeImage] = React.useState("");
	const memes = memesData.data.memes;
	function getRandomMeme() {
		const randomMeme = memes[Math.floor(Math.random() * memes.length)];
		setMemeImage(randomMeme.url);
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
			{memeImage && (
				<img src={memeImage} alt="meme" className="meme--image" />
			)}
		</main>
	);
}
