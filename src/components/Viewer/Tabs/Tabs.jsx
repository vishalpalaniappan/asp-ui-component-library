import { useEffect, useState } from "react";
import "./Tabs.scss";
import PropTypes from 'prop-types';

import {Tab} from "./Tab/Tab"


/**
 * Renders the tabs component.
 * 
 * @return {JSX}
 */
export const Tabs = ({files}) => {

    const [activeTab, setActiveTab] = useState();
    const [tabsList, setTabsList] = useState([]);

    const selectTab = (e, file) => {
        setActiveTab(file.path);
    }

    const closeTab = (e, file) => {
        const currTabsList = [...tabsList];
        currTabsList.splice(tabsList.indexOf(file), 1);
        setTabsList(currTabsList);     
    }

    useEffect(() => {
        if (files) {    
            setTabsList(files);
        }
    }, [files]);
    
    return (
        <div className="tabsContainer">
            {tabsList.map(function(file) {
                return <Tab 
                    file={file} 
                    key={file.path} 
                    activeTab={activeTab} 
                    selectTab={selectTab}
                    closeTab={closeTab}
                />
            })}
        </div>
    );
}

Tabs.propTypes = {
    files: PropTypes.array
}