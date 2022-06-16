import React, { useState } from 'react';
import SliderTab from "./SliderTab";
import "./Slider.css";

const Slider = () => {
		const [activeSlideId, setActiveSlideId] = useState(1);
		// action is rendered as Button components
		const [exampleContent, setExampleContent] = useState([
				{
						sliderId: 1,
						title: "Alpha Suite",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
						actions: [{ text: "Go to Alpha Suite" }],
				},
				{
						sliderId: 2,
						image: require("../../images/photo.jpg"),
						title: "Wiki",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
						actions: [{ text: "Go to Wiki" }],
				},
				{
						sliderId: 3,
						title: "Hot Takes",
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
						actions: [{ text: "Go to Hot Takes" }],
				},
				{
						sliderId: 4,
						title: "Juice token",
						image: require("../../images/photo.jpg"),
				},
				{
						sliderId: 5,
						title: "Smart Chart",
						image: require("../../images/photo.jpg"),
				},
				{
						sliderId: 6,
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				},
		]);
		
		const setActiveCardSlider = (idx, sliderIdClicked) => {
				setActiveSlideId((prev) => {
						console.log(idx);
						console.log(prev);
						return idx;
				});
				let reordered = [];
		}

		return (
				<div className = "slider">
						<SliderTab
								content = {exampleContent}
								setExampleContent = {setExampleContent}
								activeSlideId = {activeSlideId}
								setActiveSlideId = {(id, sliderIdClicked) => setActiveCardSlider(id, sliderIdClicked)}
						/>
				</div>
		);
};

export default Slider;