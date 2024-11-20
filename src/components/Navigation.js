import React, { useState } from "react";
import Logo from "../images/logo.svg";
import LogoWhite from "../images/logo_white.svg";
import LinkedIn from "../images/linkedin_white.png";
import GitHub from "../images/github_white.png";

function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false); // Change for dev tests

    /*     let scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';
        console.log(scrollbarWidth); */

    const toggleMenu = (e) => {
        setMenuOpen(e.target.checked);
        if (!menuOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";
        }
    };

    const closeMenu = (e) => {
        setMenuOpen(false);
        document.body.style.overflowY = "scroll";
        const checkbox = document.getElementById("menu_checkbox");
        checkbox.checked = false;
    };

    const delayMultiplier = 0.04;

    return (
        <div>
            <nav id="topNavi">
                <a href="#">
                    <input type="image" src={Logo} className="logo" alt="logo" />
                </a>
                <ul>
                    <li>
                        <a href="#about" className="navButton">about</a>
                    </li>
                    <li>
                        <a href="#skills" className="navButton">skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="navButton">projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="navButton">contact</a>
                    </li>
                </ul>

                <div id="drawer" className="hideOnSmall" style={{ transform: menuOpen ? "translatex(0%)" : "", }} >
                    <a href="#"><input type="image" src={LogoWhite} className="logo" id="drawerLogo" alt="logo" onClick={closeMenu} style={{ opacity: menuOpen ? "100%" : "", transform: menuOpen ? "translatex(0%)" : "", }} />
                    </a>
                    <ul>
                        <a href="#about">
                            <li className="drawerMenuButton" onClick={closeMenu} style={{ transform: menuOpen ? "translatex(0%)" : "", opacity: menuOpen ? "100%" : "", transitionDelay: `${delayMultiplier * 1}s` }}>about</li>
                        </a>
                        <a href="#skills">
                            <li className="drawerMenuButton" onClick={closeMenu} style={{ transform: menuOpen ? "translatex(0%)" : "", opacity: menuOpen ? "100%" : "", transitionDelay: `${delayMultiplier * 2}s` }}>skills</li>
                        </a>
                        <a href="#projects">
                            <li className="drawerMenuButton" onClick={closeMenu} style={{ transform: menuOpen ? "translatex(0%)" : "", opacity: menuOpen ? "100%" : "", transitionDelay: `${delayMultiplier * 3}s` }}>projects</li>
                        </a>
                        <a href="#contact">
                            <li className="drawerMenuButton" onClick={closeMenu} style={{ transform: menuOpen ? "translatex(0%)" : "", opacity: menuOpen ? "100%" : "", transitionDelay: `${delayMultiplier * 4}s` }}>contact</li>
                        </a>
                    </ul>
                    <div id="someIconsWrapper">
                        <a href="https://www.linkedin.com/in/tepposaarikoski/" target="_blank" rel="noreferrer">
                            <input type="image" src={LinkedIn} alt="linkedin" className="someIcons" style={{ transform: menuOpen ? "translatex(0%)" : "", opacity: menuOpen ? "100%" : "", transitionDelay: `${delayMultiplier * 6}s` }} />
                        </a>
                        <a href="https://github.com/tepposk/" target="_blank" rel="noreferrer">
                            <input type="image" src={GitHub} alt="github" className="someIcons" style={{ transform: menuOpen ? "translatex(0%)" : "", opacity: menuOpen ? "100%" : "", transitionDelay: `${delayMultiplier * 6}s` }} />
                        </a>
                    </div>

                </div>

                <div id="burgerMenu">
                    <input type="checkbox" className="hideOnSmall" id="menu_checkbox" onChange={toggleMenu} defaultChecked={false} />
                    <label htmlFor="menu_checkbox" id="burgerIcon" style={{ position: menuOpen ? "fixed" : "" }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                </div>
            </nav >
        </div >
    )
};

export default Navigation;