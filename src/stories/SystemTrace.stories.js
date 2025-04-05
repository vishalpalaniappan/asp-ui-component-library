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
        <div className="systemTraceContainer">
            <div class="rootContainer">
                <div class="stackContainer">
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