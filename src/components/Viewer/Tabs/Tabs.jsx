import { useEffect, useState } from "react";
import "./Tabs.scss";
import PropTypes from 'prop-types';

import { Tab } from "./Tab/Tab";


/**
 * Renders the tab component.
 * 
 * @return {JSX}
 */
export const Tabs = ({files}) => {

    const [tabsList, setTabsList] = useState(<></>)

    const selectTab = (index) => {
        console.log("selecting", index);
        console.log(files[index].content)
    }

    const loadTabs = (files) => {
        const _tabsList = [];

        files.forEach((tab, index) => {
            _tabsList.push(
                <Tab selectTab={selectTab}
                    index={index}
                    key={tab.path}
                    name={tab.fileName} />
            );
        });

        setTabsList(_tabsList);
    }

    useEffect(() => {
        if (files) {
            loadTabs(files);
        }
    }, [files]);
    
    return (
        <div className="tabsContainer">
            {tabsList}
        </div>
    );
}

Tabs.propTypes = {
    files: PropTypes.array
}