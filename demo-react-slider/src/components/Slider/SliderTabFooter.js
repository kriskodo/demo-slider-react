import React from 'react'
import "./Slider.css";

export const SliderTabFooter = (props) => {
    return (
        <div className={props.className ?? "slider__tab-footer"}>
            {props.children}
        </div>
    )
}
