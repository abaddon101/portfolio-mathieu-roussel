// src/components/Projects.js

import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I’ve had the opportunity to work on various project, from converting
            design into websites to building sophisticated web applications. My
            most significant contribution has been modernizing JQuery library
            into React/TypeScript, showcasing my ability to adapt to emerging
            technologies. I’ve also delved into web animation with CSS & SASS,
            adding an interactive touch to my creations. Furthermore, I’ve
            designed advanced analytics dashboards using React, React Router,
            and Recharts, and integrated APPI functionalities for banking
            applications.
          </p>
        </div>
        <div id="container-project" className="">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
              style={{ width: "100%" }}
            >
              <div className="flex relative">
                <img
                  alt="miniatures"
                  className=" absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
