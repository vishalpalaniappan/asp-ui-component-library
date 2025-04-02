import "./Tab.scss";
import PropTypes from 'prop-types';

/**
 * Renders the tab component.
 * 
 * @return {JSX}
 */
export const Tab = ({name, selectTab, index}) => {

    const onTabClick = () => {
        selectTab(index);
    }

    return (
        <div onClick={onTabClick} className="tab">{name}</div>   
    )
}

Tab.propTypes = {
    name: PropTypes.string,
    selectTab: PropTypes.func,
    index: PropTypes.number
}