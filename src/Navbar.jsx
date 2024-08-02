import React, { useState } from "react";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex w-full md:w-auto justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-800 hover:text-blue-500"
            >
              ☰
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsOpen(false);
                }}
                className="text-lg text-gray-800 hover:text-blue-500"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("tech");
                  setIsOpen(false);
                }}
                className="text-lg text-gray-800 hover:text-blue-500"
              >
                Tech Stack
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("projects");
                  setIsOpen(false);
                }}
                className="text-lg text-gray-800 hover:text-blue-500"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("certificate");
                  setIsOpen(false);
                }}
                className="text-lg text-gray-800 hover:text-blue-500"
              >
                Certificate
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("cv");
                  setIsOpen(false);
                }}
                className="text-lg text-gray-800 hover:text-blue-500"
              >
                CV
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
                className="text-lg text-gray-800 hover:text-blue-500"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
