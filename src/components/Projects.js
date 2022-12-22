import React from "react";
import { Link } from "react-router-dom";
function Projects(props) {

    return (
        <div className="content">
            <div id="projectsList">
                {
                    props.projects.map(project => {
                        return (
                            <div key={project.id}>
                                <div className="projectWrapper">
                                    <Link to={"" + project.id}>
                                        <input type="image" src={project.thumbnail} alt="" className="projectThumbnail" />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div id="projectsParagraph">
                So, you’ve made it this far! I’m glad. Here are some of my past projects I’m the proudest of. You can click on an image if you’d like to know more about a specific project.
            </div>
        </div>
    )
};

export default Projects;