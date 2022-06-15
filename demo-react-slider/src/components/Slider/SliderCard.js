import React from 'react';
import "./Slider.css";
import { Button } from '../Button/Button';

const SliderCard = (props) => {
		return (
				<div
						className = "slider__card"
						style = {props.style}
				>
						{props?.image && (
								<div className = "slider__card-img">
										<img
												src = {props?.image}
												alt = "slider-card-img"
												style = {{
														borderBottomLeftRadius: props?.title ? "30px" : "0",
												}}
										/>
								</div>
						)}
						
						{props?.title && (
								<div
										className = "slider__card-title"
										style = {props.titleStyle}
								>
										{props.title}
								</div>
						)}
						
						{props?.content && (
								<div
										className = "slider__card-content"
										style = {props.contentStyle}
								>
										{props.content}
								</div>
						)}
						
						{props?.action && (
								<div className = "slider__card-action">
										{props.action?.map((button, i) => (
												<Button
														key = {i}
														text = {button.text}
														backgroundColor = "#59F0BD"
												/>
										))}
								</div>
						)}
				</div>
		);
};

export default SliderCard;