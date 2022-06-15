import React from 'react';
import "./Container.css";

const Container = (props) => {
		return (
				<div className={`container ${props.className ? props.className : ''}`}>
						<div className="container__header">
								{props.title}
						</div>
						{props.children}
				</div>
		);
};

export default Container;