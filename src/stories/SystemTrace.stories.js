import { useEffect } from "react";
import { SystemTrace } from "../components/SystemTrace";
import { useArgs } from "@storybook/preview-api";
import { action } from "@storybook/addon-actions";

import traceEvents from "./data/traceEvents.json"

import "./SystemTrace.stories.scss"

export default {
    title: 'SystemTrace', 
    component: SystemTrace,
    argTypes: {}
};

const Template = (args) => {
    return (
        <div className="systemBodyContainer">
            <div class="systemCenterContainer">
                <div class="systemStackContainer">
                    <SystemTrace {...args} />
                </div>
            </div>
        </div>
    )
}

export const Default = Template.bind({})

Default.args = {
    traceEvents: traceEvents
}