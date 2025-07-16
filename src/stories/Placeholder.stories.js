import {Placeholder} from "../components/Placeholder"
import "./Placeholder.scss"

export default {
    title: 'Placeholder', 
    component: Placeholder,
    argTypes: {}
};

const Template = (args) => {
    return (
        <div className="rootContainer">
            <Placeholder  {...args}/> 
        </div>
    )
}

export const Default = Template.bind({})
