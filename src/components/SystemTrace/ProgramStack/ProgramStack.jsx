import { useEffect, useState, useRef } from "react";
import "./ProgramStack.scss";
import PropTypes from 'prop-types';
import { traverse } from "@babel/core";
import Table from 'react-bootstrap/Table';
import { FunctionStack } from "../FunctionStack/FunctionStack";

import { ChevronRight, ChevronDown, Dash } from "react-bootstrap-icons";

/**
 * Renders the system trace component.
 * 
 * @return {JSX}
 */
export const ProgramStack = ({program}) => {

    const [trace, setTrace] = useState();
    const [programList, setProgramList] = useState(<></>);
    const [programName, setProgramName] = useState();

    const maxStack = useRef(0);
    const minStack = useRef(0);


    const getProgramNameFromPath = (path) => {
        const fileName = path.split("/").pop();
        const programName = fileName.split('.').shift()
        setProgramName(programName);
    }

    const toggleCollapse = (e, index) => {
        console.log(trace, index);
        const traceCopy = [...trace];
        traceCopy[index]["isCollapsed"] = !traceCopy[index]["isCollapsed"];
        setTrace(traceCopy);
    }

    const getChevron = (isCollapsable, trace, index) => {
        if (isCollapsable) {
            if (trace["isCollapsed"]) {
                return <ChevronRight onClick={(e) => toggleCollapse(e, index)}/>
            } else {
                return <ChevronDown onClick={(e) => toggleCollapse(e, index)}/>   
            }
        } else {
            return <Dash />
        }
    }

    const processProgram = (traces) => {
        minStack.current = Math.min(...traces.map(o => o.level));
        maxStack.current = Math.max(...traces.map(o => o.level));

        const programDiv = [];
        let i = 0;
        do {
            const trace = traces[i];

            // Determine if the current trace position can be collapsed
            let isCollapsable;
            if (i == traces.length - 1) {
                isCollapsable = false;
            } else {
                isCollapsable = (traces.length == 1)? false:traces[i].level < traces[i+1].level;
            }
                    
            // Push the current trace level
            programDiv.push(
                <tr >
                    <td style={{width:"10px"}}>
                        {getChevron(isCollapsable, trace, i)}
                    </td>
                    <td style={{width:"100px"}}>{trace.name}</td>
                    <td style={{textAlign:"center"}}>
                        <FunctionStack 
                            trace={trace} 
                            min={minStack.current}
                            max={maxStack.current}
                        />
                    </td>
                </tr>
                
            )
            
            // If its collapsed, increment the index until a lower level is reached.
            const startLevel = traces[i].level.valueOf();
            i++;
            if (trace["isCollapsed"] ) {       
                while (i < traces.length && startLevel < traces[i].level) {
                    console.log(i)                 
                    i++;
                }
            }            
        } while ( i < traces.length);
        
        setProgramList(programDiv);
    }

    useEffect(() => {
        if (trace) {
            processProgram(trace)            
        }
    }, [trace]);

    useEffect(() => {
        if (program) {
            setTrace(program.trace);
            getProgramNameFromPath(program.fileName);
        }
    }, [program]);

    return (
        <div className="programContainer">
            <div className="programNameContainer">
                {programName}
            </div>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th style={{width:"10px"}}></th>
                            <th style={{width:"100px"}}>Function</th>
                            <th>Stack Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {programList}
                    </tbody>

                </Table>
            </div>
        </div>
    );
}

ProgramStack.propTypes = {
    program: PropTypes.object
}