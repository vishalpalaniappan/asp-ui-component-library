import "./Tab.scss";
import PropTypes from 'prop-types';

import { X } from "react-bootstrap-icons";


/**
 * Renders the tab component.
 * 
 * @return {JSX}
 */
export const Tab = ({file, activeTab, selectTab, closeTab}) => {

    const getTabStyle = () => {
        return {
            backgroundColor: (activeTab == file.key)?'#1e1e1e':'#2d2d2d'
        };
    }

    return (
        <div onClick={(e) => selectTab(e, file)} className="tab" style={getTabStyle()}>
            <div className="fileName">
                {file.fileName}
            </div>
            <div className="close" onClick={(e) => closeTab(e, file)}>
                <X style={{color:"white"}}/>
            </div>
        </div>
    );
}

Tab.propTypes = {
    file: PropTypes.array,
    isActive: PropTypes.string,
    selectTab: PropTypes.func
}