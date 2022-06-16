import React, { useState } from 'react';
import "./Slider.css";
import SliderCard from "./SliderCard";
import { Button } from "../Button/Button";

const Slider = (
		{
				sliderContentData,
				cardSizesConfig = Array(sliderContentData.length).fill(100),
				sliderCardTitleFontSize = "28px",
				sliderCardContentFontSize = "18px",
				primaryBackgroundColor = "#26232B",
				secondaryBackgroundColor = "#56545A",
				primaryButtonColor = "#25222A",
				secondaryButtonColor = "#59F0BD",
				accentButtonColor="#722FDE",
				sliderStyles,
				wrapperStyles,
				wrapperContentStyles,
				actionsStyles,
				buttonStyles,
		}) => {
		const [activeSlideId, setActiveSlideId] = useState(1);
		const [content, setContent] = useState([...sliderContentData]);
		const activeSliderIndex = Math.floor(sliderContentData.length / 2);
		
		const cardSizes = cardSizesConfig ? cardSizesConfig : Array(sliderContentData.length).fill(100, 0);
		let counterCurrentCard = 0;
		
		const setActiveCardSlider = (activeId, slideId) => {
				setActiveSlideId(activeId);
				let reordered = [...content];
				const currentSlide = reordered.find(c => c.sliderId === slideId);
				const currentSlideIndex = reordered.findIndex(c => currentSlide.sliderId === c.sliderId);
				
				reordered[currentSlideIndex] = reordered[activeSliderIndex];
				reordered[activeSliderIndex] = currentSlide;
				
				setContent([...reordered]);
		};
		
		return (
				<div className = "slider" style={{...sliderStyles}}>
						<div className = "slider__wrapper" style={{...wrapperStyles}}>
								<div className = "slider__wrapper-content" style={{...wrapperContentStyles}}>
										{content.map((cardInfo, i) => {
												const isMainCardFlag = i === Math.floor(cardSizes.length / 2);
												return (
														<SliderCard
																key = {i}
																image = {cardInfo?.image}
																title = {cardInfo?.title}
																titleStyle = {{ fontSize: isMainCardFlag ? sliderCardTitleFontSize : sliderCardTitleFontSize * 0.7 }}
																content = {cardInfo?.content}
																contentStyle = {{ fontSize: isMainCardFlag ? sliderCardContentFontSize : sliderCardContentFontSize * 0.7 }}
																actions = {cardInfo?.actions}
																isMainCard = {isMainCardFlag}
																buttonBackgroundColor = {secondaryButtonColor}
																style = {
																		{
																				opacity: isMainCardFlag ? "1" : cardSizes[counterCurrentCard] === cardSizes[1] ? "0.5" : "0.2",
																				background: isMainCardFlag ? primaryBackgroundColor : secondaryBackgroundColor,
																				height: cardSizes[counterCurrentCard++] + "%",
																				padding: cardInfo?.image ? "0" : "40px 0",
																				display: isMainCardFlag ? "flex" : "",
																				flex: isMainCardFlag ? "2 1 15%" : "1",
																		}
																}
														/>
												);
										})}
								</div>
								
								<div className = {"slider__wrapper-footer"} style={{actionsStyles}}>
										<Button
												text = "Hot Takes"
												style = {{buttonStyles}}
												className = "button--black button--big"
												backgroundColor = {activeSlideId === 1 ? accentButtonColor : primaryButtonColor}
												accentColor = {accentButtonColor}
												numberText = "1"
												action = {() => setActiveCardSlider(1, 3)}
										/>
										<Button
												text = "$Juice Token"
												style = {{buttonStyles}}
												className = "button--black button--big"
												backgroundColor = {activeSlideId === 2 ? accentButtonColor : primaryButtonColor}
												accentColor = {accentButtonColor}
												numberText = "2"
												action = {() => setActiveCardSlider(2, 4)}
										/>
										<Button
												text = "Smart Chart"
												style = {{buttonStyles}}
												className = "button--black button--big"
												backgroundColor = {activeSlideId === 3 ? accentButtonColor : primaryButtonColor}
												accentColor = {accentButtonColor}
												numberText = "3"
												action = {() => setActiveCardSlider(3, 5)}
										/>
										<Button
												text = "Alpha Suite"
												style = {{buttonStyles}}
												className = "button--black button--big"
												backgroundColor = {activeSlideId === 5 ? accentButtonColor : primaryButtonColor}
												accentColor = {accentButtonColor}
												numberText = "5"
												action = {() => setActiveCardSlider(5, 1)}
										/>
										<Button
												text = "Wiki"
												className = "button--black button--big"
												backgroundColor = {activeSlideId === 4 ? accentButtonColor : primaryButtonColor}
												accentColor = {accentButtonColor}
												style = {{buttonStyles}}
												numberText = "6"
												action = {() => setActiveCardSlider(4, 2)}
										/>
								</div>
						</div>
				</div>
		);
};

export default Slider;