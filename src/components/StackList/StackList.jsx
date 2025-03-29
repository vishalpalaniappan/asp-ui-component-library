import "./StackList.scss";
import PropTypes from 'prop-types';


const TraceNode = ({functionName, fileName, lineNumber}) => {

    return (
        <div className="stackRow">
            <div className="left">
                <span className="functionName">{functionName}</span>
            </div>
            <div className="right">
                <span className="fileName">{fileName}</span>
                <span className="lineNumber">{lineNumber}:1</span>
            </div>
        </div>
    )
}

export const StackList = ({traces}) => {

    const generateStackList = () => {
        const traceList = traces.map(trace => 
            <TraceNode 
                functionName={trace.functionName}
                fileName={trace.fileName}
                lineNumber={trace.lineNumber}             
            />
        );
        return traceList;
    }
    
    return (
        <div className="stackContainer">
            {generateStackList()}
        </div>
    );
}

StackList.propTypes = {
    traces: PropTypes.array
}