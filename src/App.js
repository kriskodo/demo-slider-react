import React, { createRef, useRef } from 'react';
import './App.css';
import Slider from "./components/Slider/Slider";

const App = () => {
	const sliderCardSizesConfig = [75,85,100,85,75];
		
	const sliderStyles = {
		sliderCardTitleFontSize: "28",
		sliderCardContentFontSize: "18",
		primaryBackgroundColor: "#26232B",
		secondaryBackgroundColor: "#56545A",
		primaryButtonColor: "#25222A",
		secondaryButtonColor: "#59F0BD",
		accentButtonColor:"#722FDE",
	}

	const sliderContentData = [
		{
			cardId: 1,
			ref: useRef(null),
			title: "Alpha Suite",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			actions: [{ text: "Go to Alpha Suite" }],
		},
		{
			cardId: 2,
			ref:useRef(null),
			image: require("./images/photo.jpg"),
			title: "Wiki",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			actions: [{ text: "Go to Wiki" }],
		},
		{
			cardId: 3,
			ref: useRef(null),
			title: "Hot Takes",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			actions: [{ text: "Go to Hot Takes" }],
			image: require("./images/photo.jpg"),
		},
		{
			cardId: 4,
			ref: useRef(null),
			image: require("./images/photo.jpg"),
		},
		{
			cardId: 5,
			ref: useRef(null),
			title: "Smart Chat",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		}
	];

	
	const sliderFooterActionButtons = [
		{
			text: "Hot Takes",
			className: "button--black button--big",
			relatesToIndex: 1,
			relatesToCardId: 3,
		},
		{
			text: "$Juice Token",
			className: "button--black button--big",
			relatesToIndex: 2,
			relatesToCardId: 4
		},
		{
			text: "Smart Chart",
			className: "button--black button--big",
			relatesToIndex: 3,
			relatesToCardId: 5
		},
		{
			text: "Wiki",
			className: "button--black button--big",
			relatesToIndex: 4,
			relatesToCardId: 2
		},
		{
			text: "Alpha Suite",
			className: "button--black button--big",
			relatesToIndex: 5,
			relatesToCardId: 1
		},
	];



	return (
		<div className="App">
			<div className="container">
				<div className="container__header">
					<p>Just Getting Started</p>
				</div>
				<div className="container__body">
					<Slider
						sliderContentData={sliderContentData}
						sliderFooterActionButtons={sliderFooterActionButtons}
						sliderCardSizesConfig={sliderCardSizesConfig}
						sliderStyles={sliderStyles}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
