import React from "react";

import { Link } from "react-router-dom";

function About() {

    return (
        <div className="content" id="about">
            I’m a second year ICT student in Haaga-Helia. On this page I intend to showcase some of my schoolworks and other projects. In addition to my burning passion for information and communication technology and knack for graphic design, I have an interest in football, snooker, video games, etc.<br /><br />What I want you to do is take a look at some of the stuff I’ve made! If you’d like to get in touch, you can do so by heading on down straight to the <Link id="linkToContact" to="../contact">Contact</Link> page.
        </div>
    )
};

export default About;