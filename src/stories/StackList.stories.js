import { useCallback, useEffect } from "react";
import { StackList } from "../components/StackList";
import "./StackList.scss"
import { useArgs } from "@storybook/preview-api";
import { fn } from '@storybook/test';

export default {
    title: 'StackList', 
    component: StackList,
    argTypes: {
        traces: [],
        selectTraceItem: fn()
    }
};

const Template = (args) => {

    const [, updateArgs] = useArgs();

    const selectTraceItem = (e, selectedIndex) => {
        const newTraces = [];
        args.traces.forEach((value, index) => {
            value.selected = (selectedIndex == index);
            newTraces.push(value);
        });
        updateArgs({traces : newTraces});
    };

    useEffect(() => {
        updateArgs({selectTraceItem : selectTraceItem});
    }, []);

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
        {functionName:"visit_arg", fileName: "helper.py", lineNumber: 3, selected: true},
        {functionName:"__init__", fileName: "helper.py", lineNumber: 65},
        {functionName:"injectLogTypesA", fileName: "LogInjector.py", lineNumber: 3},
        {functionName:"visit_import", fileName: "LogInjector.py", lineNumber: 3},
        {functionName:"__init__", fileName: "LogInjector.py", lineNumber: 65},
        {functionName:"run", fileName: "ProgramProcessor.py", lineNumber: 3},
        {functionName:"main", fileName: "main.py", lineNumber: 3},
        {functionName:"<module>", fileName: "main.py", lineNumber: 65}
    ]
}