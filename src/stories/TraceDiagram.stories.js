import { TraceDiagram } from "../components/TraceDiagram";
import "./TraceDiagram.stories.scss"

import systemtrace from "./data/systemtrace.json";

export default {
    title: 'TraceDiagram', 
    component: TraceDiagram,
    argTypes: {
        traces: {
            type: 'array'
        }
    }
};

const Template = (args) => {

    return (
        <div className="rootTraceContainer">
            <TraceDiagram  {...args}/> 
        </div>
    )
}


export const Default = Template.bind({})

Default.args = {
    traces: [systemtrace]
}