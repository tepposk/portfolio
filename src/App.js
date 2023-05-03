import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ShowProject from "./components/ShowProject";

import { onSnapshot, collection }
  from "firebase/firestore";
import db from "./firebase";

const addLineBreaks = (text) => {

  text.split("rivinvaihto").map((item, key) => {
      return <span key={key}>{item}<br /><br /></span>
  });
}

function App() {

  const projectsRef = collection(db, "projects");
  const paragraphsRef = collection(db, "paragraphs");

  const [projects, setProjects] = useState([]);
  const [paragraphs, setParagraphs] = useState([]);

  // Realtime get function for Firebase
  useEffect(() => {

    const unsub = onSnapshot(projectsRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      items.sort((a, b) => (a.id > b.id) ? 1 : -1);
      setProjects(items);
    });
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {

    const unsub = onSnapshot(paragraphsRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setParagraphs(items);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <div id="navigation">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home paragraphs={paragraphs} />} />
              <Route path="/home" element={<Home paragraphs={paragraphs} />} />
              <Route path="/about" element={<About paragraphs={paragraphs} />} />
              <Route index path="/projects" element={<Projects projects={projects} paragraphs={paragraphs} />} />
              <Route path={"/projects/:id"} element={<ShowProject projects={projects} />} />
              <Route path="/contact" element={<Contact paragraphs={paragraphs} />} />
              <Route path="*" element={<p className="content">No such page found. &#128553;</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
