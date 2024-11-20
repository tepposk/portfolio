import React, { useState, useEffect } from "react";
import H3Wrapper from "./H3Wrapper";

function Skills(props) {

    let content = props.content;

    let skillGroups = ["design", "dev", "misc"];

    const [designDesc, setDesignDesc] = useState("");
    const [devDesc, setDevDesc] = useState("");
    const [miscDesc, setMiscDesc] = useState("");

    const setDescription = (group, text, id) => {
        let item = document.getElementById(id);
        let groupItems = document.getElementsByClassName(`${group}-item`);

        if (item.classList.contains("skillActive")) {
            item.classList.remove("skillActive");
            if (group === "design") {
                setDesignDesc("");
            } else if (group === "dev") {
                setDevDesc("");
            } else {
                setMiscDesc("");
            }

        } else {
            for (let i = 0; i < groupItems.length; i++) {
                if (groupItems[i].id !== id) {
                    groupItems[i].classList.remove("skillActive");
                }
            }
            if (group === "design") {
                setDesignDesc(text);
            } else if (group === "dev") {
                setDevDesc(text);
            } else {
                setMiscDesc(text);
            }
            item.classList.add("skillActive");
        }


    };

    const PrintDescription = (group) => {
        if (group.group === "design") {
            return (designDesc);
        } else if (group.group === "dev") {
            return (devDesc);
        } else {
            return (miscDesc);
        }
    };

    useEffect(() => { // Intersection Observer for skills level bars animations
        const skills = document.querySelectorAll(".skillWrapper");

        if (!props.loading) {
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        const level = entry.target.querySelector(".skillLevelBar");
                        level.classList.toggle("skill-animation", !entry.isIntersecting);

                        if (entry.isIntersecting) observer.unobserve(entry.target); // Comment to test animations
                    })
                },
                {
                    rootMargin: "0px",
                }
            )
            skills.forEach(skill => {
                observer.observe(skill);
            })
        };

    }, [props.loading]);

    return (
        <div className="sectionWrapper">
            <H3Wrapper header={props.header} />
            <div className="content">
                <div className="sectionContent">
                    {
                        skillGroups.map(group => {
                            return (
                                <div className="skillGroup" key={group}>
                                    <div className="groupTitleWrapper">
                                        <div className="groupTitle">
                                            {group}
                                        </div>
                                    </div>
                                    <div className="skillTitles">
                                        {
                                            props.skills.map(skill => {
                                                if (skill.category === group) {
                                                    let id = group + skill.title;
                                                    return (
                                                        <div className={`${group}-item skillWrapper`} key={skill.title} id={group + skill.title} onClick={() => setDescription(group, skill.description, id)}>
                                                            {skill.title}
                                                            <div className="skillLevelWrapper">
                                                                <div className="skillLevelBar skill-animation" style={{ width: `${skill.level}%` }}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>

                                    <div className="skillDescriptionField">
                                        <PrintDescription group={group} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className="sectionContent">{content}</p>
                <div className="skillIcons sectionContent">
                    {
                        props.skillIcons.map(icon => {
                            return (
                                <div className="skill-icon">
                                <input type="image"
                                    src={icon.icon}
                                    alt={icon.name}
                                />
                                <span className="tooltip">{icon.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Skills;