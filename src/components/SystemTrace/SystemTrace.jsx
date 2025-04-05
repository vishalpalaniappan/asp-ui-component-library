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
    const [traceItems, setTraceItems] = useState(<></>);
    const [traceKeys, setTraceKeys] = useState([]);

    const setTraceEvents = (events) => {
        const traceList = [];
        for (const program of events) {
            traceList.push(
                <ProgramStack program={program} />
            )
        }
        setTraceItems(traceList);
    }

    const onSelectTrace = (e) => {
        setTraceEvents(traceEvents[e.target.value])
    }

    useEffect(() => {
        const keys = Object.keys(traceEvents);
        setTraceKeys(keys);
        setTraceEvents(traceEvents[keys[0]]);
    }, [traceEvents]);


    const getTraceKeys = () => {
        if (traceKeys) {
            const keys = [];
            traceKeys.forEach((key, index) => {
                keys.push(
                    <option id={key}>{key}</option>
                );
            });
            return keys;
        }
    }

    return (
        <div className="traceContainer">
            <div className="traceSelectContainer">
                <label for="trace-select">Select Trace</label>
                <select id="trace-select" className="traceSelector flex-grow-1" onChange={onSelectTrace}>
                    {getTraceKeys()}
                </select>
            </div>
            <div className="traceItems">
                {traceItems}
            </div>
        </div>
    );
}

SystemTrace.propTypes = {
    traceEvents: PropTypes.object
}