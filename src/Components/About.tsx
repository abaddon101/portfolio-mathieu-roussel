import React, { useState } from "react";
import photoDeProfil from "../assets/photoDeProfil.jpeg";
import Projects from "./Projects";

function About() {
  const [changePage, setChangePage] = useState(false);

  // Fonction pour basculer l'état de la page
  const togglePage = () => {
    setChangePage(!changePage);
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mathieu.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Front-end JavaScript & React Developer | Former Military | Junior
            <br />
            As junior Front-end developer, I am passionate about creating
            captivating digital experiences. My training at OpenClassrooms has
            equipped me to design dynamic websites and advanced applications
            using react and Typescript. My unique background, blending military
            and commercial experiences, has reinforced my rigor and adaptability
            in the field of software development.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <button
              onClick={togglePage}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </button>
          </div>
        </div>
        <div className="w-32 h-32 rounded-full mx-auto">
          <img
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            src={photoDeProfil}
            alt="profilPicture"
          />
        </div>
      </div>
      {/* Conteneur indépendant pour le composant Projects */}
      {changePage && (
        <div className="projects-container">
          <Projects />
        </div>
      )}
    </section>
  );
}

export default About;
