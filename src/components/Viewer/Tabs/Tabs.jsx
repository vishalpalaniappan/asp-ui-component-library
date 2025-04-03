import React, { useEffect, useState } from "react";
import "./Tabs.scss";
import PropTypes from 'prop-types';

import { ChevronDown } from "react-bootstrap-icons";

import {Tab} from "./Tab/Tab"

import 'bootstrap/dist/css/bootstrap.css';

import Dropdown from 'react-bootstrap/Dropdown';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const SelectFileToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
));

/**
 * Renders the tabs component.
 * 
 * @return {JSX}
 */
export const Tabs = ({files, selectFile, systemTree}) => {

    const [activeTab, setActiveTab] = useState(null);
    const [tabsList, setTabsList] = useState([]);

    // Select the tab
    const selectTab = (e, file) => {
        setActiveTab(file.key);
        selectFile(file.key)
    }

    // Add a tab
    const addTab = (key) => {
        // setActiveTab(file.key);
        // selectFile(file.key)
        const currTabsList = [...tabsList];

        let hasKey;
        currTabsList.forEach((tab, index) => {
            if (currTabsList[index].key == key) {
                hasKey = true;
            }
        });

        if (!hasKey) {
            files.forEach((file, index) => {
                if (file.key == key) {
                    currTabsList.push(file);
                    setActiveTab(file.key);
                    selectFile(file.key);
                    setTabsList(currTabsList);
                }
            });
        } else {
            setActiveTab(key);
            selectFile(key);
        }
    }

    const closeTab = (e, file) => {
        e.stopPropagation();

        // Get index of file in tabs list
        const index = tabsList.indexOf(file);

        // Remove the closed tab
        const currTabsList = [...tabsList];
        currTabsList.splice(index, 1);
        setTabsList(currTabsList);

        // Select new tab
        if (currTabsList.length == 0) {
            selectFile(null);
            setActiveTab(null);
        } else {
            const newIndex = (index >= currTabsList.length)?currTabsList.length:index;
            setActiveTab(currTabsList[newIndex].key);
            selectFile(currTabsList[newIndex].key);
        }
    }

    const generateDropdown = () => {
        const items = [];

        for (const program in systemTree) {
            items.push(<Dropdown.Header>{program}</Dropdown.Header>);
            for (const fileName in systemTree[program]) {
                const key = program + "_" + fileName;
                items.push(
                    <Dropdown.Item key={key} onClick={() => addTab(key)}>{fileName}</Dropdown.Item>
                );
            }
            items.push(<Dropdown.Divider />);
        }

        return items;
    }

    useEffect(() => {
        if (files) {    
            setTabsList(files);
            setActiveTab(files[0].key);
            selectFile(files[0].key)
        }
    }, [files]);
    
    return (

        <div className="tabsGutter">

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

            <div className="tabsDropdown">
                {
                    (files && files.length > 0) &&
                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle as={SelectFileToggle} id="dropdown-custom-components">
                            <ChevronDown style={{color:"white"}}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {generateDropdown()}
                        </Dropdown.Menu>
                    </Dropdown>
                }
            </div>
        </div>
    );
}

Tabs.propTypes = {
    files: PropTypes.array,
    selectFile: PropTypes.func
}