import React from "react";

function H3Wrapper(props) {

    return (
        <div className="h3Intersection">
            <div className="h3Wrapper">
                <h3>{props.header}</h3>
            </div>
        </div>
    )
};

export default H3Wrapper;