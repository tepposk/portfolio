import React, { useState } from "react";
import H3Wrapper from "./H3Wrapper";

import ProjectContainer from "./ProjectContainer";

function Projects(props) {

    const content = props.content.split("¤");

    return (
        <div className="sectionWrapper">
            <H3Wrapper header={props.header} />
            <div className="content">
                <p className="sectionContent">{content}</p>
                <div id="projectsList">
                    {
                        props.projects.map(project => {
                            if (!project.hidden) { // Hides projects marked in Firebase as hidden
                                return (
                                    <div key={project.id}>
                                        <ProjectContainer
                                            id={project.id}
                                            hidden={project.hidden}
                                            thumbnail={project.thumbnail}
                                            caption={project.caption}
                                            paragraph={project.paragraph}
                                            tags={project.tags}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>

            </div>
        </div>
    )
};

export default Projects;