import React from 'react';
import { Button } from '../Button/Button';

const SliderCard = (props) => {
	const shouldFlexRow = props?.isMainCard && props?.content && props?.image;

	return (
		<div
			className="slider__card"
			style={{ ...props.style, flexDirection: shouldFlexRow ? "row-reverse" : "column" }}
		>
			{props?.image && (
				<div
					className="slider__card-img"
					style={shouldFlexRow ? { width: "50%" } : { width: "100%" }}
				>
					<img
						src={props?.image}
						alt="slider-card-img"
						style={{
							borderBottomLeftRadius: props?.title ? "30px" : "0",
						}}
					/>
				</div>
			)}
			<div style={shouldFlexRow ? { width: "50%" } : { width: "100%" }}>
				{props?.title && (
					<div
						className="slider__card-title"
						style={props.titleStyle}
					>
						{props.title}
					</div>
				)}

				{props?.content && (
					<div
						className="slider__card-content"
						style={props.contentStyle}
					>
						{props.content}
					</div>
				)}

				{props?.actions?.length > 0 && (
					<div className="slider__card-action">
						{props.actions.map((button, i) => (
							<Button
								key={i}
								text={button.text}
								backgroundColor={props.buttonBackgroundColor}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default SliderCard;