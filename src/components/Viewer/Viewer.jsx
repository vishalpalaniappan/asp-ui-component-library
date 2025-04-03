import "./Viewer.scss";
import PropTypes from 'prop-types';

import { MonacoInstance } from "./MonacoInstance/MonacoInstance";
import { useEffect, useState } from "react";
import { Tabs } from "./Tabs/Tabs";

/**
 * Renders the viewer component with support for tabs.
 * 
 * @return {JSX}
 */
export const Viewer = ({files}) => {
    
    return (
        <div className="viewerContainer d-flex flex-column">

            <div className="tabsGutter">
                <Tabs files={files}/>
            </div>

            <div className="d-flex flex-grow-1">
                <MonacoInstance />
            </div>

        </div>
    );
}

Viewer.propTypes = {
}