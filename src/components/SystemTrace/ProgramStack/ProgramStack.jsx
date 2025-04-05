import { useEffect, useState, useRef } from "react";
import "./ProgramStack.scss";
import PropTypes from 'prop-types';
import { traverse } from "@babel/core";

import { FunctionStack } from "../FunctionStack/FunctionStack";

/**
 * Renders the system trace component.
 * 
 * @return {JSX}
 */
export const ProgramStack = ({program}) => {

    const [programList, setProgramList] = useState(<></>);
    const [programName, setProgramName] = useState();

    const maxStack = useRef(0);
    const minStack = useRef(0);


    const getProgramNameFromPath = (path) => {
        const fileName = path.split("/").pop();
        const programName = fileName.split('.').shift()
        setProgramName(programName);
    }

    const processTrace = (trace) => {
        for (const node in trace) {
            maxStack.current = (maxStack.current < trace.level)?trace.level:maxStack.current;
        }
    }


    const processProgram = (program) => {
        getProgramNameFromPath(program.fileName);

        minStack.current = Math.min(...program.trace.map(o => o.level));
        maxStack.current = Math.max(...program.trace.map(o => o.level));

        const programDiv = [];
        for (const trace of program.trace) {
            const currLevel = trace.level - minStack.current;
            programDiv.push(
                <FunctionStack trace={trace}
                    min={minStack.current}
                    max={maxStack.current} 
                />
            )
        }
        
        setProgramList(programDiv);
    }

    useEffect(() => {
        if (program) {
            processProgram(program);
        }
    }, [program]);

    return (
        <div className="programContainer">
            <div className="programNameContainer">
                {programName}
            </div>
            <div>
                {programList}
            </div>
        </div>
    );
}

ProgramStack.propTypes = {
    program: PropTypes.object
}