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
        <Viewer />
    )
}

export const Default = Template.bind({})

Default.args = {}