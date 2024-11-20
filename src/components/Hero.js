import React, { useState, useEffect } from "react";

/* import Typewriter from "./Typewriter.js"; */

import Teppo from "../images/hero/teppo_placeholder.png";
import Square1 from "../images/hero/blue_square.svg";
import Square2 from "../images/hero/red_square.svg"
import ReloadIcon from "../images/hero/reload_icon.svg"

function Hero(props) {

    const animateElements = props.animateElements;

    const devIcon1 = "</>";
    const devIcon2 = "}";

    const [greeting, setGreeting] = useState(props.content.greeting);
    const info = props.content.info;

    const whatDo = props.content.whatdo.split("¤");

    const PrintH1 = () => {
        return (
            <span>
                <span>{whatDo[0]}</span>
                <a href="#skills">
                    <span className="highlight">{whatDo[1]}</span>
                </a>
                <span>{whatDo[2]}</span>
                <a href="#skills">
                    <span className="highlight">{whatDo[3]}</span>
                </a>
                <span>{whatDo[4]}</span>
                <a href="#skills">
                    <span className="highlight">{whatDo[5]}</span>
                </a>
                <span>{whatDo[6]}</span>
            </span>
        )
    };

    const replayAnimation = () => {
        setGreeting("");
        for (let i = 0; i < animateElements.length; i++) {
            animateElements[i].classList.add("no-transition");
            animateElements[i].classList.add(`${animateElements[i].id}-hide`);
        }
        setTimeout(() => {
            setGreeting(greeting);
            props.startAnimation();
        }, 500);
    };

    const Typewriter = ({ text, delay }) => { // Hero header write-in effect

        const [currentText, setCurrentText] = useState("");
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    if (text[currentIndex] == ",") { // Pauses with the comma
                        setCurrentText(prevText => prevText + text[currentIndex]);
                        setTimeout(() => {
                            setCurrentIndex(prevIndex => prevIndex + 1);
                        }, (delay * 5));
                    } else {
                        setCurrentText(prevText => prevText + text[currentIndex]);
                        setCurrentIndex(prevIndex => prevIndex + 1);
                    }
                }, delay);

                return () => clearTimeout(timeout);
            }
        }, [currentIndex, delay, text]);

        return (
            <span>{currentText}</span>
        );
    };

    return (
        <div id="heroWrapper">
            <div id="heroContent">
                <input type="image" id="reloadIcon" src={ReloadIcon} className="reloadIcon animate" alt="" onClick={() => replayAnimation()} />
                <div id="heroTextArea">
                    <h2><Typewriter text={greeting} delay={80} /></h2>
                    <div id="narrowerMargin">
                        {/* <h1 id="h1" className="h1 animate">blaablaablaa</h1> */}
                        <h1 id="h1" className="h1 animate"><PrintH1 /></h1>
                        <div id="buttonArea" className="buttonArea animate">
                            <p id="heroParagraph" className="heroParagraph animate">{info}</p>
                            <a href="#about">
                                <button id="heroButton" className="heroButton">Learn more!</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="imagesContainer">
                    <input type="image" id="teppo" src={Teppo} className="teppo heroImagery animate delayed" alt="Teppo" draggable="false" />
                    <span id="devIcon1" className="devIcon1 heroImagery animate">{devIcon1}</span>
                    <span id="devIcon2" className="devIcon2 heroImagery animate">{devIcon2}</span>
                    <input type="image" id="square1" src={Square1} className="square1 heroImagery animate" alt="" />
                    <input type="image" id="square2" src={Square2} className="square2 heroImagery animate" alt="" />
                </div>
                <div id="heroBackground" className="heroBackground animate"></div>
            </div>
        </div>
    )
};

export default Hero;