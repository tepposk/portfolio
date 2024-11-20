import React, { useState, useEffect } from "react";

import { onSnapshot, collection } from "firebase/firestore";
import db from "./firebase";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import LoadingIcon from "./images/loading.svg";
import BackToTop from "./images/backtotop.svg";

import Announcement from "./components/Announcement";

function App() {

  /* const projectsRef = collection(db, "projects"); */
  const dbRef = collection(db, "portfolio-site");
  const projectsRef = collection(db, "projects");
  const skillsRef = collection(db, "skills");
  const skillIconsRef = collection(db, "skill-icons");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]); // Site content fetched from Firebase
  const [projects, setProjects] = useState([]); 
  const [skills, setSkills] = useState([]);
  const [skillIcons, setSkillIcons] = useState([]);

  const animateElements = document.getElementsByClassName("animate");

  useEffect(() => { // Initialize data from Firebase
    const unsub = onSnapshot(dbRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });

    const skillsSub = onSnapshot(skillsRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      items.sort((a, b) => (a.title > b.title) ? 1 : -1);
      setSkills(items);
    })

    const skillIconsSub = onSnapshot(skillIconsRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSkillIcons(items);
    })

    const projectsSub = onSnapshot(projectsRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      items.sort((a, b) => (a.id < b.id) ? 1 : -1);
      setProjects(items);
      setLoading(false);
    })

    return () => {
      unsub();
      skillsSub();
      skillIconsSub();
      projectsSub();
    };
  }, []);

  useEffect(() => { // Hero content is shown even in case JS fails to load

    for (let i = 0; i < animateElements.length; i++) {
      animateElements[i].classList.add("no-transition");
      animateElements[i].classList.add(`${animateElements[i].id}-hide`);
    }

    setTimeout(() => {
      startAnimation();
    }, 1);

  }, [loading]);

  const startAnimation = () => {
    for (let i = 0; i < animateElements.length; i++) {
      animateElements[i].classList.remove("no-transition");
      animateElements[i].classList.remove(`${animateElements[i].id}-hide`);
    }
  };

  useEffect(() => { // Intersection Observer for section headers and paragraphs
    const sectionList = document.querySelectorAll(".sectionWrapper");

    if (!loading) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const sectionTitle = entry.target.querySelector(".h3Wrapper");
            sectionTitle.classList.toggle("h3-animation", entry.isIntersecting);

            /* const sectionContent = entry.target.querySelector(".sectionContent");
            sectionContent.classList.remove("paragraph-animation", entry.isIntersecting); */

            if (entry.isIntersecting) observer.unobserve(entry.target); // Comment to test animations
          })
        },
        {
          rootMargin: "-200px"
        }
      )
      sectionList.forEach(section => {
        observer.observe(section);
      });
    };


  }, [loading]);

  useEffect(() => { // Intersection Observer for skills level bars animations
    const skills = document.querySelectorAll(".skillWrapper");

    if (!loading) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const level = entry.target.querySelector(".skillLevelBar");
                    level.classList.toggle("skill-animation", !entry.isIntersecting);

                    if (entry.isIntersecting) observer.unobserve(entry.target); // Comment to test animations
                })
            },
            {
                rootMargin: "-100px",
            }
        )
        skills.forEach(skill => {
            observer.observe(skill);
        })
    };

}, [loading]);

  useEffect(() => { // Intersection Observer for project list animations
    const projectList = document.querySelectorAll(".projectIntersectionArea");

    if (!loading) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const project = entry.target.querySelector(".projectWrapper");
            project.classList.toggle("project-animation", entry.isIntersecting);

            if (entry.isIntersecting) observer.unobserve(entry.target); // Comment to test animations
          })
        },
        {
          rootMargin: "-100px",
        }
      )
      projectList.forEach(project => {
        observer.observe(project);
      })
    };

  }, [loading]);

  useEffect(() => {
    const footer = document.querySelector(".footer");

    if (!loading) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const toTopIcon = entry.target.querySelector(".toTopWrapper");
            toTopIcon.classList.toggle("toTopWrapper-hide", entry.isIntersecting);
          })
        },
        {
          rootMargin: "70px",
        }
      )
      observer.observe(footer);
    }
  })

  const ShowLoading = () => {
    return (
      <div id="loadingContainer">
        <input id="loadingIcon" type="image" src={LoadingIcon} alt="Loading" />
      </div>
    )
  };

  const Content = () => {

    if (loading) {
      return (
        <div>
          <ShowLoading />
        </div>
      )

    } else {
      return (
        <div >
          <Announcement />
          <div id="hero" className="pageContent">
            <Hero content={data[0]} animateElements={animateElements} startAnimation={startAnimation} />
          </div>
          <div id="about" className="pageContent">
            <About content={data[1].about} header="about me" />
          </div>
          <div id="skills">
            <Skills content={data[1].skills} skills={skills} skillIcons={skillIcons} loading={loading} header="my skills" />
          </div>
          <div id="projects" className="pageContent" >
            <Projects content={data[1].projects} projects={projects} header="my projects" />
          </div>
          <div id="contact" className="pageContent">
            <Contact content={data[1].contact} header="contact me" />
          </div>
          <div id="footer" className="footer">
            <a href="#">
              <div className="toTopWrapper toTopWrapper-hide">
                <input type="image" src={BackToTop} alt="" />
              </div>
            </a>
          </div>
        </div >
      )
    }
  };

  return (
    <div>
      <Navigation />
      <Content />

    </div>
  )
}

export default App;
