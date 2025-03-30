import "./StackList.scss";
import PropTypes from 'prop-types';


const TraceNode = ({index, functionName, fileName, lineNumber, onSelectStackPos}) => {

    return (
        <div className="stackRow" onClick={onSelectStackPos}>
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

export const StackList = ({traces, onSelectStackPos}) => {

    const generateStackList = () => {
        const traceList = traces.map((trace, index) => 
            <TraceNode 
                key={`${trace.fileName}-${trace.lineNumber}-${trace.functionName}`}
                functionName={trace.functionName}
                fileName={trace.fileName}
                lineNumber={trace.lineNumber}     
                index={index}    
                onSelectStackPos={onSelectStackPos}
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
    traces: PropTypes.array,
    selectTraceItem: PropTypes.func,
}