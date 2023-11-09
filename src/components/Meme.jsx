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
			url: randomMeme.url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme(() => ({
			...meme,
			[name]: value,
		}));
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Top text"
					className="form--input"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form--input"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button className="form--button" onClick={getRandomMeme}>
					Get a new meme image 🖼
				</button>
			</div>
			{meme.url && (
				<div className="meme">
					<img src={meme.url} alt="meme" className="meme--image" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			)}
		</main>
	);
}
