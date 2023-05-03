import React from "react";

function About(props) {

    let paragraph = props.paragraphs[0].about;

    // Workaround to get line breaks working in the text from Firebase
    const updatedParagraph = paragraph.split("rivinvaihto").map((item, key) => {
        return <span key={key}>{item}<br /><br /></span>
    });

    return (
        <div className="content" id="about">
            {updatedParagraph}
        </div>
    )
};

export default About;