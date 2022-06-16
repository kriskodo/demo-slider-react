import React, { useState } from 'react';
import SliderTab from "./SliderTab";
import "./Slider.css";

const sliderContentConfig = [
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
				image: require("../../images/photo.jpg"),
		},
		{
				sliderId: 4,
				image: require("../../images/photo.jpg"),
				title: "Juice Token"
		},
		{
				sliderId: 5,
				title: "Smart Chat",
				content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
];

const Slider = () => {
		const [activeSlideId, setActiveSlideId] = useState(1);
		// action is rendered as Button components
		const [exampleContent, setExampleContent] = useState([...sliderContentConfig]);
		
		const setActiveCardSlider = (activeId, slideId) => {
				setActiveSlideId(activeId);
				let reordered = [...exampleContent];
				const currentSlide = reordered.find(c => c.sliderId === slideId);
				const currentSlideIndex = reordered.findIndex(c => currentSlide.sliderId === c.sliderId);
				
				reordered[currentSlideIndex] = reordered[2];
				reordered[2] = currentSlide;
				
				setExampleContent([...reordered]);
		};
		
		return (
				<div className = "slider">
						<SliderTab
								content = {exampleContent}
								setExampleContent = {setExampleContent}
								activeSlideId = {activeSlideId}
								setActiveSlideId = {(id, slideId) => setActiveCardSlider(id, slideId)}
						/>
				</div>
		);
};

export default Slider;