import React from "react";
import H3Wrapper from "./H3Wrapper";

function About(props) {

    const content = props.content.replace("resume", "<a href='https://firebasestorage.googleapis.com/v0/b/digitekniikat-lopputyo-fc4e7.appspot.com/o/resume%2Fcv_en_teppo_saarikoski.pdf?alt=media&token=c20e02ea-06ee-4e46-9068-6591b20e2877' target='_blank'>$&<img src='https://firebasestorage.googleapis.com/v0/b/digitekniikat-lopputyo-fc4e7.appspot.com/o/icons%2Fexternal_icon.svg?alt=media&token=d9ecf3b9-cb14-4ec6-9d36-378d0d4f5dcb' id='externalIcon' alt='' /></a>").split("¤");

    return (
        <div className="sectionWrapper">
            <H3Wrapper header={props.header} />
            <div className="content">
                <div className="sectionContent">{
                    content.map((paragraph, key) => {
                        return (
                            <p className="contentParagraph" key={key}>
                                <span dangerouslySetInnerHTML={{__html: paragraph}} />
                            </p>
                        )
                    })
                }</div>
            </div>
        </div>
    )
};

export default About;