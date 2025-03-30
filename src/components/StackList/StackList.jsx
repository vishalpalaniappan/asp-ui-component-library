import { P } from "storybook/internal/components";
import "./StackList.scss";
import PropTypes from 'prop-types';


const TraceNode = ({index, functionName, fileName, lineNumber, selected, selectTraceItem}) => {

    let style = {}
    if (selected && index == 0) {
        style= {backgroundColor:"#4b4b18"};
    } else if (selected) {
        style= {backgroundColor:"#184b2d"};
    }


    return (
        <div className="stackRow" style={style} onClick={(e) => selectTraceItem(e, index)}>
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

TraceNode.propTypes = {
    index: PropTypes.number,
    functionName: PropTypes.string,
    fileName: PropTypes.string,
    lineNumber: PropTypes.number,
    selected: PropTypes.bool,
    onSelectStackPos: PropTypes.func,
}

export const StackList = ({traces, selectTraceItem}) => {

    const generateStackList = () => {
        const traceList = traces.map((trace, index) => {
            return <TraceNode 
                key={`${trace.fileName}-${trace.lineNumber}-${trace.functionName}`}
                functionName={trace.functionName}
                fileName={trace.fileName}
                lineNumber={trace.lineNumber}     
                selected={trace.selected}
                index={index}    
                selectTraceItem={selectTraceItem}
            />
        }
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