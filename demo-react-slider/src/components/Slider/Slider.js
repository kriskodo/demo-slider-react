import React, { useState } from 'react';
import "./Slider.css";
import SliderCard from "./SliderCard";
import { Button } from "../Button/Button";

const Slider = (
	{
		sliderContentData,
		sliderFooterActionButtons,
		wrapperContentStyles,
		actionsStyles,
		sliderCardSizesConfig = Array(sliderContentData?.length).fill(100),
		sliderStyles = {
			sliderCardTitleFontSize: "28",
			sliderCardContentFontSize: "18",
			primaryBackgroundColor: "#26232B",
			secondaryBackgroundColor: "#56545A",
			primaryButtonColor: "#25222A",
			secondaryButtonColor: "#59F0BD",
			accentButtonColor:"#722FDE",
		}
	}) => {
	const [content, setContent] = useState([...sliderContentData ?? []]);
	const [activeCardIdx, setActiveCardId] = useState(1);

	const middleCard = Math.floor(sliderContentData?.length / 2);
	const cardSizes = sliderCardSizesConfig;
	let counterCurrentCard = 0;

	const setActiveCardSlider = (activeId, slideId) => {
		setActiveCardId(activeId);
		let reordered = [...content];
		const currentCard = reordered.find(c => c.cardId === slideId);
		const currentCardIndex = reordered.findIndex(c => currentCard.cardId === c.cardId);

		reordered[currentCardIndex] = reordered[middleCard];
		reordered[middleCard] = currentCard;

		setContent([...reordered]);
	};

	return (
		<div className="slider">
			<div className="slider__wrapper">
				<div className="slider__wrapper-content" style={{ ...wrapperContentStyles }}>
					{content.map((cardInfo, i) => {
						const isMainCardFlag = i === Math.floor(cardSizes.length / 2);
						return (
							<SliderCard
								key={i}
								image={cardInfo?.image}
								title={cardInfo?.title}
								titleStyle={
									{
										fontSize: isMainCardFlag
											? sliderStyles.sliderCardTitleFontSize + "px"
											: sliderStyles.sliderCardTitleFontSize * 0.6 + "px"
									}
								}
								content={cardInfo?.content}
								contentStyle={
									{
										fontSize: isMainCardFlag
											? sliderStyles.sliderCardContentFontSize + "px"
											: sliderStyles.sliderCardContentFontSize * 0.6 + "px"
									}
								}
								actions={
									isMainCardFlag
										? cardInfo?.actions
										: null
								}
								isMainCard={isMainCardFlag}
								buttonBackgroundColor={sliderStyles.secondaryButtonColor}
								style={
									{
										opacity: isMainCardFlag
											? "1"
											: cardSizes[counterCurrentCard] === cardSizes[1]
												? "0.5"
												: "0.2",
										background: isMainCardFlag
											? sliderStyles.primaryBackgroundColor
											: sliderStyles.secondaryBackgroundColor,
										height: cardSizes[counterCurrentCard++] + "%",
										padding: cardInfo?.image
											? "0"
											: "40px 0",
										display: isMainCardFlag
											? "flex"
											: "",
										flex: isMainCardFlag
											? "2 1 15%"
											: "1",
									}
								}
							/>
						);
					})}
				</div>

				<div className={"slider__wrapper-footer"} style={{ actionsStyles }}>
					{sliderFooterActionButtons.map((button, i) => (
						<Button
							key={i}
							text={button.text}
							style={button.style}
							className={button.className}
							backgroundColor={activeCardIdx === button.relatesToIndex ? sliderStyles.accentButtonColor  : sliderStyles.primaryButtonColor}
							numberText={button.relatesToIndex}
							action={() => setActiveCardSlider(button.relatesToIndex, button.relatesToCardId)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Slider;