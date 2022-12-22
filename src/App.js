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


function App() {

  const collectionRef = collection(db, "projects");

  const [projects, setProjects] = useState([]);

  // Realtime get function for Firebase
  useEffect(() => {

      const unsub = onSnapshot(collectionRef, (querySnapshot) => {
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

  return (
    <div>
      <div id="navigation">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route index path="projects" element={<Projects projects={projects} />} />
              <Route path={"projects/:id"} element={<ShowProject projects={projects} />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<p className="content">No such page found. &#128553;</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
