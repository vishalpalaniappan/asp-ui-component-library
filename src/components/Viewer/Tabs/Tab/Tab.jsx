import { useRef, useEffect, useState, useCallback } from "react";
import "./Tab.scss";
import PropTypes from 'prop-types';


/**
 * Renders the tab component.
 * 
 * @return {JSX}
 */
export const Tab = ({file, activeTab, selectTab}) => {
    
    return (
        <div onClick={(e) => selectTab(e, file)}
            className="tab"
            style={{backgroundColor: (activeTab == file.path)?'red':'green'}}
            index={file.path}
            key={file.path}>
            {file.fileName}
        </div>
    );
}

Tab.propTypes = {
    file: PropTypes.array,
    isActive: PropTypes.string,
    selectTab: PropTypes.func
}