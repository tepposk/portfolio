import React from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ShowProject(props) {

    let { id } = useParams();
    let paragraph = props.projects[id].paragraph.replaceAll("&#13;", "<br /><br />"); // Niinku ehkä huomaa, en keksinyt miten saan ympättyä rivinvaihdot tietokannasta tulevaan tekstiin. :(

    return (
        <div className="content">
            <img src={props.projects[id].thumbnail} className="projectImg" alt="" />
            <h2>{props.projects[id].caption}</h2>
            <p>{paragraph}</p>

            <Link to="../projects/">
                <button id="returnBtn">&crarr;</button>
            </Link>
        </div>
    )
};


export default ShowProject;