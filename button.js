import React from "react";
import PropTypes from "prop-types";

export const XButton = props => {
    const { className, type, handleClick, label } = props;
    console.log(props);

    const classStr = `btn btn-${props.status} ${className}`;
    console.log(classStr);

    return (
        <button className={classStr} type={type} aria-label={label} onClick={handleClick} {...props}>
            {props.children || props.label}
        </button>
    );
};


XButton.propTypes = {
    type: PropTypes.string,
    status: PropTypes.string,
    label: PropTypes.string
};

XButton.defaultProps = {
    type: "button",
    status: "primary",
    label: "Button",


    handleClick: () => console.log("No action attached.")
};
