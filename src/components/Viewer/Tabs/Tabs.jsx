import { useRef, useEffect, useState, useCallback } from "react";
import "./Tabs.scss";
import PropTypes from 'prop-types';

import {Tab} from "./Tab/Tab"


/**
 * Renders the tab component.
 * 
 * @return {JSX}
 */
export const Tabs = ({files}) => {

    const [activeTab, setActiveTab] = useState();
    const [tabsList, setTabsList] = useState([]);

    // Select a tab
    const selectTab = (e, file) => {
        console.log(file);
        setActiveTab(file.path);
    }

    const closeTab = (e, file) => {
        // const currTabsList = [...tabsList];
        // currTabsList.splice(tabsList.indexOf(file), 1);
        // setTabsList(currTabsList);        
    }

    // Set initial tabs from the files prop
    useEffect(() => {
        if (files) {
            setTabsList(files);
        }
    }, [files]);
    
    return (
        <div className="tabsContainer">
            {tabsList.map(function(file) {
                return <Tab file={file} key={file.path} activeTab={activeTab} selectTab={selectTab}/>
            })}
        </div>
    );
}

Tabs.propTypes = {
    files: PropTypes.array
}