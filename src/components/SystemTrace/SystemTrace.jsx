import { useEffect, useState } from "react";
import "./SystemTrace.scss";
import PropTypes from 'prop-types';
import { ProgramStack } from "./ProgramStack/ProgramStack";

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
        const events = traceEvents[keys[66]];

        const traceList = [];

        const uniqueId = keys[66];
        for (const program of events) {
            traceList.push(
                <ProgramStack program={program} />
            )
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