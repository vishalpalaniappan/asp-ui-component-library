import { useEffect } from "react";
import { Viewer } from "../components/Viewer";
import { useArgs } from "@storybook/preview-api";
import { action } from "@storybook/addon-actions";

import "./ViewerStories.scss"

export default {
    title: 'Viewer', 
    component: Viewer,
    argTypes: {}
};

const Template = (args) => {
    return (
        <Viewer {...args} />
    )
}

export const Default = Template.bind({})

Default.args = {
    files: [
        {program:"ProgramA", fileName:"server.py", path:"server.py", main: true, content: "Content of server.py"},
        {program:"ProgramA", fileName:"queryHandler.py", path:"app/queryHandler.py", content: "Content of queryHandler.py"},
        {program:"ProgramA", fileName:"variable.py", path:"app/variable.py", content: "Content of variable.py"},
        {program:"ProgramA", fileName:"logtype.py", path:"app/logtype.py", content: "Content of logtype.py"}
    ]
}