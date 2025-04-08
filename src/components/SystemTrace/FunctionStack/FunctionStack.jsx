import { useEffect, useState, useRef } from "react";
import "./FunctionStack.scss";
import PropTypes from 'prop-types';
import { PlusCircle } from "react-bootstrap-icons";

/**
 * Renders the function stack component.
 * 
 * @return {JSX}
 */
export const FunctionStack = ({trace, min, max, numOfChildren}) => {

    console.log(numOfChildren);

    const [graphStyle, setGraphStyle] = useState({
        height: "100%",
        background: "#143d49"
    })


    useEffect(() => {
        let percentage = (trace.level-min+1)/(max-min+1);
        percentage = Math.floor(percentage * 100);
        const newStyle = {
            ...graphStyle,
            width: percentage + "%"
        }
        setGraphStyle(newStyle)
    }, []);

    return (
        <div className="traceLine d-flex flex-row">
            {/* <div className="overlay">Min:{min-min + 1} Max:{max-min + 1} {trace.level - min + 1}</div> */}
            <div className="overlay">
                <div style={{float:"left"}}>{trace.name}</div>
                {numOfChildren > 0 && 
                    <div style={{float:"right"}}>{numOfChildren}</div>
                }
            </div>
            <div style={graphStyle}></div>
        </div>
    );
}

FunctionStack.propTypes = {
    program: PropTypes.object,
    min: PropTypes.number,
    max: PropTypes.number
}