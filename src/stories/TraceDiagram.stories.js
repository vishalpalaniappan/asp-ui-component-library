import { TraceDiagram } from "../components/TraceDiagram";
import "./TraceDiagram.stories.scss"

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
        <div className="rootContainer">
            <div className="centerContainer">
                <div className="stackContainer">
                    <TraceDiagram  {...args}/> 
                </div>
            </div>
        </div>
    )
}


export const Default = Template.bind({})

Default.args = {
    traces: []
}