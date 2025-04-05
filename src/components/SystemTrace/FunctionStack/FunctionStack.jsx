import { useEffect, useState, useRef } from "react";
import "./FunctionStack.scss";
import PropTypes from 'prop-types';
import { traverse } from "@babel/core";

/**
 * Renders the function stack component.
 * 
 * @return {JSX}
 */
export const FunctionStack = ({trace, min, max}) => {

    console.log(trace, min, max);

    const [graphStyle, setGraphStyle] = useState({
        height: "100%",
        background: "#2b91af"
    })


    useEffect(() => {
        let percentage = (trace.level-min+ 1)/(max-min + 1);
        percentage = Math.floor(percentage * 100);
        console.log(percentage);
        const newStyle = {
            ...graphStyle,
            width: percentage + "%"
        }
        setGraphStyle(newStyle)
    }, []);

    return (
        <div className="traceLine d-flex flex-row">
            <div className="funcName">{trace.name}</div>
            <div className="d-flex flex-grow-1 traceGraph">

                <div style={graphStyle}></div>
            </div>
        </div>
    );
}

FunctionStack.propTypes = {
    program: PropTypes.object,
    min: PropTypes.number,
    max: PropTypes.number
}