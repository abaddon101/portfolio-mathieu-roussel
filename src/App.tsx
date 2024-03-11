import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";

import "./App.css";

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<Skills />} />
          <Route path="/" element={<Testimonials />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
