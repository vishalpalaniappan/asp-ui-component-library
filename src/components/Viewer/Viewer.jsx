import "./Viewer.scss";
import PropTypes from 'prop-types';

import { MonacoInstance } from "./MonacoInstance/MonacoInstance";
import { Tabs } from "./Tabs/Tabs";

/**
 * Renders the viewer component with support for tabs.
 * 
 * @return {JSX}
 */
export const Viewer = ({}) => {
    
    return (
        <div className="viewerContainer flex flex-column">

            <div className="tabContainer">
                <Tabs />
            </div>

            <div className="flex flex-grow-1">
                <MonacoInstance />
            </div>

        </div>
    );
}

Viewer.propTypes = {
}