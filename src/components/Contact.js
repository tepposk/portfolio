import React from 'react';

// import github_logo from "../images/github_logo.png";
import linkedin_logo from "../images/linkedin_logo.png";

function Contact(props) {

    let paragraph = props.paragraphs[0].contact;

    // Workaround to get line breaks working in the text from Firebase
    const updatedParagraph = paragraph.split("rivinvaihto").map((item, key) => {
        return <span key={key}>{item}<br /><br /></span>
    });

    return (
        <div className="content">
            <div>
                <p>
                    {updatedParagraph}
                </p>
                <a href="https://www.linkedin.com/in/tepposaarikoski/" target="_blank" rel="noreferrer">
                    <img src={linkedin_logo} alt="linkedin" className="socialsIcons" />
                </a>
            </div>
        </div>
    );
}

export default Contact;
