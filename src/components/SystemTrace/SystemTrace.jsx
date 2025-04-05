import { useEffect, useState } from "react";
import "./SystemTrace.scss";
import PropTypes from 'prop-types';

/**
 * Renders the system trace component.
 * 
 * @param {Object} traceEvents
 * @return {JSX}
 */
export const SystemTrace = ({traceEvents}) => {

    console.log(traceEvents);

    const [traceItems, setTraceItems] = useState(<></>);

    useEffect(() => {
        const keys = Object.keys(traceEvents);
        const events = traceEvents[keys[0]];

        const traceList = [];

        const uniqueId = keys[0];
        for (const program of events) {
            const fileName = program.fileName.split("/").pop();
            const name = <div className="programName">{fileName}</div>
            traceList.push(name);

            for (const position of program.trace) {
                const name = <div className="stackPosition">{position.name}</div>
                traceList.push(name);
            }
        }

        setTraceItems(traceList);
    }, []);

    return (
        <div className="traceContainer">
            {traceItems}
        </div>
    );
}

SystemTrace.propTypes = {
    traceEvents: PropTypes.object
}