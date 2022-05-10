import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const StyledSlider = styled.div`
    height: ${metrics.baseUnit * 4}px;
    display: flex;
    align-items: center;
    margin-bottom: ${metrics.baseUnit * 2}px;
    input {
        height: ${metrics.baseUnit / 2}px;
        appearance: none;
        width: 100%;
        border-radius: ${metrics.globalBorderRadius}px;
        background: ${(props) => props.theme.inactive};
        outline: none;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        &::-webkit-slider-thumb {
            appearance: none;
            width: ${metrics.baseUnit * 3}px;
            height: ${metrics.baseUnit * 3}px;
            border-radius: ${metrics.baseUnit * 3}px;
            background: #4caf50;
            cursor: pointer;
        }
    }
`;

const Slider = (props) => {
    return (
        <StyledSlider>
            <input
                onChange={props.onChange}
                type="range"
                min="1"
                max="3"
                step="0.05"
                class="slider"
                id="myRange"
                value={props.value}
            />
        </StyledSlider>
    );
};

export default Slider;
