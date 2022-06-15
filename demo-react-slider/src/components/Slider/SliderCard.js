import React from 'react';
import "./Slider.css";
import { Button } from '../Button/Button';

const SliderCard = (props) => {
	return (
		<div className="slider__card">
			{props?.image && (
				<div className="slider__card-img">
					<img src={props?.image} alt="image" />
				</div>
			)}

			{props?.title && (
				<div className="slider__card-title" style={props.titleStyle}>
					{props.title}
				</div>
			)}

			{props?.content && (
				<div className="slider__card-content" style={props.contentStyle}>
					{props.content}
				</div>
			)}

			{props?.action && (
				<div className="slider__card-action">
				{props.action?.map((button, i) => (
					<Button
						key={i}
						text={button.text}
					/>
				))}
			</div>
			)}
		</div>
	);
};

export default SliderCard;