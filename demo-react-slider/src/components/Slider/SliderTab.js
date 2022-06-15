import React from 'react';
import { Button } from '../Button/Button';
import { SliderTabContent } from './SliderTabContent';
import { SliderTabFooter } from './SliderTabFooter';
import SliderCard from './SliderCard';

const SliderTab = (props) => {
	return (
		<div className={props.className ?? "slider__tab"}>
			<SliderTabContent className="slider__tab-content">
				{props.content.map((cardInfo, i) => (
					<SliderCard
						key={i}
						image={cardInfo?.image}
						title={cardInfo?.title}
						titleStyle={{fontSize: "16px"}}
						content={cardInfo?.content}
						contentStyle={{fontSize: "12px"}}
						action={cardInfo?.action}
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