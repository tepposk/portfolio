import React, { useState } from "react";

import Arrow from "../images/arrow.svg";

function ProjectContainer(project) {

    const [toggleDetails, setToggleDetails] = useState(false);
    const content = project.paragraph.split("¤");

    return (
        <div className="projectIntersectionArea">
            <div className="projectWrapper">
                <div className="thumbnailWrapper" key={project.id} style={{
                    border: toggleDetails ? "10px solid #fbfbfb" : "10px solid #f0f0f0"
                }}>
                    <input type="image"
                        className="projectThumbnail"
                        src={project.thumbnail}
                        alt={project.caption}
                        onClick={() => { setToggleDetails(!toggleDetails) }}
                        style={{ transform: toggleDetails ? "scale(1)" : "" }}
                    />
                </div>
                <div className="projectTextWrapper" style={toggleDetails ? { transform: "translateY(0%)", height: "100%", userSelect: "auto", } : {}}>

                    <h4 className="projectTitle" style={{ opacity: toggleDetails ? "1" : "" }}>{project.caption}</h4>
                    <section className="projectDescription">
                        {content.map((paragraph, key) => {
                            return (
                                <p className="contentParagraph" key={key}>
                                    <span dangerouslySetInnerHTML={{ __html: paragraph }} />
                                </p>
                            )
                        })}

                    </section>
                    <div className="hideDescriptionBtn" onClick={() => { setToggleDetails(!toggleDetails) }}>
                        <input type="image" className="arrowIcon" src={Arrow} alt="" style={{ transform: toggleDetails ? "rotateZ(0deg) " : "" }} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectContainer;