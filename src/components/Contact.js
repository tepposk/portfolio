import React from 'react';
import H3Wrapper from './H3Wrapper';

import LinkedIn from "../images/linkedin_red.png";
import GitHub from "../images/github_red.png";

function Contact(props) {

    const content = props.content.split("¤");

    return (
        <div className="sectionWrapper">
            <H3Wrapper header={props.header} />
            <div className="content">
                <div className="sectionContent">{
                    content.map((paragraph, key) => {
                        return (
                            <p className="contentParagraph" key={key}>
                                {paragraph}
                            </p>
                        )
                    })
                }
                    <div className="socials">
                        <div className="iconWrapper">
                            <a href="https://www.linkedin.com/in/tepposaarikoski/" target="_blank" rel="noreferrer">
                                <input type="image" src={LinkedIn} id="contactLinkedin" className="contactIcon" alt="linkedin" />
                            </a>
                        </div>
                        <div className="iconWrapper">
                            <a href="https://github.com/tepposk/" target="_blank" rel="noreferrer">
                                <input type="image" src={GitHub} id="contactGithub" className="contactIcon" alt="github" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contact;
