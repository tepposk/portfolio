import React from "react";
import { Link } from "react-router-dom";
function Projects(props) {

         let paragraph = props.paragraphs[0].projects;

    // Workaround to get line breaks working in the text from Firebase
    const updatedParagraph = paragraph.split("rivinvaihto").map((item, key) => {
        return <span key={key}>{item}<br /><br /></span>
    });

    return (
        <div className="content">
            <div id="projectsList">
                {
                    props.projects.map(project => {
                        if (!project.hidden) { // Hides projects marked in the DB as hidden
                            return (
                                <div key={project.id}>
                                    <div className="projectWrapper">
                                        <Link to={"" + project.id}>
                                            <input type="image" src={project.thumbnail} alt="" className="projectThumbnail" />
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div id="projectsParagraph">
                {updatedParagraph}
            </div>
        </div>
    )
};

export default Projects;