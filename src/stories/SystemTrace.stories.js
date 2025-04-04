import { useEffect } from "react";
import { SystemTrace } from "../components/SystemTrace";
import { useArgs } from "@storybook/preview-api";
import { action } from "@storybook/addon-actions";

import "./SystemTrace.stories.scss"

export default {
    title: 'SystemTrace', 
    component: SystemTrace,
    argTypes: {}
};

const Template = (args) => {
    return (
        <SystemTrace {...args} />
    )
}

export const Default = Template.bind({})

Default.args = {
}