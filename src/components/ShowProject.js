import React from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ShowProject(props) {

    let { id } = useParams();
    let paragraph = props.projects[id].paragraph;

    // Workaround to get line breaks working in the text from Firebase
    const updatedParagraph = paragraph.split("rivinvaihto").map((item, key) => {
        return <span key={key}>{item}<br/><br/></span>
    });

    return (
        <div className="content">
            <img src={props.projects[id].thumbnail} className="projectImg" alt="" />
            <h2>{props.projects[id].caption}</h2>
            <p>{updatedParagraph}</p>

            <Link to="../projects/">
                <button id="returnBtn">&crarr;</button>
            </Link>
        </div>
    )
};


export default ShowProject;