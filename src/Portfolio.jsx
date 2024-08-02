import React from "react";
import Navbar from "./Navbar";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import rahmatImage from "./assets/remove-bg.png";
import travelImage from "./assets/travel.png";
import mobileImage from "./assets/mobile.png";
import movieImage from "./assets/movie.png";
import binarImage from "./assets/certibinarr.png";
import pythonImage from "./assets/pythonn.png";
import databsImage from "./assets/databs.png";
import certiBinar from "./assets/binarcerti.pdf";
import certiPython from "./assets/pythoncerti.pdf";
import certiBs from "./assets/Sertifikat_IAII.pdf";
import cvRahmat from "./assets/CV rahmat arayyan.pdf";

const technologies = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-400 text-6xl mb-4" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600 text-6xl mb-4" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 text-6xl mb-4" />,
  },
  { name: "React", icon: <FaReact className="text-blue-500 text-6xl mb-4" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500 text-6xl mb-4" /> },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500 text-6xl mb-4" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500 text-6xl mb-4" />,
  },
];

const Portfolio = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar scrollToSection={scrollToSection} />
      <main className="p-8 md:p-16 container mx-auto">
        <section
          id="about"
          className="my-16 flex flex-col md:flex-row items-center md:items-start"
        >
          <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0 md:mr-6">
            <img
              src={rahmatImage}
              className="w-full h-full rounded-full object-cover"
              alt="Profile"
            />
          </div>
          <div className="text-center md:text-left md:ml-10">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Hello everyone, I'm Rahmat Arayyan. I am currently registered as a
              student at Bina Sarana Informatika University, pursuing a
              Bachelor's degree in Software Engineering. My interest lies in
              developing web displays, namely using the React Framework and
              Tailwind CSS.
            </p>
          </div>
        </section>

        <section id="tech" className="my-16 text-center mt-32">
          <h2 className="text-3xl font-bold mb-6">My Tech Stack</h2>
          <p className="text-lg md:text-xl mb-6">
            The technology I use to create a website user interface
          </p>
          <div className="flex flex-wrap justify-center">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="relative m-4 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center hover:scale-105 transition-transform"
              >
                {tech.icon}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-2">
                    <p className="text-xl font-bold">{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="my-16 mt-32">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg border hover:scale-110 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4">TravelAja</h3>
              <img
                src={travelImage}
                className="hover:scale-105 w-full"
                alt="TravelAja"
              />
              <p className="text-lg md:text-xl leading-relaxed mt-5">
                Your simple, fast and reliable local ticketing solution! It is a
                ticket booking platform designed to make it easier for you to
                find various ticket options at very competitive prices.
              </p>
              <a
                href="https://travelaja.click/"
                className="mt-5 text-blue-500 hover:underline text-center"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg border hover:scale-110 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4">Prime Movies</h3>
              <img
                src={movieImage}
                className="hover:scale-105 w-full"
                alt="Prime Movies"
              />
              <p className="text-lg md:text-xl leading-relaxed mt-5">
                Film data list service from popular, top rated, search by genre,
                trending, and upcoming films.
              </p>
              <a
                href="https://mymovie-list.vercel.app/"
                className="mt-5 text-blue-500 hover:underline text-center"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg border hover:scale-110 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4">
                Hero Mobile Legends
              </h3>
              <img
                src={mobileImage}
                className="hover:scale-105 w-full"
                alt="Hero Mobile Legends"
              />
              <p className="text-lg md:text-xl leading-relaxed mt-5">
                Detailed information about Mobile Legends heroes along with the
                avatars of each hero. Explore various game modes, master heroes
                with unique abilities, and rank up to become a legend in Mobile
                Legends!
              </p>
              <a
                href="https://mymobile-legends-api.vercel.app/"
                className="mt-5 text-blue-500 hover:underline text-center"
              >
                View Project
              </a>
            </div>
          </div>
        </section>

        <section id="certificate" className="my-16 text-center mt-32">
          <h2 className="text-3xl font-bold mb-6">Certificates</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Front End JavaScript at Binar Academy
              </h3>
              <img
                src={binarImage}
                alt="Certificate"
                className="w-full h-auto rounded-md mb-4 hover:scale-105 transition-transform"
              />
              <p className="text-lg md:text-xl mb-4">
                Awarded for outstanding participation and achievement in the
                Binar Academy Program focusing on Front End JavaScript
                development.
              </p>
              <a
                href={certiBinar}
                download
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
              >
                Download Certificate
              </a>
            </div>
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                PCAP: Programming Essentials in Python
              </h3>
              <img
                src={pythonImage}
                alt="Certificate"
                className="w-full h-auto rounded-md mb-4 hover:scale-105 transition-transform"
              />
              <p className="text-lg md:text-xl mb-4">
                Awarded for outstanding participation in learning Python
                programming language, administered by the instructor and
                provided by Cisco Networking Academy® in collaboration with
                OpenEDG Python Institute.
              </p>
              <a
                href={certiPython}
                download
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
              >
                Download Certificate
              </a>
            </div>
            <div className="max-w-xs bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Database Systems</h3>
              <img
                src={databsImage}
                alt="Certificate"
                className="w-full h-auto rounded-md mb-4 hover:scale-105 transition-transform"
              />
              <p className="text-lg md:text-xl mb-4">
                Awarded for outstanding participation in studies and exams
                management system database, organized by the IKATAN AHLI
                INFORMATIKA INDONESIA.
              </p>
              <a
                href={certiBs}
                download
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </section>

        <section
          id="cv"
          className="my-16 mx-auto bg-white shadow-lg rounded-lg p-8 max-w-lg text-center mt-32"
        >
          <h2 className="text-3xl font-bold mb-6">Curriculum Vitae</h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed">
            Click the button below to download my CV in PDF format.
          </p>
          <a
            href={cvRahmat}
            download
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
          >
            Download CV
          </a>
        </section>

        <section id="contact" className="my-16 text-center mt-32">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Feel free to reach out to me through any of the following platforms:
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/rahmatarayyan05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaInstagram className="text-3xl text-pink-400" />
            </a>
            <a
              href="https://github.com/rayyan503"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahmat-arayyan-282610221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaLinkedin className="text-3xl text-blue-500" />
            </a>
            <a
              href="mailto:rahmatarayyan26@gmail.com"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <MdEmail className="text-3xl text-red-400" />
            </a>
            <a
              href="https://wa.me/6285798160976"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaWhatsapp className="text-3xl text-green-400" />
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-black p-6 text-center text-white">
        &copy; 2024 Portfolio Rahmat Arayyan
      </footer>
    </div>
  );
};

export default Portfolio;
