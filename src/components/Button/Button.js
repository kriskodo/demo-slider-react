import React from 'react';
import "./Button.css";

export const Button = (props) => {
    const changeBackground = (e, color) => {
      e.target.style.background = color;
    }
		return (
				<>
								<button
										className = {props.className + " button"}
										onClick = {props.action}
										style={{...props.style, backgroundColor: props.backgroundColor}}
										onMouseEnter={(e) => changeBackground(e, props.accentColor)}
										onMouseLeave={(e) => changeBackground(e, props.backgroundColor)}
								>
										{props?.numberText && (
												<div className="button__numberText">{props.numberText}</div>
										)}
										{props.text}
								</button>
				</>
		);
};
