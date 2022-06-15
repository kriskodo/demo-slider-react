import React from 'react';
import SliderTab from "./SliderTab";
import "./Slider.css";

const Slider = () => {
	// action is rendered as Button components
	const sliderExampleTabContent = [
		{
			title: "Alpha Suite",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			action: [{text: "Go to Alpha Suite"}]
		},
		{
			image: require("../../images/photo.jpg"),
			title: "Wiki",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			action: [{text: "Go to Alpha Suite"}]
		},
		{
			title: "Hot Takes",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			action: [{text: "Go to Alpha Suite"}]
		},
		{
			image: require("../../images/photo.jpg"),
		},
		{
			image: require("../../images/photo.jpg")
		},
		{
			title: "Alpha Suite",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},

	]
	return (
		<div className="slider">
			<SliderTab
				content={sliderExampleTabContent}
			/>
		</div>
	);
};

export default Slider;