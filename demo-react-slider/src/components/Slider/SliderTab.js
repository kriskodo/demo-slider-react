import React from 'react';
import { Button } from '../Button/Button';
import { SliderTabContent } from './SliderTabContent';
import { SliderTabFooter } from './SliderTabFooter';
import SliderCard from './SliderCard';

const SliderTab = (props) => {
	const cardSizes = [85, 90, 100, 90, 85];
	let counter = 0;

	return (
		<div className={props.className ?? "slider__tab"}>
			<SliderTabContent className="slider__tab-content">
				{props.content.map((cardInfo, i) => (
					<SliderCard
						key={i}
						image={cardInfo?.image}
						title={cardInfo?.title}
						titleStyle={{ fontSize: cardSizes[counter] === 100 ? "28px" : "24px" }}
						content={cardInfo?.content}
						contentStyle={{ fontSize: cardSizes[counter] === 100 ? "18px" : "14px" }}
						actions={cardInfo?.actions}
						isMainCard={i === Math.floor(cardSizes.length / 2)}
						style={
							{
								opacity: cardSizes[counter] === 100 ? "1" : cardSizes[counter] === 95 ? "0.4" : "0.2",
								background: cardSizes[counter] === 100 ? "#25222A" : "#56545A",
								height: cardSizes[counter++] + "%",
								padding: cardInfo?.image ? "0" : "40px 0",
								display: i === Math.floor(cardSizes.length / 2) ? "flex" : "",
								flex: i === Math.floor(cardSizes.length / 2) ? "2 1 15%" : "1",
							}
						}
					/>
				))}
			</SliderTabContent>

			<SliderTabFooter className="slider__tab-footer">
				<Button
					text="Hot Takes"
					className="button--black button--big"
					backgroundColor={props.activeSlideId === 1 ? "#722FDE" : "#25222A"}
					numberText="1"
					action={() => props.setActiveSlideId(1, 3)}
				/>
				<Button
					text="$Juice Token"
					className="button--black button--big"
					backgroundColor={props.activeSlideId === 2 ? "#722FDE" : "#25222A"}
					numberText="2"
					action={() => props.setActiveSlideId(2, 4)}
				/>
				<Button
					text="Smart Chart"
					className="button--black button--big"
					backgroundColor={props.activeSlideId === 3 ? "#722FDE" : "#25222A"}
					numberText="3"
					action={() => props.setActiveSlideId(3, 5)}
				/>
				<Button
					text="Alpha Suite"
					className="button--black button--big"
					backgroundColor={props.activeSlideId === 5 ? "#722FDE" : "#25222A"}
					numberText="5"
					action={() => props.setActiveSlideId(5, 1)}
				/>
				<Button
					text="Wiki"
					className="button--black button--big"
					backgroundColor={props.activeSlideId === 4 ? "#722FDE" : "#25222A"}
					numberText="6"
					action={() => props.setActiveSlideId(4, 2)}
				/>
			</SliderTabFooter>
		</div>
	);
};

export default SliderTab;