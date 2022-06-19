import React, { useRef, useState } from 'react';
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

	const cardSizes = sliderCardSizesConfig;
	let counterCurrentCard = 0;

	// const setActiveCardSlider = (activeId, slideId) => {
		
	// };

	const moveForward = () => {
		content.forEach((card, i, arr) => {
			if(i === Math.floor(arr.length / 2)) {
				card.ref.current.classList.add("slider__card-shrink")
			}
			if(i === Math.floor(arr.length / 2) + 1) {
				card.ref.current.classList.add("slider__card-grow");
			}
			card.ref.current.classList.add("slider__arrow-moving-forward");
		})

		setTimeout(() => {
			content.forEach((card,i,arr) => {
				if(i === Math.floor(arr.length / 2)) {
					card.ref.current.classList.remove("slider__card-shrink")
				}
				if(i === Math.floor(arr.length / 2) + 1) {
					card.ref.current.classList.remove("slider__card-grow");
				}

				card.ref.current.classList.remove("slider__arrow-moving-forward");
			})

			setContent([...content.slice(1), content[0]]);
		}, 150)
	}

	const moveBackwards = () => {
		content.forEach((card, i, arr) => {
			if(i === Math.floor(arr.length / 2)) {
				card.ref.current.classList.add("slider__card-shrink")
			}
			if(i === Math.floor(arr.length / 2) - 1) {
				card.ref.current.classList.add("slider__card-grow");
			}
			card.ref.current.classList.add("slider__arrow-moving-backwards");
		})

		setTimeout(() => {
			content.forEach((card,i,arr) => {
				if(i === Math.floor(arr.length / 2)) {
					card.ref.current.classList.remove("slider__card-shrink")
				}
				if(i === Math.floor(arr.length / 2) - 1) {
					card.ref.current.classList.remove("slider__card-grow");
				}

				card.ref.current.classList.remove("slider__arrow-moving-backwa");
			})

			setContent([content[content.length - 1], ...content.slice(0, content.length - 1)]);
		}, 150)
	}

	return (
		<div className="slider">
			<div className="slider__wrapper">
			<Button className="slider__arrow-back" text={"<"} action={() => moveBackwards()}/>
				<div className="slider__wrapper-content" style={{ ...wrapperContentStyles }}>
					{content.map((cardInfo, i) => {
						const isMainCardFlag = i === Math.floor(cardSizes.length / 2);
						return (
							<SliderCard
								key={i}
								reference={cardInfo.ref}
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
				<Button className="slider__arrow-front" text={">"} action={() => moveForward()}/>

				<div className={"slider__wrapper-footer"} style={{ actionsStyles }}>
					{sliderFooterActionButtons.map((button, i) => (
						<Button
							key={i}
							text={button.text}
							style={button.style}
							className={button.className}
							backgroundColor={activeCardIdx === button.relatesToIndex ? sliderStyles.accentButtonColor  : sliderStyles.primaryButtonColor}
							numberText={button.relatesToIndex}
							// action={() => setActiveCardSlider(button.relatesToIndex, button.relatesToCardId)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Slider;