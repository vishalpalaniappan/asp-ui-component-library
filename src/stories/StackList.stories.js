import { StackList } from "../components/StackList";
import "./StackList.scss"

export default {
    title: 'StackList', 
    component: StackList,
    argTypes: {
        
    }
};

const Template = (args) => {
    return (
        <div className="rootContainer">
            <div className="stackContainer">
                <StackList {...args} /> 
            </div>
        </div>
    )
}

export const StackTypeA = Template.bind({})

StackTypeA.args = {
    traces: [
        {functionName:"visit_arg", fileName: "helper.py", lineNumber: 3},
        {functionName:"__init__", fileName: "helper.py", lineNumber: 65},
        {functionName:"injectLogTypesA", fileName: "LogInjector.py", lineNumber: 3},
        {functionName:"visit_import", fileName: "LogInjector.py", lineNumber: 3},
        {functionName:"__init__", fileName: "LogInjector.py", lineNumber: 65},
        {functionName:"run", fileName: "ProgramProcessor.py", lineNumber: 3},
        {functionName:"main", fileName: "main.py", lineNumber: 3},
        {functionName:"<module>", fileName: "main.py", lineNumber: 65}
    ],
    onSelectStackPos: () => {
        console.log("Selecting item");
    }
}