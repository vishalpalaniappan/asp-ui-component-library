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
export const Viewer = ({systemTree}) => {

    const [files, setFiles] = useState();
    const [fileContent, setFileContent] = useState();
    const [editorContent, setEditorContent] = useState();

    // Parse system tree into list with necessary information for tabs component
    useEffect(() => {
        const files = [];
        const content = {};

        // Flatten system tree and assign key to each file in the program.
        for (const program in systemTree) {
            for (const filePath in systemTree[program]) {
                const file = systemTree[program][filePath];
                const key = program + "_" + filePath;
                const info = {
                    program: program,
                    key: key,
                    fileName: filePath.split("/").slice(-1),
                    path: filePath
                }
                content[key] = file.source
                files.push(info);
            }
        }

        if (files.length == 0) {
            setEditorContent("Select file using file navigator or drop down on top right.");
            setFileContent({});
            setFiles([]);
        } else {
            setFileContent(content);
            setFiles(files);
        }

    }, [systemTree])


    const selectFile = (fileKey) => {
        if (fileKey) {
            setEditorContent(fileContent[fileKey]);
        } else {
            setEditorContent("Select file using drop down on top right.");
        }
    }
    
    return (
        <div className="viewerContainer d-flex flex-column">

            <div className="tabsGutter">
                <Tabs files={files} selectFile={selectFile} systemTree={systemTree}/>
            </div>

            <div className="d-flex flex-grow-1">
                <MonacoInstance editorContent={editorContent}/>
            </div>

        </div>
    );
}

Viewer.propTypes = {
    systemTree: PropTypes.object
}