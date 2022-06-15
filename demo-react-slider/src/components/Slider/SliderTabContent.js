import React from 'react'
import SliderCard from "./SliderCard";

export const SliderTabContent = (props) => {
    return (
        <div className={props.className ?? "slider__tab-content"}>
            {props.children}
        </div>
    )
}