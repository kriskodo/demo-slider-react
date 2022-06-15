import React from 'react';
import { Button } from '../Button/Button';
import { SliderTabContent } from './SliderTabContent';
import { SliderTabFooter } from './SliderTabFooter';
import SliderCard from './SliderCard';

const SliderTab = (props) => {
	const cardSizes = [90, 95, 100, 100, 95, 90];
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
						action={cardInfo?.action}
						style={
							{
								background: "red",
								height: cardSizes[counter] + "%",
								width: cardSizes[counter++] + "%",
								padding: cardInfo?.image ? "0" : "40px 0",
							}
						}
					/>
				))}
			</SliderTabContent>

			<SliderTabFooter className="slider__tab-footer">
				<Button text="Hot Takes" />
				<Button text="$Juice Token" />
				<Button text="Smart Chart" />
				<Button text="Wiki" />
				<Button text="Alpha Suite" />
			</SliderTabFooter>
		</div>
	);
};

export default SliderTab;