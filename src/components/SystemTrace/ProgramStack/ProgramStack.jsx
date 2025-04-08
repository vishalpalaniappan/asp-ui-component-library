import { useEffect, useState, useRef } from "react";
import "./ProgramStack.scss";
import PropTypes from 'prop-types';
import { traverse } from "@babel/core";
import Table from 'react-bootstrap/Table';
import { FunctionStack } from "../FunctionStack/FunctionStack";

import { ChevronRight, ChevronDown, Dash } from "react-bootstrap-icons";
import { P } from "storybook/internal/components";

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
            return <Dash style={{opacity:0}}/>
        }
    }

    const processProgram = (traces) => {
        minStack.current = Math.min(...traces.map(o => o.level));
        maxStack.current = Math.max(...traces.map(o => o.level));

        const programDiv = [];
        let i = 0;
        do {
            // Get trace
            const trace = traces[i];

            // Determine if the current trace position can be collapsed.
            let isCollapsable;
            if (i == traces.length - 1) {
                isCollapsable = false;
            } else {
                isCollapsable = (traces.length == 1)? false: traces[i].level < traces[i+1].level;
            }

            const startIndex = i.valueOf();
            
            // If its collapsed, increment the index until a lower level is reached.
            const startLevel = traces[i].level.valueOf();
            if (trace["isCollapsed"]) {       
                do {
                    i++;
                } while(i < traces.length && startLevel < traces[i].level);
            } else {
                i++;
            }
        
            const numOfChildren = i - startIndex - 1;
            // Push the current trace level.
            programDiv.push(
                <tr key={trace.name + String(Math.random().toString(36).substring(2,7))}>
                    <td style={{width:"10px"}}>
                        {getChevron(isCollapsable, trace, startIndex)}
                    </td>
                    {/* <td style={{width:"100px"}}>{trace.name}</td> */}
                    <td style={{textAlign:"center"}}>
                        <FunctionStack 
                            trace={Object.assign({},trace)} 
                            min={minStack.current}
                            max={maxStack.current}
                            numOfChildren={numOfChildren}
                        />
                    </td>
                </tr>                
            )

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
            getProgramNameFromPath(program.logFileName);
        }
    }, [program]);

    return (
        <div className="programContainer">
            <div className="programNameContainer">
                {programName}
            </div>
            <div>
                <Table>
                    {/* <thead>
                        <tr>
                            <th style={{width:"10px"}}></th>
                            <th style={{width:"100px"}}>Function</th> }
                            <th>Stack Level</th>
                        </tr>
                    </thead> */}
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